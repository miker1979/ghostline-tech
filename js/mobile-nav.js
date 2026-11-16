/* Ghostline Technology — Responsive Navigation */

document.addEventListener("DOMContentLoaded", () => {

    const button =
        document.getElementById("mobileMenuToggle");

    const menu =
        document.getElementById("mobileMenu");

    if (!button || !menu) return;

    function setMenuOpen(isOpen) {
        menu.classList.toggle("hidden", !isOpen);

        button.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

        button.setAttribute(
            "aria-label",
            isOpen
                ? "Close navigation menu"
                : "Open navigation menu"
        );
    }

    button.addEventListener("click", () => {
        const isOpen =
            button.getAttribute("aria-expanded") === "true";

        setMenuOpen(!isOpen);
    });

    // Close after selecting a navigation link.
    menu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            setMenuOpen(false);
        });
    });

    // Close with the Escape key.
    document.addEventListener("keydown", event => {
        if (event.key === "Escape" &&
            button.getAttribute("aria-expanded") === "true") {

            setMenuOpen(false);
            button.focus();
        }
    });

    // Reset when switching to desktop size.
    const desktopQuery =
        window.matchMedia("(min-width: 64rem)");

    desktopQuery.addEventListener("change", event => {
        if (event.matches) setMenuOpen(false);
    });
});