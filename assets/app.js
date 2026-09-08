(() => {
  "use strict";
  const data = window.CONTROL_TOWER_DATA;
  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => Array.from(root.querySelectorAll(s));
  const esc = (v = "") => String(v).replace(/[&<>'"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[c]));
  const slug = v => v.toLowerCase().replaceAll(" ", "-");
  const project = id => data.projects.find(p => p.id === id);
  const initials = name => name.split(/\s|\//).filter(Boolean).slice(0,2).map(x=>x[0]).join("").toUpperCase();
  const status = value => `<span class="status ${slug(value)}">${esc(value)}</span>`;
  const doc = (url, text = "Source ↗") => url ? `<a class="doc-link" href="${esc(url)}" target="_blank" rel="noopener">${esc(text)}</a>` : "";

  function setView(name, updateHash = true) {
    const valid = $(`[data-view="${name}"]`) ? name : "overview";
    $$("[data-view]").forEach(v => v.classList.toggle("active", v.dataset.view === valid));
    $$('[data-view-target]').forEach(b => {
      const active = b.dataset.viewTarget === valid;
      b.classList.toggle("active", active);
      if (b.classList.contains("nav-item")) active ? b.setAttribute("aria-current","page") : b.removeAttribute("aria-current");
    });
    const labels = {overview:"Overview",attention:"Needs Attention",projects:"Projects",activity:"Recent Activity",tasks:"Tasks / Actions",team:"Team Board",files:"Files & Archive"};
    $("#viewTitle").textContent = labels[valid];
    document.title = `${labels[valid]} · Control Tower`;
    if (updateHash) history.replaceState(null, "", `#${valid}`);
    closeMenu();
    window.scrollTo({top:0,behavior:"instant"});
  }

  function renderFlow() {
    const happened = data.activity.find(a => a.type === "Happened");
    const happening = data.tasks.find(t => t.status === "In Progress");
    const attention = data.tasks.find(t => t.status === "Blocked");
    const damiano = data.tasks.find(t => t.needsDamiano && t.status !== "Completed");
    const next = data.tasks.find(t => t.status === "Not Started");
    const steps = [["Happened",happened?.title,"Verified 8 Sep"],["Happening",happening?.title,project(happening?.project)?.short],["Attention",attention?.title,project(attention?.project)?.short],["Needs Damiano",damiano?.title,project(damiano?.project)?.short],["Next",next?.title,project(next?.project)?.short]];
    $("#flowStrip").innerHTML = steps.map(([a,b,c])=>`<div class="flow-step"><small>${esc(a)}</small><strong title="${esc(b)}">${esc(b)}</strong><span>${esc(c)}</span></div>`).join("");
  }

  function renderRuntime() {
    const r = data.runtime;
    $("#runtimeSummary").innerHTML = `<strong>${esc(r.title)}</strong><br>${esc(r.summary)}`;
    $("#runtimeVerified").textContent = `Captured ${r.capturedAt}`;
    $("#runtimeMetrics").innerHTML = r.metrics.map(m=>`<div class="runtime-metric"><strong>${esc(m.value)}</strong><span>${esc(m.label)}</span><small>${esc(m.detail)}</small></div>`).join("");
    $("#serviceStrip").innerHTML = r.services.map(s=>`<span class="service-state ${slug(s.state)}" title="${esc(s.detail || "")}"><b>${esc(s.name)}</b>${esc(s.state)}</span>`).join("");
    $("#runtimeFailures").innerHTML = r.failures.length ? `<details class="runtime-failures" open><summary>${esc(r.failures.length)} enabled jobs failed their latest recorded run</summary><ul>${r.failures.map(f=>`<li><strong>${esc(f.name)}</strong><span>${esc(f.lastRunAt || "Run time unknown")}</span><code>${esc(f.error)}</code></li>`).join("")}</ul></details>` : `<p class="runtime-no-failures">No enabled job has a latest recorded failure in this snapshot.</p>`;
    $("#runtimeNote").textContent = r.note;
    $("#workerBoard").innerHTML = r.workers.map(w=>`<div class="worker-row"><span><strong>${esc(w.name)}</strong><small>${esc(w.detail)}</small></span><b>${esc(w.count)}</b></div>`).join("");
    $("#holdCount").textContent = `${r.pausedCount} paused`;
    $("#holdBoard").innerHTML = r.holds.map(h=>`<div class="hold-row"><span><strong>${esc(h.title)}</strong><small>${esc(h.detail)}</small></span><span class="hold-state">${h.count === null ? "" : `${esc(h.count)} · `}${esc(h.state)}</span></div>`).join("");
  }

  function renderOverview() {
    const key = data.tasks.filter(t => ["Blocked","Waiting","In Progress","Not Started"].includes(t.status) && t.priority === "P1").slice(0,7);
    $("#attentionList").innerHTML = key.map(t=>`<article class="focus-row"><span class="focus-mark ${t.status === "Blocked" ? "blocked" : t.status === "In Progress" ? "progress" : ""}"></span><div class="focus-copy"><strong>${esc(t.title)}</strong><p>${esc(t.detail)}</p><div class="meta-line"><span>${esc(project(t.project).short)}</span><span>Owner · ${esc(t.owner)}</span>${status(t.status)}</div></div><button class="row-link" data-project-open="${t.project}">Inspect</button></article>`).join("");
    const decisions = data.tasks.filter(t => t.needsDamiano && t.status !== "Completed");
    $("#decisionCount").textContent = `${decisions.length} open`;
    $("#decisionList").innerHTML = decisions.slice(0,5).map(t=>`<div class="decision-item"><strong>${esc(t.title)}</strong><span>${esc(project(t.project).short)} · ${esc(t.status)}</span></div>`).join("");
    $("#projectState").innerHTML = data.projects.slice(0,6).map(p=>`<div class="mini-project"><span><strong>${esc(p.short)}</strong><small>${esc(p.owner)}</small></span>${status(p.status)}</div>`).join("");
    $("#overviewActivity").innerHTML = renderActivityRows(data.activity.slice(0,4));
  }

  function renderAttention() {
    const columns = [
      ["Blocked", data.tasks.filter(t=>t.status==="Blocked")],
      ["Waiting / Review", data.tasks.filter(t=>["Waiting","Review"].includes(t.status))],
      ["Needs Damiano", data.tasks.filter(t=>t.needsDamiano && t.status!=="Completed")]
    ];
    $("#attentionView").innerHTML = columns.map(([name,tasks])=>`<section class="attention-column"><h3>${esc(name)}<span>${tasks.length}</span></h3>${tasks.map(t=>`<article class="attention-card"><strong>${esc(t.title)}</strong><p>${esc(t.detail)}</p><div class="meta-line"><span>${esc(project(t.project).short)}</span><span>${esc(t.owner)}</span>${status(t.status)}</div></article>`).join("")}</section>`).join("");
    $("#attentionBadge").textContent = data.tasks.filter(t=>["Blocked","Review"].includes(t.status)||t.needsDamiano).length;
  }

  function renderProjects() {
    const val = $("#projectStatusFilter").value;
    const list = data.projects.filter(p=>val==="all"||p.status===val);
    $("#projectGrid").innerHTML = list.map(p=>`<button class="project-card ${["Not Started","Blocked"].includes(p.status)?"inactive":""}" data-project-open="${p.id}" aria-label="Open ${esc(p.name)} details"><div class="project-top"><div><h3>${esc(p.name)}</h3><div style="margin-top:7px">${status(p.status)}</div></div><span class="priority">${esc(p.priority)}</span></div><p>${esc(p.summary)}</p><div class="project-meta"><span class="avatar-stack">${p.team.slice(0,4).map(n=>`<span class="mini-avatar" title="${esc(n)}">${esc(initials(n))}</span>`).join("")}</span><span class="row-link">Details →</span></div>${p.progress ? `<div class="progress"><div class="progress-track"><div class="progress-fill" style="width:${p.progress.done/p.progress.total*100}%"></div></div><small>${p.progress.done}/${p.progress.total} tracked tasks completed · not overall progress</small></div>` : `<div class="unknown-progress">Overall progress not quantified</div>`}</button>`).join("");
  }

  function renderActivityRows(list) {
    return list.map(a=>`<article class="activity-row"><time class="activity-date">${esc(a.date)}</time><span class="activity-type">${esc(a.type)}</span><div class="activity-main"><strong>${esc(a.title)}</strong><p>${esc(a.body)} · ${esc(project(a.project).short)}</p></div>${doc(a.doc)}</article>`).join("");
  }

  function populateSelect(selector, values) {
    const el = $(selector); values.forEach(v => el.insertAdjacentHTML("beforeend", `<option value="${esc(v.value ?? v)}">${esc(v.label ?? v)}</option>`));
  }

  function renderTasks() {
    const q = $("#taskSearch").value.trim().toLowerCase();
    const values = {project:$("#projectFilter").value,status:$("#statusFilter").value,priority:$("#priorityFilter").value,owner:$("#ownerFilter").value};
    const list = data.tasks.filter(t => (!q || `${t.title} ${t.detail} ${t.owner} ${project(t.project).name}`.toLowerCase().includes(q)) && Object.entries(values).every(([k,v])=>v==="all"||String(t[k])===v));
    $("#taskRows").innerHTML = list.map(t=>`<tr><td class="task-title"><strong>${esc(t.title)}</strong><small>${esc(t.detail)}</small>${doc(t.doc)}</td><td>${esc(project(t.project).short)}</td><td>${status(t.status)}</td><td><span class="priority">${esc(t.priority)}</span></td><td>${esc(t.owner)}${t.needsDamiano&&t.owner!=="Damiano"?`<small style="display:block;color:var(--warn)">Needs Damiano</small>`:""}</td></tr>`).join("");
    $("#emptyTasks").hidden = list.length > 0;
    $("#resultCount").textContent = `${list.length} of ${data.tasks.length} actions`;
  }

  function resetTasks() {
    $("#taskSearch").value = "";
    ["#projectFilter","#statusFilter","#priorityFilter","#ownerFilter"].forEach(s=>$(s).value="all");
    renderTasks();
  }

  function renderTeam() {
    $("#teamBoard").innerHTML = data.people.map(p=>`<article class="person-card"><div class="person-head"><div class="avatar">${esc(p.initials)}</div><div><h3>${esc(p.name)}</h3><p>${esc(p.role)}</p></div></div><span class="person-state">${esc(p.state)}</span><div class="assignment-list">${p.assignments.map(id=>`<span class="assignment">${esc(project(id).short)}</span>`).join("")}</div></article>`).join("");
  }

  function renderFiles() {
    const groups = [...new Set(data.files.map(f=>f.group))];
    $("#fileList").innerHTML = groups.map(g=>`<section class="file-group"><h3>${esc(g)}</h3><div>${data.files.filter(f=>f.group===g).map(f=>`<div class="file-row"><strong>${esc(f.name)}</strong><span>${esc(f.meta)}</span><a href="${esc(f.url)}" target="_blank" rel="noopener">Open ↗</a></div>`).join("")}</div></section>`).join("");
  }

  function openProject(id) {
    const p = project(id); if (!p) return;
    const sections = [["Latest",[p.latest]],["Completed",p.completed],["Current",p.current],["Next",p.next],["Blockers",p.blockers],["Decisions",p.decisions]];
    $("#projectDetail").innerHTML = `<header class="dialog-head"><div><p class="eyebrow">${esc(p.priority)} · Updated ${esc(p.updated)}</p><h2 id="dialogTitle">${esc(p.name)}</h2>${status(p.status)}<p>${esc(p.summary)}</p></div><button class="close-dialog" aria-label="Close project details">×</button></header>${p.progress?`<div class="detail-progress"><div class="progress-track"><div class="progress-fill" style="width:${p.progress.done/p.progress.total*100}%"></div></div><small>${p.progress.done}/${p.progress.total} tracked tasks complete · this is not overall project progress</small></div>`:`<div class="detail-progress"><small>Overall project progress is unknown; no percentage has been inferred.</small></div>`}<div class="detail-grid">${sections.map(([name,items])=>`<section class="detail-section"><h3>${name}</h3>${items.length?`<ul>${items.map(i=>`<li>${esc(i)}</li>`).join("")}</ul>`:`<p>No verified item in this snapshot.</p>`}</section>`).join("")}</div>${p.docs.length?`<div class="detail-docs">${p.docs.map(([name,url])=>`<a href="${esc(url)}" target="_blank" rel="noopener">${esc(name)} ↗</a>`).join("")}</div>`:""}`;
    const dialog = $("#projectDialog"); dialog.showModal(); $(".close-dialog",dialog).addEventListener("click",()=>dialog.close());
  }

  function openMenu() { $(".sidebar").classList.add("open"); $("#mobileScrim").hidden=false; $("#menuButton").setAttribute("aria-expanded","true"); }
  function closeMenu() { $(".sidebar").classList.remove("open"); $("#mobileScrim").hidden=true; $("#menuButton").setAttribute("aria-expanded","false"); }

  function init() {
    $("#snapshotText").textContent = `${data.snapshot} · ${data.sourceNote}`;
    $("#snapshotSide").textContent = data.snapshot;
    renderFlow(); renderRuntime(); renderOverview(); renderAttention();
    populateSelect("#projectStatusFilter", data.statuses);
    populateSelect("#projectFilter", data.projects.map(p=>({value:p.id,label:p.short})));
    populateSelect("#statusFilter", data.statuses);
    populateSelect("#priorityFilter", ["P1","P2","P3"]);
    populateSelect("#ownerFilter", [...new Set(data.tasks.map(t=>t.owner))].sort());
    renderProjects(); renderTasks(); renderTeam(); renderFiles();
    $("#activityView").innerHTML = renderActivityRows(data.activity);
    document.addEventListener("click", e => {
      const nav = e.target.closest("[data-view-target]"); if (nav) setView(nav.dataset.viewTarget);
      const projectButton = e.target.closest("[data-project-open]"); if (projectButton) openProject(projectButton.dataset.projectOpen);
      if (e.target.closest("[data-reset]")) resetTasks();
    });
    ["#taskSearch","#projectFilter","#statusFilter","#priorityFilter","#ownerFilter"].forEach(s=>$(s).addEventListener(s==="#taskSearch"?"input":"change",renderTasks));
    $("#resetFilters").addEventListener("click",resetTasks);
    $("#projectStatusFilter").addEventListener("change",renderProjects);
    $("#searchTrigger").addEventListener("click",()=>{setView("tasks");$("#taskSearch").focus()});
    $("#menuButton").addEventListener("click",()=>$(".sidebar").classList.contains("open")?closeMenu():openMenu());
    $("#mobileScrim").addEventListener("click",closeMenu);
    $("#projectDialog").addEventListener("click", e => { if(e.target === $("#projectDialog")) $("#projectDialog").close(); });
    document.addEventListener("keydown", e => { if(e.key==="/" && !/input|select|textarea/i.test(document.activeElement.tagName)){e.preventDefault();setView("tasks");$("#taskSearch").focus()} if(e.key==="Escape") closeMenu(); });
    setView(location.hash.slice(1)||"overview", false);
    if ("serviceWorker" in navigator && location.protocol.startsWith("http")) window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>{}));
  }
  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded",init) : init();
})();
