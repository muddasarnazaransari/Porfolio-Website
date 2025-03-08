//Dark Mode
let mode = document.querySelector("#mode-icon");
let modeButton = document.querySelector("#mode-button");
let body = document.body;
let header = document.querySelector(".header");
let navBar = document.querySelector(".nav-bar");
let nav = document.querySelector(".nav");
let anchor = document.querySelectorAll(".nav-link");

//Hero Section
let headerText = document.querySelector(".header-text");

let currentMode = "DARK MODE";

function lightTheme()
{
    mode.classList.remove("uil-sun");
    mode.classList.add("uil-moon");
    
    body.classList.add("light-body");
    header.classList.add("light-header");
    navBar.classList.add("light-nav");

    headerText.style.color = "black";

    anchor.forEach(anchor =>
    {
        anchor.classList.add("anchor-light")
    });

    currentMode = "LIGHT MODE";
}

function darkTheme()
{
    mode.classList.remove("uil-moon");
    mode.classList.add("uil-sun");

    body.classList.remove("light-body");
    header.classList.remove("light-header");
    navBar.classList.remove("light-nav");

    headerText.style.color = "white";

    anchor.forEach(anchor =>
    {
        anchor.classList.remove("anchor-light")
    });

    currentMode = "DARK MODE"; 
}

mode.addEventListener("click" , () => 
{
    mode.style.opacity = "0";
    mode.style.transform = "scale(0.8)";


    setTimeout(() => 
    {
        //icon change
        if(currentMode === "DARK MODE")
        {
            lightTheme();
            nav.style.backgroundColor = "white";
        }
        else
        {
            darkTheme();
            nav.style.backgroundColor = "black";
        }

        mode.style.opacity = "1";
        mode.style.transform = "scale(1)";
    }, 300);
});


modeButton.addEventListener("click" , () => 
{
    modeButton.style.opacity = "0";
    modeButton.style.transform = "scale(0.8)";


    setTimeout(() => 
    {
        //icon change
        if(currentMode === "DARK MODE")
        {
            lightTheme();
            modeButton.innerText = currentMode;
            
            nav.style.backgroundColor = "#F8F9FA";
            menuOpen.style.color = "black";
            menuClose.style.color = "black";
        }
        else
        {
            darkTheme();
            modeButton.innerText = currentMode;

            nav.style.backgroundColor = "#1E1E1E";
            menuOpen.style.color = "white";
            menuClose.style.color = "white";
        }

        modeButton.style.opacity = "1";
        modeButton.style.transform = "scale(1)";
    }, 300);
});

// Tackling Resizing of window problem
window.addEventListener("resize", () => 
{
    if(window.innerWidth >= 953)
    {
        if(currentMode === "DARK MODE")
        {
            nav.style.backgroundColor = "black";
        }
        else
        {
            nav.style.backgroundColor = "white";
        }
    }
    else
    {
        if(currentMode === "DARK MODE")
        {
            nav.style.backgroundColor = "#1E1E1E";
        }
        else
        {
            nav.style.backgroundColor = "#F8F9FA";
        }
    }
});

// Menu Button Toggle
let menuOpen = document.querySelector("#menu-open");
let menuClose = document.querySelector("#menu-close");

modeButton.style.display = "none";
menuOpen.addEventListener("click" , () =>
{
    nav.style.right = "0";
    modeButton.style.display = "block";
});

menuClose.addEventListener("click" , () =>
{
    nav.style.right = "-50%";
    modeButton.style.display = "none";
});

// Typed Text.
let typeText = ["WEB DEVELOPER" , "VIDEO EDITOR"];
let letterIndex = 0;
let textIndex = 0;
let isDelete = false;
let typingSpeed = 200;
let erasingSpeed = 100;
let delayBetweenText = 1000;

function typingText()
{
    let target = document.querySelector(".typed-text");
    let currentText = typeText[textIndex];

    target.innerText = currentText.substring(0, letterIndex);

    if(isDelete)
    {
        letterIndex--;
    }
    else
    {
        letterIndex++;
    }

    if(!isDelete && letterIndex === currentText.length + 1)
    {
        setTimeout(() => 
        {
            isDelete = true;
            typingText();
        }, delayBetweenText);
    }
    else
    {
        if(isDelete && letterIndex === 0)
        {
            isDelete = false;
            textIndex = (textIndex + 1) % typeText.length;
            setTimeout(typingText, typingSpeed);
        }
        else
        {
            setTimeout(typingText, isDelete ? erasingSpeed : typingSpeed);
        }
    }
}

document.addEventListener("DOMContentLoaded", () =>
{
    setTimeout(typingText, 500);
});