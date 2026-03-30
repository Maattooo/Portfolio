export function openSidebar() {
    const nav = document.getElementById("navbar");
    if (nav) {
        nav.classList.add("open");
    }
}

export function closeSidebar() {
    const nav = document.getElementById("navbar");
    if (nav) {
        nav.classList.remove("open");
    }
}