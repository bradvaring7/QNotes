function loadSidebar() {
    // Detect if we're in a subfolder by checking the current path
    const currentPath = window.location.pathname;
    const isInSubfolder = currentPath.split('/').length > 2 && !currentPath.endsWith('/QNotes/') && !currentPath.endsWith('/QNotes');
    
    // Set the base path - if we're in a subfolder, go up one level
    const basePath = isInSubfolder ? '../' : '';
    
    const sidebarHTML = `
        <div class="sidebar" role="navigation" aria-label="Sidebar Navigation">
            <button class="toggle-btn" type="button" aria-label="Toggle sidebar">‹</button>
            <div class="sidebar-content">
                <img src="${basePath}assets/Picture2.png" alt="QNotes Logo" class="logo">
                <h2>Categories</h2>
                <a class="sidebar-link" href="${basePath}bigbook/index.html" title="Big Book of Bugs">🐛 Big Book</a>
                <a class="sidebar-link" href="${basePath}billing/index.html" title="Billing, Cancel">💸 Billing, Cancel</a>
                <a class="sidebar-link" href="${basePath}value/index.html" title="Building Value">💎 Building Value</a>
                <a class="sidebar-link" href="${basePath}flow/index.html" title="Call Flow">📞 Call Flow</a>
                <a class="sidebar-link" href="${basePath}contacts/index.html" title="Contacts">📱 Contacts</a>
                <a class="sidebar-link" href="${basePath}escalations/index.html" title="Escalations">📈 Escalations</a>
                <a class="sidebar-link" href="${basePath}forms/index.html" title="Forms">📝 Forms</a>
                <a class="sidebar-link" href="${basePath}general/index.html" title="General Info">ℹ️ General Info</a>
                <a class="sidebar-link" href="${basePath}metrics/index.html" title="Metrics">📊 Metrics</a>
                <a class="sidebar-link" href="${basePath}notes/index.html" title="Notes">📝 Notes</a>
                <a class="sidebar-link" href="${basePath}other/index.html" title="Other">📋 Other</a>
                <a class="sidebar-link" href="${basePath}Rove/index.html" title="Rove">🚗 Rove</a>
                <a class="sidebar-link" href="${basePath}scheduling/index.html" title="Scheduling">📅 Scheduling</a>
                <a class="sidebar-link" href="${basePath}pros/index.html" title="Service Pros">👨‍🔧 Service Pros</a>
                <a class="sidebar-link" href="${basePath}services/index.html" title="Services">🛠️ Services</a>
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