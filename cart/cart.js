function toggleCollapse(contentId, arrowId) {
  const content = document.getElementById(contentId);
  const arrow = document.getElementById(arrowId);

  if (content.classList.contains("expanded")) {
    content.classList.remove("expanded");
    arrow.classList.remove("rotate-180");
  } else {
    content.classList.add("expanded");
    arrow.classList.add("rotate-180");
  }
}
