
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

        document.getElementById("MiniForm").style.display = "block";
        document.getElementById("StaysMenuButtons").style.display = "none";


        
        document.getElementById("ScrollDiv").style.top = "81px";
        document.getElementById("ScrollDiv").style.boxShadow = "0 4px 6px -6px #cacaca";
    }
    else 
    {
        //  if on top of page
        document.getElementById("TopHeader").style.height = "161px";

        document.getElementById("MiniForm").style.display = "none";
        document.getElementById("StaysMenuButtons").style.display = "block";

        document.getElementById("ScrollDiv").style.top = "162px";
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
    staysMenuButton.style.textShadow = "0px 0px 1px black";
    experiencesMenuButton.style.textShadow = "";
}

experiencesMenuButton.onclick = function()
{
    experiencesMenuForm.style.display = "block";
    staysMenuForm.style.display = "none";
    experiencesMenuButton.style.textShadow = "0px 0px 1px black";
    staysMenuButton.style.textShadow = "";
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

//tesitnsad

const whereButton = document.getElementById("WhereButton");
const whereDropdown = document.getElementById("WhereDropdown");

const checkinButton = document.getElementById("CheckinButton");
const checkinDropdown = document.getElementById("CheckinDropdown");

const checkoutButton = document.getElementById("CheckoutButton");
const checkoutDropdown = document.getElementById("CheckoutDropdown");

const whoButton = document.getElementById("WhoButton");
const whoDropdown = document.getElementById("WhoDropdown");

const whereButtonExperiences = document.getElementById("WhereButtonExperiences");
const whereDropdownExperiences = document.getElementById("WhereDropdownExperiences");

const datesButton = document.getElementById("DatesButton");
const datesDropdown =  document.getElementById("DatesDropdown");

const whoButtonExperiences = document.getElementById("WhoButtonExperiences");
const whoDropdownExperiences = document.getElementById("WhoDropdownExperiences");

whereButton.onclick = function()
{
    whereDropdown.style.display = "block";

    checkinDropdown.style.display = "none";
    checkoutDropdown.style.display = "none";
    whoDropdown.style.display = "none";
}

checkinButton.onclick = function()
{
    checkinDropdown.style.display = "block";

    whereDropdown.style.display = "none";
    checkoutDropdown.style.display = "none";
    whoDropdown.style.display = "none";
}

checkoutButton.onclick = function()
{
    checkoutDropdown.style.display = "block";

    whereDropdown.style.display = "none";
    checkinDropdown.style.display = "none";
    whoDropdown.style.display = "none";
}

whoButton.onclick = function()
{
    whoDropdown.style.display = "block";

    whereDropdown.style.display = "none";
    checkinDropdown.style.display = "none";
    checkoutDropdown.style.display = "none";
}

whereButtonExperiences.onclick = function()
{
    whoDropdown.style.display = "block";

    whereDropdown.style.display = "none";
    checkinDropdown.style.display = "none";
    checkoutDropdown.style.display = "none";
}

whereButtonExperiences.onclick = function()
{
    whereDropdownExperiences.style.display = "block";

    datesDropdown.style.display = "none";
    whoDropdownExperiences.style.display = "none";
}

datesButton.onclick = function()
{
    datesDropdown.style.display = "block";

    whereDropdownExperiences.style.display = "none";
    whoDropdownExperiences.style.display = "none";
}

whoButtonExperiences.onclick = function()
{
    whoDropdownExperiences.style.display = "block";

    whereDropdownExperiences.style.display = "none";
    datesDropdown.style.display = "none";
}

const tm = document.getElementById("testmodal");
const tb = document.getElementById("testbutton");

tb.onclick = function()
{
    tm.style.display = "block";
}

window.onclick = function(event)
{
    if (event.target == tm)
    {
        tm.style.display = "none"
    }
}
