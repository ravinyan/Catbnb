
history.scrollRestoration = 'manual';

//  header scaling
window.onscroll = function() { headerScaling() };

function headerScaling() 
{
    var butt = document.getElementById("StaysMenuButtons").innerHTML;
    var form = document.getElementById("StaysMenuForm").innerHTML;

    if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1)
    {
        //  if scrolled down
        document.getElementById("TopHeader").style.height = "80px";


        document.getElementById("StaysMenuForm").style.top = "35px";
        document.getElementById("ExperiencesMenuForm").style.top = "35px";

        document.getElementById("StaysMenuButtons").style.top = "-50px";


        document.getElementById("ScrollDiv").style.top = "81px";
        document.getElementById("ScrollDiv").style.boxShadow = "0 4px 6px -6px #cacaca";
    }
    else 
    {
        //  if on top of page
        document.getElementById("TopHeader").style.height = "149px";


        document.getElementById("StaysMenuForm").style.top = "100px";
        document.getElementById("ExperiencesMenuForm").style.top = "100px";

        document.getElementById("StaysMenuButtons").style.top = "0px";


        document.getElementById("ScrollDiv").style.top = "150px";
        document.getElementById("ScrollDiv").style.boxShadow = "none";
    }
}

/* ------------------------------- BUTTONS ------------------------------- */
//  SCROLL MENU
const buttonLeft = document.getElementById("ScrollLeft");
const buttonRight = document.getElementById("ScrollRight");
const scrollMenu = document.getElementById("ScrollMenu");

buttonLeft.style.display = "none"; 
scrollMenu.scrollLeft == 0;

/* left button */
buttonLeft.onclick = function()
{
    scrollMenu.scrollLeft -= window.innerWidth - 420;
    buttonRight.style.display = "block"; 

    if (scrollMenu.scrollLeft <= window.innerWidth)
    {
        buttonLeft.style.display = "none";
    }
}

/* right button */
buttonRight.onclick = function()
{
    scrollMenu.scrollLeft += window.innerWidth - 420;
    buttonLeft.style.display = "block";

    if (scrollMenu.scrollLeft >= scrollMenu.scrollWidth - window.innerWidth)
    {
        buttonRight.style.display = "none";
    }
}

//  DISPLAYING FORMS FOR STAYS/EXPERIENCES
const staysMenuButton = document.getElementById("StaysMenuButton");
const experiencesMenuButton = document.getElementById("ExperiencesMenuButton");
const staysMenuForm = document.getElementById("StaysMenuForm");
const experiencesMenuForm = document.getElementById("ExperiencesMenuForm");

staysMenuButton.onclick = function()
{
    staysMenuForm.style.display = "block";
    experiencesMenuForm.style.display = "none";
}

experiencesMenuButton.onclick = function()
{
    experiencesMenuForm.style.display = "block";
    staysMenuForm.style.display = "none";
}

// LANGUAGES AND REGIONS / CURRENCIES
const languagesButton = document.getElementById("ModalLanguageAndRegionButton");
const currenciesButton = document.getElementById("ModalCurrenciesButton");

const languages = document.getElementById("LanguageAndRegion");
const currencies = document.getElementById("Currencies");

languagesButton.onclick = function()
{
    languages.style.display = "block";
    currencies.style.display = "none";
}

currenciesButton.onclick = function()
{
    currencies.style.display = "block";
    languages.style.display = "none";
}
