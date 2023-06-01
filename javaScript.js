// const modeChangeBar = document.getElementById("modeChangeBar");
// const personalInfoDarkMode = document.getElementById("personalInfo")
// const occupation= document.getElementById("occupation");
// const smallIntro = document.getElementById("smallIntro");
// const learnMore = document.getElementById("learnMore");
// let resBtn = document.getElementById("res-btn");
let sendBtn = document.getElementById("send-btn");
// let form = document.getElementById("form");
// let input1 = document.getElementById("input-1");
// let input2 = document.getElementById("input-2");
// let textarea = document.getElementById("projectMatter");
// let about = document.getElementById("about");
// let info = document.querySelector(".info")
// let skills = document.getElementById("skills");
// let skillCard1 =document.getElementById("skillCard1");
// let skillCard2 =document.getElementById("skillCard2");
// let skillCard3 =document.getElementById("skillCard3");
// let aboutH = document.querySelector(".about-heading")
// let skillH = document.querySelector(".skill-heading")
// let workH = document.querySelector(".work-heading")
// let contactH = document.querySelector(".contact-heading")
// let work = document.getElementById("work");
// let contact = document.getElementById("contact");
// var body = document.getElementById("body");
// let modeChange = document.getElementById("modeChange");
// let faMoon = document.getElementById("famoon");
// let faSun = document.getElementById("faSun");
// let linkedin = document.getElementById("linkedin")
// let insta = document.getElementById("insta")
// let mail = document.getElementById("mail")

// let webWorkBody = document.getElementById("webWorkBody");
// let uiuxWorkBody = document.getElementById("uiuxWorkBody");
// let graphicWorkBody = document.getElementById("graphicWorkBody");

// modeChangeBar.addEventListener('click',function(){
//     body.classList.toggle("body-dm");
//     modeChange.classList.toggle("modeChange-d")
//     personalInfoDarkMode.classList.toggle("personalInfo-dm")
//     occupation.classList.toggle("occupation-dm")
//     smallIntro.classList.toggle("smallIntro-dm")
//     learnMore.classList.toggle("learnMore-dm")
//     about.classList.toggle("about-dm")
//     info.classList.toggle("info-d")
//     skills.classList.toggle("skills-dm")
//     aboutH.classList.toggle("heading-d")
//     skillH.classList.toggle("heading-d")
//     workH.classList.toggle("heading-d")
//     contactH.classList.toggle("heading-d")
//     work.classList.toggle("work-dm")
//     contact.classList.toggle("contact-dm")
//     resBtn.classList.toggle("res-btn-dm")
//     sendBtn.classList.toggle("send-btn-dm")
//     form.classList.toggle("form-dm")
//     input1.classList.toggle("input-dm")
//     input2.classList.toggle("input-dm")
//     textarea.classList.toggle("textarea-dm")
    
//     skillCard1.classList.toggle("skillCard-dm")
//     skillCard2.classList.toggle("skillCard-dm")
//     skillCard3.classList.toggle("skillCard-dm")

//     webWorkBody.classList.toggle("webWorkBody-d")
//     uiuxWorkBody.classList.toggle("uiuxWorkBody-d")
//     graphicWorkBody.classList.toggle("graphicWorkBody-d")
//     console.log("w")

//     faMoon.classList.toggle("famoon")
//     faSun.classList.toggle("faSun")
//     linkedin.classList.toggle("social-dm")
//     insta.classList.toggle("social-dm")
//     mail.classList.toggle("social-img-dm")
    
// });


let lampButtonBar = document.getElementById("lampButtonBar");
let lampLight = document.getElementById("lampLight");
let lampButton =document.getElementById("lampButton");

lampButtonBar.addEventListener('click', () => {
    lampLight.classList.toggle("lampLightOnOff")
    lampButton.classList.toggle("lampButton-On")
});


let mobMenu = document.getElementById("mob-menu");
let mobNavlist = document.getElementById("mob-Nav-list");

mobMenu.addEventListener('click', () => {
    mobNavlist.classList.toggle("open-close");
    console.log("w");
})


let inResponse = document.getElementById("inResponse");

sendBtn.addEventListener("click", () => {
    inResponse.style.display = "block";
    document.querySelector('form').style.display = "none";
})


function scrollUp(){
    window.scrollTo(0,0);
}


