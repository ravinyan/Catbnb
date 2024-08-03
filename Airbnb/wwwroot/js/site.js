
history.scrollRestoration = 'manual';

//  header scaling
window.onscroll = function() { headerScaling() };

function headerScaling() 
{
    var butt = document.getElementById("StaysMenuButtons").innerHTML;
    var form = document.getElementById("StaysMenuForm").innerHTML;

    if (document.documentElement.scrollTop > 1 || document.body.scrollTop > 1)
    {
        //  if scrolled down
        document.getElementById("TopHeader").style.height = "80px";

        document.getElementById("MiniForm").style.display = "block";
        document.getElementById("StaysMenuButtons").style.display = "none";



        document.getElementById("StaysMenuForm").style.display = "none";
        document.getElementById("ExperiencesMenuForm").style.display = "none";


        document.getElementById("ScrollDiv").style.top = "0px";
        document.getElementById("ScrollDiv").style.boxShadow = "0 4px 6px -6px #cacaca";
    }
    else 
    {
        //  if on top of page
        document.getElementById("TopHeader").style.height = "161px";

        document.getElementById("MiniForm").style.display = "none";
        document.getElementById("StaysMenuButtons").style.display = "block";



        document.getElementById("StaysMenuForm").style.display = "block";

        if (staysMenuButton.style.textShadow == "0px 0px 1px black")
        {
            document.getElementById("StaysMenuForm").style.display = "block";
        }
        else if (experiencesMenuButton.style.textShadow == "0px 0px 1px black")
        {
            document.getElementById("ExperiencesMenuForm").style.display = "block";
        } 

        document.getElementById("ScrollDiv").style.top = "162px";
        document.getElementById("ScrollDiv").style.boxShadow = "none";
    }

    document.getElementById("heder").style.height = "";
    document.getElementById("GreyBackground").style.display = "none";

    whereDropdown.style.display = "none";
    checkinDropdown.style.display = "none";
    checkoutDropdown.style.display = "none";
    whoDropdown.style.display = "none";
    whereDropdownExperiences.style.display = "none";
    datesDropdown.style.display = "none";
    whoDropdownExperiences.style.display = "none";
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

// FORM BUTTONS ITS SCUFFED BUT ITS MINE AND I WILL PROTECT THIS SHIT CODE WITH MY ROTTEN FISH SWORD
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

function onClickOutside(dropdown, button, cb) 
{
    document.addEventListener('click', event => 
    {
        if (!dropdown.contains(event.target) && !button.contains(event.target)) 
        {
            if (dropdown.style.display == "block")
            {
                cb();
            }
        }
    });
};

onClickOutside(whereDropdown, whereButton, function()
{
    whereDropdown.style.display = "none";
})

onClickOutside(checkinDropdown, checkinButton, function()
{
    checkinDropdown.style.display = "none";
})

onClickOutside(checkoutDropdown, checkoutButton, function()
{
    checkoutDropdown.style.display = "none";
})

onClickOutside(whoDropdown, whoButton, function()
{
    whoDropdown.style.display = "none";
})

onClickOutside(whereDropdownExperiences, whereButtonExperiences, function()
{
    whereDropdownExperiences.style.display = "none";
})

onClickOutside(datesDropdown, datesButton, function()
{
    datesDropdown.style.display = "none";
})

onClickOutside(whoDropdownExperiences, whoButtonExperiences, function()
{
    whoDropdownExperiences.style.display = "none";
})

whereButton.onclick = function(e)
{
    e.preventDefault();
    whereDropdown.style.display = "block";

    checkinDropdown.style.display = "none";
    checkoutDropdown.style.display = "none";
    whoDropdown.style.display = "none";
}

checkinButton.onclick = function(e)
{
    e.preventDefault();
    checkinDropdown.style.display = "block";

    whereDropdown.style.display = "none";
    checkoutDropdown.style.display = "none";
    whoDropdown.style.display = "none";
}

checkoutButton.onclick = function(e)
{
    e.preventDefault();
    checkoutDropdown.style.display = "block";

    whereDropdown.style.display = "none";
    checkinDropdown.style.display = "none";
    whoDropdown.style.display = "none";
}

whoButton.onclick = function(e)
{
    e.preventDefault();
    whoDropdown.style.display = "block";

    whereDropdown.style.display = "none";
    checkinDropdown.style.display = "none";
    checkoutDropdown.style.display = "none";
}

whereButtonExperiences.onclick = function(e)
{
    e.preventDefault();
    whereDropdownExperiences.style.display = "block";

    datesDropdown.style.display = "none";
    whoDropdownExperiences.style.display = "none";
}

datesButton.onclick = function(e)
{
    e.preventDefault();
    datesDropdown.style.display = "block";

    whereDropdownExperiences.style.display = "none";
    whoDropdownExperiences.style.display = "none";
}

whoButtonExperiences.onclick = function(e)
{
    e.preventDefault();
    whoDropdownExperiences.style.display = "block";

    whereDropdownExperiences.style.display = "none";
    datesDropdown.style.display = "none";
}

// MINI FORM BUTTONS (opening the big form thingy big header transition idk how its called just opens shit and closes shit)
const anywhereButton = document.getElementById("MiniAnywhereButton");
const anyWeekButton = document.getElementById("MiniAnyWeekButton");
const addGuestsButton = document.getElementById("MiniAddGuestsButton");

window.onclick = function()
{
    if (document.getElementById("GreyBackground").style.display == "block")
    {
        document.getElementById("GreyBackground").onclick = function() 
        {
            document.getElementById("GreyBackground").style.display = "none";

            document.getElementById("heder").style.height = "";
            
            document.getElementById("MiniForm").style.display = "block";
            document.getElementById("StaysMenuButtons").style.display = "none";
            document.getElementById("StaysMenuForm").style.display = "none";   
        };
    }
}

anywhereButton.onclick = function()
{
     document.getElementById("heder").style.position = "absolute";
     document.getElementById("heder").style.top = "0px";
     document.getElementById("heder").style.zIndex = "1";
     document.getElementById("heder").style.height = "161px";
   
     document.getElementById("MiniForm").style.display = "none";
     document.getElementById("StaysMenuButtons").style.display = "block";
     document.getElementById("StaysMenuForm").style.display = "block";

     document.getElementById("GreyBackground").style.display = "block";
}

anyWeekButton.onclick = function()
{
     document.getElementById("heder").style.position = "absolute";
     document.getElementById("heder").style.top = "0px";
     document.getElementById("heder").style.zIndex = "1";
     document.getElementById("heder").style.height = "161px";

     document.getElementById("MiniForm").style.display = "none";
     document.getElementById("StaysMenuButtons").style.display = "block";
     document.getElementById("StaysMenuForm").style.display = "block";

     document.getElementById("GreyBackground").style.display = "block";
}
addGuestsButton.onclick = function()
{
     document.getElementById("heder").style.position = "absolute";
     document.getElementById("heder").style.top = "0px";
     document.getElementById("heder").style.zIndex = "1";
     document.getElementById("heder").style.height = "161px";
   
     document.getElementById("MiniForm").style.display = "none";
     document.getElementById("StaysMenuButtons").style.display = "block";
     document.getElementById("StaysMenuForm").style.display = "block";

     document.getElementById("GreyBackground").style.display = "block";
     console.log("CA PY BA RA capybara capybara capybara capybara")
}

// FORM DROPDOWN THINGY BUTTONS
const adultsCount = document.getElementById("AdultsCount");
const decrementAdultCountButton = document.getElementById("DecreaseAdultCount");
const incrementAdultCountButton = document.getElementById("IncreaseAdultCount");

const childrenCount = document.getElementById("ChildrenCount");
const decrementChildCountButton = document.getElementById("DecreaseChildCount");
const incrementChildCountButton = document.getElementById("IncreaseChildCount");

const infantsCount = document.getElementById("InfantsCount");
const decrementInfantCountButton = document.getElementById("DecreaseInfantCount");
const incrementInfantCountButton = document.getElementById("IncreaseInfantCount");

const petsCount = document.getElementById("PetsCount");
const decrementPetCountButton = document.getElementById("DecreasePetCount");
const incrementPetCountButton = document.getElementById("IncreasePetCount");

function changeNumber(entity, increment, decrement)
{
    increment.onclick = function()
    {
        if (increment.style.cursor == "pointer")
        {
            entity.innerText ++;

            decrement.style.cursor = "pointer"; 

            if (entity.innerText == 16)
            {
                increment.style.cursor = "not-allowed";
            }
        }
    }

    decrement.onclick = function()
    {
        if (decrement.style.cursor == "pointer")
        {
            entity.innerText --;

            increment.style.cursor = "pointer";

            if (entity.innerText == 0)
            {
                decrement.style.cursor = "not-allowed";
            }
        }     
    } 
}

changeNumber(adultsCount, incrementAdultCountButton, decrementAdultCountButton);
changeNumber(childrenCount, incrementChildCountButton, decrementChildCountButton);
changeNumber(infantsCount, incrementInfantCountButton, decrementInfantCountButton);
changeNumber(petsCount, incrementPetCountButton, decrementPetCountButton);





