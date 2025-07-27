function loadSidebar() {
    const sidebarHTML = `
        <div class="sidebar" role="navigation" aria-label="Sidebar Navigation">
            <button class="toggle-btn" type="button" aria-label="Toggle sidebar">‹</button>
            <div class="sidebar-content">
                <img src="../assets/Picture2.png" alt="QNotes Logo" class="logo">
                <h2>Categories</h2>
                <a class="sidebar-link" href="../billing/index.html" title="Billing, Cancel">Billing, Cancel</a>
                <a class="sidebar-link" href="../value/index.html" title="Building Value">Building Value</a>
                
                <h2>Billing</h2>
                <a class="sidebar-link" href="cancel.html" title="Cancel Requests">Cancel Requests</a>
                <a class="sidebar-link" href="tickets.html" title="Workday Tickets">Workday Tickets</a>
                <a class="sidebar-link" href="checks.html" title="Checks Payments">Checks Payments</a>
                <a class="sidebar-link" href="frequency.html" title="Billing Frequency">Billing Frequency</a>
                <a class="sidebar-link" href="coupons.html" title="Coupons">Coupons</a>
                <a class="sidebar-link" href="methods.html" title="Payment Methods">Payment Methods</a>
                <a class="sidebar-link" href="payments.html" title="Payment Processing">Payment Processing</a>
                <a class="sidebar-link" href="paper.html" title="Paper Billing">Paper Billing</a>
                <a class="sidebar-link" href="writeoffs.html" title="Write-Offs">Write-Offs</a>
                <a class="sidebar-link" href="collections.html" title="ARM Collections">ARM Collections</a>
                <a class="sidebar-link" href="increase.html" title="Price Increase">Price Increase</a>
                <a class="sidebar-link" href="invoices.html" title="Send Invoices">Send Invoices</a>
                <a class="sidebar-link" href="stop.html" title="Stop Calls/Texts">Stop Calls/Texts</a>
                <a class="sidebar-link" href="autopay.html" title="Autopay">Autopay</a>
                <a class="sidebar-link" href="disputes_refunds.html" title="Disputes/Refunds">Disputes/Refunds</a>
                <a class="sidebar-link" href="declines.html" title="Decline Codes">Decline Codes</a>
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