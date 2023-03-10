let links = document.querySelectorAll(".header__link");
const body = document.body;
const burger = document.querySelector("#burger");
const menu_burg = document.querySelector("#b_menu");
const categories = document.querySelectorAll(".slider__category");
const nav = document.querySelector("#nav").cloneNode(1);
const opSlImgs = document.querySelectorAll(".opSl__img");
const opSlNext = document.querySelector(".opSl__next");
const opSlPrev = document.querySelector(".opSl__prev");
const slider_menu = document.querySelector(".slider__menu");
const headButton = document.querySelector("#headBut").cloneNode(1);
const slider_cat = document.querySelector(".slider__categories").cloneNode(1);
const slider_burg = document.querySelector(".slider__burg");
i = 1;
burger.addEventListener("click", function() {
    menu_burg.classList.toggle("open");
    body.classList.toggle("noscroll");
    menu_burg.appendChild(nav);
    nav.appendChild(headButton);
})
    opSlNext.addEventListener("click",function() {
        for (slImg of opSlImgs) {
            if (slImg.classList.contains("opSl__chosen")) {
                slImg.classList.remove("opSl__chosen");
            }
        }
        i++;
        console.log(i);
        if (i > 2) {
            i = 0;
        }
        opSlImgs[i].classList.toggle("opSl__chosen");
    })
    opSlPrev.addEventListener("click",function() {
        for (slImg of opSlImgs) {
            if (slImg.classList.contains("opSl__chosen")) {
                slImg.classList.remove("opSl__chosen");
            }
        }
        i--;
        console.log(i);
        if (i < 0) {
            i = 2;
        }
        opSlImgs[i].classList.toggle("opSl__chosen");
    })
categories.forEach((categ => {
    categ.addEventListener("click",function() {
        for (category of categories) {
            if (category.classList.contains("chosen")) {
                category.classList.remove("chosen");
            }
        }
        categ.classList.toggle("chosen");
    })
}))
links.forEach((link) => {
    link.addEventListener("click", function() {
        body.classList.remove("noscroll");
    });
});
document.querySelector('select#services').addEventListener('change', function() {
    document.querySelector('input[name="service"]').value = (this.value);
  });
  