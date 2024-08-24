
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
    else if (!datesDropdown.contains(event.target) && !checkinButton.contains(event.target) &&
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
    //  CHECK OUT
    else if (!datesDropdown.contains(event.target) && !checkoutButton.contains(event.target) && 
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
    else if (whereButton.style.backgroundColor != "white" && checkinButton.style.backgroundColor != "white" && 
             checkoutButton.style.backgroundColor != "white" && whoButton.style.backgroundColor != "white" && 
             whereButtonExperiences.style.backgroundColor != "white" && datesButtonExperiences.style.backgroundColor != "white" && 
             whoButtonExperiences.style.backgroundColor != "white" && !form.contains(event.target))
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

        dropdown.style.display = "block"

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
----------------------------------------------------------------------------------------------------------------------*/
const calendar = document.getElementById("Calendar");
const calendar2 = document.getElementById("Calendar2");

var date = new Date();
var day = date.getDate();   // 1-31 days and then
var month = date.getMonth(); // WHY ITS FROM 0 TO 11 WHO HURT YOU
var year = date.getFullYear();
var currentMonth = date.getMonth();
var currentYear = date.getFullYear();

//  i have skill issue i dont even know months name in polish                    TODAY
//              styczen      luty      marzec   kwiecien  maj  czerwiec lipiec  sierpien   wrzesien   pazdziernik  listopad    grudzien
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const monthsAbbreviations = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

//  do. not. fking. touch. this. D O N O T. donut.
var startOfCurrentMonth = new Date(year, month, 0).getDay();
var endOfCurrentMonth = new Date(year, month +1, 0).getDate();
var startOfNextMonth = new Date(year, month + 1, 0).getDay();
var endOfNextMonth = new Date(year, month + 2, 0).getDate();
var selectedCheckinDate = "";
var selectedCheckoutDate = "";
var selectedCheckinMonth = "";
var selectedCheckoutMonth = "";
var selectedCheckinYear = "";
var selectedCheckoutYear = "";

function createCalendarMonth()
{
    var x = 0;
    var check = true;
    var calendarRows = 0;
    var added1 = false;
    var added2 = false;

    if ((startOfCurrentMonth == 6 && endOfCurrentMonth >= 30) || (startOfCurrentMonth == 5 && endOfCurrentMonth == 31))
    {
        calendarRows = 6;
    }
    else
    {
        calendarRows = 5;
    }

    const monthNameDiv = document.createElement("div");
    monthNameDiv.className = "month_name";
    if (month == -1)
    {
        monthNameDiv.innerHTML = months[11] + ` ${year}`;
    }
    else
    {
        monthNameDiv.innerHTML = months[month] + ` ${year}`;
    }
    
    calendar.insertBefore(monthNameDiv, calendar.children[0]);

    const table = document.createElement("table");
    const tbody = document.createElement("tbody");

    for (i = 0; i < calendarRows; i++)
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
                    if (selectedCheckinDate != "" && added1 == false && x == +selectedCheckinDate.innerText && selectedCheckinMonth == months[month] && selectedCheckinYear == year)
                    {
                        div = selectedCheckinDate;
                        div.style.backgroundColor = "black";
                        div.style.color = "white";
                        added1 = true;
                    }
                    else if (selectedCheckoutDate != "" && added2 == false && x == +selectedCheckoutDate.innerText && selectedCheckoutMonth == months[month] && selectedCheckoutYear == year)
                    {
                        div = selectedCheckoutDate;
                        div.style.backgroundColor = "black";
                        div.style.color = "white";
                        added2 = true;
                    }
                    else
                    {
                        div.innerText = x;
                    }
                }

                //  bla bla
                if (x == +selectedCheckinDate.innerText && selectedCheckinMonth == months[month] && selectedCheckinYear == year)
                {
                    td.style.background = "linear-gradient(to right, white 50%, #dcdcdc 50%";
                }

                if (x == +selectedCheckoutDate.innerText && selectedCheckoutMonth == months[month] && selectedCheckoutYear == year)
                {
                    td.style.background = "linear-gradient(to right, #dcdcdc 50%, white 50%";
                }

                if (months.indexOf(months[month]) == months.indexOf(selectedCheckinMonth) 
                &&  months.indexOf(months[month]) == months.indexOf(selectedCheckoutMonth)
                &&  x > +selectedCheckinDate.innerText && x < +selectedCheckoutDate.innerText
                &&  selectedCheckoutYear == year)
                {
                    td.style.background = "#dcdcdc";
                    div.style.borderColor = "#dcdcdc"; 
                }

                if (months.indexOf(months[month]) == months.indexOf(selectedCheckinMonth) 
                &&  months.indexOf(months[month]) != months.indexOf(selectedCheckoutMonth)
                &&  x > +selectedCheckinDate.innerText &&  selectedCheckoutYear == year)
                {
                    td.style.background = "#dcdcdc";
                    div.style.borderColor = "#dcdcdc";   
                }

                if (months.indexOf(months[month]) != months.indexOf(selectedCheckinMonth) 
                &&  months.indexOf(months[month]) == months.indexOf(selectedCheckoutMonth)
                &&  x < +selectedCheckoutDate.innerText && selectedCheckoutYear == year)
                {
                    td.style.background = "#dcdcdc";
                    div.style.borderColor = "#dcdcdc";   
                }

                if (months.indexOf(months[month]) > months.indexOf(selectedCheckinMonth) 
                &&  months.indexOf(months[month]) < months.indexOf(selectedCheckoutMonth)
                &&  selectedCheckoutYear == year)
                {
                    td.style.background = "#dcdcdc";
                    div.style.borderColor = "#dcdcdc";  
                }

                //  bla bla

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
    var x = 0;
    var check = true;
    var calendarRows = 0;
    var added1 = false;
    var added2 = false;

    if ((startOfNextMonth == 6 && endOfNextMonth >= 30) || (startOfNextMonth == 5 && endOfNextMonth == 31))
    {
        calendarRows = 6;
    }
    else
    {
        calendarRows = 5;
    }
  
    const monthNameDiv = document.createElement("div");
    monthNameDiv.className = "month_name";
    if (month == -1)
    {
        monthNameDiv.innerHTML = months[0] + ` ${year}`;
    }
    else
    {
        monthNameDiv.innerHTML = months[month + 1] + ` ${year}`;
    }

    calendar2.insertBefore(monthNameDiv, calendar2.children[0]);

    const table = document.createElement("table");
    const tbody = document.createElement("tbody");

    for (i = 0; i < calendarRows; i++)
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
                if (selectedCheckinDate != "" && added1 == false && x == selectedCheckinDate.innerText && selectedCheckinMonth == months[month + 1] && selectedCheckinYear == year)
                {
                    div = selectedCheckinDate;
                    div.style.backgroundColor = "black";
                    div.style.color = "white";
                    added1 = true;
                }
                else if (selectedCheckoutDate != "" && added2 == false && x == selectedCheckoutDate.innerText && selectedCheckoutMonth == months[month + 1] && selectedCheckoutYear == year)
                {
                    div = selectedCheckoutDate;
                    div.style.backgroundColor = "black";
                    div.style.color = "white";
                    added2 = true;
                }
                else
                {
                    div.innerText = x;
                }
            }

            if (x == +selectedCheckinDate.innerText && selectedCheckinMonth == months[month + 1] && selectedCheckinYear == year)
            {
                td.style.background = "linear-gradient(to right, white 50%, #dcdcdc 50%";
            }

            if (x == +selectedCheckoutDate.innerText && selectedCheckoutMonth == months[month + 1] && selectedCheckoutYear == year)
            {
                td.style.background = "linear-gradient(to right, #dcdcdc 50%, white 50%";
            }

            if (months.indexOf(months[month + 1]) == months.indexOf(selectedCheckinMonth) 
            &&  months.indexOf(months[month + 1]) == months.indexOf(selectedCheckoutMonth)
            &&  x > +selectedCheckinDate.innerText && x < +selectedCheckoutDate.innerText
            &&  selectedCheckoutYear == year)
            {
                td.style.background = "#dcdcdc";
                div.style.borderColor = "#dcdcdc"; 
            }

            if (months.indexOf(months[month + 1]) == months.indexOf(selectedCheckinMonth) 
            &&  months.indexOf(months[month + 1]) != months.indexOf(selectedCheckoutMonth)
            &&  x > +selectedCheckinDate.innerText &&  selectedCheckoutYear == year)
            {
                td.style.background = "#dcdcdc";
                div.style.borderColor = "#dcdcdc";   
            }

            if (months.indexOf(months[month + 1]) != months.indexOf(selectedCheckinMonth) 
            &&  months.indexOf(months[month + 1]) == months.indexOf(selectedCheckoutMonth)
            &&  x < +selectedCheckoutDate.innerText &&  selectedCheckoutYear == year)
            {
                td.style.background = "#dcdcdc";
                div.style.borderColor = "#dcdcdc";   
            }

            if (months.indexOf(months[month + 1]) > months.indexOf(selectedCheckinMonth) 
            &&  months.indexOf(months[month + 1]) < months.indexOf(selectedCheckoutMonth)
            &&  selectedCheckoutYear == year)
            {
                td.style.background = "#dcdcdc";
                div.style.borderColor = "#dcdcdc";  
            }
    
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

moveCalendarLeft.onclick = function ()
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

        if (month == -1)
        {
            //  do nothing... its a check so calendar properly works for when going from decemblabla to novembeblablabla
        }
        else
        {
            month -= 1;
        }
        
        startOfNextMonth = new Date(year, month + 1, 0).getDay();
        endOfNextMonth = new Date(year, month + 2, 0).getDate();

        endOfCurrentMonth = new Date(year, month +1, 0).getDate();
        startOfCurrentMonth = new Date(year, month, 0).getDay();

        createCalendarMonth2();
        if (month == -1)
        {
            year -= 1;
        }
        
        createCalendarMonth();
        if (month == -1)
        {
            month = 11
        }

        if (month == currentMonth && year == currentYear)
        {
            moveCalendarLeft.style.cursor = "not-allowed";
            moveCalendarLeft.style.color = "#dcdcdc";
            moveCalendarLeft.style.background = "none";
        }
    } 
}

moveCalendarRight.onclick = function ()
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

        if (month == 11)
        {
            //  another check when going from dec/jan to jan/feb to AGAIN dec/jan to AGAIN jan/feb and it breaks there lol
        }
        else
        {
            month += 1;
        }

        startOfCurrentMonth = new Date(year, month, 0).getDay();

        if (month == 11)
        {
            month = -1;
        }

        endOfCurrentMonth = new Date(year, month +1, 0).getDate();

        createCalendarMonth();
        if (month == -1)
        {
            year += 1;
        }

        startOfNextMonth = new Date(year, month + 1, 0).getDay();
        endOfNextMonth = new Date(year, month + 2, 0).getDate();
   
        createCalendarMonth2();
        
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
const getStupidCalendarDates = document.querySelector("div.calendars");

function calendarValidationCSS()
{
    if (checkoutButton.style.backgroundColor == "white")
    {
        checkinFormInput.value = checkoutFormInput.value;

        selectedCheckinDate.style.backgroundColor = "";
        selectedCheckinDate.style.color = "";
        selectedCheckinDate = selectedCheckoutDate;

        selectedCheckoutDate.style.backgroundColor = "";
        selectedCheckoutDate.style.color = "";

        selectedCheckinDate.style.backgroundColor = "black";
        selectedCheckinDate.style.color = "white";
   
        selectedCheckoutDate = "";
    }

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
            selectedCheckinDate.style.backgroundColor = "";
            selectedCheckinDate.style.color = "";
            selectedCheckinDate = "";
        }

        if (selectedCheckoutDate != "" && checkoutButton.style.backgroundColor == "white")
        {
            selectedCheckoutDate.style.backgroundColor = "";
            selectedCheckoutDate.style.color = "";
            selectedCheckoutDate = "";
        }

        //  apply feedback
        if (selectedCheckinDate == "" && checkinButton.style.backgroundColor == "white")
        {
            selectedCheckinDate = e.target;
            selectedCheckinDate.style.backgroundColor = "black";
            selectedCheckinDate.style.color = "white";
            selectedCheckinMonth = selectedCheckinDate.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[1].innerText.slice(0, -5);
            selectedCheckinYear = +selectedCheckinDate.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[1].innerText.slice(-4);
        
        
        }
        else if (selectedCheckoutDate == "" && checkoutButton.style.backgroundColor == "white")
        {
            selectedCheckoutDate = e.target;
            selectedCheckoutDate.style.backgroundColor = "black";
            selectedCheckoutDate.style.color = "white";
            selectedCheckoutMonth = selectedCheckoutDate.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[1].innerText.slice(0 ,-5);
            selectedCheckoutYear = +selectedCheckoutDate.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[1].innerText.slice(-4);
        
        
        }

        //  validation
        if (checkoutFormInput.value.slice(-4) < checkinFormInput.value.slice(-4))
        {
             calendarValidationCSS();
        }
        else if (monthsAbbreviations.indexOf(checkoutFormInput.value.slice(2, 6).trim()) < monthsAbbreviations.indexOf(checkinFormInput.value.slice(2, 6).trim()) && (checkinFormInput.value != "" && checkoutFormInput.value != ""))
        {
             calendarValidationCSS();
        }
        else if (monthsAbbreviations.indexOf(checkoutFormInput.value.slice(2, 6).trim()) == monthsAbbreviations.indexOf(checkinFormInput.value.slice(2, 6).trim()) && (checkinFormInput.value != "" && checkoutFormInput.value != ""))
        {
            if (+checkoutFormInput.value.slice(0, 2).trim() < +checkinFormInput.value.slice(0, 2).trim())
            {
                calendarValidationCSS();
            } 
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

//  this is nightmare for my brain its so hard to think of stuff even tho i know the solution
calendar2.addEventListener("mouseover", function(e)
{
    if ((selectedCheckinDate == "" || selectedCheckoutDate == "") && e.target.children.length == 0 && e.target.className == "box")
    {
        e.target.classList.add("box_new_hover");
    }
})

calendar2.addEventListener("mouseout", function(e)
{
    if ((selectedCheckinDate == "" || selectedCheckoutDate == "") && e.target.children.length == 0 && e.target.className == "box box_new_hover")
    {    
        e.target.classList.remove("box_new_hover");
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
    location.reload();
    console.log("stop searching")
}

searchButtonExperiences.onclick = function()
{
    location.reload();
    console.log("stop searching lol")
}






