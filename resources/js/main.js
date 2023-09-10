// *************************************************************************
//                         Toggle Button
// *************************************************************************
const humbargerBtn = document.querySelector("#humbarger");
const mainMenu = document.querySelector("#navmenu");
const humbargerClose = document.querySelector("#humbarger-close");
// const searchBtn = document.querySelector(".search");
// const closeBtn = document.querySelector(".close");
const darkMood = document.querySelector('#dark');
const lightMood = document.querySelector('#moon');

darkMood.addEventListener('click', ()=>{
    lightMood.classList.add('active');
    darkMood.classList.add('active');
})
lightMood.addEventListener('click', ()=>{
    lightMood.classList.remove('active');
    darkMood.classList.remove('active')
})
humbargerBtn.addEventListener('click', ()=>{
    mainMenu.classList.add('active');
    humbargerBtn.classList.add('active');
})
humbargerClose.addEventListener('click', ()=>{
    mainMenu.classList.remove('active');
    humbargerClose.classList.remove('active');
    humbargerBtn.classList.remove('active');
})



// toggleBtn.addEventListener("click", ()=>{
//     mainMenu.classList.toggle("active");
//     togleClose.classList.toggle("active");
//     toggleBtn.classList.toggle("active")
// })
// togleClose.addEventListener("click", ()=>{
//     mainMenu.classList.remove("active");
//     togleClose.classList.remove("active");
//     toggleBtn.classList.remove("active");
// })

// Search Bar
// searchBtn.addEventListener("click", ()=>{
//     closeBtn.classList.add("active");
//     searchBtn.classList.add("active");
// })

// closeBtn.addEventListener("click", ()=>{
//     closeBtn.classList.remove("active");
//     searchBtn.classList.remove("active");
// })



// *************************************************************************
//                         For Hero Section Typing Animation
// *************************************************************************

// Text Typing
const dynamicText = document.querySelector("#typing-text");
const words = ["WordPress Developer", "Website Designer", "Website Developer", "Theme Customizer"];

// Variables to track the position and deletion status of the word
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    dynamicText.classList.add("stop-blinking");

    if (!isDeleting && charIndex < currentWord.length) {
        // If condition is true, type the next character
        charIndex++;
        // setTimeout(typeEffect, 200);
        setTimeout(typeEffect, 50);
    } else if (isDeleting && charIndex > 0) {
        // If condition is true, remove the previous character
        charIndex--;
        // setTimeout(typeEffect, 100);
        setTimeout(typeEffect, 50);
    } else {
        // If word is deleted then switch to the next word
        isDeleting = !isDeleting;
        dynamicText.classList.remove("stop-blinking");
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 1200);
    }
}

typeEffect();



