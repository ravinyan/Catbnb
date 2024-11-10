
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
        onClickButtonUnfocus(flexibleBlockWhenButton);
    }
    else 
    {
        //  if on top of page
        document.getElementById("TopHeader").style.height = "161px";

        document.getElementById("MiniForm").style.display = "none";
        document.getElementById("StaysMenuButtons").style.display = "block";

        if (staysMenuButton.style.textShadow == "black 0px 0px 1px")
        {
            document.getElementById("StaysMenuForm").style.display = "block";
        }
        else if (experiencesMenuButton.style.textShadow == "black 0px 0px 1px")
        {
            document.getElementById("ExperiencesMenuForm").style.display = "block";
        } 

        document.getElementById("ScrollDiv").style.top = "162px";
        document.getElementById("ScrollDiv").style.boxShadow = "none";
    }
}

/*--------------------------------------------------------------------------------------------------------------------
---------------------------------------------SCROLL MENU BUTTONS + FILTER---------------------------------------------
----------------------------------------------------------------------------------------------------------------------*/
const buttonLeft = document.getElementById("ScrollLeft");
const buttonRight = document.getElementById("ScrollRight");
const scrollMenu = document.getElementById("ScrollMenu");
const scrollMenuCards = ["Icons", "Lakefront", "Cabins", "Amazing Views", "Top of the world", "Design", "Amazing pools", "Beachfront", 
                         "Tiny homes", "Countryside", "OMG!", "Farms", "Treehouses", "Tropical", "Houseboats", "Mansions", "Boats", 
                         "Domes", "Off-the-grid", "Camping", "Rooms", "National parks", "Castles", "Luxe", "Vineyards", "Islands", 
                         "Top cities", "Caves", "Historical homes", "Barns", "Earth homes", "Play", "Containers", "A-frames", 
                         "Bed & breakfasts", "New", "Chef's kitchens", "Towers", "ski-in/out", "Creative spaces", "Yurts", "Arctic", 
                         "Desert", "Windmils", "Trulli", "Cycladic homes", "Adapted", "Casas particulares", "Grand pianos", "Dammusi",
                         "Riads", "Skiing", "Campers", "Surfing", "Golfing", "Hanoks", "Minsus", "Ryokans", "Shepherd's huts", "Beach", "Lake"]

function generateScrollMenuCards(array)
{
    for (i = 0; i < array.length; i++)
    {
        let divBox = document.createElement("div");
        let aRef = document.createElement("a");

        divBox.className = "";
        aRef.setAttribute("href", `#${array[i]}`);
        aRef.className = "";
        aRef.innerText = `${array[i]}`;

        divBox.appendChild(aRef);

        scrollMenu.appendChild(divBox);
    }
}

generateScrollMenuCards(scrollMenuCards);

function categoriesMenu()
{
    var scrollValue = 0;
    var scrollChange = 0;

    buttonLeft.onclick = function()
    {
        scrollChange = Math.floor(scrollMenu.offsetWidth / 1.35);
        scrollMenu.scrollTo(scrollValue -= scrollChange, 0);

        if (scrollValue < 3700)
        {
            buttonRight.style.display = "flex";
        }

        if (scrollValue <= 0)
        {
            buttonLeft.style.display = "none";
        }
    }
    
    buttonRight.onclick = function()
    {
        scrollChange = Math.floor(scrollMenu.offsetWidth / 1.35);
        scrollMenu.scrollTo(scrollValue += scrollChange, 0);
    
        if (scrollValue >= 3700)
        {
            buttonRight.style.display = "none";
        }

        if (scrollValue > 0)
        {
            buttonLeft.style.display = "flex";
        }
    }
}

categoriesMenu();

const filterButton = document.getElementById("FilterButton");
const filterButtonModal = document.getElementById("FilterButtonModal");
const filterButtonModalBackground = document.getElementById("FilterButtonModalBackground");

filterButton.onclick = function()
{
    filterButtonModal.style.display = "block";
    filterButtonModalBackground.style.display = "block";
}

filterButtonModalBackground.onclick = function()
{
    filterButtonModal.style.display = "none";
    filterButtonModalBackground.style.display = "none";
}

//  type of place
const filterButtonAnyType = document.getElementById("FilterButtonAnyType");
const filterButtonRoom = document.getElementById("FilterButtonRoom");
const filterButtonEntireHome = document.getElementById("FilterButtonEntireHome");

//  price range

//  rooms and beds
const filterButtonDecrementBedrooms = document.getElementById("FilterButtonDecrementBedrooms");
const filterButtonIncrementBedrooms = document.getElementById("FilterButtonIncrementBedrooms");
const filterButtonBedroomsCount = document.getElementById("FilterButtonBedroomsCount");
const filterButtonDecrementBeds = document.getElementById("FilterButtonDecrementBeds");
const filterButtonIncrementBeds = document.getElementById("FilterButtonIncrementBeds");
const filterButtonBedsCount = document.getElementById("FilterButtonBedsCount");
const filterButtonDecrementBathrooms = document.getElementById("FilterButtonDecrementBathrooms");
const filterButtonIncrementBathrooms = document.getElementById("FilterButtonIncrementBathrooms");
const filterButtonBathroomsCount = document.getElementById("FilterButtonBathroomsCount");

//  amenities
const filterModalAmenitiesMore = document.getElementById("FilterModalAmenitiesMore");
const filterModalAmenitiesLess = document.getElementById("FilterModalAmenitiesLess");
const filterModalShowMoreAmenities = document.getElementById("FilterModalShowMoreAmenities");
const filterModalShowLessAmenities = document.getElementById("FilterModalShowLessAmenities");
const filterButtonAmenitiesEssentialsTitle = document.getElementById("FilterButtonAmenitiesEssentialsTitle");

filterModalShowMoreAmenities.onclick = function()
{
    filterModalShowMoreAmenities.style.display = "none";
    filterButtonAmenitiesEssentialsTitle.style.display = "block";
    filterModalAmenitiesMore.style.display = "block";
}

filterModalShowLessAmenities.onclick = function()
{
    filterModalShowMoreAmenities.style.display = "block";
    filterButtonAmenitiesEssentialsTitle.style.display = "none";
    filterModalAmenitiesMore.style.display = "none";
}

// amenities buttons... lots of them!
const filterButtonAmenitiesWifi = document.getElementById("FilterButtonAmenitiesWifi");
const filterButtonAmenitiesKitchen = document.getElementById("FilterButtonAmenitiesKitchen");
const filterButtonAmenitiesWasher = document.getElementById("FilterButtonAmenitiesWasher");
const filterButtonAmenitiesDryer = document.getElementById("FilterButtonAmenitiesDryer");
const filterButtonAmenitiesAirConditioning = document.getElementById("FilterButtonAmenitiesAirConditioning");
const filterButtonAmenitiesHeating = document.getElementById("FilterButtonAmenitiesHeating");
const filterButtonAmenitiesDedicatedWorkspace = document.getElementById("FilterButtonAmenitiesDedicatedWorkspace");
const filterButtonAmenitiesTV = document.getElementById("FilterButtonAmenitiesTV");
const filterButtonAmenitiesHairDryer = document.getElementById("FilterButtonAmenitiesHairDryer");
const filterButtonAmenitiesIron = document.getElementById("FilterButtonAmenitiesIron");
const filterButtonAmenitiesPool = document.getElementById("FilterButtonAmenitiesPool");
const filterButtonAmenitiesHotTub = document.getElementById("FilterButtonAmenitiesHotTub");
const filterButtonAmenitiesFreeParking = document.getElementById("FilterButtonAmenitiesFreeParking");
const filterButtonAmenitiesEVCharger = document.getElementById("FilterButtonAmenitiesEVCharger");
const filterButtonAmenitiesCrib = document.getElementById("FilterButtonAmenitiesCrib");
const filterButtonAmenitiesKingBed = document.getElementById("FilterButtonAmenitiesKingBed");
const filterButtonAmenitiesGym = document.getElementById("FilterButtonAmenitiesGym");
const filterButtonAmenitiesBBQGrill = document.getElementById("FilterButtonAmenitiesBBQGrill");
const filterButtonAmenitiesBreakfast = document.getElementById("FilterButtonAmenitiesBreakfast");
const filterButtonAmenitiesIndoorFireplace = document.getElementById("FilterButtonAmenitiesIndoorFireplace");
const filterButtonAmenitiesSmokingAllowed = document.getElementById("FilterButtonAmenitiesSmokingAllowed");
const filterButtonAmenitiesBeachfront = document.getElementById("FilterButtonAmenitiesBeachfront");
const filterButtonAmenitiesWaterfront = document.getElementById("FilterButtonAmenitiesWaterfront");
const filterButtonAmenitiesSkiInSkiOut = document.getElementById("FilterButtonAmenitiesSkiInSkiOut");
const filterButtonAmenitiesSmokeAlarm = document.getElementById("FilterButtonAmenitiesSmokeAlarm");
const filterButtonAmenitiesCarbonMonoxideAlarm = document.getElementById("FilterButtonAmenitiesCarbonMonoxideAlarm");

filterButtonAmenitiesWifi.onclick = function()
{
    console.log("bop the snot")
}


//  booking options
const FilterButtonBookingInstantBook = document.getElementById("FilterButtonBookingInstantBook");
const FilterButtonBookingSelfCheckin = document.getElementById("FilterButtonBookingSelfCheckin");
const FilterButtonBookingAllowPets = document.getElementById("FilterButtonBookingAllowPets");

//  standout stays
const filterButtonStandoutStays = document.getElementById("FilterButtonStandoutStays");

//  property type
const FilterButtonPropertyTypeHouse = document.getElementById("FilterButtonPropertyTypeHouse");
const FilterButtonPropertyTypeApartment = document.getElementById("FilterButtonPropertyTypeApartment");
const FilterButtonPropertyTypeGuesthouse = document.getElementById("FilterButtonPropertyTypeGuesthouse");
const FilterButtonPropertyTypeHotel = document.getElementById("FilterButtonPropertyTypeHotel");

//  accessibility features
//const q = document.getElementById("");
//const w = document.getElementById("");
//const e = document.getElementById("");
//const r = document.getElementById("");
//const t = document.getElementById("");
//const y = document.getElementById("");
//const u = document.getElementById("");
//const i = document.getElementById("");
//const o = document.getElementById("");
//const p = document.getElementById("");
//const a = document.getElementById("");
//const s = document.getElementById("");
//const d = document.getElementById("");

const lole = document.getElementById("lole");

console.log(lole.checked)

lole.onclick = function()
{
    if (lole.checked == true)
    {
        lole.parentElement.style.background = "black";
        lole.parentElement.style.border = "1px solid black";
    }
    else if (lole.checked == false)
    {
        lole.parentElement.style.background = "white";
        lole.parentElement.style.border = "1px solid #dddddd";
    }
    
    console.log(lole.checked)
}
//  host language

//  property type / accessibility features / host language dropdowns
const filterButtonPropertyTypeDropdown = document.getElementById("FilterButtonPropertyTypeDropdown");
const filterButtonPropertyTypeDropdownMenu = document.getElementById("FilterButtonPropertyTypeDropdownMenu");

const filterButtonAccessibilityFeaturesDropdown = document.getElementById("FilterButtonAccessibilityFeaturesDropdown");
const filterButtonAccessibilityFeaturesDropdownMenu = document.getElementById("FilterButtonAccessibilityFeaturesDropdownMenu");

const filterButtonHostLanguageDropdown = document.getElementById("FilterButtonHostLanguageDropdown");
const filterButtonHostLanguageDropdownMenu = document.getElementById("FilterButtonHostLanguageDropdownMenu");

var alternatePropertyDropdown = true;
var alternateAccessibilityDropdown = true;
var alternateHostDropdown = true;

function filterButtonOpenDropdown(dropdown, menu, alternator)
{
    dropdown.onclick = function()
    {
        if (alternator == true)
        {
            dropdown.childNodes[3].innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                                    <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                                                </svg>`
            
            menu.style.display = "block";
            alternator = false;
        }
        else if (alternator == false)
        {
            dropdown.childNodes[3].innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                                                </svg>`
            
            menu.style.display = "none";
            alternator = true;
        }
    }
}

filterButtonOpenDropdown(filterButtonPropertyTypeDropdown, filterButtonPropertyTypeDropdownMenu, alternatePropertyDropdown);
filterButtonOpenDropdown(filterButtonAccessibilityFeaturesDropdown, filterButtonAccessibilityFeaturesDropdownMenu, alternateAccessibilityDropdown);
filterButtonOpenDropdown(filterButtonHostLanguageDropdown, filterButtonHostLanguageDropdownMenu, alternateHostDropdown);

// last thingy footer
const filterButtonClearAll = document.getElementById("FilterButtonClearAll"); 
const filterButtonShowPlaces = document.getElementById("FilterButtonShowPlaces"); 

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
const globeIcon = document.getElementById("GlobeIcon");
const languageRegionCurrencyModal = document.getElementById("LanguageRegionCurrencyModal");
const languageRegionCurrencyModalBackground = document.getElementById("LanguageRegionCurrencyModalBackground");
const languagesButton = document.getElementById("ModalLanguageAndRegionButton");
const currenciesButton = document.getElementById("ModalCurrenciesButton");

const languages = document.getElementById("LanguageAndRegion");
const currencies = document.getElementById("Currencies");

globeIcon.onclick = function()
{
    languageRegionCurrencyModal.style.display = "block";
    languageRegionCurrencyModalBackground.style.display = "block";
}

languageRegionCurrencyModalBackground.onclick = function()
{
    languageRegionCurrencyModalBackground.style.display = "none";
    languageRegionCurrencyModal.style.display = "none";
}

languagesButton.onclick = function()
{
    languagesButton.style.fontWeight = "600";
    currenciesButton.style.fontWeight = "";
    languages.style.display = "block";
    currencies.style.display = "none";
}

currenciesButton.onclick = function()
{
    languagesButton.style.fontWeight = "";
    currenciesButton.style.fontWeight = "600";
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
const flexibleBlockWhenButton = document.getElementById("FlexibleBlockWhenButton");

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

document.addEventListener('mousedown', function(e) 
{
    if (e.target == imstupidsvg || e.target == imstupidpath || monthsBlockModalStartDate.style.display == "block" || monthsBlockModalEndDate.style.display == "block")
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
        
        onClickButtonUnfocus(whenButton);
        onClickButtonUnfocus(flexibleBlockWhenButton);
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

        onClickButtonUnfocus(whenButton);
        onClickButtonUnfocus(flexibleBlockWhenButton);
        onClickButtonUnfocus(checkoutButton);
    }
    //  WHEN BUT MONTHS BLOCK
    else if (!datesDropdown.contains(e.target) && !whenButton.contains(e.target)
         &&   datesDropdown.style.display == "block" && whenButton.style.backgroundColor == "white")
    {
        if (!form.contains(e.target))
        {
            form.style.backgroundColor = "";
        }

        datesDropdown.style.display = "none";
        onClickButtonUnfocus(flexibleBlockWhenButton);
        onClickButtonUnfocus(whenButton);
    }
    //  WHEN BUT FLEXIBLE BLOCK
    else if (!datesDropdown.contains(e.target) && !flexibleBlockWhenButton.contains(e.target)
         &&   datesDropdown.style.display == "block" && flexibleBlockWhenButton.style.backgroundColor == "white")
    {
        if (!form.contains(e.target))
        {
            form.style.backgroundColor = "";
        }

        datesDropdown.style.display = "none";
        onClickButtonUnfocus(flexibleBlockWhenButton);
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
openWindow(flexibleBlockWhenButton, datesDropdown);

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

const adultsCountExperiences = document.getElementById("AdultsCountExperiences");
const decrementAdultCountButtonExperiences = document.getElementById("DecreaseAdultCountExperiences");
const incrementAdultCountButtonExperiences = document.getElementById("IncreaseAdultCountExperiences");

const childrenCountExperiences = document.getElementById("ChildrenCountExperiences");
const decrementChildCountButtonExperiences = document.getElementById("DecreaseChildCountExperiences");
const incrementChildCountButtonExperiences = document.getElementById("IncreaseChildCountExperiences");

const infantsCountExperiences = document.getElementById("InfantsCountExperiences");
const decrementInfantCountButtonExperiences = document.getElementById("DecreaseInfantCountExperiences");
const incrementInfantCountButtonExperiences = document.getElementById("IncreaseInfantCountExperiences");

const formGuestsInputExperiences = document.getElementById("GuestsInputExperiences");

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

function changeGuestsValueExperiences()
{
    let guestCount  = +adultsCountExperiences.innerText + +childrenCountExperiences.innerText > 1 
                    ? `${+adultsCountExperiences.innerText + +childrenCountExperiences.innerText} guests`
                    : +adultsCountExperiences.innerText + +childrenCountExperiences.innerText != 0 
                    ? `${+adultsCountExperiences.innerText + +childrenCountExperiences.innerText} guest`
                    : "";

    let infantCount = infantsCountExperiences.innerText > 1
                    ? `, ${infantsCountExperiences.innerText} infants` 
                    : infantsCountExperiences.innerText != 0
                    ? `, ${infantsCountExperiences.innerText} infant`
                    : "";

    formGuestsInputExperiences.value = `${guestCount}${infantCount}`;
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

function changeNumberExperiences(entity, increment, decrement) 
{
    increment.onclick = function()
    {
        if (increment.style.cursor == "pointer")
        {
            entity.innerText ++;

            if ((childrenCountExperiences.innerText > 0 || infantsCountExperiences.innerText > 0) && adultsCountExperiences.innerText <= 1)
            {
                if (adultsCountExperiences.innerText == 0)
                {
                    adultsCountExperiences.innerText ++;
                }
                else
                {
                    decrementAdultCountButtonExperiences.style.cursor = "not-allowed";

                    changeButtonIncrease(decrementAdultCountButtonExperiences);
                } 
            }

            changeGuestsValueExperiences();

            decrement.style.cursor = "pointer";

            var decr = decrement.classList;
            decr.add("guest_button_color");

            if ((+adultsCountExperiences.innerText + +childrenCountExperiences.innerText) == 16)
            {
                incrementAdultCountButtonExperiences.style.cursor = "not-allowed";
                incrementChildCountButtonExperiences.style.cursor = "not-allowed"; 

                changeButtonIncrease(incrementAdultCountButtonExperiences);
                changeButtonIncrease(incrementChildCountButtonExperiences);
            }

            if (infantsCountExperiences.innerText == 5)
            {
                incrementInfantCountButtonExperiences.style.cursor = "not-allowed";

                changeButtonIncrease(incrementInfantCountButtonExperiences);
            }
        }
    }

    decrement.onclick = function()
    {
        if (decrement.style.cursor == "pointer")
        {
            entity.innerText --;

            if ((childrenCountExperiences.innerText == 0 && infantsCountExperiences.innerText == 0) && adultsCountExperiences.innerText >= 1)
            {
                decrementAdultCountButtonExperiences.style.cursor = "pointer";

                changeButtonDecrease(decrementAdultCountButtonExperiences);
            }

            if ((childrenCountExperiences.innerText > 0 || infantsCountExperiences.innerText > 0) && adultsCountExperiences.innerText == 1)
            {
                decrementAdultCountButtonExperiences.style.cursor = "not-allowed";

                changeButtonIncrease(decrementAdultCountButtonExperiences);
            }

            changeGuestsValueExperiences();

            var decr = decrement.classList;
            if (entity.innerText == 0)
            {
                decr.remove("guest_button_color");
            }  

            if ((+adultsCountExperiences.innerText + +childrenCountExperiences.innerText) < 16)
            {
                incrementAdultCountButtonExperiences.style.cursor = "pointer";
                incrementChildCountButtonExperiences.style.cursor = "pointer";

                changeButtonDecrease(incrementAdultCountButtonExperiences);
                changeButtonDecrease(incrementChildCountButtonExperiences);
            }

            if (infantsCountExperiences.innerText < 5)
            {
                incrementInfantCountButtonExperiences.style.cursor = "pointer";

                changeButtonDecrease(incrementInfantCountButtonExperiences);
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

changeNumberExperiences(adultsCountExperiences, incrementAdultCountButtonExperiences, decrementAdultCountButtonExperiences);
changeNumberExperiences(childrenCountExperiences, incrementChildCountButtonExperiences, decrementChildCountButtonExperiences);
changeNumberExperiences(infantsCountExperiences, incrementInfantCountButtonExperiences, decrementInfantCountButtonExperiences);

/*--------------------------------------------------------------------------------------------------------------------
----------------------------------------------CHECK IN/CHECK OUT CALENDAR---------------------------------------------
--------------------------------------------------ALSO WHEN CALENDARS-------------------------------------------------*/
const calendar = document.getElementById("Calendar");
const calendar2 = document.getElementById("Calendar2");
const calendarExperiences = document.getElementById("CalendarExperiences");
const calendar2Experiences = document.getElementById("Calendar2Experiences");

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
const monthsBlockCalendarStartLeft = document.getElementById("MonthsBlockCalendarStartLeft");
const monthsBlockCalendarStartRight = document.getElementById("MonthsBlockCalendarStartRight");
const monthsBlockCalendarEndLeft = document.getElementById("MonthsBlockCalendarEndLeft");
const monthsBlockCalendarEndRight = document.getElementById("MonthsBlockCalendarEndRight");

var monthsBlockStartDate = new Date(year, month + 1, 1);
const monthsBlockEndDate = new Date(year, month + 4, 1);

var monthsBlockSelectedStartDate = document.createElement(null);
monthsBlockSelectedStartDate.innerText = 1;
var monthsBlockSelectedEndDate = document.createElement(null);
monthsBlockSelectedEndDate.innerText = 1;

var monthsBlockSelectedStartMonth = months[monthsBlockStartDate.getMonth()];
var monthsBlockSelectedEndMonth = months[monthsBlockEndDate.getMonth()];
var monthsBlockSelectedStartYear = monthsBlockStartDate.getFullYear();
var monthsBlockSelectedEndYear = monthsBlockEndDate.getFullYear();

var monthsBlockPreviousSelectedStartDate = "";
var monthsBlockPreviousSelectedStartMonth = "";
var monthsBlockPreviousSelectedStartYear = "";
var monthsBlockPreviousSelectedEndDate = "";
var monthsBlockPreviousSelectedEndMonth = "";
var monthsBlockPreviousSelectedEndYear = "";

const monthsBlockModalStartDate = document.getElementById("MonthsBlockModalStartDate");
const monthsBlockModalEndDate = document.getElementById("MonthsBlockModalEndDate");

function keepShadowBetweenDates(month, year, x, td, div, checkinDate, checkoutDate, checkinMonth, checkoutMonth, checkinYear, checkoutYear)
{
    // i give up fixing this
    if (checkinDate.tagName != "NULL" && checkoutDate.tagName != "NULL")
    {
        if (x == +checkinDate.innerText && checkinMonth == months[month] && checkinYear == year)
        {
            td.style.background = calendarShadowCheckinColor;
        }
        else if (x == +checkoutDate.innerText && checkoutMonth == months[month] && checkoutYear == year)
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
        &&  checkinYear != checkoutYear && x < +checkoutDate.innerText && checkoutYear == year)
        {
            td.style.background = calendarShadowColor;
            div.style.borderColor = calendarShadowColor; 
        }
        else if (months.indexOf(checkoutMonth) > months.indexOf(months[month])
             &&  checkinYear != checkoutYear && checkoutYear == year)
        {
            td.style.background = calendarShadowColor;
            div.style.borderColor = calendarShadowColor; 
        }

        if (year < checkoutYear && year > checkinYear || year < checkoutYear && year > checkinYear)
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

    if (month == 10 && nextMonth == 0)
    {
        nextYear = year;
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
            else if ((calendarId == monthsBlockCalendarStartLeft || calendarId == monthsBlockCalendarEndLeft) && monthsBlockModalEndDate.style.display == "block"
                 &&  month == currentMonth && year == currentYear && x <= endOfCurrentMonth)
            {
                td.className = "td_box";
                div.innerText = x;
                div.className = "box_past";
            }
            else if (monthsBlockModalEndDate.style.display == "block" 
                 &&  ((x < +monthsBlockSelectedStartDate.innerText && month == months.indexOf(monthsBlockSelectedStartMonth) && year == monthsBlockSelectedStartYear)
                 ||  (month < months.indexOf(monthsBlockSelectedStartMonth) && year == monthsBlockSelectedStartYear)
                 ||  (year < monthsBlockSelectedStartYear)) && x <= endOfCurrentMonth)
            {
                td.className = "td_box";
                div.innerText = x;
                div.className = "box_past";
            }
            else if (monthsBlockModalEndDate.style.display == "block"
                 &&  (x > +monthsBlockSelectedStartDate.innerText && month == months.indexOf(monthsBlockSelectedStartMonth) && year == monthsBlockSelectedStartYear + 1
                 ||  ((month > months.indexOf(monthsBlockSelectedStartMonth) && year == monthsBlockSelectedStartYear + 1)
                 ||  (year == currentYear + 2))) && x <= endOfCurrentMonth)
            {
                td.className = "td_box";
                div.innerText = x;
                div.className = "box_past";
            }
            else if ((monthsBlockModalStartDate.style.display == "block" || monthsBlockModalEndDate.style.display == "block") && month >= currentMonth
                 &&  year == currentYear + 2 && ((x > 1 && month == currentMonth) || month > currentMonth)
                 &&  x <= endOfCurrentMonth)
            {
                td.className = "td_box";
                div.innerText = x;
                div.className = "box_past";
            }
            else if ((monthsBlockModalStartDate.style.display == "block" || monthsBlockModalEndDate.style.display == "block") && year > currentYear + 2 && x <= endOfCurrentMonth)
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
                    if ((calendarId == monthsBlockCalendarStartLeft || calendarId == monthsBlockCalendarEndLeft) && x == +checkinDate.innerText && month == months.indexOf(checkinMonth) && year == checkinYear)
                    {
                        div.style.backgroundColor = "black";
                        div.style.color = "white";
                     
                        monthsBlockSelectedStartDate = div;
                        monthsBlockSelectedStartDate.innerText = x;

                        if (monthsBlockPreviousSelectedStartDate == "")
                        {
                            monthsBlockPreviousSelectedStartDate = monthsBlockSelectedStartDate;
                            monthsBlockPreviousSelectedStartMonth = monthsBlockSelectedStartMonth;
                            monthsBlockPreviousSelectedStartYear = monthsBlockSelectedStartYear;
                        }
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

                keepShadowBetweenDates(month, year, x, td, div, checkinDate, checkoutDate, checkinMonth, checkoutMonth, checkinYear, checkoutYear);
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

            if (monthsBlockModalEndDate.style.display == "block"
            &&  ((x < +monthsBlockSelectedStartDate.innerText && nextMonth == months.indexOf(monthsBlockSelectedStartMonth) && nextYear == monthsBlockSelectedStartYear)
            ||  (nextMonth < months.indexOf(monthsBlockSelectedStartMonth) && nextYear == monthsBlockSelectedStartYear)
            ||  (nextYear < monthsBlockSelectedStartYear)) && x <= endOfNextMonth)
            {
                td.className = "td_box";
                div.innerText = x;
                div.className = "box_past";
            }
            else if (monthsBlockModalEndDate.style.display == "block"
                 &&  (x > +monthsBlockSelectedStartDate.innerText && nextMonth == months.indexOf(monthsBlockSelectedStartMonth) && nextYear == monthsBlockSelectedStartYear + 1
                 ||  ((nextMonth > months.indexOf(monthsBlockSelectedStartMonth) && nextYear == monthsBlockSelectedStartYear + 1)
                 ||  (nextYear == currentYear + 2))) && x <= endOfNextMonth)
            {
                td.className = "td_box";
                div.innerText = x;
                div.className = "box_past";
            }
            else if ((monthsBlockModalStartDate.style.display == "block" || monthsBlockModalEndDate.style.display == "block") && nextMonth >= currentMonth 
                 &&  nextYear == currentYear + 2 && ((x > 1 && nextMonth == currentMonth) || nextMonth > currentMonth)
                 &&  x <= endOfNextMonth)
            {
                td.className = "td_box";
                div.innerText = x;
                div.className = "box_past";   
            }
            else if ((monthsBlockModalStartDate.style.display == "block" || monthsBlockModalEndDate.style.display == "block") && nextYear > currentYear + 2 && x <= endOfNextMonth)
            {
                td.className = "td_box";
                div.innerText = x;
                div.className = "box_past";
            }
            else
            {
                td.className = "td_box";

                if (x > endOfNextMonth)
                {
                    break;
                }
                else
                {
                    if ((calendarId == monthsBlockCalendarStartRight || calendarId == monthsBlockCalendarEndRight) && x == +checkoutDate.innerText && nextMonth == months.indexOf(checkoutMonth) && nextYear == checkoutYear)
                    {
                        div.style.backgroundColor = "black";
                        div.style.color = "white";

                        monthsBlockSelectedEndDate = div;
                        monthsBlockSelectedEndDate.innerText = x;

                        if (monthsBlockPreviousSelectedEndDate == "")
                        {
                            monthsBlockPreviousSelectedEndDate = monthsBlockSelectedEndDate;
                            monthsBlockPreviousSelectedEndMonth = monthsBlockSelectedEndMonth;
                            monthsBlockPreviousSelectedEndYear = monthsBlockSelectedEndYear;
                        }
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

                keepShadowBetweenDates(nextMonth, nextYear, x, td, div, checkinDate, checkoutDate, checkinMonth, checkoutMonth, checkinYear, checkoutYear);
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

createCalendarMonth(calendar, selectedCheckinDate, selectedCheckoutDate, selectedCheckinMonth, selectedCheckoutMonth, selectedCheckinYear, selectedCheckoutYear);
createCalendarMonth2(calendar2, selectedCheckinDate, selectedCheckoutDate, selectedCheckinMonth, selectedCheckoutMonth, selectedCheckinYear, selectedCheckoutYear);

staysMenuButton.addEventListener("click", function()
{
    initializeDatesCalendars(calendar, calendar2);
})

//  -------------------- MOVING CALENDARS LEFT/RIGHT --------------------
const moveCalendarLeft = document.getElementById("MoveCalendarsLeft");
const moveCalendarRight = document.getElementById("MoveCalendarsRight");
const datesButton = document.getElementById("DatesButton");

const moveCalendarLeftExperiences = document.getElementById("MoveCalendarsLeftExperiences");
const moveCalendarRightExperiences = document.getElementById("MoveCalendarsRightExperiences");

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

moveCalendarLeftExperiences.onclick = function()
{
    moveCalendarsLeft(moveCalendarLeftExperiences, calendarExperiences, calendar2Experiences)
}

moveCalendarRightExperiences.onclick = function()
{
    moveCalendarsRight(moveCalendarRightExperiences, moveCalendarLeftExperiences, calendarExperiences, calendar2Experiences)
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
    removeCalendarsShadows(firstCalendar, secondCalendar, checkinDate, checkoutDate);

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
        //  reset feedback
        if (selectedCheckinDate.tagName != "NULL" && checkinButton.style.backgroundColor == "white")
        {
            selectedCheckinDate.style.background = "";
            selectedCheckinDate.style.color = "";

            removeCalendarsShadows(calendar, calendar2, selectedCheckinDate, selectedCheckoutDate);
            selectedCheckinDate = document.createElement(null);     
        }
        else if (selectedCheckoutDate.tagName != "NULL" && checkoutButton.style.backgroundColor == "white")
        {
            selectedCheckoutDate.style.background = "";
            selectedCheckoutDate.style.color = "";

            removeCalendarsShadows(calendar, calendar2, selectedCheckinDate, selectedCheckoutDate);
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

            correctCalendarsShadows(calendar, calendar2, selectedCheckinDate, selectedCheckoutDate);
        }
        else if (selectedCheckoutDate.tagName == "NULL" && checkoutButton.style.backgroundColor == "white")
        {
            selectedCheckoutDate = e.target;
            selectedCheckoutDate.style.background = "black";
            selectedCheckoutDate.style.color = "white";
            selectedCheckoutMonth = selectedCheckoutDate.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[1].innerText.slice(0 ,-5);
            selectedCheckoutYear = +selectedCheckoutDate.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[1].innerText.slice(-4);

            correctCalendarsShadows(calendar, calendar2, selectedCheckinDate, selectedCheckoutDate);
        }

        if (checkinButton.style.backgroundColor == "white")
        {
            checkinFormInput.value = `${selectedCheckinDate.innerText} ${monthsAbbreviations[months.indexOf(selectedCheckinMonth)]} ${selectedCheckinYear} ${pmText}`;
        }
        else if (checkoutButton.style.backgroundColor == "white")
        {
            checkoutFormInput.value = `${selectedCheckoutDate.innerText} ${monthsAbbreviations[months.indexOf(selectedCheckoutMonth)]} ${selectedCheckoutYear} ${pmText}`;
        }

        //  validation
        if ((+selectedCheckinDate.innerText >= +selectedCheckoutDate.innerText) 
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

    removeCalendarsShadows(calendar, calendar2, selectedCheckinDate, selectedCheckoutDate);

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

function applyShadowBetweenDates(currentCalendar, firstCalendar, secondCalendar, target, checkinDate, checkoutDate, checkinMonth, checkoutMonth, checkinYear, checkoutYear)
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

    if (currentCalendar == calendarExperiences || currentCalendar == calendar2Experiences)
    {
        if (checkinDate.tagName != "NULL")
        {
            otherCalendar = checkinDate.parentElement.parentElement.parentElement.parentElement.parentElement;

            if (currentCalendar == calendar2Experiences)
            {
                otherCalendar = calendarExperiences;
            }
        }
        else if (checkoutDate.tagName != "NULL")
        {
            otherCalendar = checkoutDate.parentElement.parentElement.parentElement.parentElement.parentElement;

            if (currentCalendar == calendarExperiences)
            {
                otherCalendar = calendar2Experiences;
            }
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
                            if (checkinDate.parentElement.parentElement.parentElement.parentElement.parentElement != firstCalendar
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
                            if (checkoutDate.parentElement.parentElement.parentElement.parentElement.parentElement != secondCalendar
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
                            else if (checkinDate.parentElement.parentElement.parentElement.parentElement.parentElement != secondCalendar
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
                            else if (checkoutDate.parentElement.parentElement.parentElement.parentElement.parentElement != firstCalendar
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

function calendarAddShadow(e, calendar, firstCalendar, secondCalendar, checkinDate, checkoutDate, checkinMonth, checkoutMonth, checkinYear, checkoutYear)
{ 
    if ((checkinDate.tagName == "NULL" || checkoutDate.tagName == "NULL") && e.target.children.length == 0 && e.target.className == "box")
    {
        e.target.classList.add("box_new_hover");

        if (checkinDate.tagName == "NULL" && (checkinButton.style.backgroundColor == "white" || datesButtonExperiences.style.backgroundColor == "white")
        ||  checkoutDate.tagName == "NULL" && (checkoutButton.style.backgroundColor == "white" || datesButtonExperiences.style.backgroundColor == "white"))
        {
            applyShadowBetweenDates(calendar, firstCalendar, secondCalendar, e.target, checkinDate, checkoutDate, checkinMonth, checkoutMonth, checkinYear, checkoutYear);
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
            removeCalendarsShadows(firstCalendar, secondCalendar, selectedCheckinDate, selectedCheckoutDate);
        }
    }
}

calendar.addEventListener("mouseover", function(e)
{
    calendarAddShadow(e, calendar, calendar, calendar2, selectedCheckinDate, selectedCheckoutDate, selectedCheckinMonth, selectedCheckoutMonth, selectedCheckinYear, selectedCheckoutYear);
})

calendar.addEventListener("mouseout", function(e)
{
    calendarRemoveShadow(e, calendar, calendar2, selectedCheckinDate, selectedCheckoutDate);
})

calendar2.addEventListener("mouseover", function(e)
{
    calendarAddShadow(e, calendar2, calendar, calendar2, selectedCheckinDate, selectedCheckoutDate, selectedCheckinMonth, selectedCheckoutMonth, selectedCheckinYear, selectedCheckoutYear);
})

calendar2.addEventListener("mouseout", function(e)
{
    calendarRemoveShadow(e, calendar, calendar2, selectedCheckinDate, selectedCheckoutDate);
})

// ---------------------------- Experiences calendar ---------------------------
// please end my misery i hate calendars i thought i was done with them i hate this
function initializeDatesExperiencesCalendars(firstCalendar, secondCalendar)
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

datesButtonExperiences.addEventListener("click", function() 
{
    initializeDatesExperiencesCalendars(calendarExperiences, calendar2Experiences);
})

experiencesMenuButton.addEventListener("click", function()
{
    dateInputExperiences.value = checkoutFormInput.value == "" ? `${checkinFormInput.value}` 
                               : `${checkinFormInput.value} - ${checkoutFormInput.value}`
})

function datesCSSValitation()
{
    if (alternateDates == false)
    {
        selectedCheckoutDate.style.background = "";
        selectedCheckoutDate.style.color = "";
        checkoutFormInput.value = "";

        removeCalendarsShadows(calendarExperiences, calendar2Experiences, selectedCheckinDate, selectedCheckoutDate);

        try
        {
            selectedCheckoutDate.parentElement.style.background = "";
        }
        catch{}

        selectedCheckoutDate = document.createElement(null);
    }
    else if (alternateDates == true)
    {
        selectedCheckinDate.style.background = "";
        selectedCheckinDate.style.color = "";
        checkoutFormInput.value = "";

        removeCalendarsShadows(calendarExperiences, calendar2Experiences, selectedCheckinDate, selectedCheckoutDate);

        try
        {
            selectedCheckinDate.parentElement.style.background = "";
        }
        catch{}
        
        selectedCheckinDate = selectedCheckoutDate;
        checkinFormInput.value = `${selectedCheckinDate.innerText} ${monthsAbbreviations[months.indexOf(selectedCheckinMonth)]} ${selectedCheckinYear}`;
        selectedCheckoutDate = document.createElement(null);
        alternateDates = false;
    }
}

const getCalendarsDateExperiences = document.getElementById("DatesCalendarsExperiences");
const dateInputExperiences = document.getElementById("DateInputExperiences");
var alternateDates = true;

getCalendarsDateExperiences.onclick = function(e)
{
    if (e.target.children.length == 0 && e.target.className == "box" || e.target.className == "box box_new_hover")
    {
        if (selectedCheckinDate.tagName != "NULL" && alternateDates == true)
        {
            selectedCheckinDate.style.background = "";
            selectedCheckinDate.style.color = "";

            removeCalendarsShadows(calendarExperiences, calendar2Experiences, selectedCheckinDate, selectedCheckoutDate);
            selectedCheckinDate = document.createElement(null);   
        }
        else if (selectedCheckoutDate.tagName != "NULL" && alternateDates == false)
        {
            selectedCheckoutDate.style.background = "";
            selectedCheckoutDate.style.color = "";

            removeCalendarsShadows(calendarExperiences, calendar2Experiences, selectedCheckinDate, selectedCheckoutDate);
            selectedCheckoutDate = document.createElement(null);
        }

        if (selectedCheckinDate.tagName == "NULL" && alternateDates == true)
        {
            selectedCheckinDate = e.target;
            selectedCheckinDate.style.background = "black";
            selectedCheckinDate.style.color = "white";
            selectedCheckinMonth = selectedCheckinDate.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[1].innerText.slice(0, -5);
            selectedCheckinYear = +selectedCheckinDate.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[1].innerText.slice(-4);

            if (selectedCheckinDate.tagName != "NULL" && selectedCheckoutDate.tagName != "NULL")
            {
                correctCalendarsShadows(calendarExperiences, calendar2Experiences, selectedCheckinDate, selectedCheckoutDate);
            }
            
            checkinFormInput.value = `${selectedCheckinDate.innerText} ${monthsAbbreviations[months.indexOf(selectedCheckinMonth)]} ${selectedCheckinYear}`;
            alternateDates = false;
        }
        else if (selectedCheckoutDate.tagName == "NULL" && alternateDates == false)
        {
            selectedCheckoutDate = e.target;
            selectedCheckoutDate.style.background = "black";
            selectedCheckoutDate.style.color = "white";
            selectedCheckoutMonth = selectedCheckoutDate.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[1].innerText.slice(0 ,-5);
            selectedCheckoutYear = +selectedCheckoutDate.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[1].innerText.slice(-4);

            if (selectedCheckinDate.tagName != "NULL" && selectedCheckoutDate.tagName != "NULL")
            {
                correctCalendarsShadows(calendarExperiences, calendar2Experiences, selectedCheckinDate, selectedCheckoutDate);
            }

            checkoutFormInput.value = `${selectedCheckoutDate.innerText} ${monthsAbbreviations[months.indexOf(selectedCheckoutMonth)]} ${selectedCheckoutYear}`;
            alternateDates = true;
        }

        if ((+selectedCheckinDate.innerText >= +selectedCheckoutDate.innerText) 
        &&  (selectedCheckinMonth == selectedCheckoutMonth) && (selectedCheckinYear == selectedCheckoutYear)
        &&  (selectedCheckinDate.tagName != "NULL" && selectedCheckoutDate.tagName != "NULL"))
        {
            datesCSSValitation();
        }
        else if (months.indexOf(selectedCheckinMonth) > months.indexOf(selectedCheckoutMonth)
             &&  (selectedCheckinYear == selectedCheckoutYear ) && (checkinFormInput.value != "" && checkoutFormInput.value != ""))
        {
            datesCSSValitation();
        }
        else if ((selectedCheckinYear > selectedCheckoutYear) && (checkinFormInput.value != "" && checkoutFormInput.value != ""))
        {
            datesCSSValitation();
        }

        dateInputExperiences.value = checkoutFormInput.value == "" ? `${checkinFormInput.value}` 
                                   : `${checkinFormInput.value} - ${checkoutFormInput.value}`
        
        if (dateInputExperiences.value != "")
        {
            clearCalendarFormInputButton.style.display = "block";
        }
    }
}

calendarExperiences.addEventListener("mouseover", function(e)
{
    calendarAddShadow(e, calendarExperiences, calendarExperiences, calendar2Experiences, selectedCheckinDate, selectedCheckoutDate, selectedCheckinMonth, selectedCheckoutMonth, selectedCheckinYear, selectedCheckoutYear);
})

calendarExperiences.addEventListener("mouseout", function(e)
{
    calendarRemoveShadow(e, calendarExperiences, calendar2Experiences, selectedCheckinDate, selectedCheckoutDate);
})

calendar2Experiences.addEventListener("mouseover", function(e)
{
    calendarAddShadow(e, calendar2Experiences, calendarExperiences, calendar2Experiences, selectedCheckinDate, selectedCheckoutDate, selectedCheckinMonth, selectedCheckoutMonth, selectedCheckinYear, selectedCheckoutYear);
})

calendar2Experiences.addEventListener("mouseout", function(e)
{
    calendarRemoveShadow(e, calendarExperiences, calendar2Experiences, selectedCheckinDate, selectedCheckoutDate);
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
const monthsBlockDraggableCircle = document.getElementById("MonthsBlockDraggableCircle");
const monthsBlockCircleSVG = document.getElementById("MonthsBlockCircleSVG");
const monthsBlockCircle = document.getElementById("MonthsBlockCircle");
const monthsBlockMonthNumber = document.getElementById("MonthsBlockMonthNumber");
const monthsBlockWhenStartDate = document.getElementById("MonthsBlockWhenStartDate");
const monthsBlockWhenEndDate = document.getElementById("MonthsBlockWhenEndDate");
const monthsBlockWhenInput = document.getElementById("MonthsBlockWhenInput");
var monthsBlockDegrees = "";
var monthsBlockStartDateValue = "";
var monthsBlockEndDateValue = "";
var monthsBlockSavedStartPMValue = "";
var monthsBlockSavedEndPMValue = "";

function monthsBlockSetWhenValues(dateStart, month, number)
{
    if (monthsBlockMonthNumber.innerText == month)
    {

    }
    else
    {
        monthsBlockWhenInput.innerText = "";

        var s = new Date(dateStart);
        var e = new Date(dateStart);

        e.setMonth(e.getMonth() + number);

        monthsBlockWhenStartDate.innerText = `${s.getDate()} ${monthsAbbreviations[s.getMonth()]} ${s.getFullYear()} ${monthsBlockSavedStartPMValue}`;
        monthsBlockWhenEndDate.innerText = `${e.getDate()} ${monthsAbbreviations[e.getMonth()]} ${e.getFullYear()} ${monthsBlockSavedEndPMValue}`;
        
        monthsBlockWhenInput.appendChild(document.createTextNode(`${monthsBlockWhenStartDate.innerText}`));
        monthsBlockWhenInput.appendChild(document.createTextNode(" - "));
        monthsBlockWhenInput.appendChild(document.createTextNode(`${monthsBlockWhenEndDate.innerText}`));

        monthsBlockSelectedEndMonth = months[e.getMonth()];
        monthsBlockSelectedEndYear = e.getFullYear();

        monthsBlockSelectedStartDate.innerText = "1";
        monthsBlockSelectedEndDate.innerText = "1";

        monthsBlockPreviousSelectedStartDate = monthsBlockSelectedStartDate;
        monthsBlockPreviousSelectedStartMonth = monthsBlockSelectedStartMonth;
        monthsBlockPreviousSelectedStartYear = monthsBlockSelectedStartYear;
        monthsBlockPreviousSelectedEndDate = monthsBlockSelectedEndDate;
        monthsBlockPreviousSelectedEndMonth = monthsBlockSelectedEndMonth;
        monthsBlockPreviousSelectedEndYear = monthsBlockSelectedEndYear;

        monthsBlockStartDateValue = `${s.getDate()} ${monthsAbbreviations[s.getMonth()]} ${s.getFullYear()}`;
        monthsBlockEndDateValue = `${e.getDate()} ${monthsAbbreviations[e.getMonth()]} ${e.getFullYear()}`;
    }

    monthsBlockMonthNumber.innerText = month;
}

if (monthsBlockWhenInput.innerText == "")
{
    monthsBlockSetWhenValues(monthsBlockStartDate, "3 Months", 3)
}

function monthsBlockDragCircleCSS()
{
    monthsBlockDraggableCircle.onmouseup = function()
    {
        monthsBlockDraggableCircle.style.cursor = "grab";
    }

    monthsBlockDraggableCircle.onmousedown = function()
    {
        monthsBlockDraggableCircle.style.cursor = "grabbing";
        document.body.style.cursor = "grabbing";
        document.body.style.userSelect = "none";
    }

    document.onmouseup = function(e)
    {
        document.body.style.cursor = "default";
        monthsBlockDraggableCircle.style.cursor = "grab";

        //  snap to middle point of chosen month
        switch (true)
        {
            case monthsBlockDegrees == "":
                break;
            case monthsBlockDegrees > -75 && monthsBlockDegrees < -45:
                monthsBlockDraggableCircle.style.cy = `49.4263px`;
                monthsBlockDraggableCircle.style.cx = `247.5px`;
                break;
            case monthsBlockDegrees > -45 && monthsBlockDegrees < -15:
                monthsBlockDraggableCircle.style.cy = `102.5px`;
                monthsBlockDraggableCircle.style.cx = `300.5736px`;
                break;
            case monthsBlockDegrees > -15 && monthsBlockDegrees < 15:
                monthsBlockDraggableCircle.style.cy = `175px`;
                monthsBlockDraggableCircle.style.cx = `320px`;
                break;
            case monthsBlockDegrees > 15 && monthsBlockDegrees < 45:
                monthsBlockDraggableCircle.style.cy = `247.5px`;
                monthsBlockDraggableCircle.style.cx = `300.5736px`;
                break;
            case monthsBlockDegrees > 45 && monthsBlockDegrees < 75:
                monthsBlockDraggableCircle.style.cy = `300.5736px`;
                monthsBlockDraggableCircle.style.cx = `247.5px`;
                break;
            case monthsBlockDegrees > 75 && monthsBlockDegrees < 105:
                monthsBlockDraggableCircle.style.cy = `320px`;
                monthsBlockDraggableCircle.style.cx = `175px`;
                break;
            case monthsBlockDegrees > 105 && monthsBlockDegrees < 135:
                monthsBlockDraggableCircle.style.cy = `300.5736px`;
                monthsBlockDraggableCircle.style.cx = `102.5px`;
                break;
            case monthsBlockDegrees > 135 && monthsBlockDegrees < 165:
                monthsBlockDraggableCircle.style.cy = `247.5px`;
                monthsBlockDraggableCircle.style.cx = `49.4263px`;
                break;
            case monthsBlockDegrees < -165 || monthsBlockDegrees > 165:
                monthsBlockDraggableCircle.style.cy = `175px`;
                monthsBlockDraggableCircle.style.cx = `30px`;
                break;
            case monthsBlockDegrees > -165 && monthsBlockDegrees < -135:
                monthsBlockDraggableCircle.style.cy = `102.5px`;
                monthsBlockDraggableCircle.style.cx = `49.4263px`;
                break;
            case monthsBlockDegrees > -135 && monthsBlockDegrees < -105:
                monthsBlockDraggableCircle.style.cy = `49.4263px`;
                monthsBlockDraggableCircle.style.cx = `102.5px`;
                break;
            case monthsBlockDegrees > -105 && monthsBlockDegrees < -75:
                monthsBlockDraggableCircle.style.cy = `30px`;
                monthsBlockDraggableCircle.style.cx = `175px`;
                break;
        }
    }
}

function monthsBlockMoveCircle()
{
    document.onmousemove = function(e)
    {
        if (document.body.style.cursor == "grabbing")
        {
            let posY = e.clientY;
            let posX = e.clientX;
            const centreSVGTop = parseInt(monthsBlockCircleSVG.style.height) / 2;
            const centreSVGLeft = parseInt(monthsBlockCircleSVG.style.width) / 2;

            const absoluteTop = monthsBlockCircle.getBoundingClientRect().top;
            const absoluteLeft = monthsBlockCircle.getBoundingClientRect().left;
            const monthsCircleRadius = monthsBlockCircle.getBoundingClientRect().width / 2;

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
                monthsBlockDraggableCircle.style.cy = `${newY}`;
                monthsBlockDraggableCircle.style.cx = `${newX}`;
                monthsBlockDegrees = angle * (180/Math.PI);
            }

            switch (true)
            {
                case monthsBlockDegrees > -75 && monthsBlockDegrees < -45:
                    monthsBlockSetWhenValues(monthsBlockStartDate, "1 Month", 1);
                    break;
                case monthsBlockDegrees > -45 && monthsBlockDegrees < -15:
                    monthsBlockSetWhenValues(monthsBlockStartDate, "2 Months", 2);
                    break;
                case monthsBlockDegrees > -15 && monthsBlockDegrees < 15:
                    monthsBlockSetWhenValues(monthsBlockStartDate, "3 Months", 3);
                    break;
                case monthsBlockDegrees > 15 && monthsBlockDegrees < 45:
                    monthsBlockSetWhenValues(monthsBlockStartDate, "4 Months", 4);
                    break;
                case monthsBlockDegrees > 45 && monthsBlockDegrees < 75:
                    monthsBlockSetWhenValues(monthsBlockStartDate, "5 Months", 5);
                    break;
                case monthsBlockDegrees > 75 && monthsBlockDegrees < 105:
                    monthsBlockSetWhenValues(monthsBlockStartDate, "6 Months", 6);
                    break;
                case monthsBlockDegrees > 105 && monthsBlockDegrees < 135:
                    monthsBlockSetWhenValues(monthsBlockStartDate, "7 Months", 7);
                    break;
                case monthsBlockDegrees > 135 && monthsBlockDegrees < 165:
                    monthsBlockSetWhenValues(monthsBlockStartDate, "8 Months", 8);
                    break;
                case monthsBlockDegrees < -165 || monthsBlockDegrees > 165:
                    monthsBlockSetWhenValues(monthsBlockStartDate, "9 Months", 9);
                    break;
                case monthsBlockDegrees > -165 && monthsBlockDegrees < -135:
                    monthsBlockSetWhenValues(monthsBlockStartDate, "10 Months", 10);
                    break;
                case monthsBlockDegrees > -135 && monthsBlockDegrees < -105:
                    monthsBlockSetWhenValues(monthsBlockStartDate, "11 Months", 11);
                    break;
                case monthsBlockDegrees > -105 && monthsBlockDegrees < -75:
                    monthsBlockSetWhenValues(monthsBlockStartDate, "12 Months", 12);
                    break;
            }
        }
    }   
}

monthsBlockMoveCircle();
monthsBlockDragCircleCSS();

const monthsBlockStartExactDatesButton = document.getElementById("MonthsBlockStartExactDatesButton");
const monthsBlockStartPM1Button = document.getElementById("MonthsBlockStartPM1Button");
const monthsBlockStartPM2Button = document.getElementById("MonthsBlockStartPM2Button");
const monthsBlockStartPM3Button = document.getElementById("MonthsBlockStartPM3Button");
const monthsBlockStartPM7Button = document.getElementById("MonthsBlockStartPM7Button");
const monthsBlockStartPM14Button = document.getElementById("MonthsBlockStartPM14Button");

const monthsBlockEndExactDatesButton = document.getElementById("MonthsBlockEndExactDatesButton");
const monthsBlockEndPM1Button = document.getElementById("MonthsBlockEndPM1Button");
const monthsBlockEndPM2Button = document.getElementById("MonthsBlockEndPM2Button");
const monthsBlockEndPM3Button = document.getElementById("MonthsBlockEndPM3Button");
const monthsBlockEndPM7Button = document.getElementById("MonthsBlockEndPM7Button");
const monthsBlockEndPM14Button = document.getElementById("MonthsBlockEndPM14Button");

var monthsBlockStartPMValue = "";
var monthsBlockEndPMValue = "";
monthsBlockStartExactDatesButton.style.borderColor = "black";
monthsBlockStartExactDatesButton.style.background = "#f0f0f0";
monthsBlockEndExactDatesButton.style.borderColor = "black";
monthsBlockEndExactDatesButton.style.background = "#f0f0f0";
var monthsBlockPreviousStartPMElement = monthsBlockStartExactDatesButton;
var monthsBlockPreviousEndPMElement = monthsBlockEndExactDatesButton;

function monthsBlockAddPMValueStart(value, element)
{
    monthsBlockPreviousStartPMElement.style.borderColor = "";
    monthsBlockPreviousStartPMElement.style.background = "";
    monthsBlockStartPMValue = "";

    element.style.borderColor = "black";
    element.style.background = "#f0f0f0";
    monthsBlockStartPMValue = value;

    monthsBlockPreviousStartPMElement = element;
}

function monthsBlockAddPMValueEnd(value, element)
{
    monthsBlockPreviousEndPMElement.style.borderColor = "";
    monthsBlockPreviousEndPMElement.style.background = "";
    monthsBlockEndPMValue = "";

    element.style.borderColor = "black";
    element.style.background = "#f0f0f0";
    monthsBlockEndPMValue = value;

    monthsBlockPreviousEndPMElement = element;
}

monthsBlockStartExactDatesButton.onclick = function(e)
{
    monthsBlockAddPMValueStart("", e.target);
}

monthsBlockStartPM1Button.onclick = function(e)
{
    monthsBlockAddPMValueStart("±1", e.target);
}

monthsBlockStartPM2Button.onclick = function(e)
{
    monthsBlockAddPMValueStart("±2", e.target);
}

monthsBlockStartPM3Button.onclick = function(e)
{
    monthsBlockAddPMValueStart("±3", e.target);
}

monthsBlockStartPM7Button.onclick = function(e)
{
    monthsBlockAddPMValueStart("±7", e.target);
}

monthsBlockStartPM14Button.onclick = function(e)
{
    monthsBlockAddPMValueStart("±14", e.target);
}

monthsBlockEndExactDatesButton.onclick = function(e)
{
    monthsBlockAddPMValueEnd("", e.target);
}

monthsBlockEndPM1Button.onclick = function(e)
{
    monthsBlockAddPMValueEnd("±1", e.target);
}

monthsBlockEndPM2Button.onclick = function(e)
{
    monthsBlockAddPMValueEnd("±2", e.target);
}

monthsBlockEndPM3Button.onclick = function(e)
{
    monthsBlockAddPMValueEnd("±3", e.target);
}

monthsBlockEndPM7Button.onclick = function(e)
{
    monthsBlockAddPMValueEnd("±7", e.target);
}

monthsBlockEndPM14Button.onclick = function(e)
{
    monthsBlockAddPMValueEnd("±14", e.target);
}

const monthsBlockMoveStartCalendarsLeft = document.getElementById("MonthsBlockMoveStartCalendarsLeft");
const monthsBlockMoveStartCalendarsRight = document.getElementById("MonthsBlockMoveStartCalendarsRight");
const monthsBlockMoveEndCalendarsLeft = document.getElementById("MonthsBlockMoveEndCalendarsLeft");
const monthsBlockMoveEndCalendarsRight = document.getElementById("MonthsBlockMoveEndCalendarsRight");

const getStupidCalendarDatesAgain = document.getElementById("MonthsBlockStartCalendars");
const getStupidCalendarDatesAgainAgain = document.getElementById("MonthsBlockEndCalendars");

function removeCalendarsShadows(firstCalendar, secondCalendar, checkinDate, checkoutDate)
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

function correctCalendarsShadows(firstCalendar, secondCalendar, checkinDate, checkoutDate)
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
            
            if (firstCalendar == calendar && secondCalendar == calendar2 
            &&  (checkinDate.tagName == "NULL" || checkoutDate.tagName == "NULL"))
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

function monthsBlockChangeEndValuesCSS(td, div)
{
    if (monthsBlockSelectedStartDate == monthsBlockSelectedEndDate)
    {

    }
    else
    {
        monthsBlockSelectedEndDate.style.background = "";
        monthsBlockSelectedEndDate.style.backgroundColor = "";
        monthsBlockSelectedEndDate.style.color = "";
    }
    
    if (monthsBlockSelectedEndDate.tagName != "NULL")
    {
        monthsBlockSelectedEndDate.parentElement.style.background = "";
    }
    
    div.style.backgroundColor = "black";
    div.style.color = "white";
    td.style.background = calendarShadowCheckoutColor;
    monthsBlockSelectedEndDate = div;
}

function monthsBlockChangeEndValues(firstCalendar, secondCalendar, eDate)
{
    let x = eDate.getDate();
    monthsBlockSelectedEndMonth = months[eDate.getMonth()];
    monthsBlockSelectedEndYear = eDate.getFullYear();

    loop:
    for (i = 0; i < 6; i++)
    {
        for (j = 0; j < 7; j++)
        {
            try
            {
                var td = firstCalendar.childNodes[4].childNodes[0].childNodes[i].childNodes[j];
                var div = firstCalendar.childNodes[4].childNodes[0].childNodes[i].childNodes[j].childNodes[0];
            }catch{}
            
            try
            {
                var td2 = secondCalendar.childNodes[4].childNodes[0].childNodes[i].childNodes[j];
                var div2 = secondCalendar.childNodes[4].childNodes[0].childNodes[i].childNodes[j].childNodes[0];
            }catch{}

            if ((+div.innerText == x && +div.innerText != 1) && firstCalendar.contains(monthsBlockSelectedStartDate) && firstCalendar.contains(monthsBlockSelectedEndDate))
            {
                if (+monthsBlockSelectedStartDate.innerText + 28 > new Date(monthsBlockSelectedStartYear, months.indexOf(monthsBlockSelectedStartMonth) + 1, 0).getDate())
                {
                    monthsBlockChangeEndValuesCSS(td2, div2);
                }
                else if (x >= +monthsBlockSelectedEndDate.innerText)
                {
                    monthsBlockChangeEndValuesCSS(td, div);
                }

                break loop;
            }
            else if ((+div.innerText == x || +div2.innerText == x) && firstCalendar.contains(monthsBlockSelectedStartDate) && !secondCalendar.contains(monthsBlockSelectedEndDate))
            {
                if (+div.innerText == x && +monthsBlockSelectedStartDate.innerText + 28 <= new Date(monthsBlockSelectedStartYear, months.indexOf(monthsBlockSelectedStartMonth) + 1, 0).getDate()
                &&  x >= +monthsBlockSelectedEndDate.innerText)
                {
                    removeCalendarsShadows(firstCalendar, secondCalendar, monthsBlockSelectedStartDate, monthsBlockSelectedEndDate);
                    monthsBlockChangeEndValuesCSS(td, div);

                    break loop;
                }
                else if (+div2.innerText == x && +monthsBlockSelectedStartDate.innerText + 28 > new Date(monthsBlockSelectedStartYear, months.indexOf(monthsBlockSelectedStartMonth) + 1, 0).getDate())
                {
                    removeCalendarsShadows(firstCalendar, secondCalendar, monthsBlockSelectedStartDate, monthsBlockSelectedEndDate);
                    monthsBlockChangeEndValuesCSS(td2, div2);

                    break loop;
                }
                else if (+div2.innerText == x && +monthsBlockSelectedStartDate.innerText + 28 >= new Date(monthsBlockSelectedStartYear, months.indexOf(monthsBlockSelectedStartMonth) + 1, 0).getDate()
                     &&  x >= monthsBlockSelectedEndDate.innerText)
                {
                    removeCalendarsShadows(firstCalendar, secondCalendar, monthsBlockSelectedStartDate, monthsBlockSelectedEndDate);
                    monthsBlockChangeEndValuesCSS(td2, div2);

                    break loop;
                }
            }
            else if (+div2.innerText == x && (firstCalendar.contains(monthsBlockSelectedStartDate) && secondCalendar.contains(monthsBlockSelectedEndDate)
                 ||  firstCalendar.contains(monthsBlockSelectedEndDate) && secondCalendar.contains(monthsBlockSelectedStartDate)))
            {
                if (+monthsBlockSelectedStartDate.innerText + 28 <= new Date(monthsBlockSelectedStartYear, months.indexOf(monthsBlockSelectedStartMonth) + 1, 0).getDate()
                ||  firstCalendar.contains(monthsBlockSelectedStartDate) && secondCalendar.contains(monthsBlockSelectedEndDate) &&  x >= monthsBlockSelectedEndDate.innerText)
                {
                    removeCalendarsShadows(firstCalendar, secondCalendar, monthsBlockSelectedStartDate, monthsBlockSelectedEndDate);
                    monthsBlockChangeEndValuesCSS(td2, div2);

                    break loop;
                }
                else
                {
                    if (monthsBlockSelectedStartDate != monthsBlockSelectedEndDate && monthsBlockSelectedEndDate.tagName != "NULL")
                    {
                        removeCalendarsShadows(firstCalendar, secondCalendar, monthsBlockSelectedStartDate, monthsBlockSelectedEndDate);
                        monthsBlockSelectedEndDate.style.background = "";
                        monthsBlockSelectedEndDate.parentElement.style.background = "";
                        monthsBlockSelectedEndDate.style.color = "";
                    }
                    
                    monthsBlockSelectedEndDate = document.createElement("NULL");
                    monthsBlockSelectedEndDate.innerText = div2.innerText;

                    break loop;
                }
            }
            else if (+div2.innerText == x && (secondCalendar.contains(monthsBlockSelectedEndDate) 
                 ||  secondCalendar.contains(monthsBlockSelectedStartDate) && !firstCalendar.contains(monthsBlockSelectedEndDate)))
            {
                if (+monthsBlockSelectedStartDate.innerText + 28 <= new Date(monthsBlockSelectedStartYear, months.indexOf(monthsBlockSelectedStartMonth) + 1, 0).getDate()
                &&  x >= monthsBlockSelectedEndDate.innerText)
                {
                    removeCalendarsShadows(firstCalendar, secondCalendar, monthsBlockSelectedStartDate, monthsBlockSelectedEndDate);
                    monthsBlockChangeEndValuesCSS(td2, div2);

                    break loop;
                }
                else
                {
                    if (monthsBlockSelectedStartDate != monthsBlockSelectedEndDate && monthsBlockSelectedEndDate.tagName != "NULL")
                    {
                        removeCalendarsShadows(firstCalendar, secondCalendar, monthsBlockSelectedStartDate, monthsBlockSelectedEndDate);
                        monthsBlockSelectedEndDate.style.background = "";
                        monthsBlockSelectedEndDate.parentElement.style.background = "";
                        monthsBlockSelectedEndDate.style.color = "";
                    }
                    
                    monthsBlockSelectedEndDate = document.createElement("NULL");
                    monthsBlockSelectedEndDate.innerText = div2.innerText;

                    break loop;
                }
            }
            else if (!firstCalendar.contains(monthsBlockSelectedEndDate) && !secondCalendar.contains(monthsBlockSelectedEndDate) && secondCalendar.contains(monthsBlockSelectedStartDate)
                 &&  monthsBlockSelectedEndDate.tagName != "NULL")
            {
                monthsBlockSelectedEndDate = document.createElement("NULL");
                monthsBlockSelectedEndDate.innerText = x;
            }
        }
    }

    correctCalendarsShadows(firstCalendar, secondCalendar, monthsBlockSelectedStartDate, monthsBlockSelectedEndDate);
}

function monthsBlockValidateDatesPosition()
{
    let sDate = new Date(monthsBlockSelectedStartYear, months.indexOf(monthsBlockSelectedStartMonth), +monthsBlockSelectedStartDate.innerText);
    let eDate = new Date(monthsBlockSelectedEndYear, months.indexOf(monthsBlockSelectedEndMonth), +monthsBlockSelectedEndDate.innerText);
    let x = ""

    if (sDate.getMonth() == eDate.getMonth() && sDate.getFullYear() == eDate.getFullYear())
    {
        x = sDate.getDate() - eDate.getDate();

        if (x >= -28 && x < 28)
        {
            eDate.setDate(sDate.getDate() + 28);
            monthsBlockChangeEndValues(monthsBlockCalendarStartLeft, monthsBlockCalendarStartRight, eDate);
        }
    }
    else
    {
        if (sDate.getMonth() > eDate.getMonth() && sDate.getFullYear() == eDate.getFullYear())
        {
            eDate = new Date(sDate);
            eDate.setDate(eDate.getDate() + 28);
            monthsBlockChangeEndValues(monthsBlockCalendarStartLeft, monthsBlockCalendarStartRight, eDate);
        }
        else if (sDate.getFullYear() > eDate.getFullYear())
        {
            eDate = new Date(sDate);
            eDate.setDate(eDate.getDate() + 28);
            monthsBlockChangeEndValues(monthsBlockCalendarStartLeft, monthsBlockCalendarStartRight, eDate);
        }
        else if (sDate.getMonth() + 1 == eDate.getMonth())
        {
            let imLazy = new Date(sDate.getFullYear(), sDate.getMonth() + 1, 0);
            x = (imLazy.getDate() - sDate.getDate()) + eDate.getDate();

            if (x < 28)
            {
                eDate = new Date(sDate);
                eDate.setDate(sDate.getDate() + 28);
                monthsBlockChangeEndValues(monthsBlockCalendarStartLeft, monthsBlockCalendarStartRight, eDate);
            }
        }
    }
}

getStupidCalendarDatesAgain.onclick = function(e)
{
    if (e.target.children.length == 0 && (e.target.className == "box" || e.target.className == "box box_new_hover"))
    {
        //  reset feedback
        if (monthsBlockSelectedStartDate != "")
        {
            monthsBlockSelectedStartDate.style.background = "";
            monthsBlockSelectedStartDate.style.color = "";

            removeCalendarsShadows(monthsBlockCalendarStartLeft, monthsBlockCalendarStartRight, monthsBlockSelectedStartDate, monthsBlockSelectedEndDate);
            monthsBlockSelectedStartDate = "";     
        }

        //  apply feedback
        if (monthsBlockSelectedStartDate == "")
        {
            monthsBlockSelectedStartDate = e.target;
            monthsBlockSelectedStartDate.style.background = "black";
            monthsBlockSelectedStartDate.style.color = "white";
            monthsBlockSelectedStartMonth = monthsBlockSelectedStartDate.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[1].innerText.slice(0, -5);
            monthsBlockSelectedStartYear = +monthsBlockSelectedStartDate.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[1].innerText.slice(-4);
            
            correctCalendarsShadows(monthsBlockCalendarStartLeft, monthsBlockCalendarStartRight, monthsBlockSelectedStartDate, monthsBlockSelectedEndDate);
        }

        monthsBlockStartDateValue = `${monthsBlockSelectedStartDate.innerText} ${monthsAbbreviations[months.indexOf(monthsBlockSelectedStartMonth)]} ${monthsBlockSelectedStartYear}`;
        monthsBlockValidateDatesPosition();
        monthsBlockEndDateValue = `${monthsBlockSelectedEndDate.innerText} ${monthsAbbreviations[months.indexOf(monthsBlockSelectedEndMonth)]} ${monthsBlockSelectedEndYear}`;
    }
}

const monthsBlockInvalidDayPopup = document.getElementById("MonthsBlockInvalidDayPopup");

function monthsBlockValidateMinimalDaysDifference(e)
{
    let sDate = new Date(monthsBlockSelectedStartYear, months.indexOf(monthsBlockSelectedStartMonth), monthsBlockSelectedStartDate.innerText);
    let check = new Date(sDate);
    try
    {
        let d = +e.target.innerText;
        let m =  e.target.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[1].innerText.slice(0, -5);
        let y = +e.target.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[1].innerText.slice(-4);
        var newsDate = new Date(y, months.indexOf(m), d);
    }catch{}

    sDate.setDate(sDate.getDate() + 28);

    if (sDate > newsDate)
    {
        if (check.getMonth() == newsDate.getMonth() && +e.target.innerText < +monthsBlockSelectedStartDate.innerText)
        {

        }
        else
        {
            e.target.after(monthsBlockInvalidDayPopup);
            monthsBlockInvalidDayPopup.style.display = "block";
        }
    }
}

monthsBlockCalendarEndLeft.onmouseover = function(e)
{
    if (e.target.className == "box")
    {
        monthsBlockValidateMinimalDaysDifference(e);
    }
}

monthsBlockCalendarEndLeft.onmouseout = function(e)
{
    if (e.target.className == "box")
    {
        monthsBlockInvalidDayPopup.style.display = "none";
    }
}

monthsBlockCalendarEndRight.onmouseover = function(e)
{
    if (e.target.className == "box")
    {
        monthsBlockValidateMinimalDaysDifference(e);
    }
}

monthsBlockCalendarEndRight.onmouseout = function(e)
{
    if (e.target.className == "box")
    {
        monthsBlockInvalidDayPopup.style.display = "none";
    }
}

getStupidCalendarDatesAgainAgain.onclick = function(e)
{
    if (e.target.children.length == 0 && (e.target.className == "box" || e.target.className == "box box_new_hover") && e.target.nextSibling != monthsBlockInvalidDayPopup)
    {
        //  reset feedback
        if (monthsBlockSelectedEndDate != "")
        {
            monthsBlockSelectedEndDate.style.background = "";
            monthsBlockSelectedEndDate.style.color = "";
        
            removeCalendarsShadows(monthsBlockCalendarEndLeft, monthsBlockCalendarEndRight, monthsBlockSelectedStartDate, monthsBlockSelectedEndDate);
            monthsBlockSelectedEndDate = "";     
        }
        
        //  apply feedback
        if (monthsBlockSelectedEndDate == "")
        {
            monthsBlockSelectedEndDate = e.target;
            monthsBlockSelectedEndDate.style.background = "black";
            monthsBlockSelectedEndDate.style.color = "white";
            monthsBlockSelectedEndMonth = monthsBlockSelectedEndDate.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[1].innerText.slice(0, -5);
            monthsBlockSelectedEndYear = +monthsBlockSelectedEndDate.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[1].innerText.slice(-4);
        
           correctCalendarsShadows(monthsBlockCalendarEndLeft, monthsBlockCalendarEndRight, monthsBlockSelectedStartDate, monthsBlockSelectedEndDate);
        }

        monthsBlockEndDateValue = `${monthsBlockSelectedEndDate.innerText} ${monthsAbbreviations[months.indexOf(monthsBlockSelectedEndMonth)]} ${monthsBlockSelectedEndYear}`; 
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

        createCalendarMonth(firstCalendar, monthsBlockSelectedStartDate, monthsBlockSelectedEndDate, monthsBlockSelectedStartMonth, monthsBlockSelectedEndMonth, monthsBlockSelectedStartYear, monthsBlockSelectedEndYear);
        createCalendarMonth2(secondCalendar, monthsBlockSelectedStartDate, monthsBlockSelectedEndDate, monthsBlockSelectedStartMonth, monthsBlockSelectedEndMonth, monthsBlockSelectedStartYear, monthsBlockSelectedEndYear); 

        rightButtonClicked = false;
    
        if ((month == currentMonth && year == currentYear + 2))
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

        createCalendarMonth(firstCalendar, monthsBlockSelectedStartDate, monthsBlockSelectedEndDate, monthsBlockSelectedStartMonth, monthsBlockSelectedEndMonth, monthsBlockSelectedStartYear, monthsBlockSelectedEndYear);
        createCalendarMonth2(secondCalendar, monthsBlockSelectedStartDate, monthsBlockSelectedEndDate, monthsBlockSelectedStartMonth, monthsBlockSelectedEndMonth, monthsBlockSelectedStartYear, monthsBlockSelectedEndYear); 

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

monthsBlockMoveStartCalendarsRight.onclick = function()
{
    moveMonthsCalendendarsRight(monthsBlockMoveStartCalendarsRight, monthsBlockMoveStartCalendarsLeft, monthsBlockCalendarStartLeft, monthsBlockCalendarStartRight);
}

monthsBlockMoveStartCalendarsLeft.onclick = function()
{
    moveMonthsCalendarsLeft(monthsBlockMoveStartCalendarsRight, monthsBlockMoveStartCalendarsLeft, monthsBlockCalendarStartLeft, monthsBlockCalendarStartRight);
}

monthsBlockMoveEndCalendarsRight.onclick = function()
{
    moveMonthsCalendendarsRight(monthsBlockMoveEndCalendarsRight, monthsBlockMoveEndCalendarsLeft, monthsBlockCalendarEndLeft, monthsBlockCalendarEndRight);
}

monthsBlockMoveEndCalendarsLeft.onclick = function()
{
    moveMonthsCalendarsLeft(monthsBlockMoveEndCalendarsRight, monthsBlockMoveEndCalendarsLeft, monthsBlockCalendarEndLeft, monthsBlockCalendarEndRight);
}

function monthsBlockRememberStartButtonClickedCSS(PMAmout)
{
    if (PMAmout == "")
    {
        monthsBlockPreviousStartPMElement.style.borderColor = "";
        monthsBlockPreviousStartPMElement.style.background = "";
        monthsBlockStartExactDatesButton.style.borderColor = "black";
        monthsBlockStartExactDatesButton.style.background = "#f0f0f0";
        monthsBlockPreviousStartPMElement = monthsBlockStartExactDatesButton;
    }
    else if (PMAmout == "±1")
    {
        monthsBlockPreviousStartPMElement.style.borderColor = "";
        monthsBlockPreviousStartPMElement.style.background = "";
        monthsBlockStartPM1Button.style.borderColor = "black";
        monthsBlockStartPM1Button.style.background = "#f0f0f0";
        monthsBlockPreviousStartPMElement = monthsBlockStartPM1Button;
    }
    else if (PMAmout == "±2")
    {
        monthsBlockPreviousStartPMElement.style.borderColor = "";
        monthsBlockPreviousStartPMElement.style.background = "";
        monthsBlockStartPM2Button.style.borderColor = "black";
        monthsBlockStartPM2Button.style.background = "#f0f0f0";
        monthsBlockPreviousStartPMElement = monthsBlockStartPM2Button;
    }
    else if (PMAmout == "±3")
    {
        monthsBlockPreviousStartPMElement.style.borderColor = "";
        monthsBlockPreviousStartPMElement.style.background = "";
        monthsBlockStartPM3Button.style.borderColor = "black";
        monthsBlockStartPM3Button.style.background = "#f0f0f0";
        monthsBlockPreviousStartPMElement = monthsBlockStartPM3Button;
    }
    else if (PMAmout == "±7")
    {
        monthsBlockPreviousStartPMElement.style.borderColor = "";
        monthsBlockPreviousStartPMElement.style.background = "";
        monthsBlockStartPM7Button.style.borderColor = "black";
        monthsBlockStartPM7Button.style.background = "#f0f0f0";
        monthsBlockPreviousStartPMElement = monthsBlockStartPM7Button;
    }
    else if (PMAmout == "±14")
    {
        monthsBlockPreviousStartPMElement.style.borderColor = "";
        monthsBlockPreviousStartPMElement.style.background = "";
        monthsBlockStartPM14Button.style.borderColor = "black";
        monthsBlockStartPM14Button.style.background = "#f0f0f0";
        monthsBlockPreviousStartPMElement = monthsBlockStartPM14Button;
    }
}

function monthsBlockRememberEndButtonClickedCSS(PMAmout)
{
    if (PMAmout == "")
    {
        monthsBlockPreviousEndPMElement.style.borderColor = "";
        monthsBlockPreviousEndPMElement.style.background = "";
        monthsBlockEndExactDatesButton.style.borderColor = "black";
        monthsBlockEndExactDatesButton.style.background = "#f0f0f0";
        monthsBlockPreviousEndPMElement = monthsBlockEndExactDatesButton;
    }
    else if (PMAmout == "±1")
    {
        monthsBlockPreviousEndPMElement.style.borderColor = "";
        monthsBlockPreviousEndPMElement.style.background = "";
        monthsBlockEndPM1Button.style.borderColor = "black";
        monthsBlockEndPM1Button.style.background = "#f0f0f0";
        monthsBlockPreviousEndPMElement = monthsBlockEndPM1Button;
    }
    else if (PMAmout == "±2")
    {
        monthsBlockPreviousEndPMElement.style.borderColor = "";
        monthsBlockPreviousEndPMElement.style.background = "";
        monthsBlockEndPM2Button.style.borderColor = "black";
        monthsBlockEndPM2Button.style.background = "#f0f0f0";
        monthsBlockPreviousEndPMElement = monthsBlockEndPM2Button;
    }
    else if (PMAmout == "±3")
    {
        monthsBlockPreviousEndPMElement.style.borderColor = "";
        monthsBlockPreviousEndPMElement.style.background = "";
        monthsBlockEndPM3Button.style.borderColor = "black";
        monthsBlockEndPM3Button.style.background = "#f0f0f0";
        monthsBlockPreviousEndPMElement = monthsBlockEndPM3Button;
    }
    else if (PMAmout == "±7")
    {
        monthsBlockPreviousEndPMElement.style.borderColor = "";
        monthsBlockPreviousEndPMElement.style.background = "";
        monthsBlockEndPM7Button.style.borderColor = "black";
        monthsBlockEndPM7Button.style.background = "#f0f0f0";
        monthsBlockPreviousEndPMElement = monthsBlockEndPM7Button;
    }
    else if (PMAmout == "±14")
    {
        monthsBlockPreviousEndPMElement.style.borderColor = "";
        monthsBlockPreviousEndPMElement.style.background = "";
        monthsBlockEndPM14Button.style.borderColor = "black";
        monthsBlockEndPM14Button.style.background = "#f0f0f0";
        monthsBlockPreviousEndPMElement = monthsBlockEndPM14Button;
    }
}

function monthsBlockInitializeCalendars(e, firstCalendar, secondCalendar, leftButton, rightButton)
{
    monthsBlockRememberStartButtonClickedCSS(monthsBlockSavedStartPMValue);
    monthsBlockRememberEndButtonClickedCSS(monthsBlockSavedEndPMValue);

    if (e.target == monthsBlockWhenStartDate)
    {
        month = months.indexOf(monthsBlockSelectedStartMonth) - 1;
        year = monthsBlockSelectedStartYear;

        if (month >= 11)
        {
            month == 1;
            year = currentYear + 1;
        }
    }
    else if (e.target == monthsBlockWhenEndDate)
    {
        month = months.indexOf(monthsBlockSelectedEndMonth) - 2;

        if (month == -2)
        {
            month = 10;
            year = monthsBlockSelectedStartYear;
            nextYear = monthsBlockSelectedEndYear;
        }
        else
        {
            year = monthsBlockSelectedEndYear;
            nextYear = year;
        } 
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

    createCalendarMonth(firstCalendar, monthsBlockSelectedStartDate, monthsBlockSelectedEndDate, monthsBlockSelectedStartMonth, monthsBlockSelectedEndMonth, monthsBlockSelectedStartYear, monthsBlockSelectedEndYear);
    createCalendarMonth2(secondCalendar, monthsBlockSelectedStartDate, monthsBlockSelectedEndDate, monthsBlockSelectedStartMonth, monthsBlockSelectedEndMonth, monthsBlockSelectedStartYear, monthsBlockSelectedEndYear);

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

const monthsBlockModalBackground = document.getElementById("MonthsBlockModalBackground");

function monthsBlockCloseModal()
{
    monthsBlockModalBackground.style.display = "none";
    monthsBlockModalStartDate.style.display = "none";
    monthsBlockModalEndDate.style.display = "none";
    document.body.style.overflow = "";
    document.body.style.paddingRight = "";
}

function monthsBlockOpenModal(modal)
{
    modal.style.display = "block";
    monthsBlockModalBackground.style.display = "block";
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = "19px";
}

monthsBlockWhenStartDate.onclick = function(e)
{
    monthsBlockOpenModal(monthsBlockModalStartDate);
    monthsBlockInitializeCalendars(e, monthsBlockCalendarStartLeft, monthsBlockCalendarStartRight, monthsBlockMoveStartCalendarsLeft, monthsBlockMoveStartCalendarsRight);
}

monthsBlockWhenEndDate.onclick = function(e)
{
    monthsBlockOpenModal(monthsBlockModalEndDate);
    monthsBlockInitializeCalendars(e, monthsBlockCalendarEndLeft, monthsBlockCalendarEndRight, monthsBlockMoveEndCalendarsLeft, monthsBlockMoveEndCalendarsRight);
}

monthsBlockModalBackground.onclick = function()
{
    if (monthsBlockPreviousSelectedStartDate != "")
    {
        monthsBlockSelectedStartDate = monthsBlockPreviousSelectedStartDate;
        monthsBlockSelectedStartMonth = monthsBlockPreviousSelectedStartMonth;
        monthsBlockSelectedStartYear = monthsBlockPreviousSelectedStartYear;
        try
        {
            let m = monthsBlockSelectedStartDate.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[1].innerText.slice(0, -5);
            let y = +monthsBlockSelectedStartDate.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[1].innerText.slice(-4);
            monthsBlockStartDateValue = `${monthsBlockSelectedStartDate.innerText} ${monthsAbbreviations[months.indexOf(m)]} ${y}`;
        }catch{} // i hate i know i can make check if statement
    }

    if (monthsBlockPreviousSelectedEndDate != "")
    {
        monthsBlockSelectedEndDate = monthsBlockPreviousSelectedEndDate;
        monthsBlockSelectedEndMonth = monthsBlockPreviousSelectedEndMonth;
        monthsBlockSelectedEndYear = monthsBlockPreviousSelectedEndYear;
        try
        {
            let m = monthsBlockSelectedEndDate.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[1].innerText.slice(0, -5);
            let y = +monthsBlockSelectedEndDate.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[1].innerText.slice(-4);
            monthsBlockEndDateValue = `${monthsBlockSelectedEndDate.innerText} ${monthsAbbreviations[months.indexOf(m)]} ${y}`;
            
        }catch{} // try catch but i dont want to
    }

    monthsBlockCloseModal();
}

const monthsBlockSaveStartDateButton = document.getElementById("MonthsBlockSaveStartDate");
const monthsBlockSaveEndDateButton = document.getElementById("MonthsBlockSaveEndDate");

function monthsBlockCorrectCirclePositionStartDate()
{
    if (months.indexOf(monthsBlockSelectedStartMonth) > monthsBlockStartDate.getMonth())
    {
        monthsBlockDraggableCircle.style.cy = `49.4263px`;
        monthsBlockDraggableCircle.style.cx = `247.5px`;
        monthsBlockMonthNumber.innerText = "1 Month";

        monthsBlockStartDate = new Date(monthsBlockSelectedStartYear, months.indexOf(monthsBlockSelectedStartMonth), "1");
    }
    else if (months.indexOf(monthsBlockSelectedStartMonth) < monthsBlockStartDate.getMonth())
    {
        monthsBlockDraggableCircle.style.cy = `49.4263px`;
        monthsBlockDraggableCircle.style.cx = `247.5px`;
        monthsBlockMonthNumber.innerText = "1 Month";

        monthsBlockStartDate = new Date(monthsBlockSelectedStartYear, months.indexOf(monthsBlockSelectedStartMonth), "1");
    }
}

function monthsBlockCorrectCirclePositionEndDate()
{
    let cpch1 = "";
    let cpch2 = "";

    cpch1 = new Date(monthsBlockSelectedEndYear, months.indexOf(monthsBlockSelectedEndMonth), monthsBlockSelectedEndDate.innerText);
    cpch2 = new Date(monthsBlockStartDate);

    loop:
    for (i = 0; i <= 12; i++)
    {
        cpch1.setMonth(cpch1.getMonth()) 
        cpch2.setMonth(cpch2.getMonth() + i)

        if (cpch1.getMonth() == cpch2.getMonth() && cpch1.getFullYear() == cpch2.getFullYear())
        {
            switch (true)
            {
                case i == 1:
                    monthsBlockDraggableCircle.style.cy = `49.4263px`;
                    monthsBlockDraggableCircle.style.cx = `247.5px`;
                    monthsBlockMonthNumber.innerText = "1 Month";
                    break;
                case i == 2:
                    monthsBlockDraggableCircle.style.cy = `102.5px`;
                    monthsBlockDraggableCircle.style.cx = `300.5736px`;
                    monthsBlockMonthNumber.innerText = "2 Months";
                    break;
                case i == 3:
                    monthsBlockDraggableCircle.style.cy = `175px`;
                    monthsBlockDraggableCircle.style.cx = `320px`;
                    monthsBlockMonthNumber.innerText = "3 Months";
                    break;
                case i == 4:
                    monthsBlockDraggableCircle.style.cy = `247.5px`;
                    monthsBlockDraggableCircle.style.cx = `300.5736px`;
                    monthsBlockMonthNumber.innerText = "4 Months";
                    break;
                case i == 5:
                    monthsBlockDraggableCircle.style.cy = `300.5736px`;
                    monthsBlockDraggableCircle.style.cx = `247.5px`;
                    monthsBlockMonthNumber.innerText = "5 Months";
                    break;
                case i == 6:
                    monthsBlockDraggableCircle.style.cy = `320px`;
                    monthsBlockDraggableCircle.style.cx = `175px`;
                    monthsBlockMonthNumber.innerText = "6 Months";
                    break;
                case i == 7:
                    monthsBlockDraggableCircle.style.cy = `300.5736px`;
                    monthsBlockDraggableCircle.style.cx = `102.5px`;
                    monthsBlockMonthNumber.innerText = "7 Months";
                    break;
                case i == 8:
                    monthsBlockDraggableCircle.style.cy = `247.5px`;
                    monthsBlockDraggableCircle.style.cx = `49.4263px`;
                    monthsBlockMonthNumber.innerText = "8 Months";
                    break;
                case i == 9:
                    monthsBlockDraggableCircle.style.cy = `175px`;
                    monthsBlockDraggableCircle.style.cx = `30px`;
                    monthsBlockMonthNumber.innerText = "9 Months";
                    break;
                case i == 10:
                    monthsBlockDraggableCircle.style.cy = `102.5px`;
                    monthsBlockDraggableCircle.style.cx = `49.4263px`;
                    monthsBlockMonthNumber.innerText = "10 Months";
                    break;
                case i == 11:
                    monthsBlockDraggableCircle.style.cy = `49.4263px`;
                    monthsBlockDraggableCircle.style.cx = `102.5px`;
                    monthsBlockMonthNumber.innerText = "11 Months";
                    break;
                case i == 12:
                    monthsBlockDraggableCircle.style.cy = `30px`;
                    monthsBlockDraggableCircle.style.cx = `175px`;
                    monthsBlockMonthNumber.innerText = "12 Months";
                    break;
                default:
                    monthsBlockDraggableCircle.style.cy = `49.4263px`;
                    monthsBlockDraggableCircle.style.cx = `247.5px`;
                    monthsBlockMonthNumber.innerText = "1 Month";
                    break;
            }

            monthsBlockDegrees = "";
            break loop;
        }
        else
        {
            cpch1 = new Date(monthsBlockSelectedEndYear, months.indexOf(monthsBlockSelectedEndMonth), monthsBlockSelectedEndDate.innerText);
            cpch2 = new Date(monthsBlockStartDate);
        }
    }
}

monthsBlockSaveStartDateButton.onclick = function()
{
    monthsBlockSavedStartPMValue = monthsBlockStartPMValue;

    if (monthsBlockWhenInput.innerText != "")
    {
        monthsBlockWhenInput.innerText = "";
    }

    if (monthsBlockPreviousSelectedStartDate != "")
    {
        monthsBlockPreviousSelectedStartDate = "";
    }

    if (monthsBlockPreviousSelectedEndDate != "")
    {
        monthsBlockPreviousSelectedEndDate = "";
    }

    monthsBlockWhenInput.appendChild(document.createTextNode(`${monthsBlockStartDateValue} ${monthsBlockSavedStartPMValue}`));
    monthsBlockWhenInput.appendChild(document.createTextNode(" - "));
    monthsBlockWhenInput.appendChild(document.createTextNode(`${monthsBlockEndDateValue} ${monthsBlockSavedEndPMValue}`));
    monthsBlockWhenStartDate.innerText = `${monthsBlockStartDateValue} ${monthsBlockSavedStartPMValue}`;
    monthsBlockWhenEndDate.innerText = `${monthsBlockEndDateValue} ${monthsBlockSavedEndPMValue}`;

    monthsBlockCorrectCirclePositionStartDate();
    monthsBlockCloseModal();
}

monthsBlockSaveEndDateButton.onclick = function()
{
    monthsBlockSavedEndPMValue = monthsBlockEndPMValue;
    
    if (monthsBlockWhenInput.innerText != "")
    {
        monthsBlockWhenInput.innerText = "";
    }

    if (monthsBlockPreviousSelectedEndDate != "")
    {
        monthsBlockPreviousSelectedEndDate = "";
    }

    monthsBlockWhenInput.appendChild(document.createTextNode(`${monthsBlockStartDateValue} ${monthsBlockSavedStartPMValue}`));
    monthsBlockWhenInput.appendChild(document.createTextNode(" - "));
    monthsBlockWhenInput.appendChild(document.createTextNode(`${monthsBlockEndDateValue} ${monthsBlockSavedEndPMValue}`));
    monthsBlockWhenEndDate.innerText = `${monthsBlockEndDateValue} ${monthsBlockSavedEndPMValue}`;

    monthsBlockCorrectCirclePositionEndDate();
    monthsBlockCloseModal();
}

/*--------------------------------------------------------------------------------------------------------------------
----------------------------------------------------FLEXIBLE BLOCK----------------------------------------------------
----------------------------------------------------------------------------------------------------------------------*/
const flexibleBlockWhenFormMenu = document.getElementById("FlexibleBlockWhenFormMenu");
const flexibleBlockWhenInput = document.getElementById("FlexibleBlockWhenInput");

const flexibleBlockWeekendButton = document.getElementById("FlexibleBlockWeekendButton");
const flexibleBlockWeekButton = document.getElementById("FlexibleBlockWeekButton");
const flexibleBlockMonthButton = document.getElementById("FlexibleBlockMonthButton");
const flexibleBlockStay = document.getElementById("FlexibleBlockStay");
var flexibleBlockStayInnerText = "";

const flexibleBlockGetMonthCards = document.getElementsByClassName("month_card");
const flexibleBlockGoText = document.getElementById("FlexibleBlockGo");
flexibleBlockGoText.innerText = "Go anytime"
var cardArray = [];

flexibleBlockStay.innerText = "Stay for a week";
flexibleBlockWeekButton.style.borderColor = "black";
flexibleBlockWeekButton.style.background = "#F0F0F0";
flexibleBlockWhenInput.innerText = "Any week";
flexibleBlockStayInnerText = "Week";

function flexibleBlockSelectStay(button, b2, b3)
{
    button.onclick = function()
    {
        flexibleBlockStay.innerText = `Stay for a ${button.innerText.toLowerCase()}`;
        flexibleBlockStayInnerText = button.innerText;

        if (cardArray.length == 0)
        {
            flexibleBlockWhenInput.innerText = `Any ${button.innerText.toLowerCase()}`;
        }
        else if (cardArray.length > 0)
        {
            flexibleBlockAddMonthCardTextValues()
        }

        button.style.borderColor = "black";
        button.style.background = "#F0F0F0";
        b2.style.borderColor = "#dddddd";
        b2.style.background = "";
        b3.style.borderColor = "#dddddd";
        b3.style.background = "";
    }
}

flexibleBlockSelectStay(flexibleBlockWeekendButton, flexibleBlockWeekButton, flexibleBlockMonthButton);
flexibleBlockSelectStay(flexibleBlockWeekButton, flexibleBlockWeekendButton, flexibleBlockMonthButton);
flexibleBlockSelectStay(flexibleBlockMonthButton, flexibleBlockWeekendButton, flexibleBlockWeekButton);

const flexibleBlockMonthCardMenu = document.getElementById("FlexibleBlockMonthCardMenu");
const flexibleBlockMonthCard = document.getElementById("FlexibleBlockMonthCard");
const flexbibleBlockMonthCardMenuLeftButton = document.getElementById("FlexbibleBlockMonthCardMenuLeftButton");
const flexbibleBlockMonthCardMenuRightButton = document.getElementById("FlexbibleBlockMonthCardMenuRightButton");

function flexibleBlockCreateMonthCards()
{
    for (i = 0; i < 12; i++)
    {
        let cardBox = document.createElement("div");
        let monthCard = document.createElement("button");
        let cardCalendarSVG = document.createElement("div");
        let cardMonth = document.createElement("div");
        let cardYear = document.createElement("div");
        
        cardBox.className = "month_card_box";
        monthCard.setAttribute("type", "button");
        monthCard.className = "month_card";
        cardCalendarSVG.className = "month_card_calendarSVG";
        cardMonth.className = "month_card_month";
        cardYear.className = "month_card_year";
        
        cardCalendarSVG.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-calendar" viewBox="0 0 16 16">
                                         <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
                                     </svg>`;
        cardMonth.innerText = months[new Date(currentYear, currentMonth + i, "1").getMonth()];
        cardYear.innerText = new Date(currentYear, currentMonth + i, "1").getFullYear();

        monthCard.appendChild(cardCalendarSVG);
        monthCard.appendChild(cardMonth);
        monthCard.appendChild(cardYear);

        cardBox.appendChild(monthCard)

        flexibleBlockMonthCardMenu.appendChild(cardBox);
    }
}

flexibleBlockCreateMonthCards();

function flexibleBlockSortCards(array)
{
    var swapping = true;
    var end = array.length;
    
    while (swapping == true)
    {
        swapping = false;
    
        for (i = 1; i < end; i++)
        {
            if (array[i - 1] > array[i])
            {
                var x = array[i];
                array[i] = array[i - 1];
                array[i - 1] = x;
    
                swapping = true;
            }
        }
    
        end -= 1;
    }

    return array;
}

function flexibleBlockAddMonthCardTextValues()
{
    cardArray = flexibleBlockSortCards(cardArray);

    if (cardArray.length == 0)
    {
        flexibleBlockGoText.innerText = `Go anytime`;
        flexibleBlockWhenInput.innerText = `Any ${flexibleBlockStayInnerText.toLowerCase()}`;
    }
    else if (cardArray.length == 1)
    {
        flexibleBlockGoText.innerText = `Go in ${months[new Date(cardArray[0]).getMonth()]}`;
        flexibleBlockWhenInput.innerText = `${flexibleBlockStayInnerText} in ${months[new Date(cardArray[0]).getMonth()]}`;
    }
    else if (cardArray.length == 2)
    {
        flexibleBlockGoText.innerText = `Go in ${months[new Date(cardArray[0]).getMonth()]}, ${months[new Date(cardArray[1]).getMonth()]}`;
        flexibleBlockWhenInput.innerText = `${flexibleBlockStayInnerText} in ${monthsAbbreviations[new Date(cardArray[0]).getMonth()]}, ${monthsAbbreviations[new Date(cardArray[1]).getMonth()]}`;
    }
    else if (cardArray.length == 3)
    {
        flexibleBlockGoText.innerText = `Go in ${months[new Date(cardArray[0]).getMonth()]}, ${months[new Date(cardArray[1]).getMonth()]}, ${months[new Date(cardArray[2]).getMonth()]}`;
        flexibleBlockWhenInput.innerText = `${flexibleBlockStayInnerText} in ${monthsAbbreviations[new Date(cardArray[0]).getMonth()]}, ${monthsAbbreviations[new Date(cardArray[1]).getMonth()]}, ${monthsAbbreviations[new Date(cardArray[2]).getMonth()]}`;
    }
    else if (cardArray.length == 4)
    {
        flexibleBlockGoText.innerText = `Go in ${months[new Date(cardArray[0]).getMonth()]}, ${months[new Date(cardArray[1]).getMonth()]}, ${months[new Date(cardArray[2]).getMonth()]}, ${months[new Date(cardArray[3]).getMonth()]}`;
        flexibleBlockWhenInput.innerText = `${flexibleBlockStayInnerText} in ${monthsAbbreviations[new Date(cardArray[0]).getMonth()]}, ${monthsAbbreviations[new Date(cardArray[1]).getMonth()]}, ${monthsAbbreviations[new Date(cardArray[2]).getMonth()]}, ${monthsAbbreviations[new Date(cardArray[3]).getMonth()]}`;
    }
    else if (cardArray.length > 4)
    {
        flexibleBlockGoText.innerText = `Go in ${months[new Date(cardArray[0]).getMonth()]}, ${months[new Date(cardArray[1]).getMonth()]}, ${months[new Date(cardArray[2]).getMonth()]}, ${months[new Date(cardArray[3]).getMonth()]}...`;
        flexibleBlockWhenInput.innerText = `${flexibleBlockStayInnerText} in ${monthsAbbreviations[new Date(cardArray[0]).getMonth()]}, ${monthsAbbreviations[new Date(cardArray[1]).getMonth()]}, ${monthsAbbreviations[new Date(cardArray[2]).getMonth()]}, ${monthsAbbreviations[new Date(cardArray[3]).getMonth()]}...`;
    }
}

function flexibleBlockMonthCardSelection(e)
{
    for (i = 0; i <= 11; i++)
    {
        if (flexibleBlockGetMonthCards[i].contains(e.target))
        {
            if (flexibleBlockGetMonthCards[i].style.borderColor != "black")
            {
                flexibleBlockGetMonthCards[i].style.borderColor = "black";
                flexibleBlockGetMonthCards[i].childNodes[0].innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-calendar-check" viewBox="0 0 16 16">
                                                                            <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0"/>
                                                                            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
                                                                        </svg>`;
                
                if (cardArray.includes(new Date(flexibleBlockGetMonthCards[i].childNodes[2].innerText, months.indexOf(flexibleBlockGetMonthCards[i].childNodes[1].innerText), 1).getTime()))
                {

                }
                else
                {
                    cardArray.push(new Date(flexibleBlockGetMonthCards[i].childNodes[2].innerText, months.indexOf(flexibleBlockGetMonthCards[i].childNodes[1].innerText), 1).getTime());
                }
            }
            else if (flexibleBlockGetMonthCards[i].style.borderColor == "black")
            {
                flexibleBlockGetMonthCards[i].style.borderColor = "";
                flexibleBlockGetMonthCards[i].childNodes[0].innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-calendar" viewBox="0 0 16 16">
                                                                            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
                                                                        </svg>`;

                for (j = 0; j <= 12; j++)
                {
                    if (cardArray.includes(new Date(flexibleBlockGetMonthCards[i].childNodes[2].innerText, months.indexOf(flexibleBlockGetMonthCards[i].childNodes[1].innerText), 1).getTime()))
                    {
                        let index = cardArray.indexOf(new Date(flexibleBlockGetMonthCards[i].childNodes[2].innerText, months.indexOf(flexibleBlockGetMonthCards[i].childNodes[1].innerText), 1).getTime())
                        cardArray.splice(index, 1);
                        break;
                    }
                }
            }

            break;
        }
    }

    flexibleBlockAddMonthCardTextValues();
}

flexibleBlockMonthCardMenu.addEventListener("click", function(e)
{
    flexibleBlockMonthCardSelection(e);
});

function flexibleBlockMonthCardMenuControl()
{
    var scrollValue = 0;

    flexbibleBlockMonthCardMenuLeftButton.onclick = function()
    {
        if (scrollValue == 678)
        {
            flexibleBlockMonthCardMenu.scrollTo(scrollValue -= 339 ,0);
        }
        else if (scrollValue > 0)
        {
            flexibleBlockMonthCardMenu.scrollTo(scrollValue -= 226 ,0);
        }
    
        if (scrollValue <= 0)
        {
            flexbibleBlockMonthCardMenuLeftButton.style.display = "none";
        }
        else if (scrollValue < 678)
        {
            flexbibleBlockMonthCardMenuRightButton.style.display = "flex";
        }
    }
    
    flexbibleBlockMonthCardMenuRightButton.onclick = function()
    {
        if (scrollValue < 0)
        {
            flexibleBlockMonthCardMenu.scrollTo(scrollValue += 339, 0);
        }
        else if (scrollValue < 678)
        {
            flexibleBlockMonthCardMenu.scrollTo(scrollValue += 226, 0);
        }
    
        if (scrollValue == 678 || scrollValue == 565)
        {
            flexbibleBlockMonthCardMenuRightButton.style.display = "none";
        }
        else if (scrollValue > 0)
        {
            flexbibleBlockMonthCardMenuLeftButton.style.display = "flex";
        }
    }
}

flexibleBlockMonthCardMenuControl();

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
    flexibleBlockWhenFormMenu.style.display = "none";
    onClickButtonUnfocus(whenButton);
    onClickButtonUnfocus(flexibleBlockWhenButton);
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
    flexibleBlockWhenFormMenu.style.display = "none";
    onClickButtonFocus(whenButton);

    datesButton.style.backgroundColor = "";
    flexibleButton.style.backgroundColor = "";

    monthsBlockWhenInput.innerText = "";
    monthsBlockWhenInput.appendChild(document.createTextNode(`${monthsBlockStartDateValue} ${monthsBlockSavedStartPMValue}`));
    monthsBlockWhenInput.appendChild(document.createTextNode(" - "));
    monthsBlockWhenInput.appendChild(document.createTextNode(`${monthsBlockEndDateValue} ${monthsBlockSavedEndPMValue}`));
}

flexibleButton.onclick = function()
{
    flexibleButton.style.backgroundColor = "white";
    datesBlock.style.display = "none";
    monthsBlock.style.display = "none";
    flexibleBlock.style.display = "block";

    checkinFormMenu.style.display = "none";
    whenFormMenu.style.display = "none";
    flexibleBlockWhenFormMenu.style.display = "flex";
    onClickButtonFocus(flexibleBlockWhenButton);

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

//tetstetening testing test 1 2 3 test
// maybe useful? https://css-tricks.com/snippets/javascript/get-url-variables/
//               https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
// /test?banana=pizza42&pineapple=lol
const queryKey = new Proxy(new URLSearchParams(window.location.search), 
{
    get: (key, value) => key.get(value)
});
//  referrence how airbnb does their stuff... there is a lof ot that
//  i should have uh:
//  array with all keys
//  read all values from all keys
//  somehow it will read URI and sort stuff on webpage (might have idea how to do it)
//  i will just do some of it coz i dont have time to thing of another thing to work on and start working on it
//  
//  i think it will need to be ordered as: 
//  things that are always selected > things optional that might not be in URI query string
//  tab_id, type_of_stay[homes,experiences], monthly_start_date, monthly_end_date, monthly_length, flexible_trip_length,
//  > checkin, checkout, flex_date[+- dates], monthly_flex_date[+- dates], adults, children, infants, pets, flexible_trip_months,
var URIkeysArray = []
//  i dont understand what does this mean why there is []
//                          refinement_paths[]=/homes
var testingbananaman = decodeURIComponent("refinement_paths%5B%5D=%2Fhomes")
console.log(testingbananaman)
// ?tab_id=home_tab
// &refinement_paths%5B%5D=%2Fhomes
// &search_mode=flex_destinations_search
// &flexible_trip_lengths%5B%5D=one_week
// &location_search=MIN_MAP_BOUNDS
// &monthly_start_date=2024-12-01
// &monthly_length=3
// &monthly_end_date=2025-03-01
// &disable_auto_translation=true
// &price_filter_input_type=0
// &channel=EXPLORE
// &date_picker_type=calendar
// &checkin=2024-11-07
// &checkout=2024-12-09
// $adults=1
// &children=1
// &infants=1
// &pets=1
// &category_tag=Tag%3A7765
// &search_type=category_change
var keyArray = []

var arr = ["banana", "pineapple"]
var arrV = [queryKey[arr[0]], queryKey[arr[1]]]

for (i = 0; i < arrV.length; i++)
{
    console.log(arrV[i]);
}

//  FINAL BOSS 
function generateQueryStringURI()
{

}
//console.log(value)

