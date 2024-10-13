
history.scrollRestoration = 'manual';

//  just for fun
var logo = document.getElementById("LOGO");
var logo_question_mark = document.getElementById("Logo");

logo.onclick = function()
{
    if (logo_question_mark.src == "https://localhost:7027/img/Joel.gif")
    {
        logo_question_mark.src = "/img/Adam.gif";
    }
    else
    {
        logo_question_mark.src = "/img/Joel.gif";
    }
}

/*--------------------------------------------------------------------------------------------------------------------
----------------------------------------------------HEADER SCALING----------------------------------------------------
----------------------------------------------------------------------------------------------------------------------*/
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
        formExperiences.style.backgroundColor = ""
        onClickButtonUnfocus(whereButton);
        onClickButtonUnfocus(checkinButton);
        onClickButtonUnfocus(checkoutButton);
        onClickButtonUnfocus(whoButton);
        onClickButtonUnfocus(whenButton);
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

/*--------------------------------------------------------------------------------------------------------------------
--------------------------------------------------SCROLL MENU BUTTONS-------------------------------------------------
----------------------------------------------------------------------------------------------------------------------*/
const buttonLeft = document.getElementById("ScrollLeft");
const buttonRight = document.getElementById("ScrollRight");
const scrollMenu = document.getElementById("ScrollMenu");

buttonLeft.style.display = "none"; 
scrollMenu.scrollLeft == 0;

buttonLeft.onclick = function()
{
    scrollMenu.scrollLeft -= window.innerWidth - 320;
    buttonRight.style.display = "block"; 

    if (scrollMenu.scrollLeft <= window.innerWidth)
    {
        buttonLeft.style.display = "none";
    }
}

buttonRight.onclick = function()
{
    scrollMenu.scrollLeft += window.innerWidth - 320;
    buttonLeft.style.display = "block";

    if (scrollMenu.scrollLeft >= scrollMenu.scrollWidth - window.innerWidth)
    {
        buttonRight.style.display = "none";
    }
}

/*--------------------------------------------------------------------------------------------------------------------
----------------------------------------STAYS/EXPERIENCES BUTTONS FORM DISPLAY----------------------------------------
----------------------------------------------------------------------------------------------------------------------*/
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

    form.style.backgroundColor = ""
}

experiencesMenuButton.onclick = function()
{
    experiencesMenuForm.style.display = "block";
    staysMenuForm.style.display = "none";
    experiencesMenuButton.style.textShadow = "0px 0px 1px black";
    staysMenuButton.style.textShadow = "";

    formExperiences.style.backgroundColor = ""
}

/*--------------------------------------------------------------------------------------------------------------------
---------------------------------------------LANGUAGE AND CURRENCIES MODAL--------------------------------------------
----------------------------------------------------------------------------------------------------------------------*/
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

/*--------------------------------------------------------------------------------------------------------------------
---------------------------------------FORM BUTTONS DISPLAYING DROPDOWN WINDOWS---------------------------------------
----------------------------------------------------------------------------------------------------------------------*/
const whereButton = document.getElementById("WhereButton");
const whereDropdown = document.getElementById("WhereDropdown");

const checkinButton = document.getElementById("CheckinButton");
const checkoutButton = document.getElementById("CheckoutButton");
const datesDropdown = document.getElementById("CheckinDropdown");

const whoButton = document.getElementById("WhoButton");
const whoDropdown = document.getElementById("WhoDropdown");

const whereButtonExperiences = document.getElementById("WhereButtonExperiences");
const whereDropdownExperiences = document.getElementById("WhereDropdownExperiences");

const datesButtonExperiences = document.getElementById("DatesButtonExperiences");
const datesDropdownExperiences =  document.getElementById("DatesDropdownExperiences");

const whoButtonExperiences = document.getElementById("WhoButtonExperiences");
const whoDropdownExperiences = document.getElementById("WhoDropdownExperiences");

const whenButton = document.getElementById("WhenButton");

const form = document.querySelector(".form_container");
const formExperiences = document.querySelector(".form_container2");

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

//  i feel like it better to have 1 event listener with >8 if statements than 8 event listeners with 8 if statements total
document.addEventListener('mousedown', function(e) 
{
    if (e.target == imstupidsvg || e.target == imstupidpath || modalStartDate.style.display == "block" || modalEndDate.style.display == "block")
    {
        return;
    }
    //  WHERE
    else if (!whereDropdown.contains(e.target) && !whereButton.contains(e.target) && whereDropdown.style.display == "block") 
    {
        if (!form.contains(e.target))
        {
            form.style.backgroundColor = "";
        }

        whereDropdown.style.display = "none";
        onClickButtonUnfocus(whereButton);
    }
    //  CHECK IN
    else if (!datesDropdown.contains(e.target) && !checkinButton.contains(e.target)
         &&   datesDropdown.style.display == "block" && checkinButton.style.backgroundColor == "white")
    {
        if (!form.contains(e.target))
        {
            form.style.backgroundColor = "";
        }
        
        if (!checkoutButton.contains(e.target))
        {
            datesDropdown.style.display = "none";
        }
        
        onClickButtonUnfocus(checkinButton);
    }
    //  CHECK OUT
    else if (!datesDropdown.contains(e.target) && !checkoutButton.contains(e.target)
         &&   datesDropdown.style.display == "block" && checkoutButton.style.backgroundColor == "white")
    {
        if (!form.contains(e.target))
        {
            form.style.backgroundColor = "";
        }
        
        if (!checkinButton.contains(e.target))
        {
            datesDropdown.style.display = "none";
        }

        onClickButtonUnfocus(checkoutButton);
    }
    //  WHEN
    else if (!datesDropdown.contains(e.target) && !whenButton.contains(e.target)
         &&   datesDropdown.style.display == "block" && whenButton.style.backgroundColor == "white")
    {
        if (!form.contains(e.target))
        {
            form.style.backgroundColor = "";
        }

        datesDropdown.style.display = "none";
        onClickButtonUnfocus(whenButton);
    }
    //  WHO
    else if (!whoDropdown.contains(e.target) && !whoButton.contains(e.target) && whoDropdown.style.display == "block") 
    {
        if (!form.contains(e.target))
        {
            form.style.backgroundColor = "";
        }

        whoDropdown.style.display = "none";
        onClickButtonUnfocus(whoButton);
    }
    //  WHERE EXPERIENCES
    else if (!whereDropdownExperiences.contains(e.target) && !whereButtonExperiences.contains(e.target) && whereDropdownExperiences.style.display == "block") 
    {
        if (!formExperiences.contains(e.target))
        {
            formExperiences.style.backgroundColor = "";
        }

        whereDropdownExperiences.style.display = "none";
        onClickButtonUnfocus(whereButtonExperiences);
    }
    //  DATES EXPERIENCES
    else if (!datesDropdownExperiences.contains(e.target) && !datesButtonExperiences.contains(e.target) && datesDropdownExperiences.style.display == "block") 
    {
        if (!formExperiences.contains(e.target))
        {
            formExperiences.style.backgroundColor = "";
        }

        datesDropdownExperiences.style.display = "none";
        onClickButtonUnfocus(datesButtonExperiences);
    }
    //  WHO EXPERIENCES
    else if (!whoDropdownExperiences.contains(e.target) && !whoButtonExperiences.contains(e.target) && whoDropdownExperiences.style.display == "block") 
    {
        if (!formExperiences.contains(e.target))
        {
            formExperiences.style.backgroundColor = "";
        }

        whoDropdownExperiences.style.display = "none";
        onClickButtonUnfocus(whoButtonExperiences);
    }
    //  FORM BACKGROUND RESET ON CLICK OUTSIDE
    else if (whereButton.style.backgroundColor != "white" && checkinButton.style.backgroundColor != "white"
         &&  checkoutButton.style.backgroundColor != "white" && whoButton.style.backgroundColor != "white" 
         &&  whereButtonExperiences.style.backgroundColor != "white" && datesButtonExperiences.style.backgroundColor != "white" 
         &&  whoButtonExperiences.style.backgroundColor != "white" && !form.contains(e.target))
    {
        form.style.backgroundColor = "";
        formExperiences.style.backgroundColor = "";
    }
});

function openWindow(button, dropdown)
{
    button.onclick = function(e)
    {
        e.preventDefault();

        dropdown.style.display = "block";

        form.style.backgroundColor = "#dedede";
        formExperiences.style.backgroundColor = "#dedede";
        button.style.backgroundColor = "white";
        button.style.boxShadow = "0 .125rem .25rem rgba(0,0,0,.075)";
    }
}

openWindow(whereButton, whereDropdown);
openWindow(checkinButton, datesDropdown);
openWindow(checkoutButton, datesDropdown);
openWindow(whoButton, whoDropdown);
openWindow(whenButton, datesDropdown);

openWindow(whereButtonExperiences, whereDropdownExperiences);
openWindow(datesButtonExperiences, datesDropdownExperiences);
openWindow(whoButtonExperiences, whoDropdownExperiences);

/*--------------------------------------------------------------------------------------------------------------------
--------------------------------------------------MINI FORM BUTTONS---------------------------------------------------
----------------------------------------------------------------------------------------------------------------------*/
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

/*--------------------------------------------------------------------------------------------------------------------
---------------------------------------------WHO FORM DROPDOWN WINDOW/FORM--------------------------------------------
----------------------------------------------------------------------------------------------------------------------*/
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

/*--------------------------------------------------------------------------------------------------------------------
----------------------------------------------CHECK IN/CHECK OUT CALENDAR---------------------------------------------
--------(this was very fun challenge but holy shit its finally (not)complete 1k+ lines of code for stupid calendar)--------*/

//  IT HAS MORE BUGS WILL DO THEM LATER IM FIGHTING WITH MATH (shadow bug when years selected is 2024 and >2024)
const calendar = document.getElementById("Calendar");
const calendar2 = document.getElementById("Calendar2");

var date = new Date();
var day = date.getDate();   // 1-31 days and then
var month = date.getMonth(); // WHY ITS FROM 0 TO 11 WHO HURT YOU
var year = date.getFullYear();
var currentMonth = date.getMonth();
var currentYear = date.getFullYear();

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const monthsAbbreviations = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

//  do. not. fking. touch. this. D O N O T. donut.
var startOfCurrentMonth = new Date(year, month, 0).getDay();
var endOfCurrentMonth = new Date(year, month + 1, 0).getDate();
var startOfNextMonth = new Date(year, month + 1, 0).getDay();
var endOfNextMonth = new Date(year, month + 2, 0).getDate();
var selectedCheckinDate = document.createElement(null);
var selectedCheckoutDate = document.createElement(null);
var selectedCheckinMonth = "";
var selectedCheckoutMonth = "";
var selectedCheckinYear = "";
var selectedCheckoutYear = "";
var rightButtonClicked = false;
var leftButtonClicked = false;
var nextMonth = "";
var nextYear = "";
const calendarShadowColor = "#f0f0f0";
const calendarShadowCheckinColor = "linear-gradient(to right, white 50%, #f0f0f0 50%)";
const calendarShadowCheckoutColor = "linear-gradient(to right, #f0f0f0 50%, white 50%)";
//  months calendar variables
const monthsCalendar = document.getElementById("MonthsCalendar");
const monthsCalendar2 = document.getElementById("MonthsCalendar2");
const monthsCalendar3 = document.getElementById("MonthsCalendar3");
const monthsCalendar4 = document.getElementById("MonthsCalendar4");
const startDate = new Date(year, month + 1, 1);
const endDate = new Date(year, month + 4, 1);
var selectedStartDate = document.createElement(null);
selectedStartDate.innerText = 1;
var selectedEndDate = document.createElement(null);
selectedEndDate.innerText = 1;
var selectedStartMonth = months[startDate.getMonth()];
var selectedEndMonth = months[endDate.getMonth()];
var selectedStartYear = startDate.getFullYear();
var selectedEndYear = endDate.getFullYear();

function keepShadowBetweenDates(month, x, td, div, checkinDate, checkoutDate, checkinMonth, checkoutMonth, checkinYear, checkoutYear)
{
    if (checkinDate != "" && checkoutDate != "")
    {
        if (x == +checkinDate.innerText && checkinMonth == months[month] && checkinYear == year)
        {
            td.style.background = calendarShadowCheckinColor;
        }

        if (x == +checkoutDate.innerText && checkoutMonth == months[month] && checkoutYear == nextYear)
        {
            td.style.background = calendarShadowCheckoutColor;
        }

        if (months.indexOf(months[month]) == months.indexOf(checkinMonth) 
        &&  months.indexOf(months[month]) == months.indexOf(checkoutMonth)
        &&  x > +checkinDate.innerText && x < +checkoutDate.innerText
        &&  checkoutYear == year && checkinYear == year)
        {
            td.style.background = calendarShadowColor;
            div.style.borderColor = calendarShadowColor; 
        }
        
        if (months.indexOf(months[month]) == months.indexOf(checkinMonth) 
        &&  months.indexOf(months[month]) != months.indexOf(checkoutMonth)
        &&  x > +checkinDate.innerText && checkoutYear == year && checkinYear == year)
        {
            td.style.background = calendarShadowColor;
            div.style.borderColor = calendarShadowColor;   
        }
        
        if (months.indexOf(months[month]) != months.indexOf(checkinMonth) 
        &&  months.indexOf(months[month]) == months.indexOf(checkoutMonth)
        &&  x < +checkoutDate.innerText && checkoutYear == year && checkinYear == year)
        {
            td.style.background = calendarShadowColor;
            div.style.borderColor = calendarShadowColor;   
        }
        
        if (months.indexOf(months[month]) > months.indexOf(checkinMonth)
        &&  months.indexOf(months[month]) < months.indexOf(checkoutMonth)
        &&  checkoutYear == year && checkinYear == year)
        {
            td.style.background = calendarShadowColor;
            div.style.borderColor = calendarShadowColor;  
        }

        if (months.indexOf(checkinMonth) == months.indexOf(months[month])
        &&  checkinYear != checkoutYear && x > +checkinDate.innerText && checkinYear == year)
        {
            td.style.background = calendarShadowColor;
            div.style.borderColor = calendarShadowColor;
        }
        else if (months.indexOf(checkinMonth) < months.indexOf(months[month])
             &&  checkinYear != checkoutYear && checkinYear == year)
        {
            td.style.background = calendarShadowColor;
            div.style.borderColor = calendarShadowColor; 
        }

        if (months.indexOf(checkoutMonth) == months.indexOf(months[month])
        &&  checkinYear != checkoutYear && x < +checkoutDate.innerText && checkoutYear == nextYear)
        {
            td.style.background = calendarShadowColor;
            div.style.borderColor = calendarShadowColor; 
        }
        else if (months.indexOf(checkoutMonth) > months.indexOf(months[month])
             &&  checkinYear != checkoutYear && checkoutYear == nextYear)
        {
            td.style.background = calendarShadowColor;
            div.style.borderColor = calendarShadowColor; 
        }

        if (year < checkoutYear && year > checkinYear || nextYear < checkoutYear && nextYear > checkinYear)
        {
            td.style.background = calendarShadowColor;
            div.style.borderColor = calendarShadowColor; 
        }
    }
}

function createCalendarMonth(calendarId, checkinDate, checkoutDate, checkinMonth, checkoutMonth, checkinYear, checkoutYear)
{
    var x = 0;
    var check = true;
    var addedCheckinDate = false;
    var addedCheckoutDate = false;

    if (rightButtonClicked == true)
    {
        month += 1;

        if (month >= 12)
        {
            month = 0;
        }
    }
    else if (leftButtonClicked == true)
    {
        month -= 1;

        if (month == -1)
        {
            month = 11
            year -= 1;
        }
    }

    if (month == 0 && nextMonth == 0)
    {
        year = nextYear;
    }

    startOfCurrentMonth = new Date(year, month, 0).getDay();
    endOfCurrentMonth = new Date(year, month + 1, 0).getDate();

    const monthNameDiv = document.createElement("div");
    monthNameDiv.className = "month_name";
    monthNameDiv.innerHTML = months[month] + ` ${year}`;
    calendarId.insertBefore(monthNameDiv, calendarId.children[0]);

    const table = document.createElement("table");
    const tbody = document.createElement("tbody");

    for (i = 0; i < 6; i++)
    {
        var tr = document.createElement("tr");
        for (j = 0; j < 7; j++)
        {
            while (j < startOfCurrentMonth && check == true)
            {
                var td = document.createElement("td");
                td.className = "td_box";

                var div = document.createElement("div");
                div.innerText = "";
                div.className = "blank_box";
                
                td.appendChild(div);
                tr.appendChild(td);
    
                j++;
            }
    
            check = false;
            x += 1;

            var td = document.createElement("td");
            var div = document.createElement("div");
    
            if (x < day && (month == currentMonth && year == currentYear))
            {
                td.className = "td_box";
                div.innerText = x;
                div.className = "box_past";
            }
            else
            {
                td.className = "td_box";

                if (x > endOfCurrentMonth)
                {
                    break;
                }
                else
                {
                    if ((calendarId == monthsCalendar || calendarId == monthsCalendar3) && x == +checkinDate.innerText && month == months.indexOf(checkinMonth) && year == checkinYear)
                    {
                        div.style.backgroundColor = "black";
                        div.style.color = "white";
                     
                        selectedStartDate = div;
                        selectedStartDate.innerText = x;
                    }
                    else if (checkinDate != "" && addedCheckinDate == false && x == +checkinDate.innerText 
                    &&  checkinMonth == months[month] && checkinYear == year)
                    {
                        div = checkinDate;
                        div.style.backgroundColor = "black";
                        div.style.color = "white";
                        addedCheckinDate = true;
                    }
                    else if (checkoutDate != "" && addedCheckoutDate == false && x == +checkoutDate.innerText 
                         &&  checkoutMonth == months[month] && checkoutYear == year)
                    {
                        div = checkoutDate;
                        div.style.backgroundColor = "black";
                        div.style.color = "white";
                        addedCheckoutDate = true;
                    }
                    else
                    {
                        div.innerText = x;
                    }
                }

                keepShadowBetweenDates(month, x, td, div, checkinDate, checkoutDate, checkinMonth, checkoutMonth, checkinYear, checkoutYear);
                div.className = "box";
            }
   
            td.appendChild(div);     
            tr.appendChild(td);
        }
    
        tbody.appendChild(tr);
        table.appendChild(tbody);
    }

    table.className = "nothing";
    calendarId.appendChild(table);
}

function createCalendarMonth2(calendarId, checkinDate, checkoutDate, checkinMonth, checkoutMonth, checkinYear, checkoutYear)
{
    nextMonth = month + 1;
    nextYear = year;
    var x = 0;
    var check = true;
    var addedCheckinDate = false;
    var addedCheckoutDate = false;

    if (nextMonth == 12)
    {
        nextMonth = 0;

        if (month == 11 && nextMonth == 0)
        {
            nextYear += 1;
        }
    }

    startOfNextMonth = new Date(nextYear, nextMonth, 0).getDay();
    endOfNextMonth = new Date(nextYear, nextMonth + 1, 0).getDate();

    const monthNameDiv = document.createElement("div");
    monthNameDiv.className = "month_name";
    monthNameDiv.innerHTML = months[nextMonth] + ` ${nextYear}`;
    calendarId.insertBefore(monthNameDiv, calendarId.children[0]);

    const table = document.createElement("table");
    const tbody = document.createElement("tbody");

    for (i = 0; i < 6; i++)
    {
        var tr = document.createElement("tr");
        for (j = 0; j < 7; j++)
        {
            while (j < startOfNextMonth && check == true)
            {
                var td = document.createElement("td");
                td.className = "td_box";

                var div = document.createElement("div");
                div.innerText = "";
                div.className = "blank_box";

                td.appendChild(div);
                tr.appendChild(td);
    
                j++;
            }
    
            check = false;
            x += 1;
    
            var td = document.createElement("td");
            var div = document.createElement("div");

            td.className = "td_box";

            if (x > endOfNextMonth)
            {
                break;
            }
            else
            {
                if ((calendarId == monthsCalendar2 || calendarId == monthsCalendar4) && x == +checkoutDate.innerText && nextMonth == months.indexOf(checkoutMonth) && nextYear == checkoutYear)
                {
                    div.style.backgroundColor = "black";
                    div.style.color = "white";

                    selectedEndDate = div;
                    selectedEndDate.innerText = x;
                }
                else if (checkinDate != "" && addedCheckinDate == false && x == checkinDate.innerText 
                &&  checkinMonth == months[nextMonth] && checkinYear == nextYear)
                {
                    div = checkinDate;
                    div.style.backgroundColor = "black";
                    div.style.color = "white";
                    addedCheckinDate = true;
                }
                else if (checkoutDate != "" && addedCheckoutDate == false && x == checkoutDate.innerText 
                     &&  checkoutMonth == months[nextMonth] && checkoutYear == nextYear)
                {
                    div = checkoutDate;
                    div.style.backgroundColor = "black";
                    div.style.color = "white";
                    addedCheckoutDate = true;
                }
                else
                {
                    div.innerText = x;  
                }
            }

            keepShadowBetweenDates(nextMonth, x, td, div, checkinDate, checkoutDate, checkinMonth, checkoutMonth, checkinYear, checkoutYear);
    
            div.className = "box";
            td.appendChild(div);
            tr.appendChild(td);
        }
    
        tbody.appendChild(tr);
        table.appendChild(tbody);
    }

    table.className = "nothing";
    calendarId.appendChild(table);
}

createCalendarMonth(calendar, selectedCheckinDate, selectedCheckoutDate, selectedCheckinMonth, selectedCheckoutMonth, selectedCheckinYear, selectedCheckoutYear);
createCalendarMonth2(calendar2, selectedCheckinDate, selectedCheckoutDate, selectedCheckinMonth, selectedCheckoutMonth, selectedCheckinYear, selectedCheckoutYear);

//  -------------------- MOVING CALENDARS LEFT/RIGHT --------------------
const moveCalendarLeft = document.getElementById("MoveCalendarsLeft");
const moveCalendarRight = document.getElementById("MoveCalendarsRight");
const datesButton = document.getElementById("DatesButton");

function moveCalendarsLeft(moveButton, firstCalendar, secondCalendar)
{
    if (moveButton.style.cursor == "pointer")
    {
        const monthNames = document.querySelectorAll(".month_name");
        const tables = document.querySelectorAll(".nothing");
    
        monthNames.forEach(function(e)
        {
            e.remove();
        });
    
        tables.forEach(function(e)
        {
            e.remove();
        });
    
        leftButtonClicked = true;
    
        createCalendarMonth(firstCalendar, selectedCheckinDate, selectedCheckoutDate, selectedCheckinMonth, selectedCheckoutMonth, selectedCheckinYear, selectedCheckoutYear);
        createCalendarMonth2(secondCalendar, selectedCheckinDate, selectedCheckoutDate, selectedCheckinMonth, selectedCheckoutMonth, selectedCheckinYear, selectedCheckoutYear); 
    
        leftButtonClicked = false;
    
        if (month == currentMonth && year == currentYear)
        {
            moveButton.style.cursor = "not-allowed";
            moveButton.style.color = "#dcdcdc";
            moveButton.style.background = "none";
        }
    } 
}

function moveCalendarsRight(moveButton, leftButton, firstCalendar, secondCalendar)
{
    if (moveButton.style.cursor == "pointer")
    {
        const monthNames = document.querySelectorAll(".month_name");
        const tables = document.querySelectorAll(".nothing");
    
        monthNames.forEach(function(e)
        {
            e.remove();
        });
    
        tables.forEach(function(e)
        {
            e.remove();
        });
    
        rightButtonClicked = true;
    
        createCalendarMonth(firstCalendar, selectedCheckinDate, selectedCheckoutDate, selectedCheckinMonth, selectedCheckoutMonth, selectedCheckinYear, selectedCheckoutYear);
        createCalendarMonth2(secondCalendar, selectedCheckinDate, selectedCheckoutDate, selectedCheckinMonth, selectedCheckoutMonth, selectedCheckinYear, selectedCheckoutYear);
    
        rightButtonClicked = false;
        
        if (month > currentMonth && year >= currentYear)
        {
            leftButton.style.cursor = "pointer";
            leftButton.style.color = "";
            leftButton.style.background = "";
        }
    } 
}

moveCalendarLeft.onclick = function()
{
    moveCalendarsLeft(moveCalendarLeft, calendar, calendar2);
}

moveCalendarRight.onclick = function()
{
    moveCalendarsRight(moveCalendarRight, moveCalendarLeft, calendar, calendar2);
}

//  ------------------------ CALENDAR FORM INPUT ------------------------
const checkinFormInput = document.getElementById("CheckinInput");
const checkoutFormInput = document.getElementById("CheckoutInput");
const clearCalendarFormInputButton = document.getElementById("ClearCalendarFormInputsButton");
const imstupidsvg = document.getElementById("ClearCalendarFormInputsButtonSVG");
const imstupidpath = document.getElementById("ClearCalendarFormInputsButtonPATH");
const getStupidCalendarDates = document.getElementById("DatesCalendars");

function calendarValidationCSS(firstCalendar, secondCalendar, checkinDate, checkoutDate)
{
    removeMonthsShadows(firstCalendar, secondCalendar, checkinDate, checkoutDate);

    selectedCheckinDate.style.background = "";
    selectedCheckinDate.style.color = "";
    selectedCheckoutDate.style.background = "";
    selectedCheckoutDate.style.color = "";

    if (checkinButton.style.backgroundColor == "white")
    {
    }
    else
    {
        checkinFormInput.value = checkoutFormInput.value;
        selectedCheckinDate = selectedCheckoutDate;
        selectedCheckinMonth = selectedCheckoutMonth;
        selectedCheckinYear = selectedCheckoutYear;
    }

    selectedCheckinDate.style.background = "black";
    selectedCheckinDate.style.color = "white";

    selectedCheckoutDate = document.createElement(null);
    checkoutFormInput.value = "";
}

getStupidCalendarDates.onclick = function(e)
{
    if (e.target.children.length == 0 && e.target.className == "box" || e.target.className == "box box_new_hover")
    {
        //  check what calendar is clicked and pick date and assign month to the correct form
        if (e.target.parentElement.parentElement.parentElement.parentElement.parentNode.contains(calendar))
        {
            if (checkinButton.style.backgroundColor == "white")
            {
                if (calendarExactDatesButton.style.backgroundColor == "rgb(240, 240, 240)")
                {
                    checkinFormInput.value = e.target.innerText + " " + monthsAbbreviations[months.indexOf(calendar.childNodes[1].innerText.slice(0, -5))] + " " + calendar.childNodes[1].innerText.slice(-4);
                }
                else
                {
                    checkinFormInput.value = e.target.innerText + " " + monthsAbbreviations[months.indexOf(calendar.childNodes[1].innerText.slice(0, -5))] + " " + calendar.childNodes[1].innerText.slice(-4) + pmText;
                }    
            }
            else if (checkoutButton.style.backgroundColor == "white")
            {
                if (calendarExactDatesButton.style.backgroundColor == "rgb(240, 240, 240)")
                {
                    checkoutFormInput.value = e.target.innerText + " " + monthsAbbreviations[months.indexOf(calendar.childNodes[1].innerText.slice(0, -5))] + " " + calendar.childNodes[1].innerText.slice(-4);
                }
                else
                {
                    checkoutFormInput.value = e.target.innerText + " " + monthsAbbreviations[months.indexOf(calendar.childNodes[1].innerText.slice(0, -5))] + " " + calendar.childNodes[1].innerText.slice(-4) + pmText;
                }
            }        
        }
        else if (e.target.parentElement.parentElement.parentElement.parentElement.parentNode.contains(calendar2))
        {
            if (checkinButton.style.backgroundColor == "white")
            {
                if (calendarExactDatesButton.style.backgroundColor == "rgb(240, 240, 240)")
                {
                    checkinFormInput.value = e.target.innerText + " " + monthsAbbreviations[months.indexOf(calendar2.childNodes[1].innerText.slice(0, -5))] + " " + calendar2.childNodes[1].innerText.slice(-4);
                }
                else
                {
                    checkinFormInput.value = e.target.innerText + " " + monthsAbbreviations[months.indexOf(calendar2.childNodes[1].innerText.slice(0, -5))] + " " + calendar2.childNodes[1].innerText.slice(-4) + pmText;
                }
            }
            else if (checkoutButton.style.backgroundColor == "white")
            {
                if (calendarExactDatesButton.style.backgroundColor == "rgb(240, 240, 240)")
                {
                    checkoutFormInput.value = e.target.innerText + " " + monthsAbbreviations[months.indexOf(calendar2.childNodes[1].innerText.slice(0, -5))] + " " + calendar2.childNodes[1].innerText.slice(-4); 
                }
                else
                {
                    checkoutFormInput.value = e.target.innerText + " " + monthsAbbreviations[months.indexOf(calendar2.childNodes[1].innerText.slice(0, -5))] + " " + calendar2.childNodes[1].innerText.slice(-4) + pmText;
                } 
            }
        }

        //  reset feedback
        if (selectedCheckinDate.tagName != "NULL" && checkinButton.style.backgroundColor == "white")
        {
            selectedCheckinDate.style.background = "";
            selectedCheckinDate.style.color = "";

            removeMonthsShadows(calendar, calendar2, selectedCheckinDate, selectedCheckoutDate);
            selectedCheckinDate = document.createElement(null);     
        }
        else if (selectedCheckoutDate.tagName != "NULL" && checkoutButton.style.backgroundColor == "white")
        {
            selectedCheckoutDate.style.background = "";
            selectedCheckoutDate.style.color = "";

            removeMonthsShadows(calendar, calendar2, selectedCheckinDate, selectedCheckoutDate);
            selectedCheckoutDate = document.createElement(null); 
        }

        //  apply feedback
        if (selectedCheckinDate.tagName == "NULL" && checkinButton.style.backgroundColor == "white")
        {
            selectedCheckinDate = e.target;
            selectedCheckinDate.style.background = "black";
            selectedCheckinDate.style.color = "white";
            selectedCheckinMonth = selectedCheckinDate.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[1].innerText.slice(0, -5);
            selectedCheckinYear = +selectedCheckinDate.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[1].innerText.slice(-4);

           correctMonthsDatesShadow(calendar, calendar2, selectedCheckinDate, selectedCheckoutDate);
        }
        else if (selectedCheckoutDate.tagName == "NULL" && checkoutButton.style.backgroundColor == "white")
        {
            selectedCheckoutDate = e.target;
            selectedCheckoutDate.style.background = "black";
            selectedCheckoutDate.style.color = "white";
            selectedCheckoutMonth = selectedCheckoutDate.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[1].innerText.slice(0 ,-5);
            selectedCheckoutYear = +selectedCheckoutDate.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[1].innerText.slice(-4);

            correctMonthsDatesShadow(calendar, calendar2, selectedCheckinDate, selectedCheckoutDate);
        }

        //  validation
        if ((+selectedCheckinDate.innerText > +selectedCheckoutDate.innerText) 
        &&  (selectedCheckinMonth == selectedCheckoutMonth) && (selectedCheckinYear == selectedCheckoutYear)
        &&  (selectedCheckinDate.tagName != "NULL" && selectedCheckoutDate.tagName != "NULL"))
        {
             calendarValidationCSS(calendar, calendar2, selectedCheckinDate, selectedCheckoutDate);
        }
        else if (months.indexOf(selectedCheckinMonth) > months.indexOf(selectedCheckoutMonth)
             &&  (selectedCheckinYear == selectedCheckoutYear ) && (checkinFormInput.value != "" && checkoutFormInput.value != ""))
        {
            calendarValidationCSS(calendar, calendar2, selectedCheckinDate, selectedCheckoutDate);
        }
        else if ((selectedCheckinYear > selectedCheckoutYear) && (checkinFormInput.value != "" && checkoutFormInput.value != ""))
        {
            calendarValidationCSS(calendar, calendar2, selectedCheckinDate, selectedCheckoutDate);
        }

        if (checkinFormInput.value != "" && checkoutFormInput.value != "")
        {
            clearCalendarFormInputButton.style.display = "block";
        }

        //  QoL swap
        if (checkinFormInput.value != "" && checkoutFormInput.value == "")
        {
            onClickButtonUnfocus(checkinButton);
            onClickButtonFocus(checkoutButton);
        }
        if (checkinFormInput.value == "" && checkoutFormInput.value != "")
        {
            onClickButtonUnfocus(checkoutButton);
            onClickButtonFocus(checkinButton);
        }
    }
}

clearCalendarFormInputButton.onclick = function()
{
    checkinFormInput.value = "";
    checkoutFormInput.value = "";

    removeMonthsShadows(calendar, calendar2, selectedCheckinDate, selectedCheckoutDate);

    selectedCheckinDate.style.background = "";
    selectedCheckinDate.style.color = "";
    selectedCheckoutDate.style.background = "";
    selectedCheckoutDate.style.color = "";
    selectedCheckinDate = document.createElement(null);
    selectedCheckoutDate = document.createElement(null);

    clearCalendarFormInputButton.style.display = "none";
    
    onClickButtonUnfocus(checkoutButton);
    onClickButtonFocus(checkinButton);
}

function applyShadowBetweenDates(currentCalendar, target, checkinDate, checkoutDate, checkinMonth, checkoutMonth, checkinYear, checkoutYear)
{
    var targetMonth = months.indexOf(target.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[1].innerText.slice(0, -5));
    var targetYear = target.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[1].innerText.slice(-4);
    var otherCalendar = ""

    if (checkinDate.tagName != "NULL")
    {
        otherCalendar = checkinDate.parentElement.parentElement.parentElement.parentElement.parentElement;

        if (currentCalendar == calendar2)
        {
            otherCalendar = calendar;
        }
    }
    else if (checkoutDate.tagName != "NULL")
    {
        otherCalendar = checkoutDate.parentElement.parentElement.parentElement.parentElement.parentElement;

        if (currentCalendar == calendar)
        {
            otherCalendar = calendar2;
        }
    }

    for (i = 0; i < 6; i++)
    {
        for (j = 0; j < 7; j++)
        {
            loop:
            try
            {
                try 
                {
                    var divBox = currentCalendar.childNodes[4].childNodes[0].childNodes[i].childNodes[j].childNodes[0];
                    var tdBox = currentCalendar.childNodes[4].childNodes[0].childNodes[i].childNodes[j];
                }catch{} //  i hate you from the bottom of my heart 

                try
                {
                    var divBox2 = otherCalendar.childNodes[4].childNodes[0].childNodes[i].childNodes[j].childNodes[0];
                    var tdBox2 = otherCalendar.childNodes[4].childNodes[0].childNodes[i].childNodes[j];
                }catch{} //  i swear to fucking god this is getting so annoying i fucking hate this try catch bullshit AAAAAAAAAAAAAAAAAAA

                //  IF ITS SAME MONTH SAME YEAR
                if ((checkinDate.tagName != "NULL" && months.indexOf(checkinMonth) == targetMonth) && checkinYear == targetYear
                ||  (checkoutDate.tagName != "NULL" && months.indexOf(checkoutMonth) == targetMonth) && checkoutYear == targetYear) 
                {
                    if ((+divBox.innerText < +target.innerText && +divBox.innerText >= +checkinDate.innerText && checkinDate.innerText != "")
                    ||  (+divBox.innerText > +target.innerText && +divBox.innerText <= +checkoutDate.innerText && checkoutDate.innerText != ""))
                    {
                        if (divBox.innerText == +checkoutDate.innerText && checkoutDate.innerText != "")
                        {
                            //  checkin date selected
                            tdBox.style.background = calendarShadowCheckoutColor;
                        }
                        else if (+divBox.innerText == +checkinDate.innerText && checkinDate.innerText != "") 
                        {
                            //  checkout date selected
                            tdBox.style.background = calendarShadowCheckinColor;
                        }
                        else
                        {
                            //  fill everything between checkin and checkout dates
                            tdBox.style.background = calendarShadowColor;
                            divBox.style.borderColor = calendarShadowColor;
                        }
                    }
                    else if (+divBox.innerText == +target.innerText)
                    {
                        //  apply css to checkout/checkin date whichever is the target one
                        if (checkinDate.tagName != "NULL")
                        {
                            tdBox.style.background = calendarShadowCheckoutColor;
                        }
                        else if (checkoutDate.tagName != "NULL")
                        {
                            tdBox.style.background = calendarShadowCheckinColor;
                        }
                    }
                }
                //  IF ITS DIFFERENT MONTH SAME YEAR
                else if ((checkinDate.tagName != "NULL" && months.indexOf(checkinMonth) < targetMonth) && checkinYear == targetYear
                     ||  (checkoutDate.tagName != "NULL" && months.indexOf(checkoutMonth) > targetMonth) && checkoutYear == targetYear)
                {
                    try 
                    {
                        //  it is first selected date is checkin and target is on different calendar
                        if (checkinDate.parentElement.parentElement.parentElement.parentElement.parentElement != currentCalendar)
                        {
                            if (divBox2.innerText == +checkoutDate.innerText && checkoutDate.innerText != "")
                            {
                                tdBox2.style.background = calendarShadowCheckoutColor;
                            }
                            else if (+divBox2.innerText == +checkinDate.innerText && checkinDate.innerText != "") 
                            {
                                tdBox2.style.background = calendarShadowCheckinColor;
                            }

                            if (+checkinDate.innerText < +divBox2.innerText && +divBox2.innerText <= endOfCurrentMonth)
                            {
                                tdBox2.style.background = calendarShadowColor;
                                divBox2.style.borderColor = calendarShadowColor;
                            }

                            //  filling empty calendar between checkin and checkout calendars
                            if (checkinDate.parentElement.parentElement.parentElement.parentElement.parentElement != calendar
                            &&  divBox2.innerText != "")
                            {
                                tdBox2.style.background = calendarShadowColor;
                                divBox2.style.borderColor = calendarShadowColor;
                            }
                        }
                    }catch{} //  i hate you i hope you step on a lego
                        
                    try
                    {
                        //  it is first selected date is checkout and target is on different calendar
                        if (checkoutDate.parentElement.parentElement.parentElement.parentElement.parentElement != currentCalendar)
                        {
                            if (divBox2.innerText == +checkinDate.innerText && checkinDate.innerText != "")
                            {
                                tdBox2.style.background = calendarShadowCheckinColor;
                            }
                            else if (+divBox2.innerText == +checkoutDate.innerText && checkoutDate.innerText != "") 
                            {
                                tdBox2.style.background = calendarShadowCheckoutColor;
                            }

                            if (+checkoutDate.innerText > +divBox2.innerText && divBox2.innerText != "")
                            {
                                tdBox2.style.background = calendarShadowColor;
                                divBox2.style.borderColor = calendarShadowColor;
                            }

                            //  filling empty calendar between checkin and checkout calendars
                            if (checkoutDate.parentElement.parentElement.parentElement.parentElement.parentElement != calendar2
                            &&  divBox2.innerText != "")
                            {
                                tdBox2.style.background = calendarShadowColor;
                                divBox2.style.borderColor = calendarShadowColor;
                            }
                        }
                    }catch{} //  I HATE YOU IDIOT

                    //  it is second selected date and it changes whenever the target is
                    if ((+divBox.innerText <= +target.innerText && checkinDate.tagName != "NULL")
                    ||  (+divBox.innerText >= +target.innerText && checkoutDate.tagName != "NULL"))
                    {
                        if (+target.innerText > +divBox.innerText && checkinDate.tagName != "NULL" && divBox.innerText != "")
                        {
                            tdBox.style.background = calendarShadowColor;
                            divBox.style.borderColor = calendarShadowColor;
                        }
                        else if (+target.innerText < +divBox.innerText && checkoutDate.tagName != "NULL" && divBox.innerText != "")
                        {
                            tdBox.style.background = calendarShadowColor;
                            divBox.style.borderColor = calendarShadowColor;
                        }
                        else if (+divBox.innerText == +target.innerText)
                        {
                            if (checkinDate.tagName != "NULL")
                            {
                                tdBox.style.background = calendarShadowCheckoutColor;
                            }
                            else if (checkoutDate.tagName != "NULL")
                            {
                                tdBox.style.background = calendarShadowCheckinColor;
                            }
                        }
                    }
                }
                //  IF ITS DIFFERENT YEARS
                else if ((checkinDate.tagName != "NULL") && checkinYear != targetYear
                     ||  (checkoutDate.tagName != "NULL") && checkoutYear != targetYear)
                {
                    try
                    {
                        if (checkinYear != "" && checkinYear < +targetYear)
                        {
                            if (checkinDate.parentElement.parentElement.parentElement.parentElement.parentElement == null
                            &&  divBox2.innerText != "")
                            {
                                tdBox2.style.background = calendarShadowColor;
                                divBox2.style.borderColor = calendarShadowColor;
                            }
                            else if (checkinDate.parentElement.parentElement.parentElement.parentElement.parentElement != calendar2
                            &&  divBox2.innerText != "" && +divBox2.innerText >= +checkinDate.innerText)
                            {
                                if (+divBox2.innerText == +checkinDate.innerText && checkinDate.innerText != "")
                                {
                                    tdBox2.style.background = calendarShadowCheckinColor;
                                }
                                else 
                                {
                                    tdBox2.style.background = calendarShadowColor;
                                    divBox2.style.borderColor = calendarShadowColor;
                                }
                            }
                        }                        
                    }catch{} // just... heck yourself...

                    try
                    {
                        if (checkoutYear != "" && checkoutYear > +targetYear)
                        {
                            if (checkoutDate.parentElement.parentElement.parentElement.parentElement.parentElement == null
                            &&  divBox2.innerText != "")
                            {
                                tdBox2.style.background = calendarShadowColor;
                                divBox2.style.borderColor = calendarShadowColor;
                            }
                            else if (checkoutDate.parentElement.parentElement.parentElement.parentElement.parentElement != calendar
                            &&  divBox2.innerText != "" && +divBox2.innerText <= +checkoutDate.innerText)
                            {
                                if (+divBox2.innerText == +checkoutDate.innerText && checkoutDate.innerText != "")
                                {
                                    tdBox2.style.background = calendarShadowCheckoutColor;
                                }
                                else
                                {
                                    tdBox2.style.background = calendarShadowColor;
                                    divBox2.style.borderColor = calendarShadowColor;
                                }
                            }
                        }
                    }catch{} // at this point im just going to do this here too... even if there are none or i didnt found any
                    
                    
                    if ((+divBox.innerText <= +target.innerText && checkinDate.tagName != "NULL")
                    ||  (+divBox.innerText >= +target.innerText && checkoutDate.tagName != "NULL"))
                    {
                        if (+target.innerText > +divBox.innerText && checkinDate.tagName != "NULL" && divBox.innerText != "")
                        {
                            tdBox.style.background = calendarShadowColor;
                            divBox.style.borderColor = calendarShadowColor;
                        }
                        else if (+target.innerText < +divBox.innerText && checkoutDate.tagName != "NULL" && divBox.innerText != "")
                        {
                            tdBox.style.background = calendarShadowColor;
                            divBox.style.borderColor = calendarShadowColor;
                        }
                        else if (+divBox.innerText == +target.innerText)
                        {
                            if (checkinDate.tagName != "NULL")
                            {
                                tdBox.style.background = calendarShadowCheckoutColor;
                            }
                            else if (checkoutDate.tagName != "NULL")
                            {
                                tdBox.style.background = calendarShadowCheckinColor;
                            }
                        }
                    }
                }
            }
            catch{} //  your mom  
        }
    }
}

function calendarAddShadow(e, calendar, checkinDate, checkoutDate, checkinMonth, checkoutMonth, checkinYear, checkoutYear)
{ 
    if ((checkinDate.tagName == "NULL" || checkoutDate.tagName == "NULL") && e.target.children.length == 0 && e.target.className == "box")
    {
        e.target.classList.add("box_new_hover");
    
        if (checkinDate.tagName == "NULL" || checkoutDate.tagName == "NULL")
        {
            applyShadowBetweenDates(calendar, e.target, checkinDate, checkoutDate, checkinMonth, checkoutMonth, checkinYear, checkoutYear);
        }
    }
}

function calendarRemoveShadow(e, firstCalendar, secondCalendar, checkinDate, checkoutDate)
{
    if (((checkinDate.tagName == "NULL" || checkoutDate.tagName == "NULL") || checkoutDate.tagName != "NULL") && e.target.children.length == 0 && e.target.className == "box box_new_hover")
    {   
        e.target.classList.remove("box_new_hover");

        if (checkinDate.tagName == "NULL" || checkoutDate.tagName == "NULL")
        {
            removeMonthsShadows(firstCalendar, secondCalendar, selectedCheckinDate, selectedCheckoutDate);
        }
    }
}

calendar.addEventListener("mouseover", function(e)
{
    calendarAddShadow(e, calendar, selectedCheckinDate, selectedCheckoutDate, selectedCheckinMonth, selectedCheckoutMonth, selectedCheckinYear, selectedCheckoutYear);
})

calendar.addEventListener("mouseout", function(e)
{
    calendarRemoveShadow(e, calendar, calendar2, selectedCheckinDate, selectedCheckoutDate);
})

calendar2.addEventListener("mouseover", function(e)
{
    calendarAddShadow(e, calendar2, selectedCheckinDate, selectedCheckoutDate, selectedCheckinMonth, selectedCheckoutMonth, selectedCheckinYear, selectedCheckoutYear);
})

calendar2.addEventListener("mouseout", function(e)
{
    calendarRemoveShadow(e, calendar, calendar2, selectedCheckinDate, selectedCheckoutDate);
})

//  ------------------------ (+-) DATES OPTIONS BUTTONS ------------------------
//  PM stands for Pure Memory coz im arcaea player and this is the only acceptable acronym even tho it means Plus Minus here.....
const calendarExactDatesButton = document.getElementById("CalendarExactDatesButton");
const calendarPM1Button = document.getElementById("CalendarPM1Button");
const calendarPM2Button = document.getElementById("CalendarPM2Button");
const calendarPM3Button = document.getElementById("CalendarPM3Button");
const calendarPM7Button = document.getElementById("CalendarPM7Button");
const calendarPM14Button = document.getElementById("CalendarPM14Button");
var previousElementCalendarPMButton = "";
var pmText = "";
var tembobaryChonkinBalue = "";
var tembobaryChonkoutBalue = "";
calendarExactDatesButton.style.borderColor = "black";
calendarExactDatesButton.style.background = "#f0f0f0";
previousElementCalendarPMButton = calendarExactDatesButton;
var pmArray = [" ±1", " ±2", " ±3", " ±7", " ±14"];

function SWAPEM(tembobaryBalue)
{
    for (i = 0; i < pmArray.length; i++)
    {
        if (tembobaryBalue.includes(pmArray[i]))
        {
            tembobaryBalue = tembobaryBalue.replace(pmArray[i], "");
        }
    }

    return tembobaryBalue;
}

function addPMAmount(input, element)
{
    previousElementCalendarPMButton.style.borderColor = "";
    previousElementCalendarPMButton.style.background = "";
    element.style.borderColor = "black";
    element.style.background = "#f0f0f0";
    pmText = ` ${input}`;

    if (pmText != "")
    {
        pmText = "";
        pmText = ` ${input}`;
    }
    
    if (tembobaryChonkinBalue != "")
    {
        checkinFormInput.value = tembobaryChonkinBalue;
    }
    if (tembobaryChonkoutBalue != "")
    {
        checkoutFormInput.value = tembobaryChonkoutBalue;
    }

    if (checkinFormInput.value != "")
    {
        tembobaryChonkinBalue = checkinFormInput.value;

        tembobaryChonkinBalue = SWAPEM(tembobaryChonkinBalue);

        checkinFormInput.value = `${tembobaryChonkinBalue}${pmText}` 
    }
    if (checkoutFormInput.value != "")
    {
        tembobaryChonkoutBalue = checkoutFormInput.value;

        tembobaryChonkoutBalue = SWAPEM(tembobaryChonkoutBalue);

        checkoutFormInput.value = `${tembobaryChonkoutBalue}${pmText}` 
    }

    previousElementCalendarPMButton = element;
}

calendarExactDatesButton.onclick = function(e)
{
    addPMAmount("", e.target);
}

calendarPM1Button.onclick = function(e)
{
    addPMAmount("±1", e.target);
}

calendarPM2Button.onclick = function(e)
{
    addPMAmount("±2", e.target);
}

calendarPM3Button.onclick = function(e)
{
    addPMAmount("±3", e.target);
}

calendarPM7Button.onclick = function(e)
{
    addPMAmount("±7", e.target);
}

calendarPM14Button.onclick = function(e)
{
    addPMAmount("±14", e.target);
}

/*--------------------------------------------------------------------------------------------------------------------
---------------------------------------------CIRCLE OF DEATH AND SUFFERING--------------------------------------------
----------------------------------------------------------------------------------------------------------------------*/
//  https://www.w3schools.com/graphics/svg_path.asp
//    ^Y
//    |    
//    ----> X
const draggableCircle = document.getElementById("DraggableCircle");
const monthsCircleSVG = document.getElementById("MonthsCircleSVG");
const monthsCircle = document.getElementById("MonthsCircle");
const monthNumber = document.getElementById("MonthsNumber");
const whenStartDate = document.getElementById("WhenStartDate");
const whenEndDate = document.getElementById("WhenEndDate");
const whenInput = document.getElementById("WhenInput");
var degrees = "";
var startDateValue = "";
var endDateValue = "";

function setWhenValues(dateStart, dateEnd, month, number)
{
    monthNumber.innerText = month;

    var s = new Date(dateStart);
    var e = new Date(dateStart);

    e.setMonth(e.getMonth() + number)

    //whenInput.value = `${dateStart.getDate()} ${monthsAbbreviations[dateStart.getMonth()]} ${currentYear} - ${dateEnd.getDate()} ${monthsAbbreviations[endDate.getMonth()]} ${dateEnd.getFullYear()}`;
    //if (selectedStartDate.innerText > s.getDate())
    //{
    //    whenStartDate.innerText = `${selectedStartDate.innerText} ${monthsAbbreviations[s.getMonth()]} ${s.getFullYear()}`;
    //}
    //else
    //{
    //    whenStartDate.innerText = `${s.getDate()} ${monthsAbbreviations[s.getMonth()]} ${s.getFullYear()}`;
    //}

    //if(selectedEndDate.innerText > e.getDate())
    //{
    //    whenEndDate.innerText = `${selectedEndDate.innerText} ${monthsAbbreviations[e.getMonth()]} ${e.getFullYear()}`;  
    //}
    //else
    //{
    //    whenEndDate.innerText = `${e.getDate()} ${monthsAbbreviations[e.getMonth()]} ${e.getFullYear()}`;
    //}
    whenEndDate.innerText = `${e.getDate()} ${monthsAbbreviations[e.getMonth()]} ${e.getFullYear()}`;
    whenStartDate.innerText = `${s.getDate()} ${monthsAbbreviations[s.getMonth()]} ${s.getFullYear()}`;
    //startDateValue = whenStartDate.innerText;
    //endDateValue = whenEndDate.innerText;

    selectedEndMonth = months[e.getMonth()];
    selectedEndYear = e.getFullYear();
}

if (whenInput.value == "")
{
    //setWhenValues(startDate, endDate, "3 Months", 3)
}

function dragCircleCSS()
{
    draggableCircle.onmouseup = function()
    {
        draggableCircle.style.cursor = "grab";
    }

    draggableCircle.onmousedown = function()
    {
        draggableCircle.style.cursor = "grabbing";
        document.body.style.cursor = "grabbing";
        document.body.style.userSelect = "none";
    }

    document.onmouseup = function()
    {
        document.body.style.cursor = "default";
        draggableCircle.style.cursor = "grab";

        //  snap to middle point of chosen month
        switch (true)
        {
            case degrees > -75 && degrees < -45:
                draggableCircle.style.cy = `49.4263px`;
                draggableCircle.style.cx = `247.5px`;
                break;
            case degrees > -45 && degrees < -15:
                draggableCircle.style.cy = `102.5px`;
                draggableCircle.style.cx = `300.5736px`;
                break;
            case degrees > -15 && degrees < 15:
                draggableCircle.style.cy = `175px`;
                draggableCircle.style.cx = `320px`;
                break;
            case degrees > 15 && degrees < 45:
                draggableCircle.style.cy = `247.5px`;
                draggableCircle.style.cx = `300.5736px`;
                break;
            case degrees > 45 && degrees < 75:
                draggableCircle.style.cy = `300.5736px`;
                draggableCircle.style.cx = `247.5px`;
                break;
            case degrees > 75 && degrees < 105:
                draggableCircle.style.cy = `320px`;
                draggableCircle.style.cx = `175px`;
                break;
            case degrees > 105 && degrees < 135:
                draggableCircle.style.cy = `300.5736px`;
                draggableCircle.style.cx = `102.5px`;
                break;
            case degrees > 135 && degrees < 165:
                draggableCircle.style.cy = `247.5px`;
                draggableCircle.style.cx = `49.4263px`;
                break;
            case degrees < -165 || degrees > 165:
                draggableCircle.style.cy = `175px`;
                draggableCircle.style.cx = `30px`;
                break;
            case degrees > -165 && degrees < -135:
                draggableCircle.style.cy = `102.5px`;
                draggableCircle.style.cx = `49.4263px`;
                break;
            case degrees > -135 && degrees < -105:
                draggableCircle.style.cy = `49.4263px`;
                draggableCircle.style.cx = `102.5px`;
                break;
            case degrees > -105 && degrees < -75:
                draggableCircle.style.cy = `30px`;
                draggableCircle.style.cx = `175px`;
                break;
        }
    }
}

function moveCircle()
{
    document.onmousemove = function(e)
    {
        if (document.body.style.cursor == "grabbing")
        {
            let posY = e.clientY;
            let posX = e.clientX;
            const centreSVGTop = parseInt(monthsCircleSVG.style.height) / 2;
            const centreSVGLeft = parseInt(monthsCircleSVG.style.width) / 2;

            const absoluteTop = monthsCircle.getBoundingClientRect().top;
            const absoluteLeft = monthsCircle.getBoundingClientRect().left;
            const monthsCircleRadius = monthsCircle.getBoundingClientRect().width / 2;

            let relativeMouseY = posY - absoluteTop - monthsCircleRadius;
            let relativeMouseX = posX - absoluteLeft - monthsCircleRadius;

            let angle = Math.atan2(relativeMouseY / monthsCircleRadius, relativeMouseX / monthsCircleRadius);
            let newY = centreSVGTop + Math.sin(angle) * monthsCircleRadius;
            let newX = centreSVGLeft + Math.cos(angle) * monthsCircleRadius;
           
            if (absoluteLeft == 0)
            {
            }
            else
            {
                draggableCircle.style.cy = `${newY}`;
                draggableCircle.style.cx = `${newX}`;
                degrees = angle * (180/Math.PI);
            }

            switch (true)
            {
                case degrees > -75 && degrees < -45:
                    setWhenValues(startDate, endDate, "1 Month", 1);
                    break;
                case degrees > -45 && degrees < -15:
                    setWhenValues(startDate, endDate, "2 Months", 2);
                    break;
                case degrees > -15 && degrees < 15:
                    setWhenValues(startDate, endDate, "3 Months", 3);
                    break;
                case degrees > 15 && degrees < 45:
                    setWhenValues(startDate, endDate, "4 Months", 4);
                    break;
                case degrees > 45 && degrees < 75:
                    setWhenValues(startDate, endDate, "5 Months", 5);
                    break;
                case degrees > 75 && degrees < 105:
                    setWhenValues(startDate, endDate, "6 Months", 6);
                    break;
                case degrees > 105 && degrees < 135:
                    setWhenValues(startDate, endDate, "7 Months", 7);
                    break;
                case degrees > 135 && degrees < 165:
                    setWhenValues(startDate, endDate, "8 Months", 8);
                    break;
                case degrees < -165 || degrees > 165:
                    setWhenValues(startDate, endDate, "9 Months", 9);
                    break;
                case degrees > -165 && degrees < -135:
                    setWhenValues(startDate, endDate, "10 Months", 10);
                    break;
                case degrees > -135 && degrees < -105:
                    setWhenValues(startDate, endDate, "11 Months", 11);
                    break;
                case degrees > -105 && degrees < -75:
                    setWhenValues(startDate, endDate, "12 Months", 12);
                    break;
            }
        }
    }   
}

moveCircle();
dragCircleCSS();

const monthsStartExactDatesButton = document.getElementById("MonthsStartExactDatesButton");
const monthsStartPM1Button = document.getElementById("MonthsStartPM1Button");
const monthsStartPM2Button = document.getElementById("MonthsStartPM2Button");
const monthsStartPM3Button = document.getElementById("MonthsStartPM3Button");
const monthsStartPM7Button = document.getElementById("MonthsStartPM7Button");
const monthsStartPM14Button = document.getElementById("MonthsStartPM14Button");

const monthsEndExactDatesButton = document.getElementById("MonthsEndExactDatesButton");
const monthsEndPM1Button = document.getElementById("MonthsEndPM1Button");
const monthsEndPM2Button = document.getElementById("MonthsEndPM2Button");
const monthsEndPM3Button = document.getElementById("MonthsEndPM3Button");
const monthsEndPM7Button = document.getElementById("MonthsEndPM7Button");
const monthsEndPM14Button = document.getElementById("MonthsEndPM14Button");

var startMonthsPMValue = "";
var endMonthsPMValue = "";
var savedStartMonthsPMValue = "";
var savedEndMonthsPMValue = "";
monthsStartExactDatesButton.style.borderColor = "black";
monthsStartExactDatesButton.style.background = "#f0f0f0";
monthsEndExactDatesButton.style.borderColor = "black";
monthsEndExactDatesButton.style.background = "#f0f0f0";
var previousMonthsStartPMElement = monthsStartExactDatesButton;
var previousMonthsEndPMElement = monthsEndExactDatesButton;

function addMonthsPMValueStart(value, element)
{
    previousMonthsStartPMElement.style.borderColor = "";
    previousMonthsStartPMElement.style.background = "";
    startMonthsPMValue = "";

    element.style.borderColor = "black";
    element.style.background = "#f0f0f0";
    startMonthsPMValue = value;

    previousMonthsStartPMElement = element;
}

function addMonthsPMValueEnd(value, element)
{
    previousMonthsEndPMElement.style.borderColor = "";
    previousMonthsEndPMElement.style.background = "";
    endMonthsPMValue = "";

    element.style.borderColor = "black";
    element.style.background = "#f0f0f0";
    endMonthsPMValue = value;

    previousMonthsEndPMElement = element;
}

monthsStartExactDatesButton.onclick = function(e)
{
    addMonthsPMValueStart("", e.target);
}

monthsStartPM1Button.onclick = function(e)
{
    addMonthsPMValueStart("±1", e.target);
}

monthsStartPM2Button.onclick = function(e)
{
    addMonthsPMValueStart("±2", e.target);
}

monthsStartPM3Button.onclick = function(e)
{
    addMonthsPMValueStart("±3", e.target);
}

monthsStartPM7Button.onclick = function(e)
{
    addMonthsPMValueStart("±7", e.target);
}

monthsStartPM14Button.onclick = function(e)
{
    addMonthsPMValueStart("±14", e.target);
}

monthsEndExactDatesButton.onclick = function(e)
{
    addMonthsPMValueEnd("", e.target);
}

monthsEndPM1Button.onclick = function(e)
{
    addMonthsPMValueEnd("±1", e.target);
}

monthsEndPM2Button.onclick = function(e)
{
    addMonthsPMValueEnd("±2", e.target);
}

monthsEndPM3Button.onclick = function(e)
{
    addMonthsPMValueEnd("±3", e.target);
}

monthsEndPM7Button.onclick = function(e)
{
    addMonthsPMValueEnd("±7", e.target);
}

monthsEndPM14Button.onclick = function(e)
{
    addMonthsPMValueEnd("±14", e.target);
}

const moveMonthsStartCalendarsLeft = document.getElementById("MoveMonthsStartCalendarsLeft");
const moveMonthsStartCalendarsRight = document.getElementById("MoveMonthsStartCalendarsRight");
const moveMonthsEndCalendarsLeft = document.getElementById("MoveMonthsEndCalendarsLeft");
const moveMonthsEndCalendarsRight = document.getElementById("MoveMonthsEndCalendarsRight");

const getStupidCalendarDatesAgain = document.getElementById("StartMonthsCalendars");
const getStupidCalendarDatesAgainAgain = document.getElementById("EndMonthsCalendars");

function removeMonthsShadows(firstCalendar, secondCalendar, checkinDate, checkoutDate)
{
    for (i = 0; i < 6; i++)
    {
        for (j = 0; j < 7; j++)
        {
            try 
            {
                var divBox = firstCalendar.childNodes[4].childNodes[0].childNodes[i].childNodes[j].childNodes[0];
                var tdBox = firstCalendar.childNodes[4].childNodes[0].childNodes[i].childNodes[j];
            }
            catch{} //  banana
            try 
            {
                var divBox2 = secondCalendar.childNodes[4].childNodes[0].childNodes[i].childNodes[j].childNodes[0];
                var tdBox2 = secondCalendar.childNodes[4].childNodes[0].childNodes[i].childNodes[j];
            }
            catch{} //  pizza

            if ((checkinDate == "" || checkoutDate == "")
            ||  (checkinDate != "" && checkoutDate != ""))
            {
                if (tdBox.style.background != ""
                ||  tdBox2.style.background != "")
                {
                    tdBox.style.background = "";
                    divBox.style.borderColor = "";
                    tdBox2.style.background = "";
                    divBox2.style.borderColor = "";
                }
            }
        }
    }
}

function correctMonthsDatesShadow(firstCalendar, secondCalendar, checkinDate, checkoutDate)
{
    loop:
    for (i = 0; i < 6; i++)
    {
        for (j = 0; j < 7; j++)
        {
            try 
            {
                var divBox = firstCalendar.childNodes[4].childNodes[0].childNodes[i].childNodes[j].childNodes[0];
                var tdBox = firstCalendar.childNodes[4].childNodes[0].childNodes[i].childNodes[j];
            }catch{} //  banana

            try 
            {
                var divBox2 = secondCalendar.childNodes[4].childNodes[0].childNodes[i].childNodes[j].childNodes[0];
                var tdBox2 = secondCalendar.childNodes[4].childNodes[0].childNodes[i].childNodes[j];
            }catch{} //  pizza

            if (firstCalendar == calendar && secondCalendar == calendar2 && checkoutDate.tagName == "NULL")
            {
                break loop;
            }
            
            //  first calendar
            if (firstCalendar.contains(checkinDate) && firstCalendar.contains(checkoutDate))
            {
                if (+checkinDate.innerText == +divBox.innerText)
                {
                    tdBox.style.background = calendarShadowCheckinColor;
                }
                else if (+checkoutDate.innerText == +divBox.innerText)
                {
                    tdBox.style.background = calendarShadowCheckoutColor;
                }

                if (+checkinDate.innerText < +divBox.innerText && +checkoutDate.innerText > +divBox.innerText)
                {
                    divBox.style.borderColor = calendarShadowColor;
                    tdBox.style.background = calendarShadowColor;
                }
            }
            else
            {
                if (firstCalendar.contains(checkinDate))
                {
                    if (+checkinDate.innerText == +divBox.innerText)
                    {
                        tdBox.style.background = calendarShadowCheckinColor;
                    }
                    else if (+checkinDate.innerText < +divBox.innerText && divBox.innerText != "")
                    {
                        divBox.style.borderColor = calendarShadowColor;
                        tdBox.style.background = calendarShadowColor;
                    }

                    if (!secondCalendar.contains(checkoutDate) && divBox2.innerText != "")
                    {
                        divBox2.style.borderColor = calendarShadowColor;
                        tdBox2.style.background = calendarShadowColor;
                    }
                }

                if (firstCalendar.contains(checkoutDate))
                {
                    if (+checkoutDate.innerText == +divBox.innerText)
                    {
                        tdBox.style.background = calendarShadowCheckoutColor;
                    }
                    else if (+checkoutDate.innerText > +divBox.innerText && divBox.innerText != "")
                    {
                        divBox.style.borderColor = calendarShadowColor;
                        tdBox.style.background = calendarShadowColor;
                    }
                }
            }
             
            //  second calendar
            if (secondCalendar.contains(checkinDate) && secondCalendar.contains(checkoutDate))
            {
                if (+checkinDate.innerText == +divBox2.innerText)
                {
                    tdBox2.style.background = calendarShadowCheckinColor;
                }
                else if (+checkoutDate.innerText == +divBox2.innerText)
                {
                    tdBox2.style.background = calendarShadowCheckoutColor;
                }

                if (+checkinDate.innerText < +divBox2.innerText && +checkoutDate.innerText > +divBox2.innerText)
                {
                    divBox2.style.borderColor = calendarShadowColor;
                    tdBox2.style.background = calendarShadowColor;
                }
            }
            else
            {
                if (secondCalendar.contains(checkinDate))
                {
                    if (+checkinDate.innerText == +divBox2.innerText)
                    {
                        tdBox2.style.background = calendarShadowCheckinColor;
                    }
                    else if (+checkinDate.innerText < +divBox2.innerText)
                    {
                        divBox2.style.borderColor = calendarShadowColor;
                        tdBox2.style.background = calendarShadowColor;
                    }
                }

                if (secondCalendar.contains(checkoutDate))
                {
                    if (+checkoutDate.innerText == +divBox2.innerText)
                    {
                        tdBox2.style.background = calendarShadowCheckoutColor;
                    }
                    else if (+checkoutDate.innerText > +divBox2.innerText && divBox2.innerText != "")
                    {
                        divBox2.style.borderColor = calendarShadowColor;
                        tdBox2.style.background = calendarShadowColor;
                    }

                    if (!firstCalendar.contains(checkinDate) && divBox.innerText != "")
                    {
                        divBox.style.borderColor = calendarShadowColor;
                        tdBox.style.background = calendarShadowColor;
                    }
                }
            }
        }
    }  
}

getStupidCalendarDatesAgain.onclick = function(e)
{
    if (e.target.children.length == 0 && e.target.className == "box" || e.target.className == "box box_new_hover")
    {
        if (e.target.parentElement.parentElement.parentElement.parentElement.parentNode.contains(monthsCalendar))
        {
            startDateValue = e.target.innerText + " " + monthsAbbreviations[months.indexOf(monthsCalendar.childNodes[1].innerText.slice(0, -5))] + " " + monthsCalendar.childNodes[1].innerText.slice(-4);
        }
        else if (e.target.parentElement.parentElement.parentElement.parentElement.parentNode.contains(monthsCalendar2))
        {
            startDateValue = e.target.innerText + " " + monthsAbbreviations[months.indexOf(monthsCalendar2.childNodes[1].innerText.slice(0, -5))] + " " + monthsCalendar2.childNodes[1].innerText.slice(-4);
        }

        //  reset feedback
        if (selectedStartDate != "")
        {
            selectedStartDate.style.background = "";
            selectedStartDate.style.color = "";

            removeMonthsShadows(monthsCalendar, monthsCalendar2, selectedStartDate, selectedEndDate);
            selectedStartDate = "";     
        }

        //  apply feedback
        if (selectedStartDate == "")
        {
            selectedStartDate = e.target;
            selectedStartDate.style.background = "black";
            selectedStartDate.style.color = "white";
            selectedStartMonth = selectedStartDate.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[1].innerText.slice(0, -5);
            selectedStartYear = +selectedStartDate.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[1].innerText.slice(-4);
            
            correctMonthsDatesShadow(monthsCalendar, monthsCalendar2, selectedStartDate, selectedEndDate);
        }
    }
}

getStupidCalendarDatesAgainAgain.onclick = function(e)
{
    if (e.target.children.length == 0 && e.target.className == "box" || e.target.className == "box box_new_hover")
    {
       if (e.target.parentElement.parentElement.parentElement.parentElement.parentNode.contains(monthsCalendar3))
       {
           endDateValue = e.target.innerText + " " + monthsAbbreviations[months.indexOf(monthsCalendar3.childNodes[1].innerText.slice(0, -5))] + " " + monthsCalendar3.childNodes[1].innerText.slice(-4);
       }
       else if (e.target.parentElement.parentElement.parentElement.parentElement.parentNode.contains(monthsCalendar4))
       {
           endDateValue = e.target.innerText + " " + monthsAbbreviations[months.indexOf(monthsCalendar4.childNodes[1].innerText.slice(0, -5))] + " " + monthsCalendar4.childNodes[1].innerText.slice(-4);
       }

       //  reset feedback
       if (selectedEndDate != "")
       {
           selectedEndDate.style.background = "";
           selectedEndDate.style.color = "";

           removeMonthsShadows(monthsCalendar3, monthsCalendar4, selectedStartDate, selectedEndDate);
           selectedEndDate = "";     
       }

       //  apply feedback
       if (selectedEndDate == "")
       {
           selectedEndDate = e.target;
           selectedEndDate.style.background = "black";
           selectedEndDate.style.color = "white";
           selectedEndMonth = selectedEndDate.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[1].innerText.slice(0, -5);
           selectedEndYear = +selectedEndDate.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[1].innerText.slice(-4);

          correctMonthsDatesShadow(monthsCalendar3, monthsCalendar4, selectedStartDate, selectedEndDate);
       }
    }
}

function moveMonthsCalendendarsRight(rightButton, leftButton, firstCalendar, secondCalendar)
{
    if (rightButton.style.cursor == "pointer")
    {
        const monthNames = document.querySelectorAll(".month_name");
        const tables = document.querySelectorAll(".nothing");
    
        monthNames.forEach(function(e)
        {
            e.remove();
        });
    
        tables.forEach(function(e)
        {
            e.remove();
        });
    
        rightButtonClicked = true;

        createCalendarMonth(firstCalendar, selectedStartDate, selectedEndDate, selectedStartMonth, selectedEndMonth, selectedStartYear, selectedEndYear);
        createCalendarMonth2(secondCalendar, selectedStartDate, selectedEndDate, selectedStartMonth, selectedEndMonth, selectedStartYear, selectedEndYear); 

        rightButtonClicked = false;
    
        if (month == currentMonth && year == currentYear + 1)
        {
            rightButton.style.cursor = "not-allowed";
            rightButton.style.color = "#dcdcdc";
            rightButton.style.background = "none";
        }
        else
        {
            leftButton.style.cursor = "pointer";
            leftButton.style.color = "";
            leftButton.style.background = "";
        }
    }
}

function moveMonthsCalendarsLeft(rightButton, leftButton, firstCalendar, secondCalendar)
{
    if (leftButton.style.cursor == "pointer")
    {
        const monthNames = document.querySelectorAll(".month_name");
        const tables = document.querySelectorAll(".nothing");
    
        monthNames.forEach(function(e)
        {
            e.remove();
        });
    
        tables.forEach(function(e)
        {
            e.remove();
        });
    
        leftButtonClicked = true;

        createCalendarMonth(firstCalendar, selectedStartDate, selectedEndDate, selectedStartMonth, selectedEndMonth, selectedStartYear, selectedEndYear);
        createCalendarMonth2(secondCalendar, selectedStartDate, selectedEndDate, selectedStartMonth, selectedEndMonth, selectedStartYear, selectedEndYear); 

        leftButtonClicked = false;
    
        if (month == currentMonth && year == currentYear)
        {
            leftButton.style.cursor = "not-allowed";
            leftButton.style.color = "#dcdcdc";
            leftButton.style.background = "none";
        }
        else
        {
            rightButton.style.cursor = "pointer";
            rightButton.style.color = "";
            rightButton.style.background = "";
        }
    } 
}

moveMonthsStartCalendarsRight.onclick = function()
{
    moveMonthsCalendendarsRight(moveMonthsStartCalendarsRight, moveMonthsStartCalendarsLeft, monthsCalendar, monthsCalendar2);
}

moveMonthsStartCalendarsLeft.onclick = function()
{
    moveMonthsCalendarsLeft(moveMonthsStartCalendarsRight, moveMonthsStartCalendarsLeft, monthsCalendar, monthsCalendar2);
}

moveMonthsEndCalendarsRight.onclick = function()
{
    moveMonthsCalendendarsRight(moveMonthsEndCalendarsRight, moveMonthsEndCalendarsLeft, monthsCalendar3, monthsCalendar4);
}

moveMonthsEndCalendarsLeft.onclick = function()
{
    moveMonthsCalendarsLeft(moveMonthsEndCalendarsRight, moveMonthsEndCalendarsLeft, monthsCalendar3, monthsCalendar4);
}

function rememberStartButtonClickedCSS(PMAmout)
{
    if (PMAmout == "")
    {
        previousMonthsStartPMElement.style.borderColor = "";
        previousMonthsStartPMElement.style.background = "";
        monthsStartExactDatesButton.style.borderColor = "black";
        monthsStartExactDatesButton.style.background = "#f0f0f0";
        previousMonthsStartPMElement = monthsStartExactDatesButton;
    }
    else if (PMAmout == "±1")
    {
        previousMonthsStartPMElement.style.borderColor = "";
        previousMonthsStartPMElement.style.background = "";
        monthsStartPM1Button.style.borderColor = "black";
        monthsStartPM1Button.style.background = "#f0f0f0";
        previousMonthsStartPMElement = monthsStartPM1Button;
    }
    else if (PMAmout == "±2")
    {
        previousMonthsStartPMElement.style.borderColor = "";
        previousMonthsStartPMElement.style.background = "";
        monthsStartPM2Button.style.borderColor = "black";
        monthsStartPM2Button.style.background = "#f0f0f0";
        previousMonthsStartPMElement = monthsStartPM2Button;
    }
    else if (PMAmout == "±3")
    {
        previousMonthsStartPMElement.style.borderColor = "";
        previousMonthsStartPMElement.style.background = "";
        monthsStartPM3Button.style.borderColor = "black";
        monthsStartPM3Button.style.background = "#f0f0f0";
        previousMonthsStartPMElement = monthsStartPM3Button;
    }
    else if (PMAmout == "±7")
    {
        previousMonthsStartPMElement.style.borderColor = "";
        previousMonthsStartPMElement.style.background = "";
        monthsStartPM7Button.style.borderColor = "black";
        monthsStartPM7Button.style.background = "#f0f0f0";
        previousMonthsStartPMElement = monthsStartPM7Button;
    }
    else if (PMAmout == "±14")
    {
        previousMonthsStartPMElement.style.borderColor = "";
        previousMonthsStartPMElement.style.background = "";
        monthsStartPM14Button.style.borderColor = "black";
        monthsStartPM14Button.style.background = "#f0f0f0";
        previousMonthsStartPMElement = monthsStartPM14Button;
    }
}

function rememberEndButtonClickedCSS(PMAmout)
{
    if (PMAmout == "")
    {
        previousMonthsEndPMElement.style.borderColor = "";
        previousMonthsEndPMElement.style.background = "";
        monthsEndExactDatesButton.style.borderColor = "black";
        monthsEndExactDatesButton.style.background = "#f0f0f0";
        previousMonthsEndPMElement = monthsEndExactDatesButton;
    }
    else if (PMAmout == "±1")
    {
        previousMonthsEndPMElement.style.borderColor = "";
        previousMonthsEndPMElement.style.background = "";
        monthsEndPM1Button.style.borderColor = "black";
        monthsEndPM1Button.style.background = "#f0f0f0";
        previousMonthsEndPMElement = monthsEndPM1Button;
    }
    else if (PMAmout == "±2")
    {
        previousMonthsEndPMElement.style.borderColor = "";
        previousMonthsEndPMElement.style.background = "";
        monthsEndPM2Button.style.borderColor = "black";
        monthsEndPM2Button.style.background = "#f0f0f0";
        previousMonthsEndPMElement = monthsEndPM2Button;
    }
    else if (PMAmout == "±3")
    {
        previousMonthsEndPMElement.style.borderColor = "";
        previousMonthsEndPMElement.style.background = "";
        monthsEndPM3Button.style.borderColor = "black";
        monthsEndPM3Button.style.background = "#f0f0f0";
        previousMonthsEndPMElement = monthsEndPM3Button;
    }
    else if (PMAmout == "±7")
    {
        previousMonthsEndPMElement.style.borderColor = "";
        previousMonthsEndPMElement.style.background = "";
        monthsEndPM7Button.style.borderColor = "black";
        monthsEndPM7Button.style.background = "#f0f0f0";
        previousMonthsEndPMElement = monthsEndPM7Button;
    }
    else if (PMAmout == "±14")
    {
        previousMonthsEndPMElement.style.borderColor = "";
        previousMonthsEndPMElement.style.background = "";
        monthsEndPM14Button.style.borderColor = "black";
        monthsEndPM14Button.style.background = "#f0f0f0";
        previousMonthsEndPMElement = monthsEndPM14Button;
    }
}

function initializeMonthsCalendars(firstCalendar, secondCalendar, leftButton, rightButton)
{
    month = currentMonth;
    year = currentYear;

    rememberStartButtonClickedCSS(savedStartMonthsPMValue);
    rememberEndButtonClickedCSS(savedEndMonthsPMValue);

    if (month >= 11)
    {
        month == 1;
        year = currentYear + 1;
    }

    if (selectedStartMonth == months[startDate.getMonth()] && selectedStartYear == startDate.getFullYear() 
    &&  selectedEndMonth == months[endDate.getMonth()] && selectedEndYear == endDate.getFullYear())
    {
        selectedStartMonth = months[startDate.getMonth()];
        selectedStartYear = startDate.getFullYear();
        selectedEndMonth = months[endDate.getMonth()];
        selectedEndYear = endDate.getFullYear();
    }
    
    const monthNames = document.querySelectorAll(".month_name");
    const tables = document.querySelectorAll(".nothing");
  
    monthNames.forEach(function(e)
    {
        e.remove();
    });
   
    tables.forEach(function(e)
    {
        e.remove();
    });

    rightButtonClicked = true;

    createCalendarMonth(firstCalendar, selectedStartDate, selectedEndDate, selectedStartMonth, selectedEndMonth, selectedStartYear, selectedEndYear);
    createCalendarMonth2(secondCalendar, selectedStartDate, selectedEndDate, selectedStartMonth, selectedEndMonth, selectedStartYear, selectedEndYear);

    rightButtonClicked = false;

    if (month == currentMonth && year == currentYear)
    {
        leftButton.style.cursor = "not-allowed";
        leftButton.style.color = "#dcdcdc";
        leftButton.style.background = "none";
    }
    else
    {
        leftButton.style.cursor = "pointer";
        leftButton.style.color = "";
        leftButton.style.background = "";
    }

    if (rightButton.style.cursor == "not-allowed")
    {
        rightButton.style.cursor = "pointer";
        rightButton.style.color = "";
        rightButton.style.background = "";
    }
}

const modalStartDate = document.getElementById("ModalStartDate");
const modalEndDate = document.getElementById("ModalEndDate");
const modalBackground = document.getElementById("ModalBackground");

function closeModal()
{
    modalBackground.style.display = "none";
    modalStartDate.style.display = "none";
    modalEndDate.style.display = "none";
    document.body.style.overflow = "";
    document.body.style.paddingRight = "";
}

function openModal(modal)
{
    modal.style.display = "block";
    modalBackground.style.display = "block";
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = "19px";
}

whenStartDate.onclick = function()
{
    openModal(modalStartDate);
    initializeMonthsCalendars(monthsCalendar, monthsCalendar2, moveMonthsStartCalendarsLeft, moveMonthsStartCalendarsRight);
}

whenEndDate.onclick = function()
{
    openModal(modalEndDate);
    initializeMonthsCalendars(monthsCalendar3, monthsCalendar4, moveMonthsEndCalendarsLeft, moveMonthsEndCalendarsRight);
}

modalBackground.onclick = function()
{
    closeModal();
}

const saveStartDateButton = document.getElementById("SaveMonthStartDate");
const saveEndDateButton = document.getElementById("SaveMonthEndDate");
var savedSelectedStartDate = "";
var savedSelectedStartMonth = "";
var savedSelectedStartYear = "";
var savedSelectedEndDate = "";
var savedSelectedEndMonth = "";
var savedSelectedEndYear = "";

saveStartDateButton.onclick = function()
{
    savedStartMonthsPMValue = startMonthsPMValue;
    whenInput.value = `${startDateValue} ${savedStartMonthsPMValue} - ${endDateValue} ${savedEndMonthsPMValue}`
    closeModal();
}

saveEndDateButton.onclick = function()
{
    savedEndMonthsPMValue = endMonthsPMValue;
    whenInput.value = `${startDateValue} ${savedStartMonthsPMValue} - ${endDateValue} ${savedEndMonthsPMValue}`
    closeModal();
}

/*--------------------------------------------------------------------------------------------------------------------
--------------------------------------------CHECK IN/CHECK OUT TIME OPTIONS-------------------------------------------
----------------------------------------------------------------------------------------------------------------------*/
const flexibleButton = document.getElementById("FlexibleButton");
const monthsButton = document.getElementById("MonthsButton");

const datesBlock = document.getElementById("DatesBlock");
const monthsBlock = document.getElementById("MonthsBlock");
const flexibleBlock = document.getElementById("FlexibleBlock");

const checkinFormMenu = document.getElementById("CheckinFormMenu");
const whenFormMenu = document.getElementById("WhenFormMenu");

function initializeDatesCalendars(firstCalendar, secondCalendar)
{
    month = currentMonth - 1;
    year = currentYear;
   
    const monthNames = document.querySelectorAll(".month_name");
    const tables = document.querySelectorAll(".nothing");
   
    monthNames.forEach(function(e)
    {
        e.remove();
    });
   
    tables.forEach(function(e)
    {
        e.remove();
    });

    rightButtonClicked = true;

    createCalendarMonth(firstCalendar, selectedCheckinDate, selectedCheckoutDate, selectedCheckinMonth, selectedCheckoutMonth, selectedCheckinYear, selectedCheckoutYear);
    createCalendarMonth2(secondCalendar, selectedCheckinDate, selectedCheckoutDate, selectedCheckinMonth, selectedCheckoutMonth, selectedCheckinYear, selectedCheckoutYear);

    rightButtonClicked = false;
}

datesButton.onclick = function()
{
    initializeDatesCalendars(calendar, calendar2);
    
    datesButton.style.backgroundColor = "white";
    datesBlock.style.display = "block";
    monthsBlock.style.display = "none";
    flexibleBlock.style.display = "none";

    checkinFormMenu.style.display = "flex";
    whenFormMenu.style.display = "none";
    onClickButtonUnfocus(whenButton);
    onClickButtonUnfocus(checkoutButton);
    onClickButtonFocus(checkinButton);

    monthsButton.style.backgroundColor = "";
    flexibleButton.style.backgroundColor = "";
}

monthsButton.onclick = function()
{
    monthsButton.style.backgroundColor = "white";
    datesBlock.style.display = "none";
    monthsBlock.style.display = "block";
    flexibleBlock.style.display = "none";

    checkinFormMenu.style.display = "none";
    whenFormMenu.style.display = "flex";
    onClickButtonFocus(whenButton);

    datesButton.style.backgroundColor = "";
    flexibleButton.style.backgroundColor = "";
}

flexibleButton.onclick = function()
{
    flexibleButton.style.backgroundColor = "white";
    datesBlock.style.display = "none";
    monthsBlock.style.display = "none";
    flexibleBlock.style.display = "block";

    checkinFormMenu.style.display = "none";
    whenFormMenu.style.display = "flex";
    onClickButtonFocus(whenButton);

    datesButton.style.backgroundColor = "";
    monthsButton.style.backgroundColor = "";
}

// SEARCH BUTTON testing or whatever it wont do anything really for next few days
const searchButton = document.getElementById("SearchButton");
const searchButtonExperiences = document.getElementById("SearchButtonExperiences");

searchButton.onclick = function()
{
    console.log("stop searching")
}

searchButtonExperiences.onclick = function()
{
    console.log("stop searching lol")
}

// something whatever i dont feel like doing anything
const userMenuDropdownButton = document.getElementById("UserMenuDropdownButton");
const userMenuDropdown = document.getElementById("UserMenuDropdown");
//  modals
const singUpButton = document.getElementById("SingUpButton");
const logInButton = document.getElementById("LogInButton");
//  web pages
const giftCardsButton = document.getElementById("GiftCardsButton");
const airbnbYourHomeButton = document.getElementById("AirbnbYourHomeButton");
const hostAnExperienceButton = document.getElementById("HostAnExperienceButton");
const helpCenterButton = document.getElementById("HelpCenterButton");

userMenuDropdownButton.onclick = function()
{
    userMenuDropdown.style.display = "block";
}

document.addEventListener("click", function(e)
{
    if ((!userMenuDropdown.contains(e.target) && !userMenuDropdownButton.contains(e.target)) && userMenuDropdown.style.display == "block")
    {
        userMenuDropdown.style.display = "none";
    }
})
