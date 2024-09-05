window.onload = function() {
    const animationContainer = document.querySelector(".animationn");
    const sections = document.querySelectorAll("section, .content"); // İçerik bölümleri

    sections.forEach(section => section.style.display = "none");
    animationContainer.style.display = "flex"; // Animasyonu göster

    setTimeout(function() {
        animationContainer.style.display = "none"; // Animasyonu gizle
        sections.forEach(section => section.style.display = "block"); // İçerikleri geri getir
    }, 1000);
};
// scrool
window.addEventListener("scroll", () => {
    let header = document.querySelector(".navbarMain")
    if (window.scrollY > 300) {
        header.classList.add("headerAnime")
    } else {
        header.classList.remove("headerAnime")
    }
})