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
    if (window.scrollY > 300 && window.screen.availWidth>991) {
        header.classList.add("headerAnime")
    } else {
        header.classList.remove("headerAnime")
    }
})
// fish
let animated =false
function getHtml() {
    let arr = [245, 182, 1267, 47];
    let classNames = ["num245", "num182", "num1267", "num47"];
    let maxValue = Math.max(...arr);
    if(window.scrollY>1000 && !animated){
        animated=true
        return arr.forEach((value, index) => {
            let i = 0;
            let element = document.querySelector(`.${classNames[index]}`);
            if (element) {
                let interval = setInterval(function () {
                    element.innerHTML = `${i}`;
                    i++;
                    if (i > value){
                       clearInterval(interval); 
                       checkIfAllCompleted()
                    } 
                }, maxValue / value * 10);
            }
        });
    }
}
window.addEventListener("scroll", getHtml);
// whyChoose
function whyChoose(){
    let btn=document.querySelectorAll(".text")
    
    btn.forEach((item)=>item.addEventListener("click",()=>{
        let item2=item.querySelector(".txt2")
        // console.log(item2);
        if(item2.classList.contains("display")){
            item2.classList.remove("display")
        }
        else{
            item2.classList.add("display")
        }
    }))
}
whyChoose()

function dot(){
    let btn =document.querySelectorAll(".dot i") 
    let photo=document.querySelector(".photo img")
    btn.forEach((item)=>item.addEventListener("click",()=>{
        if(item.classList.contains("i1")){
            photo.setAttribute("src","https://livedemo00.template-help.com/wt_prod-22021/images/product-big-1-543x558.png")
        }else if(item.classList.contains("i2")){
            photo.setAttribute("src","https://livedemo00.template-help.com/wt_prod-22021/images/product-big-2-543x558.png")
        }else{
            photo.setAttribute("src","https://livedemo00.template-help.com/wt_prod-22021/images/product-big-3-543x558.png")
        }
    }))  
}
dot()

// testimonials
function testimonials(){
    let client=document.querySelectorAll(".client")
    let text=document.querySelector(".testimonials .text")
    client.forEach((item)=>item.addEventListener("click",()=>{
        if(item.classList.contains("patrick")){
            text.innerHTML="I had a fantastic weekend at Stoney Cove with your team. Great people who made my wife (Lisa) and I feel very welcome. Thanks for all your help and support with the diving!"
        }
        else if(item.classList.contains("kate")){
            text.innerHTML="What a fantastic weekend spent with the amazingly friendly team at Divers! You made us feel very welcome and you all were amazing. Thank you!"
            
        }
        else{
            text.innerHTML="It was a great first time dive, the team was very friendly and attentive I will have no hesitation going again and recommending you to all my friends and colleagues."
        }
    }))
}
testimonials()

window.addEventListener("scroll", () => {
    let header = document.querySelector(".navbar")
    let active=document.querySelector(".active")
    let ulAct=document.querySelector("nav ul")
    if (window.scrollY > 100 && window.screen.availWidth<991) {
        header.classList.add("headerAnime")
        if(active){
            ulAct.classList.add("ulAct")
        }
        
    } else {
        header.classList.remove("headerAnime")
        if(active){
            ulAct.classList.remove("ulAct")
        }
    }
})

function openMenu(){
    let menu=document.querySelector(".fa-bars")
    let nav =document.querySelector(".navbarMain nav")
    menu.addEventListener("click",()=>{
        nav.classList.toggle("active")
    })
    
}
openMenu()
function changePhoto(){
    let img=document.querySelector(".logo img")
    if(window.screen.availWidth<992){
        img.setAttribute("src","https://livedemo00.template-help.com/wt_prod-22021/images/logo-default-120x45.png")
    }
    else{
        img.setAttribute("src","https://livedemo00.template-help.com/wt_prod-22021/images/logo-inverse-119x43.png")
    }
    
}
changePhoto()
window.addEventListener("resize", changePhoto);
// console.log(window.screen.availWidth);