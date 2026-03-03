let index = 0;
let isScrolling = false;

const pages = document.querySelectorAll(".list, .page");
const navHeight = document.querySelector("nav").offsetHeight;

function goTo(i) {
    isScrolling = true;

    const targetTop = pages[i].getBoundingClientRect().top + window.scrollY - navHeight;

    window.scrollTo({
        top: targetTop,
        behavior: "smooth"
    });

    setTimeout(() => {
        isScrolling = false;
    }, 700);
}

window.addEventListener("wheel", (e) => {
    e.preventDefault();
    if (isScrolling) return;

    if (e.deltaY > 0 && index < pages.length - 1) index++;
    if (e.deltaY < 0 && index > 0) index--;

    goTo(index);
}, { passive: false });
