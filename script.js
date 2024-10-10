function showPage(page) {
    const pages = document.querySelectorAll('.page');
    pages.forEach((section) => {
        section.classList.remove('active');
    });

    document.getElementById(page).classList.add('active');
}

function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}
