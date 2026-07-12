export function scrollToForm() {
  const el = document.getElementById("quote");
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 60;
  window.scrollTo({ top, behavior: "smooth" });
}
