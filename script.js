const grid = document.getElementById("resourceGrid");
const search = document.getElementById("searchInput");
const filters = document.getElementById("filterRow");
let activeFilter = "All";
const resources = window.MEDRAAHI_RESOURCES || [];
function renderResources() {
  const term = search.value.trim().toLowerCase();
  const shown = resources.filter(r => {
    const matchesFilter = activeFilter === "All" || r.category === activeFilter;
    const matchesTerm = [r.title,r.category,r.subject,r.description].join(" ").toLowerCase().includes(term);
    return matchesFilter && matchesTerm;
  });
  grid.innerHTML = "";
  if (!shown.length) {
    grid.innerHTML = '<div class="resource-card"><div class="resource-icon">🔎</div><h3>No resources found</h3><p>Try another search term or choose a different filter.</p></div>';
    return;
  }
  shown.forEach(r => {
    const ready = r.url && r.url !== "#";
    const card = document.createElement("article");
    card.className = "resource-card";
    card.innerHTML = `<div class="resource-icon">${r.icon || "📚"}</div><div class="resource-tag">${escapeHTML(r.category)} · ${escapeHTML(r.subject)}</div><h3>${escapeHTML(r.title)}</h3><p>${escapeHTML(r.description)}</p><a class="resource-link ${ready ? "" : "disabled"}" href="${ready ? escapeAttr(r.url) : "#"}" ${ready ? 'target="_blank" rel="noopener"' : 'aria-disabled="true"'}>${ready ? "Open resource" : escapeHTML(r.status || "Coming soon")} <span>${ready ? "↗" : "⌁"}</span></a>`;
    grid.appendChild(card);
  });
}
function escapeHTML(s=""){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
function escapeAttr(s=""){return escapeHTML(s);}
search.addEventListener("input", renderResources);
filters.addEventListener("click", e => {
  const btn = e.target.closest("button[data-filter]");
  if (!btn) return;
  activeFilter = btn.dataset.filter;
  filters.querySelectorAll(".filter").forEach(b => b.classList.toggle("active", b === btn));
  renderResources();
});
document.getElementById("menuToggle").addEventListener("click", () => document.getElementById("navLinks").classList.toggle("open"));
document.querySelectorAll("#navLinks a").forEach(a => a.addEventListener("click", () => document.getElementById("navLinks").classList.remove("open")));
document.getElementById("year").textContent = new Date().getFullYear();
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add("visible"); observer.unobserve(entry.target); }
  }), {threshold: 0.12});
  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
} else document.querySelectorAll(".reveal").forEach(el => el.classList.add("visible"));
renderResources();