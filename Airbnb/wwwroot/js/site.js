
history.scrollRestoration = 'manual';

//  header scaling
window.onscroll = function() { headerScaling() };

function headerScaling() 
{
    var butt = document.getElementById("StaysMenuButtons").innerHTML;
    var butter = document.getElementById("StaysMenuForm").innerHTML;

    if (document.documentElement.scrollTop > 1 || document.body.scrollTop > 1)
    {
        //  if scrolled down
        document.getElementById("TopHeader").style.height = "80px";

        document.getElementById("MiniForm").style.display = "block";
        document.getElementById("StaysMenuButtons").style.display = "none";


        document.getElementById("StaysMenuForm").style.display = "none";
        document.getElementById("ExperiencesMenuForm").style.display = "none";


        document.getElementById("ScrollDiv").style.top = "80px";
        document.getElementById("ScrollDiv").style.boxShadow = "0 4px 6px -6px #cacaca";

        
        document.getElementById("heder").style.height = "";
        document.getElementById("GreyBackground").style.display = "none";

        //  resetting css for stuff
        whereDropdown.style.display = "none";
        datesDropdown.style.display = "none";
        whoDropdown.style.display = "none";
        whereDropdownExperiences.style.display = "none";
        datesDropdownExperiences.style.display = "none";
        whoDropdownExperiences.style.display = "none";

        form.style.backgroundColor = ""

        onClickButtonUnfocus(whereButton);
        onClickButtonUnfocus(checkinButton);
        onClickButtonUnfocus(checkoutButton);
        onClickButtonUnfocus(whoButton);
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
    scrollMenu.scrollLeft -= window.innerWidth - 320;
    buttonRight.style.display = "block"; 

    if (scrollMenu.scrollLeft <= window.innerWidth)
    {
        buttonLeft.style.display = "none";
    }
}

/* right button */
buttonRight.onclick = function()
{
    scrollMenu.scrollLeft += window.innerWidth - 320;
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
const checkoutButton = document.getElementById("CheckoutButton");
const datesDropdown = document.getElementById("CheckinDropdown");

const whoButton = document.getElementById("WhoButton");
const whoDropdown = document.getElementById("WhoDropdown");

const whereButtonExperiences = document.getElementById("WhereButtonExperiences");
const whereDropdownExperiences = document.getElementById("WhereDropdownExperiences");

const datesButtonExperiences = document.getElementById("DatesButton");
const datesDropdownExperiences =  document.getElementById("DatesDropdown");

const whoButtonExperiences = document.getElementById("WhoButtonExperiences");
const whoDropdownExperiences = document.getElementById("WhoDropdownExperiences");

const form = document.querySelector(".form_container")

function onClickButtonFocus(button)
{
    form.style.backgroundColor = "#dedede";
    button.style.backgroundColor = "white";
    button.style.boxShadow = "0 .125rem .25rem rgba(0,0,0,.075)";
}

function onClickButtonUnfocus(button)
{
    button.style.backgroundColor = "";
    button.style.boxShadow = "";
}

document.addEventListener('click', event => 
{
    if (!whereDropdown.contains(event.target) && !whereButton.contains(event.target) && whereDropdown.style.display == "block") 
    {
        if (!form.contains(event.target))
        {
            form.style.backgroundColor = "";
        }

        whereDropdown.style.display = "none";
        onClickButtonUnfocus(whereButton);
    }
});

document.addEventListener('click', event => 
{
    if (!datesDropdown.contains(event.target) && !checkinButton.contains(event.target) &&
         datesDropdown.style.display == "block" && checkinButton.style.backgroundColor == "white")
    {
        if (!form.contains(event.target))
        {
            form.style.backgroundColor = "";
        }
        
        if (!checkoutButton.contains(event.target))
        {
            datesDropdown.style.display = "none";
        }
        
        onClickButtonUnfocus(checkinButton);
    }
});

document.addEventListener('click', event => 
{
    if (!datesDropdown.contains(event.target) && !checkoutButton.contains(event.target) && 
         datesDropdown.style.display == "block" && checkoutButton.style.backgroundColor == "white")
    {
        if (!form.contains(event.target))
        {
            form.style.backgroundColor = "";
        }
        
        if (!checkinButton.contains(event.target))
        {
            datesDropdown.style.display = "none";
        }

        onClickButtonUnfocus(checkoutButton);
    }
});

document.addEventListener('click', event => 
{
    if (!whoDropdown.contains(event.target) && !whoButton.contains(event.target) && whoDropdown.style.display == "block") 
    {
        if (!form.contains(event.target))
        {
            form.style.backgroundColor = "";
        }

        whoDropdown.style.display = "none";
        onClickButtonUnfocus(whoButton);
    }
});

//  its just to reset form background color when there is no focus on any button and bg color is still grey
document.addEventListener('click', event =>
{
    if (whereButton.style.backgroundColor != "white" && checkinButton.style.backgroundColor != "white" && checkoutButton.style.backgroundColor != "white" && whoButton.style.backgroundColor != "white" 
    && !form.contains(event.target))
    {
        form.style.backgroundColor = "";
    }
})

function openWindow(button, dropdown)
{
    button.onclick = function(e)
    {
        e.preventDefault();

        dropdown.style.display = "block"

        form.style.backgroundColor = "#dedede";
        button.style.backgroundColor = "white";
        button.style.boxShadow = "0 .125rem .25rem rgba(0,0,0,.075)";
    }
}

openWindow(whereButton, whereDropdown);
openWindow(checkinButton, datesDropdown);
openWindow(checkoutButton, datesDropdown);
openWindow(whoButton, whoDropdown);

openWindow(whereButtonExperiences, whereDropdownExperiences);
openWindow(datesButtonExperiences, datesDropdownExperiences);
openWindow(whoButtonExperiences, whoDropdownExperiences);


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

// FORM DROPDOWN WINDOW THINGY BUTTONS i made it better i forgot to change this oopsie
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

const formGuestsInput = document.getElementById("GuestsInput");

function changeGuestsValue()
{
    let guestCount  = +adultsCount.innerText + +childrenCount.innerText > 1 
                    ? `${+adultsCount.innerText + +childrenCount.innerText} guests`
                    : +adultsCount.innerText + +childrenCount.innerText != 0 
                    ? `${+adultsCount.innerText + +childrenCount.innerText} guest`
                    : "";

    let infantCount = infantsCount.innerText > 1
                    ? `, ${infantsCount.innerText} infants` 
                    : infantsCount.innerText != 0
                    ? `, ${infantsCount.innerText} infant`
                    : "";


    let petCount    = petsCount.innerText > 1  
                    ? `, ${petsCount.innerText} pets` 
                    : petsCount.innerText != 0  
                    ? `, ${petsCount.innerText} pet`
                    : "";

    formGuestsInput.value = `${guestCount}${infantCount}${petCount}`;
}

function changeButtonIncrease(entity)
{
    entity.classList.add("guest_button_decrease");
    entity.classList.remove("guest_button_color");
    entity.classList.remove("guest_button_increase"); 
}

function changeButtonDecrease(entity)
{
    entity.classList.remove("guest_button_increase");
    entity.classList.add("guest_button_color");
    entity.classList.add("guest_button_decrease");
}

function changeNumber(entity, increment, decrement)
{
    increment.onclick = function()
    {
        if (increment.style.cursor == "pointer")
        {
            entity.innerText ++;

            if ((childrenCount.innerText > 0 || infantsCount.innerText > 0 || petsCount.innerText > 0) && adultsCount.innerText <= 1)
            {
                if (adultsCount.innerText == 0)
                {
                    adultsCount.innerText ++;
                }
                else
                {
                    decrementAdultCountButton.style.cursor = "not-allowed";

                    changeButtonIncrease(decrementAdultCountButton);
                } 
            }

            changeGuestsValue();

            decrement.style.cursor = "pointer";

            var decr = decrement.classList;
            decr.add("guest_button_color");

            if ((+adultsCount.innerText + +childrenCount.innerText) == 16)
            {
                incrementAdultCountButton.style.cursor = "not-allowed";
                incrementChildCountButton.style.cursor = "not-allowed"; 

                changeButtonIncrease(incrementAdultCountButton);
                changeButtonIncrease(incrementChildCountButton);
            }

            if (infantsCount.innerText == 5)
            {
                incrementInfantCountButton.style.cursor = "not-allowed";

                changeButtonIncrease(incrementInfantCountButton);
            }

            if (petsCount.innerText == 5)
            {
                incrementPetCountButton.style.cursor = "not-allowed";

                changeButtonIncrease(incrementPetCountButton);
            }
        }
    }

    decrement.onclick = function()
    {
        if (decrement.style.cursor == "pointer")
        {
            entity.innerText --;

            if ((childrenCount.innerText == 0 && infantsCount.innerText == 0 && petsCount.innerText == 0) && adultsCount.innerText >= 1)
            {
                decrementAdultCountButton.style.cursor = "pointer";

                changeButtonDecrease(decrementAdultCountButton);
            }

            if ((childrenCount.innerText > 0 || infantsCount.innerText > 0 || petsCount.innerText > 0) && adultsCount.innerText == 1)
            {
                decrementAdultCountButton.style.cursor = "not-allowed";

                changeButtonIncrease(decrementAdultCountButton);
            }

            changeGuestsValue();

            var decr = decrement.classList;
            if (entity.innerText == 0)
            {
                decr.remove("guest_button_color");
            }  

            if ((+adultsCount.innerText + +childrenCount.innerText) < 16)
            {
                incrementAdultCountButton.style.cursor = "pointer";
                incrementChildCountButton.style.cursor = "pointer";

                changeButtonDecrease(incrementAdultCountButton);
                changeButtonDecrease(incrementChildCountButton);
            }

            if (infantsCount.innerText < 5)
            {
                incrementInfantCountButton.style.cursor = "pointer";

                changeButtonDecrease(incrementInfantCountButton);
            }

            if (petsCount.innerText < 5)
            {
                incrementPetCountButton.style.cursor = "pointer";

                changeButtonDecrease(incrementPetCountButton);
            }

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

//  testing for calendar stuff aaaaaaaaaaa
//  using button background color to manipulate inputs

const checkinFormInput = document.getElementById("CheckinInput");
const checkoutFormInput = document.getElementById("CheckoutInput");

const leftCalendar = document.getElementById("LeftCalendarTable");
const rightCalendar = document.getElementById("RightCalendarTable");


/*
    Leap Years are any year that can be exactly divided by 4 (such as 2020, 2024, 2028, etc)
 	except if it can be exactly divided by 100, then it isn't (such as 2100, 2200, etc)
 	except if it can be exactly divided by 400, then it is (such as 2000, 2400)

    need days/months/years
*/

var date = new Date();

var day = date.getDate();   // 1-31 days and then
var month = date.getMonth(); // WHY ITS FROM 0 TO 11 WHO HURT YOU
var year = date.getFullYear();

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

console.log(day)
console.log(month + 1)
console.log(year)

var x = 0;

for (i = 0; i < 5; i++)
{
    var tr = document.createElement("tr");
    for (j = 0; j < 7; j++)
    {
        x += 1;
        var td = document.createElement("td");
        var div = document.createElement("div");
        td.appendChild(div);
        div.innerText = x;
        div.className = "box";
        tr.appendChild(td);
    }
    leftCalendar.appendChild(tr);
}

x = 0;

for (i = 0; i < 5; i++)
{
    var tr = document.createElement("tr");
    for (j = 0; j < 7; j++)
    {
        x += 1;
        var td = document.createElement("td");
        var div = document.createElement("div");
        td.appendChild(div);
        div.innerText = x;
        div.className = "box";
        tr.appendChild(td);
    }
    rightCalendar.appendChild(tr);
}

const datesButton = document.getElementById("DatesButton");
const monthsButton = document.getElementById("MonthsButton");
const flexibleButton = document.getElementById("FlexibleButton");

datesButton.onclick = function()
{
    datesButton.style.backgroundColor = "white";

    monthsButton.style.backgroundColor = "";
    flexibleButton.style.backgroundColor = "";
}

monthsButton.onclick = function()
{
    monthsButton.style.backgroundColor = "white";

    datesButton.style.backgroundColor = "";
    flexibleButton.style.backgroundColor = "";
}

flexibleButton.onclick = function()
{
    flexibleButton.style.backgroundColor = "white";

    datesButton.style.backgroundColor = "";
    monthsButton.style.backgroundColor = "";
}




//banana.onclick = function()
//{
//    if (checkinButton.style.backgroundColor == "white" )
//    {
//        banana.style.backgroundColor = "black";
//        console.log(">>>>>>>>>>>>");

//        //  this looks unironically like password someone would use lol
//        checkinFormInput.value = "banana111";

//        if (checkoutFormInput.value == "")
//        {
//            onClickButtonUnfocus(checkinButton);
//            onClickButtonFocus(checkoutButton);
//        }
//    }
//    else if (checkoutButton.style.backgroundColor == "white")
//    {
//        banana.style.backgroundColor = "blue";
//        console.log("<<<<<<<<<<<<");

//        //  this too lol
//        checkoutFormInput.value = "banana222";

//        if (checkinFormInput.value == "")
//        {
//            onClickButtonUnfocus(checkinButton);
//            onClickButtonFocus(checkoutButton);
//        }
//    }
//}

//BANANAAAA.onclick = function()
//{
//    if (checkinButton.style.backgroundColor == "white")
//    {
//        BANANAAAA.style.backgroundColor = "black";
//        console.log(">>>>>>>>>>>>");

//        //  this looks unironically like password someone would use lol
//        checkinFormInput.value = "banana111";

//        if (checkoutFormInput.value == "")
//        {
//            onClickButtonUnfocus(checkinButton);
//            onClickButtonFocus(checkoutButton);
//        }
//    }
//    else if (checkoutButton.style.backgroundColor == "white")
//    {
//        BANANAAAA.style.backgroundColor = "blue";
//        console.log("<<<<<<<<<<<<");

//        //  this too lol
//        checkoutFormInput.value = "banana222";

//        if (checkinFormInput.value == "")
//        {
//            onClickButtonUnfocus(checkinButton);
//            onClickButtonFocus(checkoutButton);
//        }
//    }
    
//}

// SEARCH BUTTON testing or whatever it wont do anything really for next few days

const searchButton = document.getElementById("SearchButton");

searchButton.onclick = function()
{
    location.reload();
    console.log("stop searching")
}















