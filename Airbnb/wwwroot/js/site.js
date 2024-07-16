
history.scrollRestoration = 'manual';

//  header scaling
window.onscroll = function() { headerScaling() };

function headerScaling() 
{
    if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1)
    {
        //  if scrolled down
        document.getElementById("TopHeader").style.height = "59px";

        document.getElementById("StaysMenuFormStays").style.top = "35px";
        document.getElementById("StaysMenuFormExperiences").style.top = "35px";

        document.getElementById("StaysMenuButtons").style.top = "-50px";

        document.getElementById("ScrollDiv").style.top = "60px";
        document.getElementById("ScrollDiv").style.boxShadow = "0 4px 6px -6px #cacaca";
    }
    else 
    {
        //  if on top of page
        document.getElementById("TopHeader").style.height = "149px";

        document.getElementById("StaysMenuFormStays").style.top = "100px";
        document.getElementById("StaysMenuFormExperiences").style.top = "100px";

        document.getElementById("StaysMenuButtons").style.top = "28px";

        document.getElementById("ScrollDiv").style.top = "150px";
        document.getElementById("ScrollDiv").style.boxShadow = "none";
    }
}

function test()
{
    console.log("FREE PIZZA");
}

function displayStaysMenu()
{
    document.getElementById("StaysMenuFormStays").style.display = "block";
    document.getElementById("StaysMenuFormExperiences").style.display = "none";
}

function displayExperiencesMenu()
{
    document.getElementById("StaysMenuFormExperiences").style.display = "block";
    document.getElementById("StaysMenuFormStays").style.display = "none";
}


//  scroll menu
const buttonLeft = document.getElementById("ScrollLeft");
const buttonRight = document.getElementById("ScrollRight");
const scrollMenu = document.getElementById("ScrollMenu");

buttonLeft.style.display = "none"; 
scrollMenu.scrollLeft == 0;

/* left button */
buttonLeft.onclick = function()
{
    scrollMenu.scrollLeft -= 650;

    buttonRight.style.display = "block";  
    
    if (scrollMenu.scrollLeft <= 650)
    {
        buttonLeft.style.display = "none";
    }
}

/* right button */
buttonRight.onclick = function()
{
    scrollMenu.scrollLeft += 650;

    buttonLeft.style.display = "block";

    if (scrollMenu.scrollLeft >= 4300 )
    {
        buttonRight.style.display = "none";
    }
}

