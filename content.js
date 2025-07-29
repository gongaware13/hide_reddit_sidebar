
function hideSidebar () {
const sidebar = document.getElementById("right-sidebar-container");
    if (sidebar) {
        sidebar.style.display = 'none';
        console.log("sidebar detected.");
    }
    else {
        console.log("sidebar not found.");
    }
}

// Initial call
hideSidebar();

// Re-run when DOM changes
const observer = new MutationObserver(() => {
  hideSidebar();
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
});