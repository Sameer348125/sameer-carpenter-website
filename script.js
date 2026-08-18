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
// ===== GALLERY FILTER =====

document.addEventListener("DOMContentLoaded", function () {

    const filterButtons = document.querySelectorAll(".filter-btn");
    const galleryItems = document.querySelectorAll(".gallery-item");

    filterButtons.forEach(function (button) {

        button.addEventListener("click", function (e) {

            e.preventDefault();

            const filter = this.getAttribute("data-filter");

            // Active button
            filterButtons.forEach(function (btn) {
                btn.classList.remove("active");
            });

            this.classList.add("active");

            // Filter photos
            galleryItems.forEach(function (item) {

                if (filter === "all" || item.classList.contains(filter)) {
                    item.style.display = "";
                } else {
                    item.style.display = "none";
                }

            });

        });

    });

});
