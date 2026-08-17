// ===== LOADER =====
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    if(loader){
        setTimeout(() => {
            loader.style.display = "none";
        },1000);
    }
});

// ===== MOBILE MENU =====
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

if(menuBtn){
    menuBtn.onclick = () => {
        nav.classList.toggle("active");
    };
}

// ===== BOOKING FORM =====
const bookingForm = document.getElementById("bookingForm");

if(bookingForm){

bookingForm.addEventListener("submit",function(e){

e.preventDefault();

const name=document.getElementById("name").value;
const mobile=document.getElementById("mobile").value;
const requirement=document.getElementById("requirement").value;

const msg=
`Hello Sameer Carpenter

Name : ${name}
Mobile : ${mobile}
Requirement : ${requirement}`;

window.open(
"https://wa.me/919756031755?text="+encodeURIComponent(msg),
"_blank"
);

});

}

// ===== TOP BUTTON =====
const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>300){
topBtn.style.display="flex";
}else{
topBtn.style.display="none";
}

});

topBtn.onclick=function(e){
e.preventDefault();
window.scrollTo({
top:0,
behavior:"smooth"
});
};
const modal = document.getElementById("imgModal");
const modalImg = document.getElementById("zoomImg");
const closeBtn = document.querySelector(".close");
document.querySelectorAll(".zoom-img, .before-card img").forEach(img => {
    img.addEventListener("click", function () {
        modal.style.display = "flex";
        modalImg.src = this.src;
    });
});

closeBtn.onclick = () => modal.style.display = "none";

modal.onclick = (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
};
// ===== HEADER SHADOW =====

window.addEventListener("scroll", () => {

const header = document.querySelector(".header");

if(window.scrollY > 30){
    header.classList.add("scrolled");
}else{
    header.classList.remove("scrolled");
}

});
// ===== FAQ =====

document.querySelectorAll(".faq-question").forEach(btn => {

btn.addEventListener("click", () => {

const answer = btn.nextElementSibling;

if(answer.style.display === "block"){
    answer.style.display = "none";
}else{
    answer.style.display = "block";
}

});

});
function filterSelection(category) {
    const items = document.querySelectorAll(".gallery-item");
    const buttons = document.querySelectorAll(".filter-btn");

    buttons.forEach(button => {
        button.classList.remove("active");

        if (button.dataset.filter === category) {
            button.classList.add("active");
        }
    });

    items.forEach(item => {
        if (category === "all" || item.classList.contains(category)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}
