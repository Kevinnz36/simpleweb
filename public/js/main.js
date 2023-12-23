document.addEventListener('DOMContentLoaded', function () {
    
    const homeLink = document.getElementById('home-link');
    const contentLink = document.getElementById('content-link');
    const contactLink = document.getElementById('contact-link');
    const homeSection = document.getElementById('home-section');
    const contentSection = document.getElementById('content-section');
    const contactSection = document.getElementById('contact-section');

    function hideAllSections() {
        homeSection.style.display = 'none';
        contentSection.style.display = 'none';
        contactSection.style.display = 'none';
    }

    function showHomeSection(event) {
        event.preventDefault();
        hideAllSections();
        homeSection.style.display = 'block';
    }
    
    function showContentSection(event) {
        event.preventDefault();
        hideAllSections();
        contentSection.style.display = 'block';
    }
    
    function showContactSection(event) {
        event.preventDefault();
        hideAllSections();
        contactSection.style.display = 'block';
    }

    homeLink.addEventListener('click', showHomeSection);
    contentLink.addEventListener('click', showContentSection);
    contactLink.addEventListener('click', showContactSection)
});
