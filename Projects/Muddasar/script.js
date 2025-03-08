//Dark Mode
let mode = document.querySelector("#mode-icon");
let modeButton = document.querySelector("#mode-button");
let body = document.body;
let header = document.querySelector("header");
let nav = document.querySelector(".nav");
console.log(header);
console.dir(header);
let anchor = document.querySelectorAll("a");
let currentMode = "DARK MODE";


mode.addEventListener("click" , () => 
{
    mode.style.opacity = "0";
    mode.style.transform = "scale(0.8)";


    setTimeout(() => 
    {
        //icon change
        if(currentMode === "DARK MODE")
        {
            mode.classList.remove("uil-sun");
            mode.classList.add("uil-moon");
            
            body.classList.add("light-body");
            header.classList.add("light-header");

            anchor.forEach(anchor =>
            {
                anchor.classList.add("anchor-light")
            });

            currentMode = "LIGHT MODE";
        }
        else
        {
            mode.classList.remove("uil-moon");
            mode.classList.add("uil-sun");

            body.classList.remove("light-body");
            header.classList.remove("light-header");

            anchor.forEach(anchor =>
            {
                anchor.classList.remove("anchor-light")
            });

            currentMode = "DARK MODE";
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
            modeButton.innerText = currentMode;
            modeButton.classList.remove("uil-sun");
            mode.classList.add("uil-moon");
            
            body.classList.add("light-body");
            header.classList.add("light-header");
            nav.style.backgroundColor = "#F8F9FA";
            menuOpen.style.color = "black";
            menuClose.style.color = "black";

            anchor.forEach(anchor =>
            {
                anchor.classList.add("anchor-light")
            });

            currentMode = "LIGHT MODE";
        }
        else
        {
            modeButton.innerText = currentMode;

            body.classList.remove("light-body");
            header.classList.remove("light-header");
            nav.style.backgroundColor = "#1E1E1E";
            menuOpen.style.color = "white";
            menuClose.style.color = "white";

            anchor.forEach(anchor =>
            {
                anchor.classList.remove("anchor-light")
            });

            currentMode = "DARK MODE";
        }

        modeButton.style.opacity = "1";
        modeButton.style.transform = "scale(1)";
    }, 300);
});

// Menu Button Toggle
let menuOpen = document.querySelector("#menu-open");
let menuClose = document.querySelector("#menu-close");

menuOpen.addEventListener("click" , () =>
{
    nav.style.right = "0";
});

menuClose.addEventListener("click" , () =>
{
    nav.style.right = "-50%";
});
