/* =============================================
   GHOSTLINE TECHNOLOGY LLC
   Titanium Blue 2.0 — Business Theme
   ============================================= */

document.addEventListener("DOMContentLoaded", () => {

    const toggleButton =
        document.getElementById("themeToggle");

    const storageKey = "ghostlineBusinessTheme";

    // Apply a theme and update the button.
    function applyTheme(isDark) {

        document.documentElement.classList.toggle(
            "business-dark",
            isDark
        );

        if (toggleButton) {
            toggleButton.textContent = isDark
                ? "Light Mode"
                : "Dark Mode";

            toggleButton.setAttribute(
                "aria-pressed",
                String(isDark)
            );

            toggleButton.setAttribute(
                "aria-label",
                isDark
                    ? "Switch to light mode"
                    : "Switch to dark mode"
            );
        }
    }

    // Read the visitor's saved preference.
    let savedTheme = null;

    try {
        savedTheme = localStorage.getItem(storageKey);
    } catch (error) {
        // Storage may be disabled by the browser.
    }

    // Default to the visitor's system preference.
    const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
    ).matches;

    const startDark = savedTheme === "dark" ||
        (savedTheme === null && prefersDark);

    applyTheme(startDark);

    // Handle the theme button.
    if (toggleButton) {

        toggleButton.addEventListener("click", () => {

            const isDark =
                !document.documentElement.classList.contains(
                    "business-dark"
                );

            applyTheme(isDark);

            try {
                localStorage.setItem(
                    storageKey,
                    isDark ? "dark" : "light"
                );
            } catch (error) {
                // Toggle still works for the current page.
            }
        });
    }
});