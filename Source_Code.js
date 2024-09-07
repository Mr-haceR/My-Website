const bodyElement = document.body;
const container = document.getElementById("container");
const info = document.getElementById("name_and_pic");
const content_window = document.getElementById("content_window");
const slider = document.getElementById("slider");
const l_icon = document.getElementById("l_icon");
const elements = document.querySelectorAll(".buttons");
const icons = document.querySelectorAll(".icons");
const selection = document.getElementById("selection");
const navButtons = document.querySelectorAll(".buttons.clickable");
const main = document.getElementById("main");
const email = document.getElementById("email")
const ii = document.querySelectorAll(".i")
const what = document.getElementById("what");
const boxes = document.querySelectorAll(".boxes");

function proceed() {
    bodyElement.style.animation = "remove_blur 150ms linear forwards";
    container.style.animation = "fade_away 150ms linear forwards";
    info.style.animation = "info_popup 200ms ease-in forwards";
    content_window.style.animation = "content_window_popup 300ms ease-in forwards";
    main.style.display = "flex";
}

const mobSlider = document.getElementById("mobile_slider");

let i = 0;
function mode() {
    if (i == 0) {
        slider.style.animation = "slider_animation 400ms linear forwards";
        mobSlider.style.animation = "mob_slider_dark 200ms linear forwards";
        content_window.style.backgroundColor = "rgb(28, 28, 28)";
        main.style.backgroundColor = "#242424"
        elements.forEach(element => {
            element.style.color = "white";
        });
    
        icons.forEach(icon => {
            icon.style.filter = "invert(100%)";
        });
        ii.forEach(ee => {
            ee.style.backgroundColor = "rgb(47, 47, 47)";
        });
        email.style.color = "white"
        what.style.backgroundColor = "#242424"
        boxes.forEach(e => {
            e.style.color = "white";
            e.style.border = "border: 1px solid rgba(0, 0, 0, 0.418)";
        });
        i = i + 1;
    } else if (i == 1) {
        slider.style.animation = "slider_reverse 400ms linear forwards";
        mobSlider.style.animation = "mob_slider_light 200ms linear forwards";
        content_window.style.backgroundColor = "white";
        main.style.backgroundColor = "#c7c6c6"
        elements.forEach(element => {
            element.style.color = "black";
        });
    
        icons.forEach(icon => {
            icon.style.filter = "invert(0%)";
        });
        ii.forEach(ee => {
            ee.style.backgroundColor = "white"
        });
        email.style.color = "black"
        what.style.backgroundColor = "white"
        boxes.forEach(e => {
            e.style.color = "black";
            e.style.border = "border: 1px solid rgba(255, 255, 255, 0.418)";
        });
        i = i - 1;
    }
}

navButtons.forEach(button => {
    button.addEventListener("click", (event) => {
        moveSelection(event.currentTarget);
        moveElementToPosition(event.target);
        page_change(event.target.id)
    });
});
function moveSelection(target) {
    const targetRect = target.getBoundingClientRect();
    const containerRect = target.parentElement.getBoundingClientRect();
    const offsetTop = targetRect.top - containerRect.top;

    selection.style.top = `${offsetTop}px`;
}
function moveElementToPosition(targetElement) {
    const animatedElement = document.getElementById('selection');
    const targetRect = targetElement.getBoundingClientRect();
    const containerRect = document.getElementById('container1').getBoundingClientRect();
    const startPos =  animatedElement.getBoundingClientRect();
    const endPos = {
        top: targetRect.top - containerRect.top,
    };
    const duration = 150;
    const startTime = performance.now();

    function animate(timestamp) {
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);

        animatedElement.style.top = startPos.top + (endPos.top - startPos.top) * progress + 'px';

        if (progress < 1) {
            requestAnimationFrame(animate);
        }
    }

    requestAnimationFrame(animate);
}
var selected_page = document.getElementById("home_page");
function changer(obj)
{
    selected_page.style.animation = "page_out 250ms linear forwards";
    selected_page.style.display = "none";
    selected_page.style.opacity = 0;
    selected_page = document.getElementById(obj)
    selected_page.style.display = "flex"
    selected_page.style.animation = "page_in 250ms linear forwards";
}
function page_change(i){
    if (i == "btn1"){
        changer("home_page")
    }
    else if (i == "btn2"){
        changer("resume_page")
    }
    else if (i == "btn3"){
       changer("contact_page")
    }
    else if (i == "btn4"){
        changer("business_page")
    }
}
document.querySelectorAll(".social_icons").forEach(social => {
    social.addEventListener('click', event =>{
        redirecter(event.target.id)
    });
});
function opener(object){
    var newTab = window.open();
    newTab.location.href = object;
}
function redirecter(social_icon_id){
    if (social_icon_id == "insta"){
        opener("https://www.instagram.com/mirza__sab69/")
    }
    else if (social_icon_id == "facebook"){
        opener("https://www.facebook.com/profile.php?id=100044601694592")
    }
    else if (social_icon_id == "github"){
        opener("https://github.com/Mr-haceR")
    }
}


const tobeblur = document.querySelectorAll('.tobeblur');
function whatsapp() {
    what.style.scale = 1;
    tobeblur.forEach(b => {
        b.style.filter = "blur(10px)";
    });
}

function whatClose() {
    what.style.scale = 0;
    tobeblur.forEach(b => {
        b.style.filter = "blur(0px)";
    });
}