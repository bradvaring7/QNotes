function loadSidebar() {
    const sidebarHTML = `
        <div class="sidebar" role="navigation" aria-label="Sidebar Navigation">
            <button class="toggle-btn" type="button" aria-label="Toggle sidebar">&lt;</button>
            <div class="sidebar-content">
                <img src="assets/Picture2.png" alt="QNotes Logo" class="logo">
                <h2>Categories</h2>
                <a class="sidebar-link" href="../bigbook/index.html" title="Big Book of Bugs">Big Book</a>
                <a class="sidebar-link" href="../billing/index.html" title="Billing, Cancel">Billing, Cancel</a>
                <a class="sidebar-link" href="../value/index.html" title="Building Value">Building Value</a>
                <a class="sidebar-link" href="../flow/index.html" title="Call Flow">Call Flow</a>
                <a class="sidebar-link" href="../contacts/index.html" title="Contacts">Contacts</a>
                <a class="sidebar-link" href="../escalations/index.html" title="Escalations">Escalations</a>
                <a class="sidebar-link" href="../forms/index.html" title="Forms">Forms</a>
                <a class="sidebar-link" href="../general/index.html" title="General Info">General Info</a>
                <a class="sidebar-link" href="../metrics/index.html" title="Metrics">Metrics</a>
                <a class="sidebar-link" href="../notes/index.html" title="Notes">Notes</a>
                <a class="sidebar-link" href="../other/index.html" title="Other">Other</a>
                <a class="sidebar-link" href="../rove/index.html" title="Rove">Rove</a>
                <a class="sidebar-link" href="../scheduling/index.html" title="Scheduling">Scheduling</a>
                <a class="sidebar-link" href="../servicepros/index.html" title="Service Pros">Service Pros</a>
                <a class="sidebar-link" href="../services/index.html" title="Services">Services</a>
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