function loadSidebar() {
    // Always find the QNotes root in the path
    const currentPath = window.location.pathname;
    const match = currentPath.match(/\/QNotes\//i);
    let basePath = '';
    if (match) {
        // If we're in a subfolder, go up to QNotes
        const afterQNotes = currentPath.split('/QNotes/')[1] || '';
        const depth = afterQNotes.split('/').length - 1;
        basePath = '';
        for (let i = 0; i < depth; i++) {
            basePath += '../';
        }
    }
    
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
                <a class="sidebar-link" href="${basePath}rove/index.html" title="Rove">🚗 Rove</a>
                <a class="sidebar-link" href="${basePath}scheduling/index.html" title="Scheduling">📅 Scheduling</a>
                <a class="sidebar-link" href="${basePath}pros/index.html" title="Service Pros">👨‍🔧 Service Pros</a>
                <a class="sidebar-link" href="${basePath}services/index.html" title="Services">🛠️ Services</a>
            </div>
        </div>
        <button class="mobile-menu-btn" type="button" aria-label="Toggle mobile menu">☰</button>
        <div class="mobile-overlay"></div>
    `;
    document.body.insertAdjacentHTML('afterbegin', sidebarHTML);
    
    // Get DOM elements
    const toggleBtn = document.querySelector('.toggle-btn');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const sidebar = document.querySelector('.sidebar');
    const mobileOverlay = document.querySelector('.mobile-overlay');
    
    // Desktop toggle functionality
    if (toggleBtn && sidebar) {
        toggleBtn.addEventListener('click', function () {
            sidebar.classList.toggle('collapsed');
        });
    }
    
    // Mobile menu functionality
    function openMobileMenu() {
        sidebar.classList.add('mobile-open');
        mobileOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
    
    function closeMobileMenu() {
        sidebar.classList.remove('mobile-open');
        mobileOverlay.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    }
    
    // Mobile menu button click
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            if (sidebar.classList.contains('mobile-open')) {
                closeMobileMenu();
            } else {
                openMobileMenu();
            }
        });
    }
    
    // Close mobile menu when clicking overlay
    if (mobileOverlay) {
        mobileOverlay.addEventListener('click', closeMobileMenu);
    }
    
    // Close mobile menu when clicking sidebar links (on mobile)
    const sidebarLinks = document.querySelectorAll('.sidebar-link');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                closeMobileMenu();
            }
        });
    });
    
    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            // Reset mobile menu state when switching to desktop
            closeMobileMenu();
        }
    });
    
    // Handle escape key to close mobile menu
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && sidebar.classList.contains('mobile-open')) {
            closeMobileMenu();
        }
    });
    
    // Prevent body scrolling when sidebar is open on mobile
    let startY = 0;
    sidebar.addEventListener('touchstart', function(e) {
        startY = e.touches[0].clientY;
    });
    
    sidebar.addEventListener('touchmove', function(e) {
        const currentY = e.touches[0].clientY;
        const element = e.currentTarget;
        const isAtTop = element.scrollTop === 0;
        const isAtBottom = element.scrollHeight - element.clientHeight <= element.scrollTop + 1;
        
        if ((isAtTop && currentY > startY) || (isAtBottom && currentY < startY)) {
            e.preventDefault();
        }
    });
}

document.addEventListener('DOMContentLoaded', loadSidebar);