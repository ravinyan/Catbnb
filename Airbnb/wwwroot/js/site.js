
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

//  i feel like it better to have 1 event listener with 8 if statements than 8 event listeners with 8 if statements total
document.addEventListener('click', event => 
{
    //  WHERE
    if (!whereDropdown.contains(event.target) && !whereButton.contains(event.target) && whereDropdown.style.display == "block") 
    {
        if (!form.contains(event.target))
        {
            form.style.backgroundColor = "";
        }

        whereDropdown.style.display = "none";
        onClickButtonUnfocus(whereButton);
    }
    //  CHECK IN
    else if (!datesDropdown.contains(event.target) && !checkinButton.contains(event.target) 
         &&   datesDropdown.style.display == "block" && checkinButton.style.backgroundColor == "white"
         &&   event.target != imstupidsvg && event.target != imstupidpath)
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
    //  CHECK OUT
    else if (!datesDropdown.contains(event.target) && !checkoutButton.contains(event.target)
         &&   datesDropdown.style.display == "block" && checkoutButton.style.backgroundColor == "white")
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
    //  WHO
    else if (!whoDropdown.contains(event.target) && !whoButton.contains(event.target) && whoDropdown.style.display == "block") 
    {
        if (!form.contains(event.target))
        {
            form.style.backgroundColor = "";
        }

        whoDropdown.style.display = "none";
        onClickButtonUnfocus(whoButton);
    }
    //  WHERE EXPERIENCES
    else if (!whereDropdownExperiences.contains(event.target) && !whereButtonExperiences.contains(event.target) && whereDropdownExperiences.style.display == "block") 
    {
        if (!formExperiences.contains(event.target))
        {
            formExperiences.style.backgroundColor = "";
        }

        whereDropdownExperiences.style.display = "none";
        onClickButtonUnfocus(whereButtonExperiences);
    }
    //  DATES EXPERIENCES
    else if (!datesDropdownExperiences.contains(event.target) && !datesButtonExperiences.contains(event.target) && datesDropdownExperiences.style.display == "block") 
    {
        if (!formExperiences.contains(event.target))
        {
            formExperiences.style.backgroundColor = "";
        }

        datesDropdownExperiences.style.display = "none";
        onClickButtonUnfocus(datesButtonExperiences);
    }
    //  WHO EXPERIENCES
    else if (!whoDropdownExperiences.contains(event.target) && !whoButtonExperiences.contains(event.target) && whoDropdownExperiences.style.display == "block") 
    {
        if (!formExperiences.contains(event.target))
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
         &&  whoButtonExperiences.style.backgroundColor != "white" && !form.contains(event.target))
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
--------(this was very fun challenge but holy shit its finally complete 1k+ lines of code for stupid calendar)--------*/
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
var selectedCheckinDate = "";
var selectedCheckoutDate = "";
var selectedCheckinMonth = "";
var selectedCheckoutMonth = "";
var selectedCheckinYear = "";
var selectedCheckoutYear = "";
var rightButtonClicked = false;
var leftButtonClicked = false;
var nextMonth = "";
var nextYear = "";

//  IT WORKS I DONT CARE JUST GET ME OUT OF HERE PLEASE AAAAAAAAAAAAAAAAAAAAAAAAA
function keepShadowBetweenDates(month, x, td, div)
{
    if (selectedCheckinDate != "" && selectedCheckoutDate != "")
    {
        if (x == +selectedCheckinDate.innerText && selectedCheckinMonth == months[month] && selectedCheckinYear == year)
        {
            td.style.background = "linear-gradient(to right, white 50%, #dcdcdc 50%)";
        }

        if (x == +selectedCheckoutDate.innerText && selectedCheckoutMonth == months[month] && selectedCheckoutYear == year)
        {
            td.style.background = "linear-gradient(to right, #dcdcdc 50%, white 50%)";
        }

        if (months.indexOf(months[month]) == months.indexOf(selectedCheckinMonth) 
        &&  months.indexOf(months[month]) == months.indexOf(selectedCheckoutMonth)
        &&  x > +selectedCheckinDate.innerText && x < +selectedCheckoutDate.innerText
        &&  selectedCheckoutYear == year && selectedCheckinYear == year)
        {
            td.style.background = "#dcdcdc";
            div.style.borderColor = "#dcdcdc"; 
        }
        
        if (months.indexOf(months[month]) == months.indexOf(selectedCheckinMonth) 
        &&  months.indexOf(months[month]) != months.indexOf(selectedCheckoutMonth)
        &&  x > +selectedCheckinDate.innerText && selectedCheckoutYear == year && selectedCheckinYear == year)
        {
            td.style.background = "#dcdcdc";
            div.style.borderColor = "#dcdcdc";   
        }
        
        if (months.indexOf(months[month]) != months.indexOf(selectedCheckinMonth) 
        &&  months.indexOf(months[month]) == months.indexOf(selectedCheckoutMonth)
        &&  x < +selectedCheckoutDate.innerText && selectedCheckoutYear == year && selectedCheckinYear == year)
        {
            td.style.background = "#dcdcdc";
            div.style.borderColor = "#dcdcdc";   
        }
        
        if (months.indexOf(months[month]) > months.indexOf(selectedCheckinMonth)
        &&  months.indexOf(months[month]) < months.indexOf(selectedCheckoutMonth)
        &&  selectedCheckoutYear == year && selectedCheckinYear == year)
        {
            td.style.background = "#dcdcdc";
            div.style.borderColor = "#dcdcdc";  
        }

        if (months.indexOf(selectedCheckinMonth) == months.indexOf(months[month])
        &&  selectedCheckinYear != selectedCheckoutYear && x > +selectedCheckinDate.innerText && selectedCheckinYear == year)
        {
            td.style.background = "#dcdcdc";
            div.style.borderColor = "#dcdcdc";
        }
        else if (months.indexOf(selectedCheckinMonth) < months.indexOf(months[month])
             &&  selectedCheckinYear != selectedCheckoutYear && selectedCheckinYear == year)
        {
            td.style.background = "#dcdcdc";
            div.style.borderColor = "#dcdcdc"; 
        }

        if (months.indexOf(selectedCheckoutMonth) == months.indexOf(months[month])
        &&  selectedCheckinYear != selectedCheckoutYear && x < +selectedCheckoutDate.innerText && selectedCheckoutYear == nextYear)
        {
            td.style.background = "#dcdcdc";
            div.style.borderColor = "#dcdcdc"; 
        }
        else if (months.indexOf(selectedCheckoutMonth) > months.indexOf(months[month])
             &&  selectedCheckinYear != selectedCheckoutYear && selectedCheckoutYear == nextYear)
        {
            td.style.background = "#dcdcdc";
            div.style.borderColor = "#dcdcdc"; 
        }

        if (year < selectedCheckoutYear && year > selectedCheckinYear || nextYear < selectedCheckoutYear && nextYear > selectedCheckinYear)
        {
            td.style.background = "#dcdcdc";
            div.style.borderColor = "#dcdcdc"; 
        }
    }
}

function createCalendarMonth()
{
    var x = 0;
    var check = true;
    var addedCheckinDate = false;
    var addedCheckoutDate = false;

    if (rightButtonClicked == true)
    {
        month += 1;

        if (month == 12)
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
    calendar.insertBefore(monthNameDiv, calendar.children[0]);

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
                    if (selectedCheckinDate != "" && addedCheckinDate == false && x == +selectedCheckinDate.innerText 
                    &&  selectedCheckinMonth == months[month] && selectedCheckinYear == year)
                    {
                        div = selectedCheckinDate;
                        div.style.backgroundColor = "black";
                        div.style.color = "white";
                        addedCheckinDate = true;
                    }
                    else if (selectedCheckoutDate != "" && addedCheckoutDate == false && x == +selectedCheckoutDate.innerText 
                         &&  selectedCheckoutMonth == months[month] && selectedCheckoutYear == year)
                    {
                        div = selectedCheckoutDate;
                        div.style.backgroundColor = "black";
                        div.style.color = "white";
                        addedCheckoutDate = true;
                    }
                    else
                    {
                        div.innerText = x;
                    }
                }
  
                keepShadowBetweenDates(month, x, td, div);

                div.className = "box";
            }
   
            td.appendChild(div);     
            tr.appendChild(td);
        }
    
        tbody.appendChild(tr);
        table.appendChild(tbody);
    }

    table.className = "nothing";
    calendar.appendChild(table);
}

function createCalendarMonth2()
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
    calendar2.insertBefore(monthNameDiv, calendar2.children[0]);

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
                if (selectedCheckinDate != "" && addedCheckinDate == false && x == selectedCheckinDate.innerText 
                &&  selectedCheckinMonth == months[nextMonth] && selectedCheckinYear == year)
                {
                    div = selectedCheckinDate;
                    div.style.backgroundColor = "black";
                    div.style.color = "white";
                    addedCheckinDate = true;
                }
                else if (selectedCheckoutDate != "" && addedCheckoutDate == false && x == selectedCheckoutDate.innerText 
                     &&  selectedCheckoutMonth == months[nextMonth] && selectedCheckoutYear == year)
                {
                    div = selectedCheckoutDate;
                    div.style.backgroundColor = "black";
                    div.style.color = "white";
                    addedCheckoutDate = true;
                }
                else
                {
                    div.innerText = x;
                }
            }

            keepShadowBetweenDates(nextMonth, x, td, div);
    
            div.className = "box";
            td.appendChild(div);
            tr.appendChild(td);
        }
    
        tbody.appendChild(tr);
        table.appendChild(tbody);
    }

    table.className = "nothing";
    calendar2.appendChild(table);
}

createCalendarMonth();
createCalendarMonth2();

//  -------------------- MOVING CALENDARS LEFT/RIGHT --------------------
const moveCalendarLeft = document.getElementById("MoveCalendarsLeft");
const moveCalendarRight = document.getElementById("MoveCalendarsRight");

moveCalendarLeft.onclick = function()
{  
    if (moveCalendarLeft.style.cursor == "pointer")
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

        createCalendarMonth();
        createCalendarMonth2(); 

        leftButtonClicked = false;

        if (month == currentMonth && year == currentYear)
        {
            moveCalendarLeft.style.cursor = "not-allowed";
            moveCalendarLeft.style.color = "#dcdcdc";
            moveCalendarLeft.style.background = "none";
        }
    } 
}

moveCalendarRight.onclick = function()
{
    if (moveCalendarRight.style.cursor == "pointer")
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

        createCalendarMonth();
        createCalendarMonth2();

        rightButtonClicked = false;
        
        if (month > currentMonth && year >= currentYear)
        {
            moveCalendarLeft.style.cursor = "pointer";
            moveCalendarLeft.style.color = "";
            moveCalendarLeft.style.background = "";
        }
    } 
}

//  ------------------------ CALENDAR FORM INPUT ------------------------
const checkinFormInput = document.getElementById("CheckinInput");
const checkoutFormInput = document.getElementById("CheckoutInput");
const clearCalendarFormInputButton = document.getElementById("ClearCalendarFormInputsButton");
const imstupidsvg = document.getElementById("ClearCalendarFormInputsButtonSVG");
const imstupidpath = document.getElementById("ClearCalendarFormInputsButtonPATH");
const getStupidCalendarDates = document.querySelector("div.calendars");
var previousDate = "";  //  will delete it if i wont use it anytime soon i guess...

function calendarValidationCSS()
{
    removeShadowsBetweenDates(calendar);
    removeShadowsBetweenDates(calendar2);

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

    selectedCheckoutDate = "";
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
                checkinFormInput.value = e.target.innerText + " " + monthsAbbreviations[months.indexOf(calendar.childNodes[1].innerText.slice(0, -5))] + " " + calendar.childNodes[1].innerText.slice(-4);
            }
            else if (checkoutButton.style.backgroundColor == "white")
            {
                checkoutFormInput.value = e.target.innerText + " " + monthsAbbreviations[months.indexOf(calendar.childNodes[1].innerText.slice(0, -5))] + " " + calendar.childNodes[1].innerText.slice(-4);
            }        
        }
        else if (e.target.parentElement.parentElement.parentElement.parentElement.parentNode.contains(calendar2))
        {
            if (checkinButton.style.backgroundColor == "white")
            {
                checkinFormInput.value = e.target.innerText + " " + monthsAbbreviations[months.indexOf(calendar2.childNodes[1].innerText.slice(0, -5))] + " " + calendar2.childNodes[1].innerText.slice(-4);
            }
            else if (checkoutButton.style.backgroundColor == "white")
            {
                checkoutFormInput.value = e.target.innerText + " " + monthsAbbreviations[months.indexOf(calendar2.childNodes[1].innerText.slice(0, -5))] + " " + calendar2.childNodes[1].innerText.slice(-4); 
            }
        }

        //  reset feedback
        if (selectedCheckinDate != "" && checkinButton.style.backgroundColor == "white")
        {
            selectedCheckinDate.style.background = "";
            selectedCheckinDate.style.color = "";

            removeShadowsBetweenDates(selectedCheckinDate.parentElement.parentElement.parentElement.parentElement.parentElement);
            selectedCheckinDate = "";     
        }
        else if (selectedCheckoutDate != "" && checkoutButton.style.backgroundColor == "white")
        {
            selectedCheckoutDate.style.background = "";
            selectedCheckoutDate.style.color = "";

            removeShadowsBetweenDates(selectedCheckoutDate.parentElement.parentElement.parentElement.parentElement.parentElement);
            selectedCheckoutDate = "";
        }

        //  apply feedback
        if (selectedCheckinDate == "" && checkinButton.style.backgroundColor == "white")
        {
            selectedCheckinDate = e.target;
            selectedCheckinDate.style.background = "black";
            selectedCheckinDate.style.color = "white";
            selectedCheckinMonth = selectedCheckinDate.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[1].innerText.slice(0, -5);
            selectedCheckinYear = +selectedCheckinDate.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[1].innerText.slice(-4);

           correctShadowBetweenDates(selectedCheckinDate.parentElement.parentElement.parentElement.parentElement.parentElement);
        }
        else if (selectedCheckoutDate == "" && checkoutButton.style.backgroundColor == "white")
        {
            selectedCheckoutDate = e.target;
            selectedCheckoutDate.style.background = "black";
            selectedCheckoutDate.style.color = "white";
            selectedCheckoutMonth = selectedCheckoutDate.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[1].innerText.slice(0 ,-5);
            selectedCheckoutYear = +selectedCheckoutDate.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[1].innerText.slice(-4);

            correctShadowBetweenDates(selectedCheckoutDate.parentElement.parentElement.parentElement.parentElement.parentElement);
        }

        //  validation
        if ((+selectedCheckinDate.innerText > +selectedCheckoutDate.innerText) 
        &&  (selectedCheckinMonth == selectedCheckoutMonth) && (selectedCheckinYear == selectedCheckoutYear)
        &&  (selectedCheckinDate != "" && selectedCheckoutDate != ""))
        {
             calendarValidationCSS();
        }
        else if (months.indexOf(selectedCheckinMonth) > months.indexOf(selectedCheckoutMonth)
             &&  (selectedCheckinYear == selectedCheckoutYear ) && (checkinFormInput.value != "" && checkoutFormInput.value != ""))
        {
             calendarValidationCSS();
        }
        else if ((selectedCheckinYear > selectedCheckoutYear) && (checkinFormInput.value != "" && checkoutFormInput.value != ""))
        {
            calendarValidationCSS();
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

        previousDate = e.target;
    }
}

clearCalendarFormInputButton.onclick = function()
{
    checkinFormInput.value = "";
    checkoutFormInput.value = "";

    removeShadowsBetweenDates(calendar);
    removeShadowsBetweenDates(calendar2);

    selectedCheckinDate.style.background = "";
    selectedCheckinDate.style.color = "";
    selectedCheckoutDate.style.background = "";
    selectedCheckoutDate.style.color = "";
    selectedCheckinDate = "";
    selectedCheckoutDate = "";

    clearCalendarFormInputButton.style.display = "none";
    
    onClickButtonUnfocus(checkoutButton);
    onClickButtonFocus(checkinButton);
}

function correctShadowBetweenDates(currentCalendar)
{
    var otherCalendar = "";

    if (currentCalendar == calendar)
    {
        otherCalendar = calendar2;
    }
    else if (currentCalendar == calendar2)
    {
        otherCalendar = calendar;
    }

    for (i = 0; i < 6; i++)
    {
        loop:
        for (j = 0; j < 7; j++)
        {
            try 
            {
                var divBox = currentCalendar.childNodes[4].childNodes[0].childNodes[i].childNodes[j].childNodes[0];
                var tdBox = currentCalendar.childNodes[4].childNodes[0].childNodes[i].childNodes[j];
            }
            catch{} //  ...

            try 
            {
                var divBox2 = otherCalendar.childNodes[4].childNodes[0].childNodes[i].childNodes[j].childNodes[0];
                var tdBox2 = otherCalendar.childNodes[4].childNodes[0].childNodes[i].childNodes[j];
            }
            catch{} //  .....
            

            if (tdBox.style.background == "#dcdcdc")
            {
                break loop;
            }
            
            //  SAME MONTH SAME YEAR
            if ((selectedCheckinDate != "" && selectedCheckoutDate != "") 
            &&  (selectedCheckinMonth == selectedCheckoutMonth) 
            &&  (selectedCheckinYear == selectedCheckoutYear))
            {
                if (+selectedCheckinDate.innerText == +divBox.innerText)
                {
                    tdBox.style.background = "linear-gradient(to right, white 50%, #dcdcdc 50%)";
                }
                else if (+selectedCheckoutDate.innerText == +divBox.innerText)
                {
                    tdBox.style.background = "linear-gradient(to right,  #dcdcdc 50%, white 50%)";
                }

                if (+selectedCheckinDate.innerText < +divBox.innerText && +selectedCheckoutDate.innerText > +divBox.innerText)
                {
                    tdBox.style.background = "#dcdcdc";
                    divBox.style.borderColor = "#dcdcdc";
                }
            }
            //  DIFFERENT MONTH SAME YEAR OR DIFFERENT MONTH DIFFERENT YEAR
            else if (((selectedCheckinDate != "" && selectedCheckoutDate != "") 
                 &&  (months.indexOf(selectedCheckinMonth) < months.indexOf(selectedCheckoutMonth))
                 &&  (selectedCheckinYear == selectedCheckoutYear))
                 ||  ((selectedCheckinDate != "" && selectedCheckoutDate != "") 
                 &&  (selectedCheckinYear < selectedCheckoutYear)))
            {
                if (selectedCheckinDate.parentElement.parentElement.parentElement.parentElement.parentElement != currentCalendar)
                {
                    //  fill shadow for checkout date on current calendar when changing checkout date
                    if (+selectedCheckoutDate.innerText == divBox.innerText)
                    {
                        tdBox.style.background = "linear-gradient(to right, #dcdcdc 50%, white 50%)";
                    }
                    else if (+selectedCheckoutDate.innerText > divBox.innerText && divBox.innerText != "")
                    {
                        tdBox.style.background = "#dcdcdc";
                        divBox.style.borderColor = "#dcdcdc";
                    }

                    //  checkin selected shadow other
                    if (+selectedCheckinDate.innerText == divBox2.innerText
                    &&  otherCalendar == selectedCheckinDate.parentElement.parentElement.parentElement.parentElement.parentElement)
                    {
                        tdBox2.style.background = "linear-gradient(to right, white 50%, #dcdcdc 50%)";
                    }
                    else if (+selectedCheckinDate.innerText < divBox2.innerText
                         &&  otherCalendar == selectedCheckinDate.parentElement.parentElement.parentElement.parentElement.parentElement)
                    {
                        tdBox2.style.background = "#dcdcdc";
                        divBox2.style.borderColor = "#dcdcdc";
                    }

                    //  fill empty calendar with shadow
                    if (otherCalendar != selectedCheckinDate.parentElement.parentElement.parentElement.parentElement.parentElement
                    &&  otherCalendar != selectedCheckoutDate.parentElement.parentElement.parentElement.parentElement.parentElement
                    &&  divBox2.innerText != "")
                    {
                        if (selectedCheckinYear == otherCalendar.childNodes[1].innerText.slice(-4)
                        &&  months.indexOf(currentCalendar.childNodes[1].innerText.slice(0, -5)) > months.indexOf(otherCalendar.childNodes[1].innerText.slice(0, -5)))
                        {
                            tdBox2.style.background = "#dcdcdc";
                            divBox2.style.borderColor = "#dcdcdc";
                        }
                        else if (selectedCheckoutYear > selectedCheckinYear 
                             &&  months.indexOf(selectedCheckoutMonth) > months.indexOf(otherCalendar.childNodes[1].innerText.slice(0, -5)))
                        {
                            tdBox2.style.background = "#dcdcdc";
                            divBox2.style.borderColor = "#dcdcdc";
                        } 
                    }
                }
                else if (selectedCheckoutDate.parentElement.parentElement.parentElement.parentElement.parentElement != currentCalendar)
                {
                    //  fill shadow for checkin date on current calendar when changing checkin date
                    if (+selectedCheckinDate.innerText == divBox.innerText)
                    {
                        tdBox.style.background = "linear-gradient(to right, white 50%, #dcdcdc 50%)";
                    }
                    else if (+selectedCheckinDate.innerText < divBox.innerText)
                    {
                        tdBox.style.background = "#dcdcdc";
                        divBox.style.borderColor = "#dcdcdc";
                    }

                    //  checkout selected shadow other
                    if (+selectedCheckoutDate.innerText == divBox2.innerText 
                    &&  otherCalendar == selectedCheckoutDate.parentElement.parentElement.parentElement.parentElement.parentElement)
                    {
                        tdBox2.style.background = "linear-gradient(to right, #dcdcdc 50%, white 50%)";
                    }
                    else if (+selectedCheckoutDate.innerText > divBox2.innerText && divBox2.innerText != ""
                         &&  otherCalendar == selectedCheckoutDate.parentElement.parentElement.parentElement.parentElement.parentElement)
                    {
                        tdBox2.style.background = "#dcdcdc";
                        divBox2.style.borderColor = "#dcdcdc";
                    }

                    //  fill empty calendar with shadow
                    if (otherCalendar != selectedCheckinDate.parentElement.parentElement.parentElement.parentElement.parentElement
                    &&  otherCalendar != selectedCheckoutDate.parentElement.parentElement.parentElement.parentElement.parentElement
                    &&  divBox2.innerText != "")
                    {
                        if (selectedCheckinYear == otherCalendar.childNodes[1].innerText.slice(-4)
                        &&  months.indexOf(currentCalendar.childNodes[1].innerText.slice(0, -5)) < months.indexOf(otherCalendar.childNodes[1].innerText.slice(0, -5)))
                        {
                            tdBox2.style.background = "#dcdcdc";
                            divBox2.style.borderColor = "#dcdcdc";
                        }
                        else if (selectedCheckoutYear > selectedCheckinYear 
                             &&  months.indexOf(selectedCheckoutMonth) > months.indexOf(otherCalendar.childNodes[1].innerText.slice(0, -5)))
                        {
                            tdBox2.style.background = "#dcdcdc";
                            divBox2.style.borderColor = "#dcdcdc";
                        }
                    }
                }
            }
        }
    } 
}

function applyShadowBetweenDates(currentCalendar, target)
{
    var targetMonth = months.indexOf(target.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[1].innerText.slice(0, -5));
    var targetYear = target.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[1].innerText.slice(-4);
    var otherCalendar = ""

    if (selectedCheckinDate != "")
    {
        otherCalendar = selectedCheckinDate.parentElement.parentElement.parentElement.parentElement.parentElement;

        if (currentCalendar == calendar2)
        {
            otherCalendar = calendar;
        }
    }
    else if (selectedCheckoutDate != "")
    {
        otherCalendar = selectedCheckoutDate.parentElement.parentElement.parentElement.parentElement.parentElement;

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
                if ((selectedCheckinDate != "" && months.indexOf(selectedCheckinMonth) == targetMonth) && selectedCheckinYear == targetYear
                ||  (selectedCheckoutDate != "" && months.indexOf(selectedCheckoutMonth) == targetMonth) && selectedCheckoutYear == targetYear) 
                {
                    if ((+divBox.innerText < +target.innerText && +divBox.innerText >= +selectedCheckinDate.innerText)
                    ||  (+divBox.innerText > +target.innerText && +divBox.innerText <= +selectedCheckoutDate.innerText))
                    {
                        if (divBox.innerText == +selectedCheckoutDate.innerText)
                        {
                            //  checkin date selected
                            tdBox.style.background = "linear-gradient(to right, #dcdcdc 50%, white 50%)";
                        }
                        else if (+divBox.innerText == +selectedCheckinDate.innerText) 
                        {
                            //  checkout date selected
                            tdBox.style.background = "linear-gradient(to right, white 50%, #dcdcdc 50%)";
                        }
                        else
                        {
                            //  fill everything between checkin and checkout dates
                            tdBox.style.background = "#dcdcdc";
                            divBox.style.borderColor = "#dcdcdc";
                        }
                    }
                    else if (+divBox.innerText == +target.innerText)
                    {
                        //  apply css to checkout/checkin date whichever is the target one
                        if (selectedCheckinDate != "")
                        {
                            tdBox.style.background = "linear-gradient(to right, #dcdcdc 50%, white 50%)";
                        }
                        else if (selectedCheckoutDate != "")
                        {
                            tdBox.style.background = "linear-gradient(to right, white 50%, #dcdcdc 50%)";
                        }
                    }
                }
                //  IF ITS DIFFERENT MONTH SAME YEAR
                else if ((selectedCheckinDate != "" && months.indexOf(selectedCheckinMonth) < targetMonth) && selectedCheckinYear == targetYear
                     ||  (selectedCheckoutDate != "" && months.indexOf(selectedCheckoutMonth) > targetMonth) && selectedCheckoutYear == targetYear)
                {
                    try 
                    {
                        //  it is first selected date is checkin and target is on different calendar
                        if (selectedCheckinDate.parentElement.parentElement.parentElement.parentElement.parentElement != currentCalendar)
                        {
                            if (divBox2.innerText == +selectedCheckoutDate.innerText)
                            {
                                tdBox2.style.background = "linear-gradient(to right,  #dcdcdc 50%, white 50%)";
                            }
                            else if (+divBox2.innerText == +selectedCheckinDate.innerText) 
                            {
                                tdBox2.style.background = "linear-gradient(to right, white 50%, #dcdcdc 50%)";
                            }

                            if (+selectedCheckinDate.innerText < +divBox2.innerText && +divBox2.innerText <= endOfCurrentMonth)
                            {
                                tdBox2.style.background = "#dcdcdc";
                                divBox2.style.borderColor = "#dcdcdc";
                            }

                            //  filling empty calendar between checkin and checkout calendars
                            if (selectedCheckinDate.parentElement.parentElement.parentElement.parentElement.parentElement != calendar
                            &&  divBox2.innerText != "")
                            {
                                tdBox2.style.background = "#dcdcdc";
                                divBox2.style.borderColor = "#dcdcdc";
                            }
                        }
                    }catch{} //  i hate you i hope you step on a lego
                        
                    try
                    {
                        //  it is first selected date is checkout and target is on different calendar
                        if (selectedCheckoutDate.parentElement.parentElement.parentElement.parentElement.parentElement != currentCalendar)
                        {
                            if (divBox2.innerText == +selectedCheckinDate.innerText)
                            {
                                tdBox2.style.background = "linear-gradient(to right, white 50%, #dcdcdc 50%)";
                            }
                            else if (+divBox2.innerText == +selectedCheckoutDate.innerText) 
                            {
                                tdBox2.style.background = "linear-gradient(to right,  #dcdcdc 50%, white 50%)";
                            }

                            if (+selectedCheckoutDate.innerText > +divBox2.innerText && divBox2.innerText != "")
                            {
                                tdBox2.style.background = "#dcdcdc";
                                divBox2.style.borderColor = "#dcdcdc";
                            }

                            //  filling empty calendar between checkin and checkout calendars
                            if (selectedCheckoutDate.parentElement.parentElement.parentElement.parentElement.parentElement != calendar2
                            &&  divBox2.innerText != "")
                            {
                                tdBox2.style.background = "#dcdcdc";
                                divBox2.style.borderColor = "#dcdcdc";
                            }
                        }
                    }catch{} //  I HATE YOU IDIOT

                    //  it is second selected date and it changes whenever the target is
                    if ((+divBox.innerText <= +target.innerText && selectedCheckinDate != "")
                    ||  (+divBox.innerText >= +target.innerText && selectedCheckoutDate != ""))
                    {
                        if (+target.innerText > +divBox.innerText && selectedCheckinDate != "" && divBox.innerText != "")
                        {
                            tdBox.style.background = "#dcdcdc";
                            divBox.style.borderColor = "#dcdcdc";
                        }
                        else if (+target.innerText < +divBox.innerText && selectedCheckoutDate != "" && divBox.innerText != "")
                        {
                            tdBox.style.background = "#dcdcdc";
                            divBox.style.borderColor = "#dcdcdc";
                        }
                        else if (+divBox.innerText == +target.innerText)
                        {
                            if (selectedCheckinDate != "")
                            {
                                tdBox.style.background = "linear-gradient(to right, #dcdcdc 50%, white 50%)";
                            }
                            else if (selectedCheckoutDate != "")
                            {
                                tdBox.style.background = "linear-gradient(to right, white 50%, #dcdcdc 50%)";
                            }
                        }
                    }
                }
                //  IF ITS DIFFERENT YEARS
                else if ((selectedCheckinDate != "") && selectedCheckinYear != targetYear
                     ||  (selectedCheckoutDate != "") && selectedCheckoutYear != targetYear)
                {
                    try
                    {
                        if (selectedCheckinYear != "" && selectedCheckinYear < +targetYear)
                        {
                            if (selectedCheckinDate.parentElement.parentElement.parentElement.parentElement.parentElement == null
                            &&  divBox2.innerText != "")
                            {
                                tdBox2.style.background = "#dcdcdc";
                                divBox2.style.borderColor = "#dcdcdc";
                            }
                            else if (selectedCheckinDate.parentElement.parentElement.parentElement.parentElement.parentElement != calendar2
                            &&  divBox2.innerText != "" && +divBox2.innerText >= +selectedCheckinDate.innerText)
                            {
                                if (+divBox2.innerText == +selectedCheckinDate.innerText)
                                {
                                    tdBox2.style.background = "linear-gradient(to right, white 50%, #dcdcdc 50%)";
                                }
                                else 
                                {
                                    tdBox2.style.background = "#dcdcdc";
                                    divBox2.style.borderColor = "#dcdcdc";
                                }
                            }
                        }                        
                    }catch{} // just... heck yourself...

                    try
                    {
                        if (selectedCheckoutYear != "" && selectedCheckoutYear > +targetYear)
                        {
                            if (selectedCheckoutDate.parentElement.parentElement.parentElement.parentElement.parentElement == null
                            &&  divBox2.innerText != "")
                            {
                                tdBox2.style.background = "#dcdcdc";
                                divBox2.style.borderColor = "#dcdcdc";
                            }
                            else if (selectedCheckoutDate.parentElement.parentElement.parentElement.parentElement.parentElement != calendar
                            &&  divBox2.innerText != "" && +divBox2.innerText <= +selectedCheckoutDate.innerText)
                            {
                                if (+divBox2.innerText == +selectedCheckoutDate.innerText)
                                {
                                    tdBox2.style.background = "linear-gradient(to right, #dcdcdc 50%, white 50%)";
                                }
                                else
                                {
                                    tdBox2.style.background = "#dcdcdc";
                                    divBox2.style.borderColor = "#dcdcdc";
                                }
                            }
                        }
                    }catch{} // at this point im just going to do this here too... even if there are none or i didnt found any
                    
                    
                    if ((+divBox.innerText <= +target.innerText && selectedCheckinDate != "")
                    ||  (+divBox.innerText >= +target.innerText && selectedCheckoutDate != ""))
                    {
                        if (+target.innerText > +divBox.innerText && selectedCheckinDate != "" && divBox.innerText != "")
                        {
                            tdBox.style.background = "#dcdcdc";
                            divBox.style.borderColor = "#dcdcdc";
                        }
                        else if (+target.innerText < +divBox.innerText && selectedCheckoutDate != "" && divBox.innerText != "")
                        {
                            tdBox.style.background = "#dcdcdc";
                            divBox.style.borderColor = "#dcdcdc";
                        }
                        else if (+divBox.innerText == +target.innerText)
                        {
                            if (selectedCheckinDate != "")
                            {
                                tdBox.style.background = "linear-gradient(to right, #dcdcdc 50%, white 50%)";
                            }
                            else if (selectedCheckoutDate != "")
                            {
                                tdBox.style.background = "linear-gradient(to right, white 50%, #dcdcdc 50%)";
                            }
                        }
                    }
                }
            }
            catch{} //  your mom  
        }
    }
}

function removeShadowsBetweenDates(currentCalendar)
{
    var otherCalendar = ""

    if (selectedCheckinDate != "" && selectedCheckoutDate != "")
    {
        if (currentCalendar == calendar2)
        {
            otherCalendar = calendar;
        }
        else if (currentCalendar == calendar)
        {
            otherCalendar = calendar2;
        }
    }
    else if (selectedCheckinDate != "")
    {
        otherCalendar = selectedCheckinDate.parentElement.parentElement.parentElement.parentElement.parentElement;

        if (currentCalendar == calendar2)
        {
            otherCalendar = calendar;
        }
    }
    else if (selectedCheckoutDate != "")
    {
        otherCalendar = selectedCheckoutDate.parentElement.parentElement.parentElement.parentElement.parentElement;

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
                }catch{} //  let me guess
                
                try
                {
                    var divBox2 = otherCalendar.childNodes[4].childNodes[0].childNodes[i].childNodes[j].childNodes[0];
                    var tdBox2 = otherCalendar.childNodes[4].childNodes[0].childNodes[i].childNodes[j];
                }catch{} // you are the problem arent you... you werent... but was later
                
                //  clear css simply and clean
                if ((selectedCheckinDate == "" || selectedCheckoutDate == "")
                ||  (selectedCheckinDate != "" && selectedCheckoutDate != ""))
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
            }catch{} //  your dad
        }
    }
}

calendar.addEventListener("mouseover", function(e)
{
    if ((selectedCheckinDate == "" || selectedCheckoutDate == "") && e.target.children.length == 0 && e.target.className == "box")
    {
        e.target.classList.add("box_new_hover");

        if (selectedCheckinDate == "" || selectedCheckoutDate == "")
        {
            applyShadowBetweenDates(calendar, e.target);
        }
    }
})

calendar.addEventListener("mouseout", function(e)
{
    if (((selectedCheckinDate == "" || selectedCheckoutDate == "") || selectedCheckoutDate != "") && e.target.children.length == 0 && e.target.className == "box box_new_hover")
    {   
        e.target.classList.remove("box_new_hover");

        if (selectedCheckinDate == "" || selectedCheckoutDate == "")
        {
            removeShadowsBetweenDates(calendar);
        }
    }
})

calendar2.addEventListener("mouseover", function(e)
{
    if ((selectedCheckinDate == "" || selectedCheckoutDate == "") && e.target.children.length == 0 && e.target.className == "box")
    {
        e.target.classList.add("box_new_hover");

        if (selectedCheckinDate == "" || selectedCheckoutDate == "")
        {
            applyShadowBetweenDates(calendar2, e.target);
        }
    }
})

calendar2.addEventListener("mouseout", function(e)
{
    if (((selectedCheckinDate == "" || selectedCheckoutDate == "") || selectedCheckoutDate != "") && e.target.children.length == 0 && e.target.className == "box box_new_hover")
    {   
        e.target.classList.remove("box_new_hover");

        if (selectedCheckinDate == "" || selectedCheckoutDate == "")
        {
            removeShadowsBetweenDates(calendar2);
        }
    }
})

/*--------------------------------------------------------------------------------------------------------------------
--------------------------------------------CHECK IN/CHECK OUT TIME OPTIONS-------------------------------------------
----------------------------------------------------------------------------------------------------------------------*/
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






