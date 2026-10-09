
function showPage(pageId) {
    const pages = document.querySelectorAll(".page");
    const selectedPage = document.getElementById(pageId);

    // Make sure the requested page exists
    if (!selectedPage) {
        return;
    }

    // Hide all pages
    pages.forEach(function(page) {
        page.classList.remove("active");
        page.setAttribute("aria-hidden", "true");
    });

    // Display the selected page
    selectedPage.classList.add("active");
    selectedPage.setAttribute("aria-hidden", "false");

    // Return to the top of the new page
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// Set the initial page when the website loads
document.addEventListener("DOMContentLoaded", function() {
    showPage("welcome");
});