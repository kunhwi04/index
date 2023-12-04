const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link, index) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        scrollToSection(index);
    });
});

let currentSectionIndex = 0;

window.addEventListener("wheel", (event) => {
    const deltaY = event.deltaY;
    scrollSection(deltaY);
});

function scrollSection(deltaY) {
    if (deltaY > 0 && currentSectionIndex < sections.length - 1) {
        currentSectionIndex++;
    } else if (deltaY < 0 && currentSectionIndex > 0) {
        currentSectionIndex--;
    }
    scrollToSection(currentSectionIndex);
}

function scrollToSection(index) {
    const targetSection = sections[index];
    window.scrollTo({
        top: targetSection.offsetTop,
        behavior: "smooth"
    });
}
