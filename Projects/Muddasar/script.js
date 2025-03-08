//Dark Mode
let mode = document.querySelector("#mode-icon");
let modeButton = document.querySelector("#mode-button");
let body = document.body;
let navBar = document.querySelector(".nav-bar");
let nav = document.querySelector(".nav");
let anchor = document.querySelectorAll(".nav-link");
let currentMode = "DARK MODE";

function lightTheme()
{
    mode.classList.remove("uil-sun");
    mode.classList.add("uil-moon");
    
    body.classList.add("light-body");
    navBar.classList.add("light-nav");

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
    navBar.classList.remove("light-nav");

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
        }
        else
        {
            darkTheme();
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
        nav.style.backgroundColor = "black";
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