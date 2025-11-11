
document.addEventListener('DOMContentLoaded', () => {
    // Sticky Header
    const header = document.getElementById('main-header');
    if (header) {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                header.classList.add('bg-gray-950/80', 'backdrop-blur-lg', 'border-b', 'border-gray-800');
                header.classList.remove('bg-transparent');
            } else {
                header.classList.remove('bg-gray-950/80', 'backdrop-blur-lg', 'border-b', 'border-gray-800');
                header.classList.add('bg-transparent');
            }
        };
        window.addEventListener('scroll', handleScroll);
    }

    // Mobile Menu
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        const mobileMenuIcon = mobileMenuButton.querySelector('svg path');
        const menuOpenIcon = "M6 18L18 6M6 6l12 12";
        const menuClosedIcon = "M4 6h16M4 12h16m-7 6h7";

        mobileMenuButton.addEventListener('click', () => {
            const isHidden = mobileMenu.classList.contains('hidden');
            mobileMenu.classList.toggle('hidden', !isHidden);
            mobileMenu.classList.toggle('flex', isHidden);
            if (mobileMenuIcon) {
                mobileMenuIcon.setAttribute('d', isHidden ? menuOpenIcon : menuClosedIcon);
            }
        });
        
        // Close mobile menu on link click
        const navLinks = mobileMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('flex');
                if (mobileMenuIcon) {
                    mobileMenuIcon.setAttribute('d', menuClosedIcon);
                }
            });
        });
    }
});
