window.onload = function () {
    const animationContainer = document.querySelector(".animationn");
    const sections = document.querySelectorAll("section, .content");

    sections.forEach(section => section.style.display = "none");
    animationContainer.style.display = "flex";

    setTimeout(function () {
        animationContainer.style.display = "none"; 
        sections.forEach(section => section.style.display = "block"); 
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
// fish
function getHtml() {
    let arr = [245, 182, 1267, 47];
    let classNames = ["num245", "num182", "num1267", "num47"];
    let maxValue = Math.max(...arr);
    arr.forEach((value, index) => {
        let i = 0;
        let element = document.querySelector(`.${classNames[index]}`);
        if (element) {
            let interval = setInterval(function () {
                element.innerHTML = `${i}`;
                i++;
                if (i > value) clearInterval(interval);
            }, maxValue / value * 6);
        }
    });
}
getHtml()

