function loadSidebar() {
    const sidebarHTML = `
        <div class="sidebar" role="navigation" aria-label="Sidebar Navigation">
            <button class="toggle-btn" type="button" aria-label="Toggle sidebar">‹</button>
            <div class="sidebar-content">
                <img src="assets/Picture2.png" alt="QNotes Logo" class="logo">
                <h2>Categories</h2>
                <a class="sidebar-link" href="billing/index.html" title="Billing, Cancel">Billing, Cancel</a>
                <a class="sidebar-link" href="value/index.html" title="Building Value">Building Value</a>
                <a class="sidebar-link" href="bigbook/index.html" title="Big Book of Bugs">Big Book</a>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('afterbegin', sidebarHTML);
    
    // Add toggle functionality for sidebar
    const toggleBtn = document.querySelector('.toggle-btn');
    const sidebar = document.querySelector('.sidebar');
    
    if (toggleBtn && sidebar) {
        toggleBtn.addEventListener('click', function () {
            sidebar.classList.toggle('collapsed');
        });
    }
}

document.addEventListener('DOMContentLoaded', loadSidebar);