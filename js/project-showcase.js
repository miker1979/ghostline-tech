/* ==========================================
   GHOSTLINE TECHNOLOGY
   Interactive Project Showcase
   ========================================== */

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".showcase-tab");

  const panels = document.querySelectorAll(".showcase-panel");

  function showProject(projectName) {
    // Update the selected button
    buttons.forEach((button) => {
      const isSelected = button.dataset.project === projectName;

      button.setAttribute("aria-pressed", String(isSelected));

      button.classList.toggle("bg-[#3178d8]", isSelected);

      button.classList.toggle("bg-transparent", !isSelected);

      button.classList.toggle("text-white", isSelected);

      button.classList.toggle("text-blue-100", !isSelected);

      button.classList.toggle("border", !isSelected);

      button.classList.toggle("border-blue-300/30", !isSelected);
    });

    // Display the correct project panel
    panels.forEach((panel) => {
      const shouldShow = panel.id === `showcase-${projectName}`;

      panel.classList.toggle("hidden", !shouldShow);
    });
  }

  // Connect each button
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      showProject(button.dataset.project);
    });
  });

  // Initialize the first project
  if (buttons.length > 0) {
    showProject(buttons[0].dataset.project);
  }
});
