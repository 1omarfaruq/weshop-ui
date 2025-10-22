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

// Initialize the first section as expanded if needed, though 'expanded' class is already in HTML for Notes
// To make "Discounts" initially collapsed (as per image), ensure it doesn't have 'expanded' class initially.
// If you want "Notes" to be collapsed initially, remove 'expanded' from its div in HTML.
