
const textElments = {
    p1: document.querySelector(".p1"),
    p2: document.querySelector(".p2"),
    p3: document.querySelector(".p3"),
    p4: document.querySelector(".p4"),
}


let userNameContainer = document.querySelector(".user-name-form-container");

document.addEventListener("DOMContentLoaded", ()=> {
    if(localStorage.getItem("userName")){
        document.querySelector(".user-name").textContent = localStorage.getItem("userName");
        displaySection(".hero-section");
        displayHeroText();
    }
    else{
        userNameContainer.style.display = "flex";
    }
    
});

const allSecetionTags = document.getElementsByTagName("section");

// Counter to avoid displaying menu on load
let menuCounter = 0;
function displaySection(sectionClassName){
    menuCounter++;
    for (let i = 0; i < allSecetionTags.length; i++) {
        allSecetionTags[i].style.display = "none";
    }
    document.querySelector(sectionClassName).style.display = "block";
    // toggle menu
    if (menuCounter > 1) {
        displayMenu();
    }
}


let textInterval;
let appearText = 0;
let hEl = document.querySelector(".main-heading");

function displayHeroText() {
    textInterval = setInterval(() => {
        appearText++;
        if(appearText === 1){
            textElments.p1.classList.add("showtext");
        }
        else if(appearText === 2){
            textElments.p2.classList.add("showtext");
        }else if(appearText === 3){
            textElments.p3.classList.add("showtext");
        }else{
            textElments.p4.classList.add("showtext");
            clearInterval(textInterval);
        }
    }, 1500);
}


//animate hamburger menu
const burgerTopSide = document.querySelector(".hamburger-top");
const burgerBottomSide = document.querySelector(".hamburger-bottom");

const navMenuContainer = document.querySelector(".nav-menu-container");

let menuActive = false;
function displayMenu() {
    if(!menuActive){
        burgerTopSide.style.transform = "rotate(45deg)";
        burgerTopSide.style.marginBottom = "-9px";
        burgerBottomSide.style.transform = "rotate(-45deg)";
        navMenuContainer.style.display = "flex";
        menuActive = true;
    }
    else{
        burgerTopSide.style.transform = "rotate(0)";
        burgerTopSide.style.marginBottom = "8px";
        burgerBottomSide.style.transform = "rotate(0)";
        navMenuContainer.style.display = "none";
        menuActive = false;
    }
}

// submit user name if no name found
const userNameForm = document.querySelector(".user-name-form");

userNameForm.addEventListener("submit", (event)=>{
    event.preventDefault();
    const userName = document.getElementById("user-name-input").value;
    
    localStorage.setItem("userName", userName);
    userNameContainer.style.display = "none";

    displaySection(".hero-section");
    window.location.reload();
});
// localStorage.clear()
let authorImg = false;
function toggleAuthorImg(){
    if(!authorImg){
        document.querySelector(".author-img-main-con").style.display = "flex";
        authorImg = true;
    } else{
        document.querySelector(".author-img-main-con").style.display = "none";
        authorImg = false;
    }
}
