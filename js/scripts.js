function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
}
const hamBtn = document.getElementById("hamburgerBtn");
hamBtn.onclick = toggleMenu;