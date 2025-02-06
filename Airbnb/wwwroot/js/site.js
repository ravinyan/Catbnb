
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
window.onscroll = function() 
{
       headerScaling() 
};

function headerScaling() 
{
    if (window.location.pathname == "/" || window.location.pathname == "/home")
    {
        if (document.documentElement.scrollTop > 1 || document.body.scrollTop > 1)
        {
            //  if scrolled down
            document.getElementById("TopHeader").style.height = "80px";

            document.getElementById("MiniForm").style.display = "block";
            document.getElementById("StaysMenuButtons").style.display = "none";

            document.getElementById("StaysMenuForm").style.display = "none";
            document.getElementById("ExperiencesMenuForm").style.display = "none";

            document.getElementById("ScrollDiv").style.top = "80px";
            //document.getElementById("ScrollDiv").style.boxShadow = "0 4px 6px -6px #cacaca";
            
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

            document.getElementById("ScrollDiv").style.top = "161px";
            document.getElementById("ScrollDiv").style.boxShadow = "none";
        }
    }
    else if (window.location.pathname.split("/")[1] == "Rooms")
    {
        document.getElementById("TopHeader").style.height = "80px";
        document.getElementById("MiniForm").style.display = "block";
        document.getElementById("StaysMenuButtons").style.display = "none";
        document.getElementById("StaysMenuForm").style.display = "none";
        document.getElementById("ExperiencesMenuForm").style.display = "none";
    }
}

function headerSettingsHomePage()
{
    if (window.location.pathname == "/" || window.location.pathname == "/home")
    {
        document.getElementsByClassName("header")[0].style.position = "sticky";
        document.getElementsByClassName("spacing")[0].style.display = "block";
        document.getElementById("TopHeader").style.height = "161px";
        document.getElementById("MiniForm").style.display = "none";
        document.getElementById("StaysMenuButtons").style.display = "block";
        document.getElementById("StaysMenuForm").style.display = "block";
        document.getElementById("ScrollDiv").style.top = "161px";
        document.getElementById("ScrollDiv").style.boxShadow = "none";
        document.getElementById("ScrollDiv").style.display = "flex";

        document.getElementById("ScrollDiv").style.borderBlockStart = "1px solid #dddddd";
        document.getElementById("TopHeader").style.borderBlockEnd = "";
    }
}

function headerSettingsRoomsPage()
{
    if (window.location.pathname.split("/")[1] == "Rooms")
    {
        document.getElementsByClassName("header")[0].style.position = "relative";
        document.getElementsByClassName("spacing")[0].style.display = "none";
        document.getElementById("TopHeader").style.height = "80px";
        document.getElementById("MiniForm").style.display = "block";
        document.getElementById("StaysMenuButtons").style.display = "none";
        document.getElementById("StaysMenuForm").style.display = "none";
        document.getElementById("ExperiencesMenuForm").style.display = "none";
        document.getElementById("GreyBackground").style.display = "none";
        document.getElementById("ScrollDiv").style.display = "none";

        document.getElementById("ScrollDiv").style.borderBlockStart = "";
        document.getElementById("TopHeader").style.borderBlockEnd = "1px solid #dddddd";
    }
}

headerSettingsRoomsPage();
headerSettingsHomePage();

/*--------------------------------------------------------------------------------------------------------------------
--------------------------------------------------SCROLL MENU BUTTONS-------------------------------------------------
----------------------------------------------------------------------------------------------------------------------*/
const buttonLeft = document.getElementById("ScrollLeft");
const buttonRight = document.getElementById("ScrollRight");
const scrollMenu = document.getElementById("ScrollMenu");

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

/*--------------------------------------------------------------------------------------------------------------------
-----------------------------------------------------FILTER MODAL-----------------------------------------------------
----------------------------------------------------------------------------------------------------------------------*/
const filterButton = document.getElementById("FilterButton");
const filterModal = document.getElementById("FilterModal");
const filterModalBackground = document.getElementById("FilterModalBackground");
const filterModalCloseButton = filterModal.childNodes[1].childNodes[1];

filterButton.onclick = function()
{
    filterModal.style.display = "flex";
    filterModalBackground.style.display = "block";
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = "19px";
    filterModal.classList.add("modal_V2_slideIn");
}

filterModalBackground.onclick = function(e)
{
    if (e.target == filterModalBackground)
    {
        filterModal.classList.remove("modal_V2_slideIn");
        
        setTimeout(() => 
        {
            filterModal.style.display = "none";
            filterModalBackground.style.display = "none";
            document.body.style.overflow = "";
            document.body.style.paddingRight = "";
        }, 150);
    }
}

filterModalCloseButton.onclick = function()
{
    filterModal.classList.remove("modal_V2_slideIn");
    
    setTimeout(() => 
    {
        filterModal.style.display = "none";
        filterModalBackground.style.display = "none";
        document.body.style.overflow = "";
        document.body.style.paddingRight = "";
    }, 150);
}

//  type of place
const filterModalAnyType = document.getElementById("FilterModalAnyType");
const filterModalRoom = document.getElementById("FilterModalRoom");
const filterModalEntireHome = document.getElementById("FilterModalEntireHome");
var selectedTypeOfPlace = "";

filterModalAnyType.style.border = "1px solid black";
filterModalAnyType.style.background = "#E8E8E8";

function filterModalSelectTypeOfPlace(button, button2, button3)
{
    button.onclick = function()
    {
        button.style.border = "1px solid black";
        button2.style.border = "";
        button3.style.border = "";

        button.style.background = "#E8E8E8";
        button2.style.background = "";
        button3.style.background = "";

        if (button == filterModalAnyType)
        {
            selectedTypeOfPlace = "";
        }
        else if (button == filterModalRoom)
        {
            selectedTypeOfPlace = "Room";
        }
        else if (button = filterModalEntireHome)
        {
            selectedTypeOfPlace = "Entire home";
        }
    }
}

filterModalSelectTypeOfPlace(filterModalAnyType, filterModalRoom, filterModalEntireHome);
filterModalSelectTypeOfPlace(filterModalRoom, filterModalAnyType, filterModalEntireHome);
filterModalSelectTypeOfPlace(filterModalEntireHome, filterModalAnyType, filterModalRoom);

//  price range
const filterModalMinimumPriceInput = document.getElementById("FilterModalMinimumPriceInput");
const filterModalMaximumPriceInput = document.getElementById("FilterModalMaximumPriceInput");

const filterModalMinimumPriceSlider = document.getElementById("FilterModalSliderMinimumPrice");
const filterModalMaximumPriceSlider = document.getElementById("FilterModalSliderMaximumPrice");
const filterModalPriceRangeBox = document.getElementById("FilterModalPriceRangeBox");

function getTextWidth(text, font) 
{
    // re-use canvas object for better performance <-- thank you stack overflow dude for this insight i will probably never use it tho
    const canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));
    const context = canvas.getContext("2d");
    context.font = font;
    const metrics = context.measureText(text);

    return metrics.width;
}

function getCssStyle(e, CSSstyle) 
{
    return window.getComputedStyle(e, null).getPropertyValue(CSSstyle);
}

function getCanvasFont(e) 
{
    const fontWeight = getCssStyle(e, 'font-weight') || 'normal';
    const fontSize = getCssStyle(e, 'font-size') || '16px';
    const fontFamily = getCssStyle(e, 'font-family') || 'Times New Roman';
    
    return `${fontWeight} ${fontSize} ${fontFamily}`;
}

filterModalMinimumPriceInput.style.width = getTextWidth(filterModalMinimumPriceInput.value, getCanvasFont(filterModalMinimumPriceInput)) + "px";
filterModalMaximumPriceInput.style.width = getTextWidth(filterModalMaximumPriceInput.value, getCanvasFont(filterModalMaximumPriceInput)) + "px";

filterModalMinimumPriceInput.addEventListener("input", function()
{
    filterModalMinimumPriceInput.style.width = getTextWidth(filterModalMinimumPriceInput.value, getCanvasFont(filterModalMinimumPriceInput)) + "px";
})

filterModalMaximumPriceInput.addEventListener("input", function()
{
    filterModalMaximumPriceInput.style.width = getTextWidth(filterModalMaximumPriceInput.value, getCanvasFont(filterModalMaximumPriceInput)) + "px";
})

var filterModalInputMousePosition = "";
var filterModalInputMiddlePoint = "";

filterModalPriceRangeBox.addEventListener("mousemove", function(e)
{
    var x = (e.offsetX / e.target.clientWidth) * parseInt(filterModalMaximumPriceSlider.max, 10);

    if (!isNaN(x))
    {
        filterModalInputMousePosition = +x.toFixed();
    }

    filterModalInputMiddlePoint = 

    filterModalInputMiddlePoint = (+filterModalMaximumPriceSlider.value + +filterModalMinimumPriceSlider.value)/ 2;
})

filterModalPriceRangeBox.addEventListener("mousedown", function()
{
    if ((filterModalInputMousePosition > +filterModalInputMiddlePoint || filterModalInputMousePosition > +filterModalMaximumPriceSlider.value)
    &&  filterModalInputMousePosition > +filterModalMinimumPriceSlider.value)
    {
        filterModalMaximumPriceSlider.value = filterModalInputMousePosition;
        filterModalMaximumPriceInput.value = filterModalMaximumPriceSlider.value;
    }
    else if ((filterModalInputMousePosition < +filterModalInputMiddlePoint || filterModalInputMousePosition < +filterModalMinimumPriceSlider.value)
         &&   filterModalInputMousePosition < filterModalMaximumPriceSlider.value)
    {
        filterModalMinimumPriceSlider.value = filterModalInputMousePosition;
        filterModalMinimumPriceInput.value = filterModalMinimumPriceSlider.value;
    }
})

filterModalMinimumPriceSlider.addEventListener("input", function()
{
    if (+filterModalMinimumPriceSlider.value >= +filterModalMaximumPriceSlider.value)
    {
        filterModalMinimumPriceSlider.value = filterModalMaximumPriceSlider.value;
        filterModalMinimumPriceInput.value = filterModalMaximumPriceSlider.value;
    }
    else if (+filterModalMinimumPriceSlider.value < +filterModalMaximumPriceSlider.value)
    {
        filterModalMinimumPriceInput.value = filterModalMinimumPriceSlider.value;
    }
})

filterModalMaximumPriceSlider.addEventListener("input", function()
{
    if (+filterModalMaximumPriceSlider.value <= +filterModalMinimumPriceSlider.value)
    {
        filterModalMaximumPriceSlider.value = filterModalMinimumPriceSlider.value;
        filterModalMaximumPriceInput.value = filterModalMinimumPriceSlider.value;
    }
    else if (+filterModalMaximumPriceSlider.value > +filterModalMinimumPriceSlider.value)
    {
        filterModalMaximumPriceInput.value = filterModalMaximumPriceSlider.value;
    }
})

//  rooms and beds
const filterModalIncrementBedrooms = document.getElementById("FilterModalIncrementBedrooms");
const filterModalDecrementBedrooms = document.getElementById("FilterModalDecrementBedrooms");
const filterModalBedroomsCount = document.getElementById("FilterModalBedroomsCount");

const filterModalIncrementBeds = document.getElementById("FilterModalIncrementBeds");
const filterModalDecrementBeds = document.getElementById("FilterModalDecrementBeds");
const filterModalBedsCount = document.getElementById("FilterModalBedsCount");

const filterModalIncrementBathrooms = document.getElementById("FilterModalIncrementBathrooms");
const filterModalDecrementBathrooms = document.getElementById("FilterModalDecrementBathrooms");
const filterModalBathroomsCount = document.getElementById("FilterModalBathroomsCount");

function filterModalChangeRoomAndBedsValues(increment, decrement, counter)
{
    increment.onclick = function()
    {
        if (counter.innerText == "Any")
        {
            counter.innerText = 1;
            decrement.classList = "rooms_and_beds_enabled_button";
        }
        else if (+counter.innerText < 16)
        {
            counter.innerText ++;

            if (+counter.innerText == 16)
            {
                increment.classList = "rooms_and_beds_disabled_button";
            }
        }
    }

    decrement.onclick = function()
    {
        if (counter.innerText == "Any")
        {
        }
        else if (+counter.innerText > 1)
        {
            counter.innerText -= 1;

            if (+counter.innerText == 15)
            {
                increment.classList = "rooms_and_beds_enabled_button";
            }
        }
        else if (+counter.innerText == 1)
        {
            counter.innerText = "Any";
            decrement.classList = "rooms_and_beds_disabled_button";
        }
    }
}

filterModalChangeRoomAndBedsValues(filterModalIncrementBedrooms, filterModalDecrementBedrooms, filterModalBedroomsCount);
filterModalChangeRoomAndBedsValues(filterModalIncrementBeds, filterModalDecrementBeds, filterModalBedsCount);
filterModalChangeRoomAndBedsValues(filterModalIncrementBathrooms, filterModalDecrementBathrooms, filterModalBathroomsCount);

//  amenities menu work
const filterModalAmenitiesMore = document.getElementById("FilterModalAmenitiesMore");
const filterModalAmenitiesLess = document.getElementById("FilterModalAmenitiesLess");
const filterModalShowMoreAmenities = document.getElementById("FilterModalShowMoreAmenities");
const filterModalShowLessAmenities = document.getElementById("FilterModalShowLessAmenities");
const filterModalAmenitiesEssentialsTitle = document.getElementById("FilterModalAmenitiesEssentialsTitle");

filterModalShowMoreAmenities.onclick = function()
{
    filterModalShowMoreAmenities.style.display = "none";
    filterModalAmenitiesEssentialsTitle.style.display = "block";
    filterModalAmenitiesMore.style.display = "flex";
}

filterModalShowLessAmenities.onclick = function()
{
    filterModalShowMoreAmenities.style.display = "block";
    filterModalAmenitiesEssentialsTitle.style.display = "none";
    filterModalAmenitiesMore.style.display = "none";
}

// amenities buttons refactored edition
var selectedAmenities = [];

document.getElementById("FilterModalAmenitiesButtonsParent").addEventListener("click", function(e) 
{
    let button = e.target.closest("button")

    if (button && button.className == "amenities_button")
    {
        if (button.style.background == "rgb(232, 232, 232)")
        {
            button.style.background = "";
            button.style.border = "";

            let index = selectedAmenities.indexOf(button.childNodes[3].innerText.trim());
            selectedAmenities.splice(index, 1);
        }
        else if (button.style.background == "")
        {
            button.style.background = "#E8E8E8";
            button.style.border = "1px solid black";

            selectedAmenities.push(button.childNodes[3].innerText.trim());
        }
    }
});

//  booking options refactored edition
var selectedBookingOptions = [];

document.getElementById("FilterModalBookingButtonsParent").addEventListener("click", function(e) 
{
    let button = e.target.closest("button")

    if (button && button.className == "amenities_button")
    {
        if (button.style.background == "rgb(232, 232, 232)")
        {
            button.style.background = "";
            button.style.border = "";

            let index = selectedBookingOptions.indexOf(button.childNodes[3].innerText.trim());
            selectedBookingOptions.splice(index, 1);
        }
        else if (button.style.background == "")
        {
            button.style.background = "#E8E8E8";
            button.style.border = "1px solid black";

            selectedBookingOptions.push(button.childNodes[3].innerText.trim());
        }
    }
});

//  standout stays not refactored edition... sad
const filterModalStandoutStays = document.getElementById("FilterModalStandoutStays");
var standoutStaysSelected = false;

filterModalStandoutStays.onclick = function()
{
    if (filterModalStandoutStays.style.background == "rgb(232, 232, 232)")
    {
        filterModalStandoutStays.style.background = "";
        filterModalStandoutStays.style.border = "";

        standoutStaysSelected = false;
    }
    else if (filterModalStandoutStays.style.background == "")
    {
        filterModalStandoutStays.style.background = "#E8E8E8";
        filterModalStandoutStays.style.border = "1px solid black";

        standoutStaysSelected = true;
    }
}

//  property type refactored edition
var selectedPropertyType = [];

document.getElementById("FilterModalPropertyTypeDropdownMenu").addEventListener("click", function(e)
{
    let button = e.target.closest("button");

    if (button && button.className == "amenities_button")
    {
        if (button.style.background == "rgb(232, 232, 232)")
        {
            button.style.background = "";
            button.style.border = "";

            let index = selectedPropertyType.indexOf(button.childNodes[3].innerText.trim());
            selectedPropertyType.splice(index, 1);
        }
        else if (button.style.background == "")
        {
            button.style.background = "#E8E8E8";
            button.style.border = "1px solid black";

            selectedPropertyType.push(button.childNodes[3].innerText.trim());
        }
    }
})

//  accessibility features refactored edition
var selectedAccessibilityCheckboxes = [];

document.getElementById("FilterModalAccessibilityFeaturesDropdownMenu").addEventListener("click", function(e)
{
    let label = e.target.closest("label");
    let input = "";

    try 
    {
        input = label.childNodes[1].childNodes[1];
    }
    catch{}
    
    if (input && input.className == "i_hate_checkboxes checkbox_input")
    {
        input.onclick = function()
        {
            if (input.checked == true)
            {
                input.parentElement.childNodes[3].style.background = "black";
                input.parentElement.childNodes[3].childNodes[1].style.display = "block";

                selectedAccessibilityCheckboxes.push(label.childNodes[3].innerText.trim());
            }
            else if (input.checked == false)
            {
                input.parentElement.childNodes[3].style.background = "white";
                input.parentElement.childNodes[3].childNodes[1].style.display = "none";

                let index = selectedAccessibilityCheckboxes.indexOf(label.childNodes[3].innerText.trim());
                selectedAccessibilityCheckboxes.splice(index, 1);
            }
        }
    }
})

//  host language refactored edition
var selectedHostLanguagesCheckboxes = [];

document.getElementById("FilterModalHostLanguageDropdownMenu").addEventListener("click", function(e)
{
    let label = e.target.closest("label");
    let input = "";

    try 
    {
        input = label.childNodes[1].childNodes[1];
    }
    catch{}

    if (input && input.className == "i_hate_checkboxes checkbox_input")
    {
        input.onclick = function()
        {
            if (input.checked == true)
            {
                input.parentElement.childNodes[3].style.background = "black";
                input.parentElement.childNodes[3].childNodes[1].style.display = "block";

                selectedHostLanguagesCheckboxes.push(label.childNodes[3].innerText.trim());
            }
            else if (input.checked == false)
            {
                input.parentElement.childNodes[3].style.background = "white";
                input.parentElement.childNodes[3].childNodes[1].style.display = "none";

                let index = selectedHostLanguagesCheckboxes.indexOf(label.childNodes[3].innerText.trim());
                selectedHostLanguagesCheckboxes.splice(index, 1);
            }
        }
    }
})

//  property type / accessibility features / host language dropdowns
const filterModalPropertyTypeDropdown = document.getElementById("FilterModalPropertyTypeDropdown");
const filterModalPropertyTypeDropdownMenu = document.getElementById("FilterModalPropertyTypeDropdownMenu");

const filterModalAccessibilityFeaturesDropdown = document.getElementById("FilterModalAccessibilityFeaturesDropdown");
const filterModalAccessibilityFeaturesDropdownMenu = document.getElementById("FilterModalAccessibilityFeaturesDropdownMenu");

const filterModalHostLanguageDropdown = document.getElementById("FilterModalHostLanguageDropdown");
const filterModalHostLanguageDropdownMenu = document.getElementById("FilterModalHostLanguageDropdownMenu");

var alternatePropertyDropdown = true;
var alternateAccessibilityDropdown = true;
var alternateHostDropdown = true;

function filterModalOpenDropdown(dropdown, menu, alternator)
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

filterModalOpenDropdown(filterModalPropertyTypeDropdown, filterModalPropertyTypeDropdownMenu, alternatePropertyDropdown);
filterModalOpenDropdown(filterModalAccessibilityFeaturesDropdown, filterModalAccessibilityFeaturesDropdownMenu, alternateAccessibilityDropdown);
filterModalOpenDropdown(filterModalHostLanguageDropdown, filterModalHostLanguageDropdownMenu, alternateHostDropdown);

// last thingy footer
const filterModalClearAll = document.getElementById("FilterModalClearAll"); 
const filterModalShowPlaces = document.getElementById("FilterModalShowPlaces");

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
const languageRegionCurrencyModalCloseButton = languageRegionCurrencyModal.childNodes[1].childNodes[1];
const languagesButton = document.getElementById("ModalLanguageAndRegionButton");
const currenciesButton = document.getElementById("ModalCurrenciesButton");

const languages = document.getElementById("LanguageAndRegion");
const currencies = document.getElementById("Currencies");

globeIcon.onclick = function()
{
    languageRegionCurrencyModal.style.display = "flex";
    languageRegionCurrencyModalBackground.style.display = "block";
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = "19px";
    languageRegionCurrencyModal.classList.add("modal_V2_slideIn");
}

languageRegionCurrencyModalBackground.onclick = function(e)
{
    if (e.target == languageRegionCurrencyModalBackground)
    {
        languageRegionCurrencyModal.classList.remove("modal_V2_slideIn");
        
        setTimeout(() => 
        {
            languageRegionCurrencyModalBackground.style.display = "none";
            languageRegionCurrencyModal.style.display = "none";
            document.body.style.overflow = "";
            document.body.style.paddingRight = "";
        }, 150);
    }
}

languageRegionCurrencyModalCloseButton.onclick = function()
{
    languageRegionCurrencyModal.classList.remove("modal_V2_slideIn");
        
    setTimeout(() => 
    {
        languageRegionCurrencyModalBackground.style.display = "none";
        languageRegionCurrencyModal.style.display = "none";
        document.body.style.overflow = "";
        document.body.style.paddingRight = "";
    }, 150);
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
    if (e.target == imstupidsvg || e.target == imstupidpath || monthsBlockModalStartDate.style.display == "flex" || monthsBlockModalEndDate.style.display == "flex")
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
    if (document.getElementById("GreyBackground").style.display == "block" && window.location.pathname == "/" || window.location.pathname == "/home")
    {
        document.getElementById("GreyBackground").onclick = function() 
        {
            document.getElementById("GreyBackground").style.display = "none";

            document.getElementById("TopHeader").style.height = "80px";
            document.getElementById("ScrollDiv").style.zIndex = "10";
            
            document.getElementById("MiniForm").style.display = "block";
            document.getElementById("StaysMenuButtons").style.display = "none";
            document.getElementById("StaysMenuForm").style.display = "none";
        };
    }
}

//  make this stuff open the header things one day maybe 
anywhereButton.onclick = function()
{
     document.getElementById("TopHeader").style.height = "161px";
     document.getElementById("ScrollDiv").style.zIndex = "-1";
   
     document.getElementById("MiniForm").style.display = "none";
     document.getElementById("StaysMenuButtons").style.display = "block";
     document.getElementById("StaysMenuForm").style.display = "block";

     document.getElementById("GreyBackground").style.display = "block";

     initializeDatesCalendars(calendar, calendar2);
}

anyWeekButton.onclick = function()
{
     document.getElementById("TopHeader").style.height = "161px";
     document.getElementById("ScrollDiv").style.zIndex = "-1";

     document.getElementById("MiniForm").style.display = "none";
     document.getElementById("StaysMenuButtons").style.display = "block";
     document.getElementById("StaysMenuForm").style.display = "block";

     document.getElementById("GreyBackground").style.display = "block";

     initializeDatesCalendars(calendar, calendar2);
}

addGuestsButton.onclick = function()
{
     document.getElementById("TopHeader").style.height = "161px";
     document.getElementById("ScrollDiv").style.zIndex = "-1";

     document.getElementById("MiniForm").style.display = "none";
     document.getElementById("StaysMenuButtons").style.display = "block";
     document.getElementById("StaysMenuForm").style.display = "block";

     document.getElementById("GreyBackground").style.display = "block";
     
     initializeDatesCalendars(calendar, calendar2);
}

/*--------------------------------------------------------------------------------------------------------------------
--------------------------------------------WHERE FORM + EXPERIENCES FORM---------------------------------------------
----------------------------------------------------------------------------------------------------------------------*/
var whereInput = document.getElementById("WhereInput");
var whereInputExperiences = document.getElementById("WhereInputExperiences");

document.getElementById("WhereDropdown").addEventListener("click", function(e)
{
    if (e.target.className == "image_box")
    {
        let text = e.target.parentElement.parentElement.childNodes[3].innerText;

        if (text != "I'm flexible")
        {
            whereInput.value = text;
        }
        else
        {
            whereInput.value = "";
        }
    }
})

document.getElementById("WhereDropdownExperiences").addEventListener("click", function(e)
{
    if (e.target.className == "image_box")
    {
        let text = e.target.parentElement.parentElement.childNodes[3].innerText;

        if (text != "I'm flexible")
        {
            whereInputExperiences.value = text;
        }
        else
        {
            whereInputExperiences.value = "";
        }
    }
})

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
//  room calendar stuff i give up
var selectedStartDay = document.createElement(null);
selectedStartDay.innerText = day;
let selectedEndDay = document.createElement(null);
selectedEndDay.innerText = date.getDate(date.setDate(day + 5));

function keepShadowBetweenDates(month, year, x, td, div, checkinDate, checkoutDate, checkinMonth, checkoutMonth, checkinYear, checkoutYear)
{
    // i give up fixing this
    if ((checkinDate.tagName != "NULL" || checkinDate.innerText != "") && (checkoutDate.tagName != "NULL" || checkoutDate.innerText != ""))
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

    if (month == 0 && nextMonth == 0 && nextMonth.toString() != "")
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
                    else if (calendarId.className == "room_information_calendar1" && +checkinDate.innerText == x
                         &&  checkinMonth == month && checkinYear == year)
                    {
                        div.style.backgroundColor = "black";
                        div.style.color = "white";
                        selectedStartDay = div;
                        selectedStartDay.innerText = x;
                    }
                    else if (calendarId.className == "room_information_calendar1" && +checkoutDate.innerText == x 
                         &&  checkoutMonth == month && checkoutYear == year)
                    {
                        div.style.backgroundColor = "black";
                        div.style.color = "white";
                        selectedEndDay = div;
                        selectedEndDay.innerText = x;
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
                    else if (calendarId.className == "room_information_calendar2" && +checkoutDate.innerText == x && checkoutMonth == nextMonth
                         &&  checkoutYear == nextYear)
                    {
                        div.style.backgroundColor = "black";
                        div.style.color = "white";
                        selectedEndDay = div;
                        selectedEndDay.innerText = x;
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

// fix this when i feel better
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
    removeCalendarsShadows(firstCalendar, secondCalendar, checkinDate, checkoutDate, 4);

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

            removeCalendarsShadows(calendar, calendar2, selectedCheckinDate, selectedCheckoutDate, 4);
            selectedCheckinDate = document.createElement(null);     
        }
        else if (selectedCheckoutDate.tagName != "NULL" && checkoutButton.style.backgroundColor == "white")
        {
            selectedCheckoutDate.style.background = "";
            selectedCheckoutDate.style.color = "";

            removeCalendarsShadows(calendar, calendar2, selectedCheckinDate, selectedCheckoutDate, 4);
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

            correctCalendarsShadows(calendar, calendar2, selectedCheckinDate, selectedCheckoutDate, 4);
        }
        else if (selectedCheckoutDate.tagName == "NULL" && checkoutButton.style.backgroundColor == "white")
        {
            selectedCheckoutDate = e.target;
            selectedCheckoutDate.style.background = "black";
            selectedCheckoutDate.style.color = "white";
            selectedCheckoutMonth = selectedCheckoutDate.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[1].innerText.slice(0 ,-5);
            selectedCheckoutYear = +selectedCheckoutDate.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[1].innerText.slice(-4);

            correctCalendarsShadows(calendar, calendar2, selectedCheckinDate, selectedCheckoutDate, 4);
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

    removeCalendarsShadows(calendar, calendar2, selectedCheckinDate, selectedCheckoutDate, 4);

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

function applyShadowBetweenDates(currentCalendar, firstCalendar, secondCalendar, target, checkinDate, checkoutDate, checkinMonth, checkoutMonth, checkinYear, checkoutYear, tableIndex, targetIndex)
{
    var targetMonth = months.indexOf(target.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[targetIndex].innerText.slice(0, -5));
    var targetYear = target.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[targetIndex].innerText.slice(-4);
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

    if (otherCalendar == null)
    {
        if (currentCalendar.className == "room_information_calendar1")
        {
            otherCalendar = document.getElementsByClassName("room_information_calendar2")[0];
        }
        else if (currentCalendar.className == "room_information_calendar2")
        {
            otherCalendar = document.getElementsByClassName("room_information_calendar1")[0];
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
                    var divBox = currentCalendar.childNodes[tableIndex].childNodes[0].childNodes[i].childNodes[j].childNodes[0];
                    var tdBox = currentCalendar.childNodes[tableIndex].childNodes[0].childNodes[i].childNodes[j];
                }catch{} //  i hate you from the bottom of my heart 

                try
                {
                    var divBox2 = otherCalendar.childNodes[tableIndex].childNodes[0].childNodes[i].childNodes[j].childNodes[0];
                    var tdBox2 = otherCalendar.childNodes[tableIndex].childNodes[0].childNodes[i].childNodes[j];
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

function calendarAddShadow(e, calendar, firstCalendar, secondCalendar, checkinDate, checkoutDate, checkinMonth, checkoutMonth, checkinYear, checkoutYear, tableIndex)
{ 
    if ((checkinDate.tagName == "NULL" || checkoutDate.tagName == "NULL") && e.target.children.length == 0 && e.target.className == "box")
    {
        e.target.classList.add("box_new_hover");

        if (checkinDate.tagName == "NULL" && (checkinButton.style.backgroundColor == "white" || datesButtonExperiences.style.backgroundColor == "white")
        ||  checkoutDate.tagName == "NULL" && (checkoutButton.style.backgroundColor == "white" || datesButtonExperiences.style.backgroundColor == "white"))
        {
            applyShadowBetweenDates(calendar, firstCalendar, secondCalendar, e.target, checkinDate, checkoutDate, checkinMonth, checkoutMonth, checkinYear, checkoutYear, tableIndex, 1);
        }
    }
}

function calendarRemoveShadow(e, firstCalendar, secondCalendar, checkinDate, checkoutDate, tableIndex)
{
    if (((checkinDate.tagName == "NULL" || checkoutDate.tagName == "NULL") || checkoutDate.tagName != "NULL") && e.target.children.length == 0 && e.target.className == "box box_new_hover")
    {   
        e.target.classList.remove("box_new_hover");

        if (checkinDate.tagName == "NULL" || checkoutDate.tagName == "NULL")
        {
            removeCalendarsShadows(firstCalendar, secondCalendar, selectedCheckinDate, selectedCheckoutDate, tableIndex);
        }
    }
}

calendar.addEventListener("mouseover", function(e)
{
    calendarAddShadow(e, calendar, calendar, calendar2, selectedCheckinDate, selectedCheckoutDate, selectedCheckinMonth, selectedCheckoutMonth, selectedCheckinYear, selectedCheckoutYear, 4);
})

calendar.addEventListener("mouseout", function(e)
{
    calendarRemoveShadow(e, calendar, calendar2, selectedCheckinDate, selectedCheckoutDate, 4);
})

calendar2.addEventListener("mouseover", function(e)
{
    calendarAddShadow(e, calendar2, calendar, calendar2, selectedCheckinDate, selectedCheckoutDate, selectedCheckinMonth, selectedCheckoutMonth, selectedCheckinYear, selectedCheckoutYear, 4);
})

calendar2.addEventListener("mouseout", function(e)
{
    calendarRemoveShadow(e, calendar, calendar2, selectedCheckinDate, selectedCheckoutDate, 4);
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

        removeCalendarsShadows(calendarExperiences, calendar2Experiences, selectedCheckinDate, selectedCheckoutDate, 4);

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

        removeCalendarsShadows(calendarExperiences, calendar2Experiences, selectedCheckinDate, selectedCheckoutDate, 4);

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

            removeCalendarsShadows(calendarExperiences, calendar2Experiences, selectedCheckinDate, selectedCheckoutDate, 4);
            selectedCheckinDate = document.createElement(null);   
        }
        else if (selectedCheckoutDate.tagName != "NULL" && alternateDates == false)
        {
            selectedCheckoutDate.style.background = "";
            selectedCheckoutDate.style.color = "";

            removeCalendarsShadows(calendarExperiences, calendar2Experiences, selectedCheckinDate, selectedCheckoutDate, 4);
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
                correctCalendarsShadows(calendarExperiences, calendar2Experiences, selectedCheckinDate, selectedCheckoutDate, 4);
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
                correctCalendarsShadows(calendarExperiences, calendar2Experiences, selectedCheckinDate, selectedCheckoutDate, 4);
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
    calendarAddShadow(e, calendarExperiences, calendarExperiences, calendar2Experiences, selectedCheckinDate, selectedCheckoutDate, selectedCheckinMonth, selectedCheckoutMonth, selectedCheckinYear, selectedCheckoutYear, 4);
})

calendarExperiences.addEventListener("mouseout", function(e)
{
    calendarRemoveShadow(e, calendarExperiences, calendar2Experiences, selectedCheckinDate, selectedCheckoutDate, 4);
})

calendar2Experiences.addEventListener("mouseover", function(e)
{
    calendarAddShadow(e, calendar2Experiences, calendarExperiences, calendar2Experiences, selectedCheckinDate, selectedCheckoutDate, selectedCheckinMonth, selectedCheckoutMonth, selectedCheckinYear, selectedCheckoutYear, 4);
})

calendar2Experiences.addEventListener("mouseout", function(e)
{
    calendarRemoveShadow(e, calendarExperiences, calendar2Experiences, selectedCheckinDate, selectedCheckoutDate, 4);
})

//  ------------------------ (+-) DATES OPTIONS BUTTONS ------------------------
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
---------------------------------------CIRCLE OF DEATH AND SUFFERING/MONTH BLOCK--------------------------------------
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

function removeCalendarsShadows(firstCalendar, secondCalendar, checkinDate, checkoutDate, tableIndex)
{
    for (i = 0; i < 6; i++)
    {
        for (j = 0; j < 7; j++)
        {
            try 
            {
                var divBox = firstCalendar.childNodes[tableIndex].childNodes[0].childNodes[i].childNodes[j].childNodes[0];
                var tdBox = firstCalendar.childNodes[tableIndex].childNodes[0].childNodes[i].childNodes[j];
            }
            catch{} //  banana
            try 
            {
                var divBox2 = secondCalendar.childNodes[tableIndex].childNodes[0].childNodes[i].childNodes[j].childNodes[0];
                var tdBox2 = secondCalendar.childNodes[tableIndex].childNodes[0].childNodes[i].childNodes[j];
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

function correctCalendarsShadows(firstCalendar, secondCalendar, checkinDate, checkoutDate, tableIndex)
{
    loop:
    for (i = 0; i < 6; i++)
    {
        for (j = 0; j < 7; j++)
        {
            try 
            {
                var divBox = firstCalendar.childNodes[tableIndex].childNodes[0].childNodes[i].childNodes[j].childNodes[0];
                var tdBox = firstCalendar.childNodes[tableIndex].childNodes[0].childNodes[i].childNodes[j];
            }catch{} //  banana

            try 
            {
                var divBox2 = secondCalendar.childNodes[tableIndex].childNodes[0].childNodes[i].childNodes[j].childNodes[0];
                var tdBox2 = secondCalendar.childNodes[tableIndex].childNodes[0].childNodes[i].childNodes[j];
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
                    removeCalendarsShadows(firstCalendar, secondCalendar, monthsBlockSelectedStartDate, monthsBlockSelectedEndDate, 4);
                    monthsBlockChangeEndValuesCSS(td, div);

                    break loop;
                }
                else if (+div2.innerText == x && +monthsBlockSelectedStartDate.innerText + 28 > new Date(monthsBlockSelectedStartYear, months.indexOf(monthsBlockSelectedStartMonth) + 1, 0).getDate())
                {
                    removeCalendarsShadows(firstCalendar, secondCalendar, monthsBlockSelectedStartDate, monthsBlockSelectedEndDate, 4);
                    monthsBlockChangeEndValuesCSS(td2, div2);

                    break loop;
                }
                else if (+div2.innerText == x && +monthsBlockSelectedStartDate.innerText + 28 >= new Date(monthsBlockSelectedStartYear, months.indexOf(monthsBlockSelectedStartMonth) + 1, 0).getDate()
                     &&  x >= monthsBlockSelectedEndDate.innerText)
                {
                    removeCalendarsShadows(firstCalendar, secondCalendar, monthsBlockSelectedStartDate, monthsBlockSelectedEndDate, 4);
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
                    removeCalendarsShadows(firstCalendar, secondCalendar, monthsBlockSelectedStartDate, monthsBlockSelectedEndDate, 4);
                    monthsBlockChangeEndValuesCSS(td2, div2);

                    break loop;
                }
                else
                {
                    if (monthsBlockSelectedStartDate != monthsBlockSelectedEndDate && monthsBlockSelectedEndDate.tagName != "NULL")
                    {
                        removeCalendarsShadows(firstCalendar, secondCalendar, monthsBlockSelectedStartDate, monthsBlockSelectedEndDate, 4);
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
                    removeCalendarsShadows(firstCalendar, secondCalendar, monthsBlockSelectedStartDate, monthsBlockSelectedEndDate, 4);
                    monthsBlockChangeEndValuesCSS(td2, div2);

                    break loop;
                }
                else
                {
                    if (monthsBlockSelectedStartDate != monthsBlockSelectedEndDate && monthsBlockSelectedEndDate.tagName != "NULL")
                    {
                        removeCalendarsShadows(firstCalendar, secondCalendar, monthsBlockSelectedStartDate, monthsBlockSelectedEndDate, 4);
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

    correctCalendarsShadows(firstCalendar, secondCalendar, monthsBlockSelectedStartDate, monthsBlockSelectedEndDate, 4);
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

            removeCalendarsShadows(monthsBlockCalendarStartLeft, monthsBlockCalendarStartRight, monthsBlockSelectedStartDate, monthsBlockSelectedEndDate, 4);
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
            
            correctCalendarsShadows(monthsBlockCalendarStartLeft, monthsBlockCalendarStartRight, monthsBlockSelectedStartDate, monthsBlockSelectedEndDate, 4);
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
        
            removeCalendarsShadows(monthsBlockCalendarEndLeft, monthsBlockCalendarEndRight, monthsBlockSelectedStartDate, monthsBlockSelectedEndDate, 4);
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
        
           correctCalendarsShadows(monthsBlockCalendarEndLeft, monthsBlockCalendarEndRight, monthsBlockSelectedStartDate, monthsBlockSelectedEndDate, 4);
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
const monthsBlockModalBackground2 = document.getElementById("MonthsBlockModalBackground2");

monthsBlockWhenStartDate.onclick = function(e)
{
    monthsBlockModalStartDate.classList.add("modal_V2_slideIn");

    monthsBlockModalStartDate.style.display = "flex";
    monthsBlockModalBackground.style.display = "block";
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = "19px";
    
    monthsBlockInitializeCalendars(e, monthsBlockCalendarStartLeft, monthsBlockCalendarStartRight, monthsBlockMoveStartCalendarsLeft, monthsBlockMoveStartCalendarsRight);
}

monthsBlockWhenEndDate.onclick = function(e)
{
    monthsBlockModalEndDate.classList.add("modal_V2_slideIn");

    monthsBlockModalEndDate.style.display = "flex";
    monthsBlockModalBackground2.style.display = "block";
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = "19px";

    monthsBlockInitializeCalendars(e, monthsBlockCalendarEndLeft, monthsBlockCalendarEndRight, monthsBlockMoveEndCalendarsLeft, monthsBlockMoveEndCalendarsRight);
}

monthsBlockModalBackground.onclick = function(e)
{
    if (e.target == monthsBlockModalBackground)
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

        monthsBlockModalStartDate.classList.remove("modal_V2_slideIn");

        setTimeout(() => 
        {
            monthsBlockModalBackground.style.display = "none";
            monthsBlockModalStartDate.style.display = "none";
            document.body.style.overflow = "";
            document.body.style.paddingRight = "";
        }, 150);
    }
}

monthsBlockModalBackground2.onclick = function(e)
{
    if (e.target == monthsBlockModalBackground2)
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

        monthsBlockModalEndDate.classList.remove("modal_V2_slideIn");

        setTimeout(() => 
        {
            monthsBlockModalBackground2.style.display = "none";
            monthsBlockModalEndDate.style.display = "none";
            document.body.style.overflow = "";
            document.body.style.paddingRight = "";
        }, 150);
    }
}

const monthsBlockModalStartDateCloseButton = monthsBlockModalStartDate.childNodes[1].childNodes[1];
const monthsBlockModalEndDateCloseButton = monthsBlockModalEndDate.childNodes[1].childNodes[1];

monthsBlockModalStartDateCloseButton.onclick = function()
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

    monthsBlockModalStartDate.classList.remove("modal_V2_slideIn");

    setTimeout(() => 
    {
        monthsBlockModalStartDate.style.display = "none";
        monthsBlockModalBackground.style.display = "none";
        document.body.style.overflow = "";
        document.body.style.paddingRight = "";
    }, 150);
}

monthsBlockModalEndDateCloseButton.onclick = function()
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

    monthsBlockModalEndDate.classList.remove("modal_V2_slideIn");

    setTimeout(() => 
    {
        monthsBlockModalEndDate.style.display = "none";
        monthsBlockModalBackground2.style.display = "none";
        document.body.style.overflow = "";
        document.body.style.paddingRight = "";
    }, 150);
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

monthsBlockSaveStartDateButton.onclick = function(e)
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

    if (e.target == monthsBlockSaveStartDateButton)
    {
        monthsBlockModalBackground.style.display = "none";
        monthsBlockModalStartDate.style.display = "none";
        document.body.style.overflow = "";
        document.body.style.paddingRight = "";
    }
}

monthsBlockSaveEndDateButton.onclick = function(e)
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

    if (e.target == monthsBlockSaveEndDateButton)
    {
        monthsBlockModalBackground2.style.display = "none";
        monthsBlockModalEndDate.style.display = "none";
        document.body.style.overflow = "";
        document.body.style.paddingRight = "";
    }
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

/*--------------------------------------------------------------------------------------------------------------------
--------------------------------------------MENU FORMS(both) SEARCH BUTTONS-------------------------------------------
----------------------------------------------------------------------------------------------------------------------*/
const searchButton = document.getElementById("SearchButton");
const searchButtonExperiences = document.getElementById("SearchButtonExperiences");

searchButton.onclick = function()
{
    let queryString = generateQueryStringURI();
    let queryValue = queryString.get("category");
    
    DisplayText3.innerHTML = "";

    if (queryValue != null || queryValue != "")
    {
        fetchNeededCatCards(encodeURIComponent(queryValue));
    }
    else if (queryValue == null || queryValue == "")
    {
        fetchNeededCatCards(scrollMenu.childNodes[1].innerText);
    }
}

searchButtonExperiences.onclick = function()
{
    let queryString = generateQueryStringURI();
    let queryValue = queryString.get("category");
    
    DisplayText3.innerHTML = "";

    if (queryValue != null || queryValue != "")
    {
        fetchNeededCatCards(queryValue);
    }
    else if (queryValue == null || queryValue == "")
    {
        fetchNeededCatCards(scrollMenu.childNodes[1].innerText);
    }
}

/*--------------------------------------------------------------------------------------------------------------------
--------------------------------------------USER MENU DROPDOWN AND FUNCTIONS------------------------------------------
----------------------------------------------------------------------------------------------------------------------*/
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

/*--------------------------------------------------------------------------------------------------------------------
-------------------------------------------------QUERY STRING GENERATOR-----------------------------------------------
----------------------------------------------------------------------------------------------------------------------*/
//  FINAL BOSS GET THE QUERY STRING AND GET THE FRICK OUT UNDETECTED YOU HAVE ONLY 1 SHOT 
function generateQueryStringURI()
{
    let whereQuery = whereInput.value == "" 
                   ? `?location=flexible`
                   : `?location=${whereInput.value}`;
    
    let checkinQuery = checkinFormInput.value == "" 
                     ? "" 
                     : `&checkin=${selectedCheckinDate.innerText}-${months.indexOf(selectedCheckinMonth) + 1}-${selectedCheckinYear}`;
    
    let checkoutQuery = checkoutFormInput.value == "" 
                      ? "" 
                      : `&checkout=${selectedCheckoutDate.innerText}-${months.indexOf(selectedCheckoutMonth) + 1}-${selectedCheckoutYear}`;

    let monthsCheckinQuery =  monthsBlockStartDateValue == "" 
                     ? "" 
                     : `&monthly-checkin=${monthsBlockSelectedStartDate.innerText}-${months.indexOf(monthsBlockSelectedStartMonth) + 1}-${monthsBlockSelectedStartYear}`;

    let monthsCheckoutQuery = monthsBlockEndDateValue == "" 
                      ? "" 
                      : `&monthly-checkout=${monthsBlockSelectedEndDate.innerText}-${months.indexOf(monthsBlockSelectedEndMonth) + 1}-${monthsBlockSelectedEndYear}`;

    let flexibleStayTimeQuery = "";
    let stayButtons = document.getElementsByClassName("stay_button");
    for (i = 0; i < stayButtons.length; i++)
    {
        if (window.getComputedStyle(stayButtons[i]).borderColor == "rgb(0, 0, 0)")
        {
            flexibleStayTimeQuery = `&flexible-trip-length=${stayButtons[i].innerText.trim()}`;
        }
    }

    let flexibleTripMonthCards = "";
    let monthCards = document.getElementsByClassName("month_card");
    
    for (i = 0; i < monthCards.length; i++)
    {
        if (window.getComputedStyle(monthCards[i]).borderColor == "rgb(0, 0, 0)")
        {
            flexibleTripMonthCards += `&flexible-trip-month=${monthCards[i].innerText.trim()}` 
        }
    }

    let adults = `&adults=${document.getElementById("AdultsCount").innerText}`;
    
    let children = document.getElementById("ChildrenCount").innerText == "0"
                 ? "" 
                 : `&children=${document.getElementById("ChildrenCount").innerText}`;
    
    let infants = document.getElementById("InfantsCount").innerText == "0"
                ? ""
                : `&infants=${document.getElementById("InfantsCount").innerText}`;
    
    let pets = document.getElementById("PetsCount").innerText == "0"
             ? "" 
             : `&pets=${document.getElementById("PetsCount").innerText}`;

    let category = "";
    for (i = 0; i < scrollMenu.childNodes.length; i++)
    {
        if (scrollMenu.childNodes[i].tagName == "A")
        {
            if (window.getComputedStyle(scrollMenu.childNodes[i]).color == "rgb(0, 0, 0)")
            {
                category = `&category=${encodeURIComponent(scrollMenu.childNodes[i].innerText)}`;
            }
        }
    }
    
    let typeOfPlace = selectedTypeOfPlace == "" 
                    ? "" 
                    : `&type-of-place=${selectedTypeOfPlace}`;
    let priceMax = `&max-price=${filterModalMaximumPriceInput.value}`;
    let priceMin = `&min-price=${filterModalMinimumPriceInput.value}`;
    let bedrooms = filterModalBedroomsCount.innerText == "Any" 
                 ? "" 
                 : `&bedroom-count=${filterModalBedroomsCount.innerText}`;
    let beds = filterModalBedsCount.innerText == "Any" 
             ? "" 
             : `&beds-count=${filterModalBedsCount.innerText}`;
    let bathrooms = filterModalBathroomsCount.innerText == "Any" 
                  ? "" 
                  : `&bathroom-count=${filterModalBathroomsCount.innerText}`;
    let amenities = "";
    for (i = 0; i < selectedAmenities.length; i++)
    {
        amenities += `&amenity=${selectedAmenities[i]}`;
    }

    let bookingOptions = "";
    for (i = 0; i < selectedBookingOptions.length; i++)
    {
        bookingOptions += `&booking-option=${selectedBookingOptions[i]}`;
    }

    let standoutStay = standoutStaysSelected == false 
                     ? "" 
                     : `&standout-stay=${standoutStaysSelected}`;

    let propertyTypes = "";
    for (i = 0; i < selectedPropertyType.length; i++)
    {
        propertyTypes += `&property-type=${selectedPropertyType[i]}`;
    }

    let accessibilityFeatures = "";
    for (i = 0; i < selectedAccessibilityCheckboxes.length; i++)
    {
        accessibilityFeatures += `&accessibility-feature=${selectedAccessibilityCheckboxes[i]}`;
    }

    let hostLanguages = "";
    for (i = 0; i < selectedHostLanguagesCheckboxes.length; i++)
    {
        hostLanguages += `&host-language=${selectedHostLanguagesCheckboxes[i]}`;
    }

    let queryString = `${whereQuery}${checkinQuery}${checkoutQuery}${monthsCheckinQuery}${monthsCheckoutQuery}${flexibleStayTimeQuery}${adults}${children}${infants}${pets}${flexibleTripMonthCards}${category}${typeOfPlace}${priceMin}${priceMax}${bedrooms}${beds}${bathrooms}${amenities}${bookingOptions}${standoutStay}${propertyTypes}${accessibilityFeatures}${hostLanguages}`;
    var newurl = window.location.origin + window.location.pathname + queryString;
    window.history.pushState({path:newurl},'',newurl);
    
    return queryString = new URLSearchParams(window.location.search);
}

/*--------------------------------------------------------------------------------------------------------------------
--------------------------------------------GETTING AND USING FILTER VALUES-------------------------------------------
----------------------------------------------------------------------------------------------------------------------*/
function clearAllFilterValues()
{
    filterModalAnyType.style.border = "1px solid black";
    filterModalAnyType.style.background = "#E8E8E8";

    filterModalRoom.style.border = "";
    filterModalRoom.style.background = "";
    filterModalEntireHome.style.border = "";
    filterModalEntireHome.style.background = "";
    selectedTypeOfPlace = "";

    filterModalMinimumPriceSlider.value = 1;
    filterModalMinimumPriceInput.value = 1;
    filterModalMaximumPriceSlider.value = 10000;
    filterModalMaximumPriceInput.value = 10000;

    filterModalBedroomsCount.innerText = "Any";
    filterModalBedsCount.innerText = "Any";
    filterModalBathroomsCount.innerText = "Any";

    filterModalDecrementBedrooms.classList = "rooms_and_beds_disabled_button";
    filterModalDecrementBeds.classList = "rooms_and_beds_disabled_button";
    filterModalDecrementBathrooms.classList = "rooms_and_beds_disabled_button";

    filterModalIncrementBedrooms.classList = "rooms_and_beds_enabled_button";
    filterModalIncrementBeds.classList = "rooms_and_beds_enabled_button";
    filterModalIncrementBathrooms.classList = "rooms_and_beds_enabled_button";

    selectedHostLanguagesCheckboxes = [];
    let languages = document.getElementById("FilterModalHostLanguageDropdownMenu");
    let languagesCheckboxes = languages.childNodes[1].childNodes;

    for (i = 0; i < languagesCheckboxes.length; i++)
    {
        if (languagesCheckboxes[i].tagName == "LABEL")
        {
            if (languagesCheckboxes[i].childNodes[1].childNodes[3].style.background == "black")
            {
                languagesCheckboxes[i].childNodes[1].childNodes[3].style.background = "white"
                languagesCheckboxes[i].childNodes[1].childNodes[3].childNodes[1].style.display = "none";
            }
        }
    }

    selectedAccessibilityCheckboxes = [];
    let accessibilities = document.getElementById("FilterModalAccessibilityFeaturesDropdownMenu");
    let accessibilitiesCheckboxes = accessibilities.childNodes;
    
    for (i = 0; i < accessibilitiesCheckboxes.length; i++)
    {
        if (accessibilitiesCheckboxes[i].tagName == "DIV")
        {
            for (j = 0; j < accessibilitiesCheckboxes[i].childNodes.length; j++)
            {
                if (accessibilitiesCheckboxes[i].childNodes[j].tagName == "LABEL")
                {
                    if (accessibilitiesCheckboxes[i].childNodes[j].childNodes[1].childNodes[3].style.background == "black")
                    {                                                         
                        accessibilitiesCheckboxes[i].childNodes[j].childNodes[1].childNodes[3].style.background = "white"
                        accessibilitiesCheckboxes[i].childNodes[j].childNodes[1].childNodes[3].childNodes[1].style.display = "none";
                    }
                }
            }
        }
    }

    standoutStaysSelected = false;
    filterModalStandoutStays.style.background = "";
    filterModalStandoutStays.style.border = "";

    selectedAmenities = [];
    let amenitiesBasic = document.getElementById("FilterModalAmenitiesLess").childNodes;
    let amenitiesMoreSections = document.getElementById("FilterModalAmenitiesMore").childNodes;

    for (i = 0; i < amenitiesBasic.length; i++)
    {
        if (amenitiesBasic[i].tagName == "BUTTON")
        {
            if (amenitiesBasic[i].style.background == "rgb(232, 232, 232)")
            {
                amenitiesBasic[i].style.background = ""
                amenitiesBasic[i].style.border = "";
            }
        }
    }

    for (i = 0; i < amenitiesMoreSections.length; i++)
    {
        if (amenitiesMoreSections[i].tagName == "DIV")
        { 
            if (i == 1)
            {
                for (j = 0; j < amenitiesMoreSections[i].childNodes[1].childNodes.length; j++)
                {  
                    if (amenitiesMoreSections[i].childNodes[1].childNodes[j].tagName == "BUTTON")
                    {
                        if (amenitiesMoreSections[i].childNodes[1].childNodes[j].style.background == "rgb(232, 232, 232)")
                        {                                                         
                            amenitiesMoreSections[i].childNodes[1].childNodes[j].style.background = "";
                            amenitiesMoreSections[i].childNodes[1].childNodes[j].style.border = "";
                        }
                    }
                }
            }
            else if (i > 1 && i < 9)
            {
                for (j = 0; j < amenitiesMoreSections[i].childNodes[3].childNodes.length; j++)
                { 
                    if (amenitiesMoreSections[i].childNodes[3].childNodes[j].tagName == "BUTTON")
                    {
                        if (amenitiesMoreSections[i].childNodes[3].childNodes[j].style.background == "rgb(232, 232, 232)")
                        {                                                         
                            amenitiesMoreSections[i].childNodes[3].childNodes[j].style.background = "";
                            amenitiesMoreSections[i].childNodes[3].childNodes[j].style.border = "";
                        }
                    }
                }
            }
            else if (i == 9)
            {
                for (j = 0; j < amenitiesMoreSections[i].childNodes[1].childNodes.length; j++)
                { 
                    if (amenitiesMoreSections[i].childNodes[1].childNodes[j].tagName == "BUTTON")
                    {
                        if (amenitiesMoreSections[i].childNodes[1].childNodes[j].style.background == "rgb(232, 232, 232)")
                        {                                                        
                            amenitiesMoreSections[i].childNodes[1].childNodes[j].style.background = "";
                            amenitiesMoreSections[i].childNodes[1].childNodes[j].style.border = "";
                        }
                    }
                }
            }
        }
    }

    selectedBookingOptions = [];
    let bookingOptionsButtons = document.getElementById("FilterModalBookingButtonsParent").childNodes;

    for (i = 0; i < bookingOptionsButtons.length; i++)
    {
        if (bookingOptionsButtons[i].tagName == "BUTTON")
        {
            if (bookingOptionsButtons[i].style.background == "rgb(232, 232, 232)")
            {
                bookingOptionsButtons[i].style.background = ""
                bookingOptionsButtons[i].style.border = "";
            }
        }
    }

    selectedPropertyType = [];
    let propertyTypeButtons = document.getElementById("FilterModalPropertyTypeDropdownMenu").childNodes;

    for (i = 0; i < propertyTypeButtons.length; i++)
    {
        if (propertyTypeButtons[i].tagName == "BUTTON")
        {
            if (propertyTypeButtons[i].style.background == "rgb(232, 232, 232)")
            {
                propertyTypeButtons[i].style.background = ""
                propertyTypeButtons[i].style.border = "";
            }
        }
    }
}

filterModalShowPlaces.onclick = function()
{
    queryString = generateQueryStringURI();
    var categoryQuery = queryString.get("category");
    var filterMessage = document.getElementById("FilterMessage");

    let destinationFilter = `<div>Selected Filters: <span style="font-weight: 700">Destination</span> - ${queryString.get("location")}</div>`;
    let placeFilter = queryString.get("type-of-place") == null ? "" : `<div>, <span style="font-weight: 700">Type of place</span> - ${queryString.get("type-of-place")}</div>`;
    let priceFilter = `<div>, <span style="font-weight: 700">Minimum price</span> - ${queryString.get("min-price")}$, <span style="font-weight: 700">Maximum price</span> - ${queryString.get("max-price")}$</div>`;
    let bedroomFilter = queryString.get("bedroom-count") == null ? "" : `<div>, <span style="font-weight: 700">Bedrooms</span> - ${queryString.get("bedroom-count")}</div>`;
    let bedsFilter = queryString.get("beds-count") == null ? "" :  `<div>, <span style="font-weight: 700">Beds</span> - ${queryString.get("beds-count")}</div>`;
    let bathroomFilter = queryString.get("bathroom-count") == null ? "" :  `<div>, <span style="font-weight: 700">Bathrooms</span> - ${queryString.get("bathroom-count")}</div>`;
    let amenitiesFilter = queryString.getAll("amenity") == "" ? "" :  `<div>, <span style="font-weight: 700">Amenities</span> - ${queryString.getAll("amenity")}</div>`;
    let bookingFilter = queryString.getAll("booking-option") == "" ? "" :  `<div>, <span style="font-weight: 700">Booking options</span> - ${queryString.getAll("booking-option")}</div>`;
    let standoutFilter = queryString.getAll("standout-stay") == "" ? "" :  `<div>, <span style="font-weight: 700">Guest Favourite</span> - Yes</div>`;
    let propertyFilter = queryString.getAll("property-type") == "" ? "" :  `<div>, <span style="font-weight: 700">Properties</span> - ${queryString.getAll("property-type")}</div>`;
    let accessibilityFilter = queryString.getAll("accessibility-feature") == "" ? "" : `<div>, <span style="font-weight: 700">Accessibilities</span> - ${queryString.getAll("accessibility-feature")}</div>`;
    let hostLanguageFilter = queryString.getAll("host-language") == "" ? "" : `<div>, <span style="font-weight: 700">Host languages</span> - ${queryString.getAll("host-language")}</div>`;

    filterMessage.innerHTML = `${destinationFilter}${placeFilter}${priceFilter}${bedroomFilter}${bedsFilter}${bathroomFilter}${amenitiesFilter}${bookingFilter}${standoutFilter}${propertyFilter}${accessibilityFilter}${hostLanguageFilter}`;

    if (categoryQuery != null && categoryQuery != "")
    {
        for (i = 0; i < scrollMenu.childNodes.length; i++)
        {
            if (scrollMenu.childNodes[i].tagName == "A" && encodeURIComponent(scrollMenu.childNodes[i].innerText) == encodeURIComponent(categoryQuery))
            {
                DisplayText3.innerHTML = "";
                scrollMenu.childNodes[i].style.color = "black";
                fetchNeededCatCards(encodeURIComponent(scrollMenu.childNodes[i].innerText));
                break;
            }
        }
    }
    else if (categoryQuery == null || categoryQuery == "")
    {
        DisplayText3.innerHTML = "";
        scrollMenu.childNodes[1].style.color = "black";
        fetchNeededCatCards(scrollMenu.childNodes[1].innerText);
    }

    filterModal.classList.remove("modal_V2_slideIn");
    
    setTimeout(() => 
    {
        filterModal.style.display = "none";
        filterModalBackground.style.display = "none";
        document.body.style.overflow = "";
        document.body.style.paddingRight = "";
    }, 150);
}

filterModalClearAll.onclick = function()
{
    clearAllFilterValues();
}
/*--------------------------------------------------------------------------------------------------------------------
--------------------------------------------------MAIN PAGE CAT CARDS-------------------------------------------------
----------------------------------------------------------------------------------------------------------------------*/
// this should be the last thing to render on page to not block ui and other stuff from rendering
const categoriesCards = ["", "Icons", "Lakefront", "Cabins", "Amazing%20views", "Top%20of%20the%20world", "Design", "Amazing%20pools", "Beachfront", 
                         "Tiny%20homes", "Countryside", "OMG!", "Farms", "Treehouses", "Tropical", "Houseboats", "Mansions", "Boats", 
                         "Domes", "Off-the-grid", "Camping", "Rooms", "National%20parks", "Castles", "Luxe", "Vineyards", "Islands", 
                         "Top%20cities", "Caves", "Historical%20homes", "Barns", "Earth%20homes", "Play", "Containers", "A-frames", 
                         "Bed%20%26%20breakfasts", "New", "Chef's%20kitchens", "Towers", "ski-in%2Fout", "Creative%20spaces", "Yurts", "Arctic", 
                         "Desert", "Windmils", "Trulli", "Cycladic%20homes", "Adapted", "Casas%20particulares", "Grand%20pianos", "Dammusi",
                         "Riads", "Skiing", "Campers", "Surfing", "Golfing", "Hanoks", "Minsus", "Ryokans", "Shepherd's%20huts", "Beach", "Lake"]
var queryString = new URLSearchParams(window.location.search);
var controller = new AbortController();
var signal =  controller.signal;
var loaderCatCards = document.getElementById("LoaderCatCards");
var loaderRoom = document.getElementById("LoaderRooms");

function catCardCarouselControl()
{
    if ((window.location.pathname == "/" || window.location.pathname == "/home"))
    {
        function catCardShowCarouselButtons()
        {
            document.addEventListener("mouseover", function(e)
            {
                try
                {
                    let catCard = e.target.closest(".cat_card");
                    let buttonL = catCard.getElementsByClassName("cat_card_L_button")[0];
                    let buttonR = catCard.getElementsByClassName("cat_card_R_button")[0];
                    
                    if (e.target.closest(".cat_card"))
                    {
                        buttonL.style.opacity = "1";
                        buttonR.style.opacity = "1";
                    }
        
                }catch{}
            });
            
            document.addEventListener("mouseout", function(e)
            {
                try
                {
                    let catCard = e.target.closest(".cat_card");
                    let buttonL = catCard.getElementsByClassName("cat_card_L_button")[0];
                    let buttonR = catCard.getElementsByClassName("cat_card_R_button")[0];
        
                    if (e.target != catCard)
                    {
                        buttonL.style.opacity = "0";
                        buttonR.style.opacity = "0";
                    }
        
                }catch{}
            });
        }

        let buttonIndex = 0;
        let scrollValue = 0;
        let scrollChange = 0;

        function catCardChangeCarouselImages()
        {
            let display = document.getElementById("DisplayText3");

            display.addEventListener("click", function(e) 
            {
                try
                {
                    let catCard = e.target.closest(".cat_card");
                    let buttonL = catCard.getElementsByClassName("cat_card_L_button")[0];
                    let buttonR = catCard.getElementsByClassName("cat_card_R_button")[0];
                    let carousel = catCard.getElementsByClassName("cat_card_image_container")[0];
                    let dotBox = catCard.getElementsByClassName("cat_card_dots_box")[0];

                    for (i = 0; i < dotBox.childNodes.length; i++)
                    {
                        if (dotBox.childNodes[i].style.background == "white")
                        {
                            scrollValue = carousel.childNodes[0].childNodes[1].offsetWidth * i;
                            buttonIndex = i;
                            break;
                        }
                    }
        
                    if (e.target == buttonL && buttonIndex > 0)
                    {
                        buttonIndex --;

                        if (buttonIndex == 0)
                        {
                            scrollChange = carousel.childNodes[0].childNodes[1].offsetWidth + 1;
                        }
                        else
                        {
                            scrollChange = carousel.childNodes[0].childNodes[1].offsetWidth;
                        }                        
                        carousel.childNodes[0].scrollTo(scrollValue -= scrollChange, 0);

                        dotBox.childNodes[buttonIndex + 1].style.background = "";
                        dotBox.childNodes[buttonIndex].style.background = "white";
                    }
                    else if (e.target == buttonR && buttonIndex < dotBox.childNodes.length - 1)
                    {
                        buttonIndex ++;

                        if (buttonIndex == 1)
                        {
                            scrollChange = carousel.childNodes[0].childNodes[1].offsetWidth + 1;
                        }
                        else
                        {
                            scrollChange = carousel.childNodes[0].childNodes[1].offsetWidth;
                        }
                        carousel.childNodes[0].scrollTo(scrollValue += scrollChange, 0);

                        dotBox.childNodes[buttonIndex - 1].style.background = "";
                        dotBox.childNodes[buttonIndex].style.background = "white";
                    }
                }catch{}
            });        
        }
        
        catCardShowCarouselButtons();
        catCardChangeCarouselImages();
    }
}

catCardCarouselControl();

function generateCatCards(card)
{
    let catCard = document.createElement("DIV");
    catCard.id = `CatCard-${card.id}`;
    catCard.className = "cat_card";

    let imageBox = document.createElement("DIV");
    imageBox.className = "cat_card_image_box";

    let imageElementsOuterBox = document.createElement("DIV");
    imageElementsOuterBox.className = "cat_card_on_image_elements_box";

    let imageElementsInnerBox = document.createElement("DIV");
    imageElementsInnerBox.className = "cat_card_on_image_elements_box2";

    let favouriteBox = document.createElement("DIV");
    favouriteBox.className  = "cat_card_favourite_box";

    let favouriteEmptyDiv = document.createElement("DIV");
    let favouriteLabel = document.createElement("DIV");
    favouriteLabel.className = "cat_card_guest_favourite_button";
    favouriteLabel.innerText = "Guest favourite";

    let starRating = document.createElement("SPAN")
    starRating.className = "cat_card_stars_rating";

    let starRatingTotal = 0;
    card.bookingInfo.reviews.forEach(e => starRatingTotal += e.starRating)
    starRatingTotal = starRatingTotal / card.bookingInfo.reviews.length;
    starRating.innerText = starRatingTotal.toFixed(2);

    if (+starRating.innerText >= 4.00)
    {
        favouriteEmptyDiv.appendChild(favouriteLabel);
    }

    let heartSVGOuterBox = document.createElement("DIV");
    heartSVGOuterBox.className = "cat_card_heart_box";

    let heartSVGInnerBox = document.createElement("DIV");
    heartSVGInnerBox.className = "cat_card_heart_box2";
    heartSVGInnerBox.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" style="stroke-width: 2; stroke: white" width="24" height="24" fill="currentColor" viewBox="0 0 32 32">
                                      <path d="M16 28c7-4.73 14-10 14-17a6.98 6.98 0 0 0-7-7c-1.8 0-3.58.68-4.95 2.05L16 8.1l-2.05-2.05a6.98 6.98 0 0 0-9.9 0A6.98 6.98 0 0 0 2 11c0 7 7 12.27 14 17z"></path>
                                  </svg>`;

    heartSVGOuterBox.appendChild(heartSVGInnerBox);

    favouriteBox.appendChild(favouriteEmptyDiv);
    favouriteBox.appendChild(heartSVGOuterBox);

    let controlButtons = document.createElement("DIV");
    controlButtons.className = "cat_card_buttons_box";

    let controlbuttonLeft = document.createElement("BUTTON");
    controlbuttonLeft.className = "cat_card_L_button";
    controlbuttonLeft.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-left" viewBox="-1 0 16 16" style="pointer-events: none;">
                                       <path b-ugywe7wap2="" d="M10 12.796V3.204L4.519 8zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753"></path>
                                   </svg>`;

    let controlbuttonRight = document.createElement("BUTTON");
    controlbuttonRight.className = "cat_card_R_button";
    controlbuttonRight.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right" viewBox="-1 0 16 16" style="pointer-events: none;">
                                        <path b-ugywe7wap2="" d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753"></path>
                                    </svg>`;

    controlButtons.appendChild(controlbuttonLeft);
    controlButtons.appendChild(controlbuttonRight);

    let imageDotsParent = document.createElement("DIV");
    imageDotsParent.className = "cat_card_dots_box_parent";

    let imageDotsBox = document.createElement("DIV");
    imageDotsBox.className = "cat_card_dots_box";

    for (i = 1; i < 6; i++)
    {
        let dot = document.createElement("SPAN");
        
        if (i == 1)
        {
            dot.className = "cat_card_dot";
            dot.style.background = "white";
        } 
        else if (i == 5)
        {
            dot.className = "cat_card_dot";
        }
        else
        {
            dot.className = "cat_card_dot";
        }

        imageDotsBox.appendChild(dot);
    }

    imageDotsParent.appendChild(imageDotsBox);

    imageElementsInnerBox.appendChild(favouriteBox);
    imageElementsInnerBox.appendChild(controlButtons);
    imageElementsInnerBox.appendChild(imageDotsParent);

    imageElementsOuterBox.appendChild(imageElementsInnerBox);
    imageBox.appendChild(imageElementsOuterBox);

    let imageElements = document.createElement("DIV");
    imageElements.className = "cat_card_image_container";

    let imageElementUL = document.createElement("UL");
    imageElementUL.className = "cat_card_image_containerUL";

    for (iid = 0; iid < card.images.length; iid++)
    {
        let imageListItem = document.createElement("LI");
        imageListItem.className = "cat_card_image_container_itemLI";

        let imageHref = document.createElement("A");
        imageHref.className = "cat_card_href";
        imageHref.href = `https://localhost:7027/Rooms/${card.id}`;

        let pictureTag = document.createElement("PICTURE");

        let image = document.createElement("IMG");
        image.className = "cat_card_image";
        image.src = card.images[iid].url;

        if (iid == 0)
        {
            imageHref.dataset.active = true;
        }

        pictureTag.appendChild(image);
        imageHref.appendChild(pictureTag);
        imageListItem.appendChild(imageHref);
        imageElementUL.appendChild(imageListItem);
        imageElements.appendChild(imageElementUL);
    }

    imageElements.appendChild(imageElementUL);

    imageBox.appendChild(imageElementsOuterBox);
    imageBox.appendChild(imageElements);

    let infoBox = document.createElement("DIV");
    infoBox.className = "cat_card_info_box";

    let cityInfo = document.createElement("DIV");
    cityInfo.className = "cat_card_info_header";

    let cityBox = document.createElement("DIV");
    cityBox.className = "cat_card_info_box_country";
    cityBox.innerText = `${card.bookingInfo.city}, ${card.bookingInfo.country}`;

    let starRatingBox = document.createElement("DIV");
    starRatingBox.className = "cat_card_stars_box";
    starRatingBox.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 32 32">
                                   <path fill-rule="evenodd" d="m15.1 1.58-4.13 8.88-9.86 1.27a1 1 0 0 0-.54 1.74l7.3 6.57-1.97 9.85a1 1 0 0 0 1.48 1.06l8.62-5 8.63 5a1 1 0 0 0 1.48-1.06l-1.97-9.85 7.3-6.57a1 1 0 0 0-.55-1.73l-9.86-1.28-4.12-8.88a1 1 0 0 0-1.82 0z"></path>
                               </svg>`;

    //  code for starRating is where guest favourite part is
    starRatingBox.appendChild(starRating);

    cityInfo.appendChild(cityBox);
    cityInfo.appendChild(starRatingBox);

    let shortDescr = document.createElement("DIV");
    shortDescr.className = "cat_card_info_box_middle";
    shortDescr.innerText = `${card.bookingInfo.shortDescription}`;

    let dateInfo = document.createElement("DIV");
    dateInfo.className = "cat_card_info_box_middle";
    dateInfo.innerText = `${card.bookingInfo.dateAvaiable}`;

    let priceInfo = document.createElement("DIV");
    priceInfo.className = "cat_card_info_box_price_box";

    let nightPrice = document.createElement("SPAN");
    nightPrice.className = "cat_card_price";
    nightPrice.innerText = `${card.bookingInfo.basePrice}$ `;

    let nightText = document.createElement("SPAN");
    nightText.innerText = "night";

    priceInfo.appendChild(nightPrice);
    priceInfo.appendChild(nightText);

    infoBox.appendChild(cityInfo);
    infoBox.appendChild(shortDescr);
    infoBox.appendChild(dateInfo);
    infoBox.appendChild(priceInfo);

    // end
    catCard.appendChild(imageBox);
    catCard.appendChild(infoBox);

    DisplayText3.appendChild(catCard);
}

async function fetchNeededCatCards(queryValue)
{
    document.body.style.cursor = "wait";

    const categoriesData = await fetch(`api/Categories/${categoriesCards.indexOf(queryValue)}`, {signal, cache: "force-cache"});
    const categoriesJson = await categoriesData.json();
    console.log(categoriesJson)

    let queryString = new URLSearchParams(window.location.search);

    for (why = 0; why < categoriesJson.catCards.length; why++)
    {
       if (queryString.size != 0)
       {
           let isRoomGuestFavourite = false;

           let starRatingTotal = 0;
           categoriesJson.catCards[why].bookingInfo.reviews.forEach(e => starRatingTotal += e.starRating)
           starRatingTotal = starRatingTotal / categoriesJson.catCards[why].bookingInfo.reviews.length;

           starRatingTotal = starRatingTotal.toFixed(2);
           
           if ((+starRatingTotal >= 4.00 && standoutStaysSelected == true)|| standoutStaysSelected == false)
           {
               isRoomGuestFavourite = true;
           } else {continue;}

           let location = queryString.get("location");
           let euCountries = ["Poland", "Germany", "Spain", "Italy", "United Kingdom"];
           let asiaCountries = ["China", "Japan", "Turkey"]
           let isLocationFound = false;
         
           if (location == categoriesJson.catCards[why].bookingInfo.country || location == "flexible")
           {
               isLocationFound = true;
           }
           else if (location == "Europe")
           {
               if (euCountries.includes(categoriesJson.catCards[why].bookingInfo.country))
               {
                   isLocationFound = true;
               }
           }
           else if (location == "Asia")
           {
               if (asiaCountries.includes(categoriesJson.catCards[why].bookingInfo.country))
               {
                   isLocationFound = true;
               }
           }
           else {continue;}

           let adultsCount = +queryString.get("adults");
           let childrenCount = +queryString.get("children");
           let adultsTotal = adultsCount + childrenCount;
           let isAdultsNumberCorrect = false;

           if (categoriesJson.catCards[why].bookingInfo.maxNumberOfGuests >= adultsTotal)
           {
               isAdultsNumberCorrect = true;
           } else {continue;}

           let typeOfPlace = queryString.get("type-of-place");
           let isTypeOfPlaceFound = false;

           if (categoriesJson.catCards[why].bookingInfo.typeOfPlace == typeOfPlace || typeOfPlace == null)
           {
               isTypeOfPlaceFound = true;
           } else {continue;}

           let minPrice = +queryString.get("min-price");
           let maxPrice = +queryString.get("max-price");
           let isPriceBetweenFound = false;

           if (categoriesJson.catCards[why].bookingInfo.basePrice >= minPrice && categoriesJson.catCards[why].bookingInfo.basePrice <= maxPrice)
           {
               isPriceBetweenFound = true;
           } else {continue;}

           let bedrooms = +queryString.get("bedroom-count");
           let beds = +queryString.get("beds-count");
           let bathrooms = +queryString.get("bathroom-count");
           let areBedroomsBedsBathroomsFound = false;

           if ((categoriesJson.catCards[why].bookingInfo.numberOfBedrooms == bedrooms || bedrooms == 0) && (categoriesJson.catCards[why].bookingInfo.numberOfBeds == beds || beds == 0) && (categoriesJson.catCards[why].bookingInfo.numberOfBathrooms == bathrooms || bathrooms == 0))
           {
               areBedroomsBedsBathroomsFound = true;
           } else {continue;}

           let cardAmenities = [];
           for (j = 0; j < categoriesJson.catCards[why].amenities.length; j++)
           {
               cardAmenities.push(categoriesJson.catCards[why].amenities[j].amenity.name);
           }

           let amenities = queryString.getAll("amenity");
           let areAmenitiesFound = amenities.every(function(val) 
           {
               return cardAmenities.indexOf(val) !== -1;
           });
           
           if (areAmenitiesFound == false) continue;
           
           let cardBookingOptions = [];
           for (j = 0; j < categoriesJson.catCards[why].bookingInfo.bookingOptions.length; j++)
           {
               cardBookingOptions.push(categoriesJson.catCards[why].bookingInfo.bookingOptions[j].bookingOptions.name);
           }

           let bookingOptions = queryString.getAll("booking-option");
           let areBookingOptionsFound = bookingOptions.every(function(val) 
           {
               return cardBookingOptions.indexOf(val) !== -1;
           });

           if (areBookingOptionsFound == false) continue;

           let cardProperty = categoriesJson.catCards[why].bookingInfo.propertyType.name;

           let propertyTypes = queryString.getAll("property-type");
           var isPropertyTypeFound = propertyTypes.every(function(val) 
           {
               return cardProperty.indexOf(val) !== -1;
           });

           if (isPropertyTypeFound == false) continue;
         
           let cardAccessibilityOptions = []
           for (j = 0; j < categoriesJson.catCards[why].bookingInfo.accessibilityFeatures.length; j++)
           {
               cardAccessibilityOptions.push(categoriesJson.catCards[why].bookingInfo.accessibilityFeatures[j].accessibilityFeature.name);
           }

           let accessibilityOptions = queryString.getAll("accessibility-feature");
           let areAccessibilityOptionsFound = accessibilityOptions.every(function(val) 
           {
               return cardAccessibilityOptions.indexOf(val) !== -1;
           });

           if (areAccessibilityOptionsFound == false) continue;

           let cardHostLanguages = []
           for (j = 0; j < categoriesJson.catCards[why].bookingInfo.hostLanguages.length; j++)
           {
               cardHostLanguages.push(categoriesJson.catCards[why].bookingInfo.hostLanguages[j].hostLanguage.name);
           }

           let hostLanguages = queryString.getAll("host-language");
           let areHostLanguagesFound = hostLanguages.every(function(val) 
           {
               return cardHostLanguages.indexOf(val) !== -1;
           });

           if (areHostLanguagesFound == false) continue;
    
           let checkin = "";
           let checkout = "";
           let isCardBetweenSelectedDates = false;
           // HOW DO I DO THAT WHY ANYTHING ABOUT DATES IS SO ANNOYING AAAAAAAAAAAA
           if (checkinFormMenu.style.display == "flex" && selectedCheckinDate.tagName != null)
           {
               checkin = new Date(selectedCheckinYear, months.indexOf(selectedCheckinMonth), +selectedCheckinDate.innerText);
               checkout = new Date(selectedCheckoutYear, months.indexOf(selectedCheckoutMonth), +selectedCheckoutDate.innerText);


           }
           else if (whenFormMenu.style.display == "flex")
           {
               checkin = new Date(monthsBlockSelectedStartYear, months.indexOf(monthsBlockSelectedStartMonth), +monthsBlockSelectedStartDate.innerText);
               checkout = new Date(monthsBlockSelectedEndYear, months.indexOf(monthsBlockSelectedEndMonth), +monthsBlockSelectedEndDate.innerText);
           }
           else if (flexibleBlockWhenFormMenu.style.display == "flex")
           {
               // wat do i do here im but just a 1 braincell i dont know what to do
           }

           if ((isTypeOfPlaceFound == true)
           &&  (isPriceBetweenFound == true)
           &&  (areBedroomsBedsBathroomsFound == true)
           &&  (areAmenitiesFound == true)
           &&  (areBookingOptionsFound == true)
           &&  (isRoomGuestFavourite == true)
           &&  (isPropertyTypeFound == true)
           &&  (areAccessibilityOptionsFound == true)
           &&  (areHostLanguagesFound == true)
           &&  (isAdultsNumberCorrect == true)
           &&  (isLocationFound == true))
           {
               //console.log(`\n${categoriesJson.catCards[i].bookingInfo.typeOfPlace}\n${categoriesJson.catCards[i].bookingInfo.basePrice}\n${cardAmenities}\n${cardProperty}\n${cardAccessibilityOptions}\n${cardHostLanguages}` + "\n%cGOOD ^^", "color:green; font-size:16px;")
               generateCatCards(categoriesJson.catCards[why]);
           }
           else
           {
               //console.log(`\n${categoriesJson.catCards[i].bookingInfo.typeOfPlace}\n${cardArray.bookingInfo.basePrice}\n${cardAmenities}\n${cardProperty}\n${cardAccessibilityOptions}\n${cardHostLanguages}` +  "\n%cBAD ^^", "color:red; font-size:16px;")
           }
       }
       else
       {
           generateCatCards(categoriesJson.catCards[why]);
       }
    }

    if (DisplayText3.innerText == "")
    {
        DisplayText3.innerHTML = `No results found. Have this cute cat instead! <img src="/img/meow.gif" width="200px" height="200px">`;
    }

    document.body.style.cursor = "";
}

document.getElementById("ScrollMenu").addEventListener("click", function(e)
{
    if (e.target.tagName == "A" && e.target.style.color != "black")
    {  
        var start = performance.now();

        for (i = 0; i < scrollMenu.childNodes.length; i++)
        {
            if (scrollMenu.childNodes[i].tagName == "A")
            {
                scrollMenu.childNodes[i].style.color = "#7d7d7d";
            }
        }
        e.target.style.color = "black";

        generateQueryStringURI();
        
        document.getElementById("DisplayText3").innerHTML = "";
        
        queryValue = encodeURIComponent(e.target.innerText);
        fetchNeededCatCards(queryValue);

        var end = performance.now();
        var timeTaken = end - start;
        console.log(timeTaken)
    }
})

document.addEventListener("click", function(e)
{
    if (window.location.pathname == "/" || window.location.pathname == "/home")
    {
        if (e.target.tagName == "path" && e.target.parentElement.parentElement.className == "cat_card_heart_box2")
        {  
            if (window.getComputedStyle(e.target.parentElement.parentElement).color == "rgb(0, 0, 0)")
            {
                e.target.parentElement.parentElement.style.color = "rgb(245, 2, 200)"
            }
            else if (window.getComputedStyle(e.target.parentElement.parentElement).color == "rgb(245, 2, 200)")
            {
                e.target.parentElement.parentElement.style.color = "rgb(0, 0, 0)";
            }
        }
    } 
})

function renderCatCardsOnRefresh()
{ 
    if (window.location.pathname == "/" || window.location.pathname == "/home")
    {
        //var start = performance.now();

        queryString = new URLSearchParams(window.location.search);
        var categoryQuery = queryString.get("category");

        if (categoryQuery != null && categoryQuery != "")
        {
            for (i = 0; i < scrollMenu.childNodes.length; i++)
            {
                if (scrollMenu.childNodes[i].tagName == "A" && encodeURIComponent(scrollMenu.childNodes[i].innerText) == encodeURIComponent(categoryQuery))
                {
                    scrollMenu.childNodes[i].style.color = "black";
                    fetchNeededCatCards(encodeURIComponent(scrollMenu.childNodes[i].innerText));
                    break;
                }
            }
        }
        else if (categoryQuery == null || categoryQuery == "")
        {
            scrollMenu.childNodes[1].style.color = "black";
            fetchNeededCatCards(scrollMenu.childNodes[1].innerText);
        }

        //var end = performance.now();
        //var timeTaken = end - start;
        //console.log(timeTaken)
    } 
}

renderCatCardsOnRefresh();

/*--------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------ROOM PAGE------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------*/
function roomGenerateRoomsPageCalendars()
{
    if (window.location.pathname.split("/")[1] == "Rooms")
    {
        let room = document.getElementById("RoomContent");

        let c1 = room.getElementsByClassName("room_information_calendar1")[0];
        let c2 = room.getElementsByClassName("room_information_calendar2")[0];

        initializeDatesCalendars(c1, c2);

        if (window.innerWidth < 1251)
        {
            let monthNameLength = c1.childNodes[0].offsetWidth;
            let tr = c1.childNodes[2].childNodes[0].childNodes[0];
            let width = Math.ceil(monthNameLength / 7);
            let height = width;
            c1.childNodes[1].offsetWidth = (width * 7);

            c1.childNodes[1].childNodes.forEach(function(e)
            {
                if (e.tagName == "LI")
                {
                    e.style.width = width + "px";
                }
            });

            tr.style.width = (width * 7) + "px";

            for (i = 0; i < 6; i++)
            {
                c1.childNodes[2].childNodes[0].childNodes[i].style.width = width + "px";
                c1.childNodes[2].childNodes[0].childNodes[i].style.height = height + "px";

                for (j = 0; j < 7; j++)
                {
                    try
                    {
                        c1.childNodes[2].childNodes[0].childNodes[i].childNodes[j].style.width = width + "px";
                        c1.childNodes[2].childNodes[0].childNodes[i].childNodes[j].style.height = height + "px";

                        c1.childNodes[2].childNodes[0].childNodes[i].childNodes[j].childNodes[0].style.width = width + "px";
                        c1.childNodes[2].childNodes[0].childNodes[i].childNodes[j].childNodes[0].style.height = height + "px";
                    } catch{break;}
                }
            }
        } 
    }
}

function roomCalendarResize()
{
    if (window.location.pathname.split("/")[1] == "Rooms")
    {
        window.addEventListener("resize", function()
        {   
            let room = document.getElementById("RoomContent");
            let c1 = room.getElementsByClassName("room_information_calendar1")[0];

            if (window.innerWidth < 1250)
            {
                let monthNameLength = c1.childNodes[0].offsetWidth;
                let tr = c1.childNodes[2].childNodes[0].childNodes[0];
                let width = Math.ceil(monthNameLength / 7);
                let height = width;
                c1.childNodes[1].offsetWidth = (width * 7);

                c1.childNodes[1].childNodes.forEach(function(e)
                {
                    if (e.tagName == "LI")
                    {
                        e.style.width = width + "px";
                    }
                });

                tr.style.width = (width * 7) + "px";

                for (i = 0; i < 6; i++)
                {
                    c1.childNodes[2].childNodes[0].childNodes[i].style.width = width + "px";
                    c1.childNodes[2].childNodes[0].childNodes[i].style.height = height + "px";

                    for (j = 0; j < 7; j++)
                    {
                        try
                        {
                            c1.childNodes[2].childNodes[0].childNodes[i].childNodes[j].style.width = width + "px";
                            c1.childNodes[2].childNodes[0].childNodes[i].childNodes[j].style.height = height + "px";

                            c1.childNodes[2].childNodes[0].childNodes[i].childNodes[j].childNodes[0].style.width = width + "px";
                            c1.childNodes[2].childNodes[0].childNodes[i].childNodes[j].childNodes[0].style.height = height + "px";
                        } catch{break;}
                    }
                }
            }
            else
            {
                for (i = 0; i < 6; i++)
                {
                    c1.childNodes[2].childNodes[0].childNodes[i].style.width = 49 + "px";
                    c1.childNodes[2].childNodes[0].childNodes[i].style.height = 49 + "px";

                    for (j = 0; j < 7; j++)
                    {
                        try
                        {
                            c1.childNodes[2].childNodes[0].childNodes[i].childNodes[j].style.width = 49 + "px";
                            c1.childNodes[2].childNodes[0].childNodes[i].childNodes[j].style.height = 49 + "px";

                            c1.childNodes[2].childNodes[0].childNodes[i].childNodes[j].childNodes[0].style.width = 49 + "px";
                            c1.childNodes[2].childNodes[0].childNodes[i].childNodes[j].childNodes[0].style.height = 49 + "px";
                        }catch{break;}
                    }
                }
            }
        })
    }
}

roomCalendarResize();

function resizeCalendars()
{
    if (window.location.pathname.split("/")[1] == "Rooms")
    {
        let room = document.getElementById("RoomContent");

        let c1 = room.getElementsByClassName("room_information_calendar1")[0];
        let c2 = room.getElementsByClassName("room_information_calendar2")[0];

        if (window.innerWidth < 1251)
        {
            let monthNameLength = c1.childNodes[0].offsetWidth;
            let tr = c1.childNodes[2].childNodes[0].childNodes[0];
            let width = Math.ceil(monthNameLength / 7);
            let height = width;
            c1.childNodes[1].offsetWidth = (width * 7);

            c1.childNodes[1].childNodes.forEach(function(e)
            {
                if (e.tagName == "LI")
                {
                    e.style.width = width + "px";
                }
            });

            tr.style.width = (width * 7) + "px";

            for (i = 0; i < 6; i++)
            {
                c1.childNodes[2].childNodes[0].childNodes[i].style.width = width + "px";
                c1.childNodes[2].childNodes[0].childNodes[i].style.height = height + "px";

                for (j = 0; j < 7; j++)
                {
                    try
                    {
                        c1.childNodes[2].childNodes[0].childNodes[i].childNodes[j].style.width = width + "px";
                        c1.childNodes[2].childNodes[0].childNodes[i].childNodes[j].style.height = height + "px";

                        c1.childNodes[2].childNodes[0].childNodes[i].childNodes[j].childNodes[0].style.width = width + "px";
                        c1.childNodes[2].childNodes[0].childNodes[i].childNodes[j].childNodes[0].style.height = height + "px";
                    } catch{break;}
                }
            }
        } 
    }
}

//  so... you like readable code huh? well yea how about you go read a book instead coz this code aint readable (at least for me)
function roomGenerateRoomsPage(room)
{
    let roomPage = document.createElement("DIV");
    roomPage.id = `Room-${room.id}`;
    roomPage.className = "room";

    //  HEADER
    let roomHeader = document.createElement("DIV");
    roomHeader.className = "room_header";

    let roomHeaderTopText = document.createElement("DIV");
    roomHeaderTopText.className = "room_header_topText";
    roomHeaderTopText.innerText = room.bookingInfo.maxNumberOfGuests == 1 
                                ? `${room.bookingInfo.typeOfPlace} with cute cat to pet for ${room.bookingInfo.maxNumberOfGuests} person`
                                : `${room.bookingInfo.typeOfPlace} with cute cats to pet for ${room.bookingInfo.maxNumberOfGuests} people`;

    let roomHeaderButtons = document.createElement("DIV");
    roomHeaderButtons.className = "room_header_buttons";

    let roomHeaderShareBox = document.createElement("BUTTON");
    roomHeaderShareBox.className = "room_header_share_box";
    roomHeaderShareBox.innerHTML = `<svg viewBox="0 -3 32 32" xmlns="http://www.w3.org/2000/svg" focusable="false" style="display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 2; overflow: visible; margin-inline-end: 8px;">
                                        <path d="m27 18v9c0 1.1046-.8954 2-2 2h-18c-1.10457 0-2-.8954-2-2v-9m11-15v21m-10-11 9.2929-9.29289c.3905-.39053 1.0237-.39053 1.4142 0l9.2929 9.29289" fill="none"></path>
                                    </svg>
                                    Share`;
    
    let roomHeaderSaveBox = document.createElement("BUTTON");
    roomHeaderSaveBox.className = "room_header_save_box";
    roomHeaderSaveBox.innerHTML = `<svg viewBox="0 -3 32 32" xmlns="http://www.w3.org/2000/svg" focusable="false" style="display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 2; overflow: visible; margin-inline-end: 8px;">
                                       <path d="M16 28c7-4.73 14-10 14-17a6.98 6.98 0 0 0-7-7c-1.8 0-3.58.68-4.95 2.05L16 8.1l-2.05-2.05a6.98 6.98 0 0 0-9.9 0A6.98 6.98 0 0 0 2 11c0 7 7 12.27 14 17z"></path>
                                   </svg>
                                   Save`;
    
    roomHeaderButtons.appendChild(roomHeaderShareBox);
    roomHeaderButtons.appendChild(roomHeaderSaveBox);
    roomHeader.appendChild(roomHeaderTopText);
    roomHeader.appendChild(roomHeaderButtons);

    //  IMAGES
    let roomImages = document.createElement("DIV");
    roomImages.className = "room_images";

    let roomImagesMainImage = document.createElement("DIV");
    roomImagesMainImage.className = "room_images_mainImage";

    let roomImagesImageBoxM = document.createElement("DIV");
    roomImagesImageBoxM.className = "room_images_image_box";

    let roomImagesImageM = document.createElement("IMG");
    roomImagesImageM.className = "room_images_image";
    roomImagesImageM.src = `${room.images[0].url}`;

    roomImagesImageBoxM.appendChild(roomImagesImageM);
    roomImagesMainImage.appendChild(roomImagesImageBoxM);

    let roomImagesSideImages = document.createElement("DIV");
    roomImagesSideImages.className = "room_images_sideImages";

    for (i = 0; i < 2; i++)
        {
            if (i == 0)
            {
                let roomImagesSide1 = document.createElement("DIV");
                roomImagesSide1.className = "room_images_side1";

                for (j = 1; j <= 2; j++)
                {
                    let roomImagesImageBox = document.createElement("DIV");
                    roomImagesImageBox.className = "room_images_image_box";

                    let roomImagesImage = document.createElement("IMG");
                    roomImagesImage.className = "room_images_image";

                    roomImagesImage.src = `${room.images[j].url}`;

                    roomImagesImageBox.appendChild(roomImagesImage);
                    roomImagesSide1.appendChild(roomImagesImageBox);
                }

                roomImagesSideImages.appendChild(roomImagesSide1);
            }
            else if (i == 1)
            {
                let roomImagesSide2 = document.createElement("DIV");
                roomImagesSide2.className = "room_images_side1";

                for (j = 3; j <= 4; j++)
                {
                    let roomImagesImageBox = document.createElement("DIV");
                    roomImagesImageBox.className = "room_images_image_box";

                    let roomImagesImage = document.createElement("IMG");
                    roomImagesImage.className = "room_images_image";

                    roomImagesImage.src = `${room.images[j].url}`;

                    roomImagesImageBox.appendChild(roomImagesImage);
                    roomImagesSide2.appendChild(roomImagesImageBox);
                }

                roomImagesSideImages.appendChild(roomImagesSide2);
            }
        }

    roomImages.appendChild(roomImagesMainImage);
    roomImages.appendChild(roomImagesSideImages);

    //  INFO SECTIONS (info and pricing)
    let roomInformationSection = document.createElement("DIV");
    roomInformationSection.className = "room_information_section";

    // info
    let roomInformation = document.createElement("DIV");
    roomInformation.className = "room_information";

    //  heder
    let roomInformationHeader = document.createElement("DIV");
    roomInformationHeader.className = "room_information_header";

    let roomInformationStayBox = document.createElement("DIV");
    roomInformationStayBox.className = "room_information_stay_box";

    let roomInformationStayLocation = document.createElement("DIV");
    roomInformationStayLocation.className = "room_information_stay_location";
    let locationString = `Cat Petting in ${room.bookingInfo.city}, ${room.bookingInfo.country}`;
    roomInformationStayLocation.innerText = locationString;

    let roomInformationStayLiving = document.createElement("DIV");
    roomInformationStayLiving.className = "room_information_stay_living";

    let guestString = room.bookingInfo.maxNumberOfGuests == 1 
                    ? "guest"
                    : "guests";

    let bedroomString = room.bookingInfo.numberOfBedrooms == 1
                      ? "bedroom"
                      : "bedrooms";

    let bedString = room.bookingInfo.numberOfBeds == 1 
                  ? "bed"
                  : "beds";

    let bathString =  room.bookingInfo.numberOfBathrooms == 1 
                   ? "bath"
                   : "baths";

    roomInformationStayLiving.innerText = `${room.bookingInfo.maxNumberOfGuests} ${guestString} - ${room.bookingInfo.numberOfBedrooms} ${bedroomString} - ${room.bookingInfo.numberOfBeds} ${bedString} - ${room.bookingInfo.numberOfBathrooms} ${bathString}`;

    roomInformationStayBox.appendChild(roomInformationStayLocation);
    roomInformationStayBox.appendChild(roomInformationStayLiving);
    
    let roomInformationReviews = document.createElement("DIV");
    roomInformationReviews.className = "room_information_reviews";

    // staaars
    let roomInformationReviewsStars = document.createElement("DIV");
    roomInformationReviewsStars.className = "room_information_reviews_stars";

    let roomInformationReviewsStarRating = document.createElement("DIV");
    roomInformationReviewsStarRating.className = "room_information_reviews_stars_rating";

    let starRatingTotal = 0;
    room.bookingInfo.reviews.forEach(e => starRatingTotal += e.starRating)
    starRatingTotal = starRatingTotal / room.bookingInfo.reviews.length;
    roomInformationReviewsStarRating.innerText = starRatingTotal.toFixed(2);

    let roomInformationReviewsStarSvgBox = document.createElement("DIV");
    roomInformationReviewsStarSvgBox.className = "room_information_reviews_stars_svg_box";
    roomInformationReviewsStarSvgBox.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" style="display: block; height: 8px; width: 8px; fill: currentcolor; margin: 0px 2px;">
                                                      <path fill-rule="evenodd" d="m15.1 1.58-4.13 8.88-9.86 1.27a1 1 0 0 0-.54 1.74l7.3 6.57-1.97 9.85a1 1 0 0 0 1.48 1.06l8.62-5 8.63 5a1 1 0 0 0 1.48-1.06l-1.97-9.85 7.3-6.57a1 1 0 0 0-.55-1.73l-9.86-1.28-4.12-8.88a1 1 0 0 0-1.82 0z" />
                                                  </svg>
                                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" style="display: block; height: 8px; width: 8px; fill: currentcolor; margin: 0px 2px;">
                                                      <path fill-rule="evenodd" d="m15.1 1.58-4.13 8.88-9.86 1.27a1 1 0 0 0-.54 1.74l7.3 6.57-1.97 9.85a1 1 0 0 0 1.48 1.06l8.62-5 8.63 5a1 1 0 0 0 1.48-1.06l-1.97-9.85 7.3-6.57a1 1 0 0 0-.55-1.73l-9.86-1.28-4.12-8.88a1 1 0 0 0-1.82 0z" />
                                                  </svg>
                                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" style="display: block; height: 8px; width: 8px; fill: currentcolor; margin: 0px 2px;">
                                                      <path fill-rule="evenodd" d="m15.1 1.58-4.13 8.88-9.86 1.27a1 1 0 0 0-.54 1.74l7.3 6.57-1.97 9.85a1 1 0 0 0 1.48 1.06l8.62-5 8.63 5a1 1 0 0 0 1.48-1.06l-1.97-9.85 7.3-6.57a1 1 0 0 0-.55-1.73l-9.86-1.28-4.12-8.88a1 1 0 0 0-1.82 0z" />
                                                  </svg>
                                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" style="display: block; height: 8px; width: 8px; fill: currentcolor; margin: 0px 2px;">
                                                      <path fill-rule="evenodd" d="m15.1 1.58-4.13 8.88-9.86 1.27a1 1 0 0 0-.54 1.74l7.3 6.57-1.97 9.85a1 1 0 0 0 1.48 1.06l8.62-5 8.63 5a1 1 0 0 0 1.48-1.06l-1.97-9.85 7.3-6.57a1 1 0 0 0-.55-1.73l-9.86-1.28-4.12-8.88a1 1 0 0 0-1.82 0z" />
                                                  </svg>
                                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" style="display: block; height: 8px; width: 8px; fill: currentcolor; margin: 0px 2px;">
                                                      <path fill-rule="evenodd" d="m15.1 1.58-4.13 8.88-9.86 1.27a1 1 0 0 0-.54 1.74l7.3 6.57-1.97 9.85a1 1 0 0 0 1.48 1.06l8.62-5 8.63 5a1 1 0 0 0 1.48-1.06l-1.97-9.85 7.3-6.57a1 1 0 0 0-.55-1.73l-9.86-1.28-4.12-8.88a1 1 0 0 0-1.82 0z" />
                                                  </svg>`;

    roomInformationReviewsStars.appendChild(roomInformationReviewsStarRating);
    roomInformationReviewsStars.appendChild(roomInformationReviewsStarSvgBox);

    // favourite or not
    let roomInformationReviewsGuestFavourite = document.createElement("DIV");
    roomInformationReviewsGuestFavourite.className = "room_information_reviews_guestFavourite";

    if (+roomInformationReviewsStarRating.innerText >= 4.00)
    {
        roomInformationReviewsGuestFavourite.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 32" fill="none" height="32"><g clip-path="url(#clip0_5880_37773)"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.4895 25.417L14.8276 24.4547L16.5303 23.6492L17.1923 24.6116L16.3409 25.0143L17.1923 24.6116C18.6638 26.751 17.9509 29.3868 15.5999 30.4989C14.8548 30.8513 14.0005 31.0196 13.1221 30.987L12.8044 30.9752L12.7297 29.2305L13.0474 29.2423C13.5744 29.2618 14.0871 29.1608 14.5341 28.9494C15.9447 28.2821 16.3725 26.7007 15.4895 25.417Z" fill="#222222"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M8.32441 10.235C10.0819 8.96204 10.9247 7.4878 10.853 5.81232C10.7813 4.13685 9.80929 2.59524 7.93708 1.18749C6.17964 2.46049 5.33678 3.93473 5.40851 5.6102C5.48024 7.28568 6.45221 8.82729 8.32441 10.235Z" fill="#F7F7F7"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M7.19425 0.489275C7.55718 0.226387 8.10753 0.246818 8.49416 0.537533C10.5385 2.07473 11.7071 3.84975 11.7923 5.84026C11.8775 7.83076 10.8574 9.52453 8.93841 10.9146C8.57548 11.1775 8.02513 11.157 7.6385 10.8663C5.59415 9.32914 4.4256 7.55411 4.34039 5.56361C4.25517 3.57311 5.27521 1.87933 7.19425 0.489275ZM7.92362 2.3684C6.77985 3.38355 6.29788 4.47199 6.3478 5.63813C6.39772 6.80428 6.97457 7.93203 8.20904 9.03547C9.35281 8.02032 9.83478 6.93187 9.78486 5.76573C9.73493 4.59959 9.15809 3.47184 7.92362 2.3684Z" fill="#222222"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M15.6806 24.0529C14.1314 22.353 12.4326 21.4688 10.5842 21.4001C8.73575 21.3315 7.10737 22.0923 5.69905 23.6824C7.24822 25.3823 8.94702 26.2666 10.7955 26.3352C12.6439 26.4038 14.2723 25.6431 15.6806 24.0529Z" fill="#F7F7F7"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M4.90529 24.1787C4.60807 23.8526 4.58911 23.4097 4.8593 23.1046C6.38985 21.3765 8.27538 20.4331 10.521 20.5164C12.7666 20.5998 14.7391 21.6864 16.4227 23.5339C16.7199 23.86 16.7389 24.303 16.4687 24.608C14.9381 26.3361 13.0526 27.2795 10.807 27.1962C8.56134 27.1128 6.5889 26.0262 4.90529 24.1787ZM6.98781 23.7198C8.22307 24.8808 9.46778 25.4045 10.7323 25.4515C11.9968 25.4984 13.2005 25.0656 14.3402 23.9928C13.1049 22.8318 11.8602 22.3081 10.5957 22.2611C9.3312 22.2142 8.12744 22.6471 6.98781 23.7198Z" fill="#222222"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M10.6766 20.7043C10.2137 18.5957 9.16392 17.0928 7.52727 16.1956C5.89062 15.2984 3.99442 15.1864 1.83867 15.8596C2.30157 17.9683 3.35135 19.4712 4.988 20.3684C6.62465 21.2656 8.52085 21.3775 10.6766 20.7043Z" fill="#F7F7F7"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M0.791956 15.9443C0.703053 15.5393 0.94431 15.1569 1.37329 15.023C3.7337 14.2859 5.9714 14.3695 7.95247 15.4554C9.92449 16.5364 11.1013 18.3139 11.6022 20.5956C11.6911 21.0006 11.4499 21.3829 11.0209 21.5169C8.66048 22.254 6.42277 22.1704 4.4417 21.0844C2.46969 20.0034 1.29285 18.226 0.791956 15.9443ZM2.95349 16.4656C3.43375 17.9951 4.27991 19.007 5.41321 19.6282C6.5306 20.2407 7.84423 20.4286 9.44069 20.0743C8.96043 18.5448 8.11427 17.5329 6.98097 16.9116C5.86358 16.2991 4.54995 16.1113 2.95349 16.4656Z" fill="#222222"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M7.90911 15.6267C8.65652 13.6743 8.53705 11.9555 7.55072 10.4702C6.56438 8.98484 4.90844 8.03014 2.58291 7.60605C1.8355 9.55846 1.95497 11.2773 2.9413 12.7626C3.92764 14.2479 5.58357 15.2026 7.90911 15.6267Z" fill="#F7F7F7"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M1.66037 7.28295C1.80927 6.89397 2.26578 6.67525 2.74598 6.76282C5.29848 7.22831 7.26368 8.31371 8.44396 10.0911C9.61955 11.8614 9.70866 13.854 8.89805 15.9715C8.74915 16.3605 8.29264 16.5792 7.81244 16.4916C5.25994 16.0261 3.29474 14.9407 2.11446 13.1634C0.938866 11.393 0.849755 9.40048 1.66037 7.28295ZM3.3385 8.6613C2.94038 10.1267 3.14588 11.3465 3.83454 12.3835C4.51397 13.4067 5.60091 14.1584 7.21992 14.5931C7.61804 13.1278 7.41254 11.9079 6.72388 10.8709C6.04445 9.84774 4.95751 9.09607 3.3385 8.6613Z" fill="#222222"></path></g><defs><clipPath id="clip0_5880_37773"><rect width="18.8235" height="32" fill="white" transform="translate(0.453125 0.000488281)"></rect></clipPath></defs></svg>
                                                          <div class="room_information_reviews_guestFavourite_text">
                                                              Guest favourite
                                                          </div>
                                                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 32" fill="none" height="32"><g clip-path="url(#clip0_5880_37786)"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.06516 25.417L4.72713 24.4547L3.02437 23.6492L2.3624 24.6116L3.21378 25.0143L2.3624 24.6116C0.890857 26.751 1.60381 29.3868 3.95483 30.4989C4.69986 30.8513 5.55423 31.0196 6.43257 30.987L6.75025 30.9752L6.82494 29.2305L6.50726 29.2423C5.98026 29.2618 5.46764 29.1608 5.02062 28.9494C3.61001 28.2821 3.18223 26.7007 4.06516 25.417Z" fill="#222222"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M11.2303 10.235C9.47283 8.96204 8.62998 7.4878 8.70171 5.81232C8.77344 4.13685 9.7454 2.59524 11.6176 1.18749C13.375 2.46049 14.2179 3.93473 14.1462 5.6102C14.0744 7.28568 13.1025 8.82729 11.2303 10.235Z" fill="#F7F7F7"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12.3604 0.489275C11.9975 0.226387 11.4472 0.246818 11.0605 0.537533C9.01618 2.07473 7.84763 3.84975 7.76242 5.84026C7.6772 7.83076 8.69724 9.52453 10.6163 10.9146C10.9792 11.1775 11.5296 11.157 11.9162 10.8663C13.9605 9.32914 15.1291 7.55411 15.2143 5.56361C15.2995 3.57311 14.2795 1.87933 12.3604 0.489275ZM11.6311 2.3684C12.7748 3.38355 13.2568 4.47199 13.2069 5.63813C13.157 6.80428 12.5801 7.93203 11.3456 9.03547C10.2019 8.02032 9.71991 6.93187 9.76983 5.76573C9.81975 4.59959 10.3966 3.47184 11.6311 2.3684Z" fill="#222222"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M3.87411 24.0529C5.42328 22.353 7.12208 21.4688 8.97051 21.4001C10.8189 21.3315 12.4473 22.0923 13.8556 23.6824C12.3065 25.3823 10.6077 26.2666 8.75924 26.3352C6.9108 26.4038 5.28243 25.6431 3.87411 24.0529Z" fill="#F7F7F7"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M14.6494 24.1787C14.9466 23.8526 14.9656 23.4097 14.6954 23.1046C13.1648 21.3765 11.2793 20.4331 9.03368 20.5164C6.78805 20.5998 4.81561 21.6864 3.13199 23.5339C2.83478 23.86 2.81582 24.303 3.08601 24.608C4.61655 26.3361 6.50208 27.2795 8.74771 27.1962C10.9933 27.1128 12.9658 26.0262 14.6494 24.1787ZM12.5669 23.7198C11.3316 24.8808 10.0869 25.4045 8.82241 25.4515C7.55791 25.4984 6.35415 25.0656 5.21452 23.9928C6.44977 22.8318 7.69449 22.3081 8.95899 22.2611C10.2235 22.2142 11.4272 22.6471 12.5669 23.7198Z" fill="#222222"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M8.87809 20.7043C9.34099 18.5957 10.3908 17.0928 12.0274 16.1956C13.6641 15.2984 15.5603 15.1864 17.716 15.8596C17.2531 17.9683 16.2033 19.4712 14.5667 20.3684C12.93 21.2656 11.0338 21.3775 8.87809 20.7043Z" fill="#F7F7F7"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M18.7627 15.9443C18.8516 15.5393 18.6104 15.1569 18.1814 15.023C15.821 14.2859 13.5833 14.3695 11.6022 15.4554C9.6302 16.5364 8.45336 18.3139 7.95247 20.5956C7.86356 21.0006 8.10482 21.3829 8.5338 21.5169C10.8942 22.254 13.1319 22.1704 15.113 21.0844C17.085 20.0034 18.2618 18.226 18.7627 15.9443ZM16.6012 16.4656C16.1209 17.9951 15.2748 19.007 14.1415 19.6282C13.0241 20.2407 11.7105 20.4286 10.114 20.0743C10.5943 18.5448 11.4404 17.5329 12.5737 16.9116C13.6911 16.2991 15.0047 16.1113 16.6012 16.4656Z" fill="#222222"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M11.6456 15.6267C10.8982 13.6743 11.0176 11.9555 12.004 10.4702C12.9903 8.98484 14.6462 8.03014 16.9718 7.60605C17.7192 9.55846 17.5997 11.2773 16.6134 12.7626C15.6271 14.2479 13.9711 15.2026 11.6456 15.6267Z" fill="#F7F7F7"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M17.8943 7.28295C17.7454 6.89397 17.2889 6.67525 16.8087 6.76282C14.2562 7.22831 12.291 8.31371 11.1107 10.0911C9.93513 11.8614 9.84602 13.854 10.6566 15.9715C10.8055 16.3605 11.262 16.5792 11.7422 16.4916C14.2947 16.0261 16.26 14.9407 17.4402 13.1634C18.6158 11.393 18.7049 9.40048 17.8943 7.28295ZM16.2162 8.6613C16.6143 10.1267 16.4088 11.3465 15.7201 12.3835C15.0407 13.4067 13.9538 14.1584 12.3348 14.5931C11.9366 13.1278 12.1421 11.9079 12.8308 10.8709C13.5102 9.84774 14.5972 9.09607 16.2162 8.6613Z" fill="#222222"></path></g><defs><clipPath id="clip0_5880_37786"><rect width="18.8235" height="32" fill="white" transform="matrix(-1 0 0 1 19.1016 0.000488281)"></rect></clipPath></defs></svg>`;
    }
    else
    {
        roomInformationReviewsGuestFavourite.innerHTML = "This place is not recommended by users";
        roomInformationReviewsGuestFavourite.style.fontWeight = "600";
    }
    
    // sometimes naming is hard you know?
    let roomInformationReviewsReviews = document.createElement("DIV");
    roomInformationReviewsReviews.className = "room_information_reviews_reviews";

    let roomInformationReviewsReviewsNumber = document.createElement("DIV");
    roomInformationReviewsReviewsNumber.className = "room_information_reviews_reviews_number";
    roomInformationReviewsReviewsNumber.innerText = room.bookingInfo.reviews.length;

    let roomInformationReviewsReviewsText = document.createElement("DIV");
    roomInformationReviewsReviewsText.className = "room_information_reviews_reviews_text"
    roomInformationReviewsReviewsText.innerText = room.bookingInfo.reviews.length == 1 
                                                ? "Review" 
                                                : "Reviews";

    roomInformationReviewsReviews.appendChild(roomInformationReviewsReviewsNumber);
    roomInformationReviewsReviews.appendChild(roomInformationReviewsReviewsText);

    roomInformationReviews.appendChild(roomInformationReviewsGuestFavourite);
    roomInformationReviews.appendChild(roomInformationReviewsStars);
    roomInformationReviews.appendChild(roomInformationReviewsReviews);

    let roomInformationHost = document.createElement("DIV");
    roomInformationHost.className = "room_information_host";

    let roomInformationHostPfp = document.createElement("DIV");
    roomInformationHostPfp.className = "room_information_host_pfp";
    roomInformationHostPfp.innerText = "•⩊•";

    let roomInformationHostNoClassDiv = document.createElement("DIV");

    let roomInformationHostName = document.createElement("DIV");
    roomInformationHostName.className = "room_information_host_name";
    roomInformationHostName.innerText = `Hosted by ${room.host.name}`; 

    let roomInformationHostDescription = document.createElement("DIV");
    roomInformationHostDescription.className = "room_information_host_description";
    roomInformationHostDescription.innerText = `${room.host.title}`;

    roomInformationHostNoClassDiv.appendChild(roomInformationHostName);
    roomInformationHostNoClassDiv.appendChild(roomInformationHostDescription);

    roomInformationHost.appendChild(roomInformationHostPfp);
    roomInformationHost.appendChild(roomInformationHostNoClassDiv);

    roomInformationHeader.appendChild(roomInformationStayBox);
    roomInformationHeader.appendChild(roomInformationReviews);
    roomInformationHeader.appendChild(roomInformationHost);

    //  high ame - not doing db stuff here coz it would be (in my opinion) best done with accounts implenented where user pick 
    //  these himself from selection of customizable options... and im not implementing accounts in this project
    let roomInformationHighlightAmenities = document.createElement("DIV");
    roomInformationHighlightAmenities.className = "room_information_highlightAmenities";

    let highlightTopArray = ["Dedicated workspace", "Peace and quiet", "At-home coffee"];
    let highlightBottomArray = ["A room with wifi that’s well-suited for working.", "This home is in quiet area.", "Start your morning right with the espresso machine."];

    for (i = 0; i < 3; i++)
    {
        let roomInformationHighlightBox = document.createElement("DIV");;
        roomInformationHighlightBox.className = "room_information_highlight_box";

        let roomInformationHighlightSvg = document.createElement("DIV");
        roomInformationHighlightSvg.className = "room_information_highlight_svg";

        let roomInformationHighlightNoClassDiv = document.createElement("DIV");

        let roomInformationHighlightTop = document.createElement("DIV");
        roomInformationHighlightTop.className = "room_information_highlight_top";
        roomInformationHighlightTop.innerText = highlightTopArray[i];

        let roomInformationHighlightBottom = document.createElement("DIV");
        roomInformationHighlightBottom.className = "room_information_highlight_bottom";
        roomInformationHighlightBottom.innerText = highlightBottomArray[i];

        roomInformationHighlightNoClassDiv.appendChild(roomInformationHighlightTop);
        roomInformationHighlightNoClassDiv.appendChild(roomInformationHighlightBottom);
        roomInformationHighlightBox.appendChild(roomInformationHighlightSvg);
        roomInformationHighlightBox.appendChild(roomInformationHighlightNoClassDiv);
        roomInformationHighlightAmenities.appendChild(roomInformationHighlightBox);
    }

    //  desc
    let roomInformationDescription = document.createElement("DIV");
    roomInformationDescription.className = "room_information_description";

    let roomInformationDescriptionText = document.createElement("DIV");
    roomInformationDescriptionText.className = "room_information_description_text";
    roomInformationDescriptionText.innerText = `${room.bookingInfo.description}`;
    
    let roomInformationDescriptionShowMore = document.createElement("DIV");
    roomInformationDescriptionShowMore.className = "room_information_description_showMore";

    let roomInformationDescriptionShowMoreButton = document.createElement("BUTTON");
    roomInformationDescriptionShowMoreButton.className = "room_information_description_showMore_button";
    roomInformationDescriptionShowMoreButton.innerHTML = `<div>
                                                              Show more
                                                          </div>
                                                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -1 18 18" style="height: 14px; width: 14px; display: block; margin-inline-start: 8px; margin-block-start: 1px;">
                                                              <path d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z" fill-rule="evenodd"></path>
                                                          </svg>`;
    
    roomInformationDescriptionShowMore.appendChild(roomInformationDescriptionShowMoreButton);

    roomInformationDescription.appendChild(roomInformationDescriptionText);
    roomInformationDescription.appendChild(roomInformationDescriptionShowMore);

    //  pet
    let roomInformationPetting = document.createElement("DIV");
    roomInformationPetting.className = "room_information_petting";

    let roomInformationPettingHeader = document.createElement("DIV");
    roomInformationPettingHeader.className = "room_information_petting_header";

    let roomInformationPettingHeaderText = document.createElement("DIV");
    roomInformationPettingHeaderText.className = "room_information_petting_header_text";
    roomInformationPettingHeaderText.innerText = "Who you'll pet";

    let roomInformationPettingHeaderControlBox = document.createElement("DIV");
    roomInformationPettingHeaderControlBox.className = "room_information_petting_header_control_box";

    let roomInformationPettingHeaderControlCounter = document.createElement("DIV");
    roomInformationPettingHeaderControlCounter.appendChild(document.createTextNode("1"));
    roomInformationPettingHeaderControlCounter.appendChild(document.createTextNode(" / "));
    roomInformationPettingHeaderControlCounter.appendChild(document.createTextNode(`${6}`)); // DB DATA

    let roomInformationPettingHeaderControlL = document.createElement("BUTTON");
    roomInformationPettingHeaderControlL.className = "room_information_petting_header_controlL";
    roomInformationPettingHeaderControlL.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" style="display: block; fill: currentColor; height: 12px; width: 12px; stroke: currentcolor; stroke-width: 5.33333; overflow: visible;">
                                                          <path fill="none" d="M20 28 8.7 16.7a1 1 0 0 1 0-1.4L20 4"></path>
                                                      </svg>`;

    let roomInformationPettingHeaderControlR = document.createElement("BUTTON");
    roomInformationPettingHeaderControlR.className = "room_information_petting_header_controlR";
    roomInformationPettingHeaderControlR.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" style="display: block; fill: currentColor; height: 12px; width: 12px; stroke: currentcolor; stroke-width: 5.33333; overflow: visible;">
                                                          <path fill="none" d="m12 4 11.3 11.3a1 1 0 0 1 0 1.4L12 28"></path>
                                                      </svg>`;

    roomInformationPettingHeaderControlBox.appendChild(roomInformationPettingHeaderControlCounter);
    roomInformationPettingHeaderControlBox.appendChild(roomInformationPettingHeaderControlL);
    roomInformationPettingHeaderControlBox.appendChild(roomInformationPettingHeaderControlR);

    roomInformationPettingHeader.appendChild(roomInformationPettingHeaderText);
    roomInformationPettingHeader.appendChild(roomInformationPettingHeaderControlBox);

    let roomInformationPettingCarousel = document.createElement("DIV");
    roomInformationPettingCarousel.className = "room_information_petting_carousel";

    let roomInformationPettingCarouselListBox = document.createElement("UL");
    roomInformationPettingCarouselListBox.className = "room_information_petting_carousel_list_box";

    //  DB DATA FOR LENGTH
    for (i = 0; i < 7; i++)
    {
        let roomInformationPettingCarouselList = document.createElement("LI");
        roomInformationPettingCarouselList.className = "room_information_petting_carousel_list";

        let roomInformationPettingImage = document.createElement("IMG");
        roomInformationPettingImage.className = "room_information_petting_image";
        roomInformationPettingImage.src = "https://images.dog.ceo/breeds/pomeranian/n02112018_7019.jpg"; // cute cat! very cat!

        let roomInformationPettingImageTopText = document.createElement("DIV");
        roomInformationPettingImageTopText.className = "room_information_petting_image_topText";
        roomInformationPettingImageTopText.innerText = "CAT CAT CAT!!! (?)"; // DB DATA

        let roomInformationPettingImageBottomText = document.createElement("DIV");
        roomInformationPettingImageBottomText.className = "room_information_petting_images_bottomText";
        roomInformationPettingImageBottomText.innerText = "P E T I T N O W"; // DB DATA
        
        roomInformationPettingCarouselList.appendChild(roomInformationPettingImage);
        roomInformationPettingCarouselList.appendChild(roomInformationPettingImageTopText);
        roomInformationPettingCarouselList.appendChild(roomInformationPettingImageBottomText);

        roomInformationPettingCarouselListBox.appendChild(roomInformationPettingCarouselList);
    }
    roomInformationPettingCarousel.appendChild(roomInformationPettingCarouselListBox);

    roomInformationPetting.appendChild(roomInformationPettingHeader);
    roomInformationPetting.appendChild(roomInformationPettingCarousel);

    //  ame
    let roomInformationAmenities = document.createElement("DIV");
    roomInformationAmenities.className = "room_information_amenities";

    let roomInformationAmenitiesHeader = document.createElement("DIV");
    roomInformationAmenitiesHeader.className = "room_information_amenities_header";
    roomInformationAmenitiesHeader.innerText = "What this place offers";

    let roomInformationAmenitiesList = document.createElement("DIV");
    roomInformationAmenitiesList.className = "room_information_amenities_list";

    for (i = 0; i < room.amenities.length && i < 10; i++)
        {
            let roomInformationAmenitiesItemBox = document.createElement("DIV");
            roomInformationAmenitiesItemBox.className = "room_information_amenities_item_box";

            let roomInformationAmenitiesItemSvg = document.createElement("DIV");
            roomInformationAmenitiesItemSvg.className = "room_information_amenities_item_svg";

            let roomInformationAmenitiesItemName = document.createElement("DIV");
            roomInformationAmenitiesItemName.className = "room_information_amenities_item_name";
            roomInformationAmenitiesItemName.innerText = `${room.amenities[i].amenity.name}`; // DB DATA

            roomInformationAmenitiesItemBox.appendChild(roomInformationAmenitiesItemSvg);
            roomInformationAmenitiesItemBox.appendChild(roomInformationAmenitiesItemName);

            roomInformationAmenitiesList.appendChild(roomInformationAmenitiesItemBox);
        }

    let roomInformationAmenitiesButtonBox = document.createElement("DIV");
    roomInformationAmenitiesButtonBox.className = "room_information_amenities_button_box";

    let roomInformationAmenitiesShowAll = document.createElement("BUTTON");
    roomInformationAmenitiesShowAll.className = "room_information_amenities_showAll";
    roomInformationAmenitiesShowAll.innerText = `Show all ${room.amenities.length} amenities`;

    roomInformationAmenitiesButtonBox.appendChild(roomInformationAmenitiesShowAll);

    roomInformationAmenities.appendChild(roomInformationAmenitiesHeader);
    roomInformationAmenities.appendChild(roomInformationAmenitiesList);
    roomInformationAmenities.appendChild(roomInformationAmenitiesButtonBox);

    //  caca
    let roomInformationCalendars = document.createElement("DIV");
    roomInformationCalendars.className = "room_information_I_HATE_CALENDARS_WHY_THERE_IS_CALENDAR";

    let roomInformationCalendarBox = document.createElement("DIV");
    roomInformationCalendarBox.className = "room_information_calendar_box";

    let roomInformationCalendarMoveControls = document.createElement("DIV");
    roomInformationCalendarMoveControls.className = "room_information_calendar_moveControls";

    let roomInformationCalendarMoveL =  document.createElement("BUTTON");
    roomInformationCalendarMoveL.className = "room_information_calendar_moveL";
    roomInformationCalendarMoveL.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" style="display: block; fill: currentColor; height: 12px; width: 12px; stroke: currentcolor; stroke-width: 5.33333; overflow: visible;">
                                                  <path fill="none" d="M20 28 8.7 16.7a1 1 0 0 1 0-1.4L20 4" />
                                              </svg>`;

    let roomInformationCalendarMoveR =  document.createElement("BUTTON");
    roomInformationCalendarMoveR.className = "room_information_calendar_moveR";
    roomInformationCalendarMoveR.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" style="display: block; fill: currentColor; height: 12px; width: 12px; stroke: currentcolor; stroke-width: 5.33333; overflow: visible;">
                                                  <path fill="none" d="m12 4 11.3 11.3a1 1 0 0 1 0 1.4L12 28" />
                                              </svg>`;

    roomInformationCalendarMoveControls.appendChild(roomInformationCalendarMoveL);
    roomInformationCalendarMoveControls.appendChild(roomInformationCalendarMoveR);

    let roomInformationCalendar1 = document.createElement("DIV");
    roomInformationCalendar1.className = "room_information_calendar1";
    roomInformationCalendar1.innerHTML = `<ul class="room_information_days_list">
                                              <li class="room_information_days_box">Mon</li>
                                              <li class="room_information_days_box">Tue</li>
                                              <li class="room_information_days_box">Wed</li>
                                              <li class="room_information_days_box">Thu</li>
                                              <li class="room_information_days_box">Fri</li>
                                              <li class="room_information_days_box">Sat</li>
                                              <li class="room_information_days_box">Sun</li>
                                          </ul>`;

    let roomInformationCalendar2 = document.createElement("DIV");
    roomInformationCalendar2.className = "room_information_calendar2";
    roomInformationCalendar2.innerHTML = `<ul class="room_information_days_list">
                                              <li class="room_information_days_box">Mon</li>
                                              <li class="room_information_days_box">Tue</li>
                                              <li class="room_information_days_box">Wed</li>
                                              <li class="room_information_days_box">Thu</li>
                                              <li class="room_information_days_box">Fri</li>
                                              <li class="room_information_days_box">Sat</li>
                                              <li class="room_information_days_box">Sun</li>
                                          </ul>`;

    roomInformationCalendarBox.appendChild(roomInformationCalendarMoveControls);
    roomInformationCalendarBox.appendChild(roomInformationCalendar1);
    roomInformationCalendarBox.appendChild(roomInformationCalendar2);

    roomInformationCalendars.appendChild(roomInformationCalendarBox);

    roomInformation.appendChild(roomInformationHeader);
    roomInformation.appendChild(roomInformationHighlightAmenities);
    roomInformation.appendChild(roomInformationDescription);
    roomInformation.appendChild(roomInformationPetting);
    roomInformation.appendChild(roomInformationAmenities);
    roomInformation.appendChild(roomInformationCalendars);

    // pricing
    let roomPricing = document.createElement("DIV");
    roomPricing.className = "room_pricing";

    let roomPricingFlyingRectangle = document.createElement("DIV");
    roomPricingFlyingRectangle.className = "room_pricing_flying_rectangle";

    let roomPricingFlyingRectangleBox = document.createElement("DIV");
    roomPricingFlyingRectangleBox.className = "room_pricing_flying_rectangle_box";

    let roomPricingFlyingRectangleNightPrice = document.createElement("DIV");
    roomPricingFlyingRectangleNightPrice.className = "room_pricing_flying_rectangle_night_price";

    let roomPricingFlyingRectangleNightPriceText = document.createElement("DIV");
    roomPricingFlyingRectangleNightPriceText.className = "room_pricing_flying_rectangle_night_price_text";
    roomPricingFlyingRectangleNightPriceText.innerText = `$${room.bookingInfo.basePrice}`;

    let roomPricingFlyingRectangleNightPriceNoClassDiv = document.createElement("DIV");
    roomPricingFlyingRectangleNightPriceNoClassDiv.innerText = "night";

    roomPricingFlyingRectangleNightPrice.appendChild(roomPricingFlyingRectangleNightPriceText);
    roomPricingFlyingRectangleNightPrice.appendChild(roomPricingFlyingRectangleNightPriceNoClassDiv);

    let roomPricingFlyingRectangleReservation = document.createElement("DIV");
    roomPricingFlyingRectangleReservation.className = "room_pricing_flying_rectangle_reservation";

    let roomPricingFlyingRectangleReservationBoxes = document.createElement("DIV");
    roomPricingFlyingRectangleReservationBoxes.className = "room_pricing_flying_rectangle_reservation_boxes";

    let roomPricingFlyingRectangleReservationBox1 = document.createElement("DIV");
    roomPricingFlyingRectangleReservationBox1.className = "room_pricing_flying_rectangle_reservation_box1";

    let roomPricingFlyingRectangleReservationButtonsCheck1 = document.createElement("BUTTON");
    roomPricingFlyingRectangleReservationButtonsCheck1.className = "room_pricing_flying_rectangle_reservation_buttons_check1";

    let roomPricingFlyingRectangleReservationButtonsText  = document.createElement("DIV");
    roomPricingFlyingRectangleReservationButtonsText.className = "room_pricing_flying_rectangle_reservation_buttons_text";
    roomPricingFlyingRectangleReservationButtonsText.innerText = "Check-in";

    let roomPricingFlyingRectangleReservationButtonsDateNoClass  = document.createElement("DIV");
    roomPricingFlyingRectangleReservationButtonsDateNoClass.innerText = `${22}/${11}/${2025}`;

    roomPricingFlyingRectangleReservationButtonsCheck1.appendChild(roomPricingFlyingRectangleReservationButtonsText);
    roomPricingFlyingRectangleReservationButtonsCheck1.appendChild(roomPricingFlyingRectangleReservationButtonsDateNoClass);

    let roomPricingFlyingRectangleReservationButtonsCheck2 = document.createElement("BUTTON");
    roomPricingFlyingRectangleReservationButtonsCheck2.className = "room_pricing_flying_rectangle_reservation_buttons_check2";

    let roomPricingFlyingRectangleReservationButtonsText2  = document.createElement("DIV");
    roomPricingFlyingRectangleReservationButtonsText2.className = "room_pricing_flying_rectangle_reservation_buttons_text";
    roomPricingFlyingRectangleReservationButtonsText2.innerText = "Check-out";

    let roomPricingFlyingRectangleReservationButtonsDateNoClass2  = document.createElement("DIV");
    roomPricingFlyingRectangleReservationButtonsDateNoClass2.innerText = `${22}/${12}/${2025}`;

    roomPricingFlyingRectangleReservationButtonsCheck2.appendChild(roomPricingFlyingRectangleReservationButtonsText2);
    roomPricingFlyingRectangleReservationButtonsCheck2.appendChild(roomPricingFlyingRectangleReservationButtonsDateNoClass2);

    roomPricingFlyingRectangleReservationBox1.appendChild(roomPricingFlyingRectangleReservationButtonsCheck1);
    roomPricingFlyingRectangleReservationBox1.appendChild(roomPricingFlyingRectangleReservationButtonsCheck2);

    let roomPricingFlyingRectangleReservationBox2 = document.createElement("DIV");
    roomPricingFlyingRectangleReservationBox2.className = "room_pricing_flying_rectangle_reservation_box2";

    let roomPricingFlyingRectangleReservationButtonGuest = document.createElement("BUTTON");
    roomPricingFlyingRectangleReservationButtonGuest.className = "room_pricing_flying_rectangle_reservation_button_guest";

    let roomPricingFlyingRectangleReservationButtonsText3  = document.createElement("DIV");
    roomPricingFlyingRectangleReservationButtonsText3.className = "room_pricing_flying_rectangle_reservation_buttons_text";
    roomPricingFlyingRectangleReservationButtonsText3.innerText = "Guests";

    let roomPricingFlyingRectangleReservationButtonsDateNoClass3  = document.createElement("DIV");
    roomPricingFlyingRectangleReservationButtonsDateNoClass3.innerText = `1 guest`;

    let roomPricingFlyingRectangleReservationButtonGuestSVG = document.createElement("DIV");
    roomPricingFlyingRectangleReservationButtonGuestSVG.className = "room_pricing_flying_rectangle_reservation_button_guest_svg";
    roomPricingFlyingRectangleReservationButtonGuestSVG.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" style="display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 4; overflow: visible; transition: 0.3s">
                                                                         <path fill="none" d="M28 12 16.7 23.3a1 1 0 0 1-1.4 0L4 12"></path>
                                                                     </svg>`;

    roomPricingFlyingRectangleReservationButtonGuest.appendChild(roomPricingFlyingRectangleReservationButtonsText3);
    roomPricingFlyingRectangleReservationButtonGuest.appendChild(roomPricingFlyingRectangleReservationButtonsDateNoClass3);
    roomPricingFlyingRectangleReservationButtonGuest.appendChild(roomPricingFlyingRectangleReservationButtonGuestSVG);

    roomPricingFlyingRectangleReservationBox2.appendChild(roomPricingFlyingRectangleReservationButtonGuest);

    roomPricingFlyingRectangleReservationBoxes.appendChild(roomPricingFlyingRectangleReservationBox1);
    roomPricingFlyingRectangleReservationBoxes.appendChild(roomPricingFlyingRectangleReservationBox2);

    let roomPricingFlyingRectangleReservationNoClassDiv = document.createElement("DIV");

    let roomPricingFlyingRectangleReservationReserveButton = document.createElement("BUTTON");
    roomPricingFlyingRectangleReservationReserveButton.className = "room_pricing_flying_rectangle_reservation_reserveButton";
    roomPricingFlyingRectangleReservationReserveButton.innerText = "Reserve"

    roomPricingFlyingRectangleReservationNoClassDiv.appendChild(roomPricingFlyingRectangleReservationReserveButton);

    roomPricingFlyingRectangleReservation.appendChild(roomPricingFlyingRectangleReservationBoxes);
    roomPricingFlyingRectangleReservation.appendChild(roomPricingFlyingRectangleReservationNoClassDiv);

    let roomPricingFlyingRectangleNoCharge = document.createElement("DIV");
    roomPricingFlyingRectangleNoCharge.className = "room_pricing_flying_rectangle_noCharge";
    roomPricingFlyingRectangleNoCharge.innerText = "You won't be charged (there is no feature for that)";

    let roomPricingFlyingRectanglePricing = document.createElement("DIV");
    roomPricingFlyingRectanglePricing.className = "room_pricing_flying_rectangle_pricing";

    let roomPricingFlyingRectanglePricingBox = document.createElement("DIV");
    roomPricingFlyingRectanglePricingBox.className = "room_pricing_flying_rectangle_pricing_box";

    let roomPricingFlyingRectanglePricingRow1 = document.createElement("DIV");
    roomPricingFlyingRectanglePricingRow1.className = "room_pricing_flying_rectangle_pricing_row";

    let roomPricingFlyingRectanglePricingRowText1 = document.createElement("DIV");
    roomPricingFlyingRectanglePricingRowText1.className = "room_pricing_flying_rectangle_pricing_row_text";
    roomPricingFlyingRectanglePricingRowText1.innerText = `$${room.bookingInfo.basePrice} x 5 nights`;

    let roomPricingFlyingRectanglePricingRowText1NoClassDiv = document.createElement("DIV");
    roomPricingFlyingRectanglePricingRowText1NoClassDiv.innerText = `$${room.bookingInfo.basePrice * 5}`;

    roomPricingFlyingRectanglePricingRow1.appendChild(roomPricingFlyingRectanglePricingRowText1);
    roomPricingFlyingRectanglePricingRow1.appendChild(roomPricingFlyingRectanglePricingRowText1NoClassDiv);

    let roomPricingFlyingRectanglePricingRow2 = document.createElement("DIV");
    roomPricingFlyingRectanglePricingRow2.className = "room_pricing_flying_rectangle_pricing_row";

    let roomPricingFlyingRectanglePricingRowText2 = document.createElement("DIV");
    roomPricingFlyingRectanglePricingRowText2.className = "room_pricing_flying_rectangle_pricing_row_text";
    roomPricingFlyingRectanglePricingRowText2.innerText = "Cleaning fee";

    let roomPricingFlyingRectanglePricingRowText2NoClassDiv = document.createElement("DIV");
    roomPricingFlyingRectanglePricingRowText2NoClassDiv.innerText = `$${room.bookingInfo.cleaningFee}`;

    roomPricingFlyingRectanglePricingRow2.appendChild(roomPricingFlyingRectanglePricingRowText2);
    roomPricingFlyingRectanglePricingRow2.appendChild(roomPricingFlyingRectanglePricingRowText2NoClassDiv);

    let roomPricingFlyingRectanglePricingRow3 = document.createElement("DIV");
    roomPricingFlyingRectanglePricingRow3.className = "room_pricing_flying_rectangle_pricing_row";

    let roomPricingFlyingRectanglePricingRowText3 = document.createElement("DIV");
    roomPricingFlyingRectanglePricingRowText3.className = "room_pricing_flying_rectangle_pricing_row_text";
    roomPricingFlyingRectanglePricingRowText3.innerText = "Airbnb service fee";

    let roomPricingFlyingRectanglePricingRowText3NoClassDiv = document.createElement("DIV");
    roomPricingFlyingRectanglePricingRowText3NoClassDiv.innerText = `$${200}` // DB DATA... ?

    roomPricingFlyingRectanglePricingRow3.appendChild(roomPricingFlyingRectanglePricingRowText3);
    roomPricingFlyingRectanglePricingRow3.appendChild(roomPricingFlyingRectanglePricingRowText3NoClassDiv);

    roomPricingFlyingRectanglePricingBox.appendChild(roomPricingFlyingRectanglePricingRow1);
    roomPricingFlyingRectanglePricingBox.appendChild(roomPricingFlyingRectanglePricingRow2);
    roomPricingFlyingRectanglePricingBox.appendChild(roomPricingFlyingRectanglePricingRow3);

    let roomPricingFlyingRectanglePricingTotal = document.createElement("DIV");
    roomPricingFlyingRectanglePricingTotal.className = "room_pricing_flying_rectangle_pricing_total";

    let roomPricingFlyingRectanglePricingTotalNoClassDiv1 = document.createElement("DIV");
    roomPricingFlyingRectanglePricingTotalNoClassDiv1.innerText = "TOTAL";

    let roomPricingFlyingRectanglePricingTotalNoClassDiv2 = document.createElement("DIV");
    roomPricingFlyingRectanglePricingTotalNoClassDiv2.innerText = `$${(room.bookingInfo.basePrice * 5) + room.bookingInfo.cleaningFee + 200}`;

    roomPricingFlyingRectanglePricingTotal.appendChild(roomPricingFlyingRectanglePricingTotalNoClassDiv1);
    roomPricingFlyingRectanglePricingTotal.appendChild(roomPricingFlyingRectanglePricingTotalNoClassDiv2);

    roomPricingFlyingRectanglePricing.appendChild(roomPricingFlyingRectanglePricingBox);
    roomPricingFlyingRectanglePricing.appendChild(roomPricingFlyingRectanglePricingTotal);

    roomPricingFlyingRectangleBox.appendChild(roomPricingFlyingRectangleNightPrice);
    roomPricingFlyingRectangleBox.appendChild(roomPricingFlyingRectangleReservation);
    roomPricingFlyingRectangleBox.appendChild(roomPricingFlyingRectangleNoCharge);
    roomPricingFlyingRectangleBox.appendChild(roomPricingFlyingRectanglePricing);

    roomPricingFlyingRectangle.appendChild(roomPricingFlyingRectangleBox);
    roomPricing.appendChild(roomPricingFlyingRectangle);

    // final info section
    roomInformationSection.appendChild(roomInformation);
    roomInformationSection.appendChild(roomPricing);

    //  REVIEWS
    let roomReviews = document.createElement("DIV");
    roomReviews.className = "room_reviews";

    let roomReviewsUserReviewsBox = document.createElement("DIV");
    roomReviewsUserReviewsBox.className = "room_reviews_userReviews_box";

    let fullStar = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" style="display: block; height: 8px; width: 8px; fill: currentcolor; margin-inline-end: 1px;">
                        <path fill-rule="evenodd" d="m15.1 1.58-4.13 8.88-9.86 1.27a1 1 0 0 0-.54 1.74l7.3 6.57-1.97 9.85a1 1 0 0 0 1.48 1.06l8.62-5 8.63 5a1 1 0 0 0 1.48-1.06l-1.97-9.85 7.3-6.57a1 1 0 0 0-.55-1.73l-9.86-1.28-4.12-8.88a1 1 0 0 0-1.82 0z" />
                    </svg>`;
    
    let emptyStar = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" style="display: block; height: 8px; width: 8px; fill: #dddddd;">
                         <path fill-rule="evenodd" d="m15.1 1.58-4.13 8.88-9.86 1.27a1 1 0 0 0-.54 1.74l7.3 6.57-1.97 9.85a1 1 0 0 0 1.48 1.06l8.62-5 8.63 5a1 1 0 0 0 1.48-1.06l-1.97-9.85 7.3-6.57a1 1 0 0 0-.55-1.73l-9.86-1.28-4.12-8.88a1 1 0 0 0-1.82 0z" />
                     </svg>`;

    for (i = 0; i < room.bookingInfo.reviews.length && i < 6; i++)
    {
        let roomReviewsUserReviewsUserInfo = document.createElement("DIV");
        roomReviewsUserReviewsUserInfo.className = "room_reviews_userReviews_userInfo";
        
        let roomReviewsUserReviewsUserInfoPfp = document.createElement("DIV");
        roomReviewsUserReviewsUserInfoPfp.className = "room_reviews_userReviews_userInfo_pfp";
        roomReviewsUserReviewsUserInfoPfp.innerText = "•⩊•";

        let roomReviewsUserReviewsUserInfoDetails = document.createElement("DIV");
        roomReviewsUserReviewsUserInfoDetails.className = "room_reviews_userReviews_userInfo_details";

        let roomReviewsUserReviewsUserInfoDetailsName = document.createElement("DIV");
        roomReviewsUserReviewsUserInfoDetailsName.className = "room_reviews_userReviews_userInfo_details_name";
        roomReviewsUserReviewsUserInfoDetailsName.innerText = `${room.bookingInfo.reviews[i].user.name}`;
        
        let roomReviewsUserReviewsUserInfoDetailsTime = document.createElement("DIV");
        roomReviewsUserReviewsUserInfoDetailsTime.className = "room_reviews_userReviews_userInfo_details_time";
        roomReviewsUserReviewsUserInfoDetailsTime.innerText = `${room.bookingInfo.reviews[i].user.timeOnCatbnb} on Catbnb`;

        roomReviewsUserReviewsUserInfoDetails.appendChild(roomReviewsUserReviewsUserInfoDetailsName);
        roomReviewsUserReviewsUserInfoDetails.appendChild(roomReviewsUserReviewsUserInfoDetailsTime);

        roomReviewsUserReviewsUserInfo.appendChild(roomReviewsUserReviewsUserInfoPfp);
        roomReviewsUserReviewsUserInfo.appendChild(roomReviewsUserReviewsUserInfoDetails);

        let roomReviewsUserReviewsUserInfoRatingDetails = document.createElement("DIV");
        roomReviewsUserReviewsUserInfoRatingDetails.className = "room_reviews_userReviews_userInfo_ratingDetails";

        let roomReviewsUserReviewsUserInfoRatingDetailsRating = document.createElement("DIV");
        roomReviewsUserReviewsUserInfoRatingDetailsRating.className = "room_reviews_userReviews_userInfo_ratingDetails_rating";
        let roomRating = `${room.bookingInfo.reviews[i].starRating}`;
        let starString = "";
        
        for (j = 1; j <= 5; j++)
        {
            if (j <= roomRating)
            {
                starString += fullStar;
            }
            else if (j > roomRating)
            {
                starString += emptyStar;
            }

            roomReviewsUserReviewsUserInfoRatingDetailsRating.innerHTML = starString;
        }

        let roomReviewsUserReviewsUserInfoRatingDetailsDateSubmitted = document.createElement("DIV");
        roomReviewsUserReviewsUserInfoRatingDetailsDateSubmitted.className = "room_reviews_userReviews_userInfo_ratingDetails_dateSubmitted";
        let date = new Date(room.bookingInfo.reviews[i].dateSent)
        roomReviewsUserReviewsUserInfoRatingDetailsDateSubmitted.innerText = `${months[date.getMonth()]} ${date.getFullYear()}`;

        let roomReviewsUserReviewsUserInfoRatingDetailsStayAmount = document.createElement("DIV");
        roomReviewsUserReviewsUserInfoRatingDetailsStayAmount.className = "room_reviews_userReviews_userInfo_ratingDetails_stayAmount";
        roomReviewsUserReviewsUserInfoRatingDetailsStayAmount.innerText = `Stayed ${room.bookingInfo.reviews[i].stayTime}`;
        
        roomReviewsUserReviewsUserInfoRatingDetails.appendChild(roomReviewsUserReviewsUserInfoRatingDetailsRating);
        roomReviewsUserReviewsUserInfoRatingDetails.appendChild(roomReviewsUserReviewsUserInfoRatingDetailsDateSubmitted);
        roomReviewsUserReviewsUserInfoRatingDetails.appendChild(roomReviewsUserReviewsUserInfoRatingDetailsStayAmount);

        let roomReviewsUserReviewsReview = document.createElement("DIV");
        roomReviewsUserReviewsReview.className = "room_reviews_userReviews_review";
        roomReviewsUserReviewsReview.innerText = `${room.bookingInfo.reviews[i].review}`; 

        let roomReviewsUserReviews = document.createElement("DIV");
        roomReviewsUserReviews.className = "room_reviews_userReviews";

        roomReviewsUserReviews.appendChild(roomReviewsUserReviewsUserInfo);
        roomReviewsUserReviews.appendChild(roomReviewsUserReviewsUserInfoRatingDetails);
        roomReviewsUserReviews.appendChild(roomReviewsUserReviewsReview);

        roomReviewsUserReviewsBox.appendChild(roomReviewsUserReviews);
    }

    let roomInformationUserReviewsButtonBox = document.createElement("DIV");
    roomInformationUserReviewsButtonBox.className = "room_information_userReviews_button_box";

    let roomInformationUserReviewsShowAll = document.createElement("BUTTON");
    roomInformationUserReviewsShowAll.className = "room_information_userReviews_showAll";
    roomInformationUserReviewsShowAll.innerText = room.bookingInfo.reviews.length > 1 
                                                ? `Show all ${room.bookingInfo.reviews.length} reviews` 
                                                : `Show all ${room.bookingInfo.reviews.length} review`;
    roomInformationUserReviewsButtonBox.appendChild(roomInformationUserReviewsShowAll);

    roomReviews.appendChild(roomReviewsUserReviewsBox);
    roomReviews.appendChild(roomInformationUserReviewsButtonBox);
    //  FINAL
    let roomContent = document.getElementById("RoomContent");
    
    roomPage.appendChild(roomHeader);
    roomPage.appendChild(roomImages);
    roomPage.appendChild(roomInformationSection);
    roomPage.appendChild(roomReviews);

    roomContent.appendChild(roomPage);

    if (roomInformationDescriptionText.scrollHeight <= roomInformationDescriptionText.offsetHeight)
    {
        roomInformationDescription.removeChild(roomInformationDescriptionShowMore);
    }

    roomGenerateRoomsPageCalendars();
}

async function roomFetchRoomDataAndGenerateRoomHTML()
{
    if (window.location.pathname.split("/")[1] == "Rooms")
    {
        var start = performance.now();
        var roomPageId = +window.location.pathname.split("/")[2];

        //var newurl = window.location.origin + window.location.pathname + `?pizza=belongs&on=banana`;
        //window.history.pushState({path:newurl},'',newurl);

        document.body.style.cursor = "wait";

        const roomData = await fetch(`api/CatCard/${roomPageId}`, {cache: "force-cache"});
        const roomJson = await roomData.json();
        console.log(roomJson)
        roomGenerateRoomsPage(roomJson);

        let room = document.getElementById("RoomContent");
        roomControllRoomsPage(room, roomJson);

        document.body.style.cursor = "";

        var end = performance.now();
        var timeTaken = end - start;
        console.log(timeTaken)
    }
}

roomFetchRoomDataAndGenerateRoomHTML();

function roomControllRoomsPage(room, roomData)
{
    let saveButton = room.getElementsByClassName("room_header_save_box")[0];
    let shareButton = room.getElementsByClassName("room_header_share_box")[0];
    let popupMessage1 = room.getElementsByClassName("room_popup_block1")[0];
    let popupMessage2 = room.getElementsByClassName("room_popup_block2")[0];

    saveButton.appendChild(popupMessage1);
    shareButton.appendChild(popupMessage2);

    saveButton.onclick = function()
    {
        navigator.clipboard.writeText(window.location.origin + window.location.pathname);

        popupMessage1.style.display = "block";
        setTimeout(() => 
        {
            popupMessage1.style.display = "none";
        }, 3000);
    }

    shareButton.onclick = function()
    {
        navigator.clipboard.writeText("https://www.youtube.com/watch?v=dQw4w9WgXcQ");

        popupMessage2.style.display = "block";
        setTimeout(() => 
        {
            popupMessage2.style.display = "none";
        }, 3000);
    }

    function roomControllDescriptionShowMore()
    {
        let showMoreDescriptionButton = room.getElementsByClassName("room_information_description_showMore_button")[0];
        let modal = room.getElementsByClassName("modal_V2")[0];
        let modalBackground = room.getElementsByClassName("modal_background_V2")[0];
        var closeButton = room.getElementsByClassName("modal_close")[0];

        try
        {
            showMoreDescriptionButton.onclick = function()
            {
                modal.classList.add("modal_V2_slideIn");

                modal.style.display = "flex";
                modalBackground.style.display = "block";
                document.body.style.overflow = "hidden";
                document.body.style.paddingRight = "19px";

                modal.childNodes[3].innerText = `${roomData.bookingInfo.description}`;
            }
        }catch{}
        
        modalBackground.onclick = function(e)
        {
            if (e.target == modalBackground)
            {
                modal.classList.remove("modal_V2_slideIn");

                setTimeout(() => 
                {
                    modal.style.display = "none";
                    modalBackground.style.display = "none";
                    document.body.style.overflow = "";
                    document.body.style.paddingRight = "";
                }, 150);
            }  
        }

        closeButton.onclick = function()
        {
            modal.classList.remove("modal_V2_slideIn");

            setTimeout(() => 
            {
                modal.style.display = "none";
                modalBackground.style.display = "none";
                document.body.style.overflow = "";
                document.body.style.paddingRight = "";
            }, 150);
        }
    }

    function roomControllImageCarousel()
    {
        if (window.location.pathname.split("/")[1] == "Rooms")
        {
            let bl = room.getElementsByClassName("room_information_petting_header_controlL")[0];
            bl.disabled = !bl.disabled;
            let br = room.getElementsByClassName("room_information_petting_header_controlR")[0];
            let carouselBox = room.getElementsByClassName("room_information_petting_carousel")[0];
            let carousel = carouselBox.childNodes[0];

            let controlBox = room.getElementsByClassName("room_information_petting_header_control_box")[0];
            let controlNumbers = controlBox.childNodes[0];

            let scrollValue = 0;
            let scrollChange = 0;
            scrollChange = carousel.childNodes[1].offsetWidth + 5;

            bl.onclick = function()
            {
                if (controlNumbers.childNodes[0].data == 1)
                {
                    return;
                }
                else
                {
                    carousel.scrollTo(scrollValue -= scrollChange, 0);
                    controlNumbers.childNodes[0].data--;

                    if (br.disabled == true)
                    {
                        br.disabled = !br.disabled;
                    }
                    
                    if (controlNumbers.childNodes[0].data == 1)
                    {
                        bl.disabled = !bl.disabled;
                    }
                } 
            }
            
            br.onclick = function()
            {
                if (controlNumbers.childNodes[0].data == controlNumbers.childNodes[2].data)
                {
                    return;
                }
                else
                {
                    carousel.scrollTo(scrollValue += scrollChange, 0);
                    controlNumbers.childNodes[0].data++;

                    if (bl.disabled == true)
                    {
                        bl.disabled = !bl.disabled;
                    }

                    if (controlNumbers.childNodes[0].data == controlNumbers.childNodes[2].data)
                    {
                        br.disabled = !br.disabled;
                    }
                }      
            }
        }
    }

    function roomControllShowAllAmenities()
    {
        let showAllAmenitiesButton = room.getElementsByClassName("room_information_amenities_showAll")[0];
        let modal = room.getElementsByClassName("modal_V2")[1];
        let modalBackground = room.getElementsByClassName("modal_background_V2")[1];
        var closeButton = room.getElementsByClassName("modal_close")[1];

        showAllAmenitiesButton.onclick = function()
        {
            modal.classList.add("modal_V2_slideIn");

            modal.style.display = "flex";
            modalBackground.style.display = "block";
            document.body.style.overflow = "hidden";
            document.body.style.paddingRight = "19px";

            let amenitiesSectionEssentials = document.createElement("DIV");
            amenitiesSectionEssentials.className = "room_modal_amenities_section";

            let amenitiesSectionFeatures = document.createElement("DIV");
            amenitiesSectionFeatures.className = "room_modal_amenities_section";

            let amenitiesSectionLocation = document.createElement("DIV");
            amenitiesSectionLocation.className = "room_modal_amenities_section";

            let amenitiesSectionSafety = document.createElement("DIV");
            amenitiesSectionSafety.className = "room_modal_amenities_section";

            let amenitiesBlockEssentials = document.createElement("DIV");
            amenitiesBlockEssentials.className = "room_modal_amenities_block";

            let amenitiesBlockFeatures = document.createElement("DIV");
            amenitiesBlockFeatures.className = "room_modal_amenities_block";

            let amenitiesBlockLocation = document.createElement("DIV");
            amenitiesBlockLocation.className = "room_modal_amenities_block";

            let amenitiesBlockSafety  = document.createElement("DIV");
            amenitiesBlockSafety.className = "room_modal_amenities_block";

            if (modal.childNodes[3].innerText == "")
            {
                for (id = 0; id < roomData.amenities.length; id++)
                {
                    var amenity = document.createElement("DIV");
                    amenity.className = "room_modal_amenity";

                    var amenitySVG = document.createElement("DIV");
                    amenitySVG.className = "room_modal_amenity_svg";

                    var amenityText = document.createElement("DIV");
                    amenityText.className = "room_modal_amenity_text";

                    let amenityIdDB = roomData.amenities[id].amenitiesId;
                    let amenityTextDB = `${roomData.amenities[id].amenity.name}`;

                    switch (true)
                    {
                        case amenityIdDB >= 1 && amenityIdDB <= 10:

                            amenityText.innerText = amenityTextDB;
                            amenity.appendChild(amenitySVG);
                            amenity.appendChild(amenityText);

                            amenitiesBlockEssentials.appendChild(amenity);
                            break;
                        case amenityIdDB >= 11 && amenityIdDB <= 21:

                            amenityText.innerText = amenityTextDB;
                            amenity.appendChild(amenitySVG);
                            amenity.appendChild(amenityText);

                            amenitiesBlockFeatures.appendChild(amenity);
                            break;
                        case amenityIdDB >= 22 && amenityIdDB <= 24:

                            amenityText.innerText = amenityTextDB;
                            amenity.appendChild(amenitySVG);
                            amenity.appendChild(amenityText);

                            amenitiesBlockLocation.appendChild(amenity);
                            break;
                        case amenityIdDB >= 25 && amenityIdDB <= 26:

                            amenityText.innerText = amenityTextDB;
                            amenity.appendChild(amenitySVG);
                            amenity.appendChild(amenityText);

                            amenitiesBlockSafety.appendChild(amenity);
                            break;
                    }
                }

                if (amenitiesBlockEssentials.childNodes.length != 0)
                {
                    let amenitiesTitle = document.createElement("DIV");
                    amenitiesTitle.className = "room_modal_amenities_title";
                    amenitiesTitle.innerText = "Essentials";
                    amenitiesSectionEssentials.appendChild(amenitiesTitle);

                    for (i = 0; amenitiesBlockEssentials.childNodes.length > 0; i++)
                    {
                        amenitiesSectionEssentials.appendChild(amenitiesBlockEssentials.childNodes[0]);
                    }

                    modal.childNodes[3].appendChild(amenitiesSectionEssentials);
                }
                
                if (amenitiesBlockFeatures.childNodes.length != 0)
                {
                    let amenitiesTitle = document.createElement("DIV");
                    amenitiesTitle.className = "room_modal_amenities_title";
                    amenitiesTitle.innerText = "Features";
                    amenitiesSectionFeatures.appendChild(amenitiesTitle);

                    for (i = 0; amenitiesBlockFeatures.childNodes.length > 0; i++)
                    {
                        amenitiesSectionFeatures.appendChild(amenitiesBlockFeatures.childNodes[0]);
                    }

                    modal.childNodes[3].appendChild(amenitiesSectionFeatures);
                }

                if (amenitiesBlockLocation.childNodes.length != 0)
                {
                    let amenitiesTitle = document.createElement("DIV");
                    amenitiesTitle.className = "room_modal_amenities_title";
                    amenitiesTitle.innerText = "Location";
                    amenitiesSectionLocation.appendChild(amenitiesTitle);

                    for (i = 0; amenitiesBlockLocation.childNodes.length > 0; i++)
                    {
                        amenitiesSectionLocation.appendChild(amenitiesBlockLocation.childNodes[0]);
                    }

                    modal.childNodes[3].appendChild(amenitiesSectionLocation);
                }

                if (amenitiesBlockSafety.childNodes.length != 0)
                {
                    let amenitiesTitle = document.createElement("DIV");
                    amenitiesTitle.className = "room_modal_amenities_title";
                    amenitiesTitle.innerText = "Safety";
                    amenitiesSectionSafety.appendChild(amenitiesTitle);

                    for (i = 0; amenitiesBlockSafety.childNodes.length > 0; i++)
                    {
                        amenitiesSectionSafety.appendChild(amenitiesBlockSafety.childNodes[0]);
                    }

                    modal.childNodes[3].appendChild(amenitiesSectionSafety);
                }
            }
        }

        modalBackground.onclick = function(e)
        {
            if (e.target == modalBackground)
            {
                modal.classList.remove("modal_V2_slideIn");

                setTimeout(() => 
                {
                    modal.style.display = "none";
                    modalBackground.style.display = "none";
                    document.body.style.overflow = "";
                    document.body.style.paddingRight = "";
                }, 150);
            }  
        }

        closeButton.onclick = function()
        {
            modal.classList.remove("modal_V2_slideIn");

            setTimeout(() => 
            {
                modal.style.display = "none";
                modalBackground.style.display = "none";
                document.body.style.overflow = "";
                document.body.style.paddingRight = "";
            }, 150);
        }
    }

    function roomControllShowAllReviews()
    {
        let showAllReviewsButton = room.getElementsByClassName("room_information_userReviews_showAll")[0];
        let modal = room.getElementsByClassName("modal_V2")[2];
        let modalBackground = room.getElementsByClassName("modal_background_V2")[2];
        var closeButton = room.getElementsByClassName("modal_close")[2];

        showAllReviewsButton.onclick = function()
        {
            modal.classList.add("modal_V2_slideIn");

            modal.style.display = "flex";
            modalBackground.style.display = "block";
            document.body.style.overflow = "hidden";
            document.body.style.paddingRight = "19px";

            var reviews = [];
            for (i = 0; i < roomData.bookingInfo.reviews.length; i++)
            {
                reviews.push(roomData.bookingInfo.reviews[i]);
            }

            function sortReviews(reviews)
            {
                reviewsBox.innerHTML = "";
                for (i = 0; i < reviews.length; i++)
                {
                    if ((reviews[i].review.split(" ").includes(`${searchBoxInput.value}`) || searchBoxInput.value == ""))
                    {
                        let userReviewBox = document.createElement("DIV");
                        userReviewBox.className = "room_modal_reviews_userReviews";

                        let userInfo = document.createElement("DIV");
                        userInfo.className = "room_reviews_userReviews_userInfo";

                        let pfp = document.createElement("DIV");
                        pfp.className = "room_reviews_userReviews_userInfo_pfp";
                        pfp.innerText = "•⩊•";

                        let userDetails = document.createElement("DIV");
                        userDetails.className = "room_reviews_userReviews_userInfo_details";

                        let username = document.createElement("DIV");
                        username.className = "room_reviews_userReviews_userInfo_details_name";
                        username.innerText = reviews[i].user.name;
                        
                        let timeOnCatbnb = document.createElement("DIV");
                        timeOnCatbnb.className = "room_reviews_userReviews_userInfo_details_time";
                        timeOnCatbnb.innerText = reviews[i].user.timeOnCatbnb;

                        userDetails.appendChild(username);
                        userDetails.appendChild(timeOnCatbnb);

                        userInfo.appendChild(pfp);
                        userInfo.appendChild(userDetails);

                        let ratingDetails = document.createElement("DIV");
                        ratingDetails.className = "room_reviews_userReviews_userInfo_ratingDetails";

                        let starRatingBox = document.createElement("DIV");
                        starRatingBox.className = "room_reviews_userReviews_userInfo_ratingDetails_rating";

                        let roomRating = `${reviews[i].starRating}`;
                        let starString = "";
                        
                        for (j = 1; j <= 5; j++)
                        {
                            if (j <= roomRating)
                            {
                                starString += fullStar;
                            }
                            else if (j > roomRating)
                            {
                                starString += emptyStar;
                            } 
                        }

                        starRatingBox.innerHTML = starString;

                        let dateSubmitted = document.createElement("DIV");
                        dateSubmitted.className = "room_reviews_userReviews_userInfo_ratingDetails_dateSubmitted";
                        let date = new Date(reviews[i].dateSent)
                        dateSubmitted.innerText = `${months[date.getMonth()]} ${date.getFullYear()}`;

                        let stayAmount = document.createElement("DIV");
                        stayAmount.className = "room_reviews_userReviews_userInfo_ratingDetails_stayAmount";
                        stayAmount.innerText = reviews[i].stayTime;

                        ratingDetails.appendChild(starRatingBox);
                        ratingDetails.appendChild(dateSubmitted);
                        ratingDetails.appendChild(stayAmount);

                        let userReview = document.createElement("DIV");
                        userReview.className = "room_modal_reviews_userReviews_review";

                        let markdown = document.createElement("MARK");
                        markdown.innerText = `${searchBoxInput.value}`;
                        
                        let newStringT = reviews[i].review.split(/([_\W ])/);
                        let newDiv = document.createElement("DIV");
                        newDiv.className = "room_modal_reviews_userReviews_review";
                        let whatthestring = "";

                        for (k = 0; k < newStringT.length; k++)
                        {
                            if (newStringT[k] != markdown.innerText)
                            {
                                whatthestring += newStringT[k];
                            }
                            else if (newStringT[k] == markdown.innerText && markdown.innerText != " " && markdown.innerText != "")
                            {
                                newDiv.appendChild(document.createTextNode(`${whatthestring}`));
                                whatthestring = "";
                                newDiv.appendChild(markdown.cloneNode(true));
                            }
                        }
                        
                        newDiv.appendChild(document.createTextNode(`${whatthestring}`))
                        userReview.appendChild(newDiv);
                        
                        userReviewBox.appendChild(userInfo);
                        userReviewBox.appendChild(ratingDetails);
                        userReviewBox.appendChild(userReview);

                        reviewsBox.appendChild(userReviewBox);
                    }
                }

                numberOfReviews.innerText = `${reviewsBox.childNodes.length} ${reviewsBox.childNodes.length > 1 
                                          ? "reviews" 
                                          : "review"}`;
            }

            if (modal.childNodes[3].innerText == "")
            {
                var fullStar = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" style="display: block; height: 8px; width: 8px; fill: currentcolor; margin-inline-end: 1px;">
                                    <path fill-rule="evenodd" d="m15.1 1.58-4.13 8.88-9.86 1.27a1 1 0 0 0-.54 1.74l7.3 6.57-1.97 9.85a1 1 0 0 0 1.48 1.06l8.62-5 8.63 5a1 1 0 0 0 1.48-1.06l-1.97-9.85 7.3-6.57a1 1 0 0 0-.55-1.73l-9.86-1.28-4.12-8.88a1 1 0 0 0-1.82 0z" />
                                </svg>`;
    
                var emptyStar = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" style="display: block; height: 8px; width: 8px; fill: #dddddd;">
                                      <path fill-rule="evenodd" d="m15.1 1.58-4.13 8.88-9.86 1.27a1 1 0 0 0-.54 1.74l7.3 6.57-1.97 9.85a1 1 0 0 0 1.48 1.06l8.62-5 8.63 5a1 1 0 0 0 1.48-1.06l-1.97-9.85 7.3-6.57a1 1 0 0 0-.55-1.73l-9.86-1.28-4.12-8.88a1 1 0 0 0-1.82 0z" />
                                 </svg>`;

                var reviewsBox = document.createElement("DIV")
                reviewsBox.className = "room_reviews_userReviews_box";

                for (id = 0; id < roomData.bookingInfo.reviews.length; id++)
                {
                    let userReviewBox = document.createElement("DIV");
                    userReviewBox.className = "room_modal_reviews_userReviews";

                    let userInfo = document.createElement("DIV");
                    userInfo.className = "room_reviews_userReviews_userInfo";

                    let pfp = document.createElement("DIV");
                    pfp.className = "room_reviews_userReviews_userInfo_pfp";
                    pfp.innerText = "•⩊•";

                    let userDetails = document.createElement("DIV");
                    userDetails.className = "room_reviews_userReviews_userInfo_details";

                    let username = document.createElement("DIV");
                    username.className = "room_reviews_userReviews_userInfo_details_name";
                    username.innerText = roomData.bookingInfo.reviews[id].user.name;
                    
                    let timeOnCatbnb = document.createElement("DIV");
                    timeOnCatbnb.className = "room_reviews_userReviews_userInfo_details_time";
                    timeOnCatbnb.innerText = roomData.bookingInfo.reviews[id].user.timeOnCatbnb;

                    userDetails.appendChild(username);
                    userDetails.appendChild(timeOnCatbnb);

                    userInfo.appendChild(pfp);
                    userInfo.appendChild(userDetails);

                    let ratingDetails = document.createElement("DIV");
                    ratingDetails.className = "room_reviews_userReviews_userInfo_ratingDetails";

                    let starRatingBox = document.createElement("DIV");
                    starRatingBox.className = "room_reviews_userReviews_userInfo_ratingDetails_rating";

                    let roomRating = `${roomData.bookingInfo.reviews[id].starRating}`;
                    let starString = "";
                    
                    for (j = 1; j <= 5; j++)
                    {
                        if (j <= roomRating)
                        {
                            starString += fullStar;
                        }
                        else if (j > roomRating)
                        {
                            starString += emptyStar;
                        } 
                    }

                    starRatingBox.innerHTML = starString;

                    let dateSubmitted = document.createElement("DIV");
                    dateSubmitted.className = "room_reviews_userReviews_userInfo_ratingDetails_dateSubmitted";
                    let date = new Date(roomData.bookingInfo.reviews[id].dateSent)
                    dateSubmitted.innerText = `${months[date.getMonth()]} ${date.getFullYear()}`;

                    let stayAmount = document.createElement("DIV");
                    stayAmount.className = "room_reviews_userReviews_userInfo_ratingDetails_stayAmount";
                    stayAmount.innerText = roomData.bookingInfo.reviews[id].stayTime;

                    ratingDetails.appendChild(starRatingBox);
                    ratingDetails.appendChild(dateSubmitted);
                    ratingDetails.appendChild(stayAmount);

                    let userReview = document.createElement("DIV");
                    userReview.className = "room_modal_reviews_userReviews_review";
                    userReview.innerText = roomData.bookingInfo.reviews[id].review;

                    userReviewBox.appendChild(userInfo);
                    userReviewBox.appendChild(ratingDetails);
                    userReviewBox.appendChild(userReview);

                    reviewsBox.appendChild(userReviewBox);
                }

                let reviewsAndFilterBox = document.createElement("DIV");
                reviewsAndFilterBox.className = "room_modal_reviews_reviewsAndFilter_box";

                var numberOfReviews = document.createElement("DIV");
                numberOfReviews.className = "room_modal_reviews_count";

                var filterDropdown = document.createElement("BUTTON");
                filterDropdown.className = "room_modal_reviews_dropdown_filter";
                
                var filterDropdownText = document.createElement("DIV");
                filterDropdownText.className = "room_modal_reviews_dropdown_filter_text";
                filterDropdownText.innerText = "Most recent";

                let filterDropdownSVG = document.createElement("SVG");
                filterDropdownSVG.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" style="display: block; fill: none; height: 12px; width: 12px; stroke: black; stroke-width: 5.33333; overflow: visible; margin-inline-start: 10px; transition: 0.3s">
                                                   <path fill="none" d="M28 12 16.7 23.3a1 1 0 0 1-1.4 0L4 12"></path>
                                               </svg>`;

                var dropdownWindow = document.createElement("DIV");
                dropdownWindow.className = "room_modal_reviews_dropdown_filter_window";

                let dropdownOptions = ["Most recent", "Highest rated", "Lowest rated"];

                for (i = 0; i < 3; i++)
                {
                    var dropdownWindowOption = document.createElement("DIV");
                    dropdownWindowOption.className = "room_modal_reviews_dropdown_filter_window_item";
                    dropdownWindowOption.innerText = dropdownOptions[i];

                    dropdownWindow.appendChild(dropdownWindowOption);
                }
                
                filterDropdown.appendChild(filterDropdownText); 
                filterDropdown.appendChild(filterDropdownSVG);
                filterDropdown.appendChild(dropdownWindow);

                reviewsAndFilterBox.appendChild(numberOfReviews);
                reviewsAndFilterBox.appendChild(filterDropdown);

                var searchBox = document.createElement("DIV");
                searchBox.className = "room_modal_reviews_search_box";

                let searchBoxSVG = document.createElement("SVG");
                searchBoxSVG.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" style="display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 3; overflow: visible; margin-inline-end: 10px;">
                                              <path fill="none" d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"></path>
                                          </svg>`;

                let searchBoxLabel = document.createElement("LABEL");
                searchBoxLabel.className = "room_modal_reviews_search_bar_label";

                var searchBoxInput = document.createElement("INPUT");
                searchBoxInput.className = "room_modal_reviews_search_bar_input";
                searchBoxInput.setAttribute("placeholder", "Search reviews");
                searchBoxInput.setAttribute("spellcheck", "false");

                searchBoxLabel.appendChild(searchBoxInput);

                let searchBoxInner = document.createElement("DIV");
                searchBoxInner.className = "room_modal_reviews_search_box_inner";

                searchBoxInner.appendChild(searchBoxSVG);
                searchBoxInner.appendChild(searchBoxLabel);

                searchBox.appendChild(searchBoxInner);

                reviews.sort(function(a, b) 
                {
                    return new Date(a.dateSent) - new Date(b.dateSent);
                })

                sortReviews(reviews);

                modal.childNodes[3].appendChild(reviewsAndFilterBox);
                modal.childNodes[3].appendChild(searchBox);
                modal.childNodes[3].appendChild(reviewsBox);
            }

            if (filterDropdown != "" && filterDropdown != undefined)
            {
                filterDropdown.onclick = function(e)
                {
                    if (e.target.className != "room_modal_reviews_dropdown_filter_window_item")
                    {
                        dropdownWindow.style.display = "block";
                        filterDropdown.childNodes[1].childNodes[0].style.transform = "rotate(180deg)";
                    }
                }

                document.body.addEventListener("click", function(e)
                {
                    if (!dropdownWindow.contains(e.target) && !filterDropdown.contains(e.target) && dropdownWindow.style.display == "block")
                    {
                        dropdownWindow.style.display = "none";
                        filterDropdown.childNodes[1].childNodes[0].style.transform = "rotate(0deg)";
                    }
                })
                
                dropdownWindow.onclick = function(e)
                {
                    if (dropdownWindow.contains(e.target))
                    {
                        filterDropdownText.innerText = e.target.innerText;

                        if (filterDropdownText.innerText == "Most recent")
                        {
                            reviews.sort(function(a, b) 
                            {
                                return new Date(a.dateSent) - new Date(b.dateSent);
                            })

                            sortReviews(reviews);
                        }
                        else if (filterDropdownText.innerText == "Highest rated")
                        {
                            reviews.sort(function(a, b) 
                            {
                                return b.starRating - a.starRating;
                            })

                            sortReviews(reviews);
                        }
                        else if (filterDropdownText.innerText == "Lowest rated")
                        {
                            reviews.sort(function(a, b) 
                            {
                                return a.starRating - b.starRating;
                            })

                            sortReviews(reviews);
                        }

                        dropdownWindow.style.display = "none";
                        filterDropdown.childNodes[1].childNodes[0].style.transform = "rotate(0deg)";
                    }
                }

                function sortReviewsSearchBar()
                {
                    searchBoxInput.onkeyup = function(e)
                    {
                        if (e.key == "Enter")
                        {
                            if (searchBoxInput.value != "")
                            {
                                reviewsBox.childNodes.forEach(function(e) 
                                {
                                    // regex is absolute black magic to me and im not some archwizard 
                                    // so hopefully random copy paste stuff will work perfectly
                                    var a = e.childNodes[2].innerText.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '');
                                    if (a.split(" ").includes(`${searchBoxInput.value}`))
                                    {
                                        e.style.display = "block";
                                        let markdown = document.createElement("MARK");
                                        markdown.innerText = `${searchBoxInput.value}`;

                                        let newStringT = e.childNodes[2].innerText.split(/([_\W ])/);
                                        let newDiv = document.createElement("DIV");
                                        newDiv.className = "room_modal_reviews_userReviews_review";
                                        let whatthestringparttwo = "";

                                        for (i = 0; i < newStringT.length; i++)
                                        {
                                            if (newStringT[i] != markdown.innerText)
                                            {
                                                whatthestringparttwo += newStringT[i];
                                            }
                                            else if (newStringT[i] == markdown.innerText)
                                            {
                                                newDiv.appendChild(document.createTextNode(`${whatthestringparttwo}`));
                                                whatthestringparttwo = "";
                                                newDiv.appendChild(markdown.cloneNode(true));
                                            }
                                        }
                                        numberOfReviews.innerText
                                        newDiv.appendChild(document.createTextNode(`${whatthestringparttwo}`));
                                        
                                        e.childNodes[2].replaceWith(newDiv);
                                    }
                                    else 
                                    {
                                        e.style.display = "none";
                                    }
                                })

                                let indexing = 0;
                                for (i = 0; i < reviews.length; i++)
                                {
                                    if (reviewsBox.childNodes[i].style.display == "block")
                                    {
                                        indexing ++;
                                    }
                                }

                                numberOfReviews.innerText = `${indexing} ${indexing > 1 
                                                          ? "reviews" 
                                                          : "review"}`;
                            }
                            else
                            {
                                sortReviews(reviews);
                            }
                        }
                    }    
                }

                sortReviewsSearchBar();
            }
        }

        modalBackground.onclick = function(e)
        {
            if (e.target == modalBackground)
            {
                modal.classList.remove("modal_V2_slideIn");

                setTimeout(() => 
                {
                    modal.style.display = "none";
                    modalBackground.style.display = "none";
                    document.body.style.overflow = "";
                    document.body.style.paddingRight = "";
                }, 150);
            }  
        }

        closeButton.onclick = function()
        {
            modal.classList.remove("modal_V2_slideIn");

            setTimeout(() => 
            {
                modal.style.display = "none";
                modalBackground.style.display = "none";
                document.body.style.overflow = "";
                document.body.style.paddingRight = "";
            }, 150);
        }
    }

    function roomControllCalendar()
    {
        let calendar1 = room.getElementsByClassName("room_information_calendar1")[0];
        let calendar2 = room.getElementsByClassName("room_information_calendar2")[0];
        let moveLeft = room.getElementsByClassName("room_information_calendar_moveL")[0];
        moveLeft.disabled = !moveLeft.disabled;
        let moveRight = room.getElementsByClassName("room_information_calendar_moveR")[0];
 
        let date = new Date();
        let day = date.getDate();

        let selectedStartMonth = date.getMonth();
        let selectedStartYear = date.getFullYear();

        let selectedEndMonth = date.getMonth(date.setDate((day) + 5));
        let selectedEndYear = date.getFullYear();

        let checkinButton = room.getElementsByClassName("room_pricing_flying_rectangle_reservation_buttons_check1")[0];
        let checkoutButton = room.getElementsByClassName("room_pricing_flying_rectangle_reservation_buttons_check2")[0];
        checkinButton.childNodes[1].innerText = `${selectedStartDay.innerText}/${selectedStartMonth + 1}/${selectedStartYear}`;
        checkoutButton.childNodes[1].innerText = `${selectedEndDay.innerText}/${selectedEndMonth + 1}/${selectedEndYear}`;

        let calendars = room.getElementsByClassName("room_information_calendar_box")[0];
        let alternateDates = true;

        let pricingForNights = room.getElementsByClassName("room_pricing_flying_rectangle_pricing_row")[0];
        let pricingTotal = room.getElementsByClassName("room_pricing_flying_rectangle_pricing_total")[0];

        function initializeCalendars(firstCalendar, secondCalendar)
        {
            month = currentMonth - 1;
            year = currentYear;
           
            const monthNames = room.querySelectorAll(".month_name");
            const tables = room.querySelectorAll(".nothing");
           
            monthNames.forEach(function(e)
            {
                e.remove();
            });
           
            tables.forEach(function(e)
            {
                e.remove();
            });
        
            rightButtonClicked = true;
            
            createCalendarMonth(firstCalendar, selectedStartDay, selectedEndDay, selectedStartMonth, selectedEndMonth, selectedStartYear, selectedEndYear);
            createCalendarMonth2(secondCalendar, selectedStartDay, selectedEndDay, selectedStartMonth, selectedEndMonth, selectedStartYear, selectedEndYear);

            rightButtonClicked = false;

            correctCalendarsShadows(calendar1, calendar2, selectedStartDay, selectedEndDay, 2);
            resizeCalendars();
        }
        
        initializeCalendars(calendar1, calendar2);

        function datesCSSValitation()
        {
            if (alternateDates == false)
            {
                selectedEndDay.style.background = "";
                selectedEndDay.style.color = "";
        
                removeCalendarsShadows(calendar1, calendar2, selectedStartDay, selectedEndDay, 2);
        
                try
                {
                    selectedEndDay.parentElement.style.background = "";
                }
                catch{}
        
                selectedEndDay = document.createElement(null);
                checkoutButton.childNodes[1].innerText = `Add date`;
            }
            else if (alternateDates == true)
            {
                selectedStartDay.style.background = "";
                selectedStartDay.style.color = "";
        
                removeCalendarsShadows(calendar1, calendar2, selectedStartDay, selectedEndDay, 2);
        
                try
                {
                    selectedStartDay.parentElement.style.background = "";
                }
                catch{}
                
                selectedStartDay = document.createElement(null);
                checkinButton.childNodes[1].innerText = `Add date`;
                alternateDates = true;
            }
        }

        calendars.onclick = function(e)
        {
            if (e.target.children.length == 0 && e.target.className == "box" || e.target.className == "box box_new_hover")
            {
                if (selectedStartDay.tagName != "NULL" && alternateDates == true)
                {
                    selectedStartDay.style.background = "";
                    selectedStartDay.style.color = "";

                    removeCalendarsShadows(calendar1, calendar2, selectedStartDay, selectedEndDay, 2);
                    selectedStartDay = document.createElement(null);   
                }
                else if (selectedEndDay.tagName != "NULL" && alternateDates == false)
                {
                    selectedEndDay.style.background = "";
                    selectedEndDay.style.color = "";

                    removeCalendarsShadows(calendar1, calendar2, selectedStartDay, selectedEndDay, 2);
                    selectedEndDay = document.createElement(null);
                }

                if (selectedStartDay.tagName == "NULL" && alternateDates == true)
                {
                    selectedStartDay = e.target;
                    selectedStartDay.style.background = "black";
                    selectedStartDay.style.color = "white";
                    selectedStartMonth = selectedStartDay.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[0].innerText.slice(0, -5);
                    selectedStartYear = +selectedStartDay.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[0].innerText.slice(-4);

                    if (selectedStartDay.tagName != "NULL" && selectedEndDay.tagName != "NULL")
                    {
                        correctCalendarsShadows(calendar1, calendar2, selectedStartDay, selectedEndDay, 2);
                    }
                    
                    checkinButton.childNodes[1].innerText = `${selectedStartDay.innerText}/${months.indexOf(selectedStartMonth) + 1}/${selectedStartYear}`;
                    alternateDates = false;
                }
                else if (selectedEndDay.tagName == "NULL" && alternateDates == false)
                {
                    selectedEndDay = e.target;
                    selectedEndDay.style.background = "black";
                    selectedEndDay.style.color = "white";
                    selectedEndMonth = selectedEndDay.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[0].innerText.slice(0 ,-5);
                    selectedEndYear = +selectedEndDay.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[0].innerText.slice(-4);

                    if (selectedStartDay.tagName != "NULL" && selectedEndDay.tagName != "NULL")
                    {
                        correctCalendarsShadows(calendar1, calendar2, selectedStartDay, selectedEndDay, 2);
                    }

                    checkoutButton.childNodes[1].innerText = `${selectedEndDay.innerText}/${months.indexOf(selectedEndMonth) + 1}/${selectedEndYear}`;
                    alternateDates = true;
                }

                if ((+selectedStartDay.innerText >= +selectedEndDay.innerText) 
                &&  (selectedStartMonth == selectedEndMonth) && (selectedStartYear == selectedEndYear)
                &&  (selectedStartDay.tagName != "NULL" && selectedEndDay.tagName != "NULL"))
                {
                    datesCSSValitation();
                }
                else if (months.indexOf(selectedStartMonth) > months.indexOf(selectedEndMonth)
                     &&  (selectedStartYear == selectedEndYear ))
                {
                    datesCSSValitation();
                }
                else if ((selectedStartYear > selectedEndYear))
                {
                    datesCSSValitation();
                }

                if (selectedStartDay.tagName == "DIV" && selectedEndDay.tagName == "DIV")
                {
                    let start = new Date(selectedStartYear, months.indexOf(selectedStartMonth), +selectedStartDay.innerText);
                    let end = new Date(selectedEndYear, months.indexOf(selectedEndMonth), +selectedEndDay.innerText);
                    let timeDiff = Math.abs(start - end);
                    let daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

                    pricingForNights.childNodes[0].innerText = `$${roomData.bookingInfo.basePrice} x ${daysDiff} nights`;
                    pricingForNights.childNodes[1].innerText = `$${roomData.bookingInfo.basePrice * daysDiff}`;
                    pricingTotal.childNodes[1].innerText = `$${roomData.bookingInfo.basePrice * daysDiff + roomData.bookingInfo.cleaningFee + 200}`;
                }
            }
        }

        function moveCalendarLeft()
        {
            if (window.getComputedStyle(moveLeft).cursor == "pointer")
            {
                const monthNames = room.querySelectorAll(".month_name");
                const tables = room.querySelectorAll(".nothing");
            
                monthNames.forEach(function(e)
                {
                    e.remove();
                });
            
                tables.forEach(function(e)
                {
                    e.remove();
                });
            
                leftButtonClicked = true;
        
                createCalendarMonth(calendar1, selectedStartDay, selectedEndDay, selectedStartMonth, selectedEndMonth, selectedStartYear, selectedEndYear);
                createCalendarMonth2(calendar2, selectedStartDay, selectedEndDay, selectedStartMonth, selectedEndMonth, selectedStartYear, selectedEndYear); 
        
                leftButtonClicked = false;

                if (month == currentMonth && year == currentYear)
                {
                    moveLeft.disabled = !moveLeft.disabled;
                }
                else if (moveRight.disabled == true)
                {
                    moveRight.disabled = !moveRight.disabled;
                }
            } 
        }

        function moveCalendarRight()
        {
            if (window.getComputedStyle(moveRight).cursor == "pointer")
            {
                const monthNames = room.querySelectorAll(".month_name");
                const tables = room.querySelectorAll(".nothing");
            
                monthNames.forEach(function(e)
                {
                    e.remove();
                });
            
                tables.forEach(function(e)
                {
                    e.remove();
                });
            
                rightButtonClicked = true;

                createCalendarMonth(calendar1, selectedStartDay, selectedEndDay, selectedStartMonth, selectedEndMonth, selectedStartYear, selectedEndYear);
                createCalendarMonth2(calendar2, selectedStartDay, selectedEndDay, selectedStartMonth, selectedEndMonth, selectedStartYear, selectedEndYear); 
        
                rightButtonClicked = false;
                
                if ((month == currentMonth && year == currentYear + 2))
                {
                    moveRight.disabled = !moveRight.disabled;
                }   
                else if (moveLeft.disabled == true)
                {   
                    moveLeft.disabled = !moveLeft.disabled;
                }
            }
        }

        moveLeft.onclick = function()
        {
            moveCalendarLeft();
            correctCalendarsShadows(calendar1, calendar2, selectedStartDay, selectedEndDay, 2);
            resizeCalendars();
        }

        moveRight.onclick = function()
        {
            moveCalendarRight();
            correctCalendarsShadows(calendar1, calendar2, selectedStartDay, selectedEndDay, 2);
            resizeCalendars();
        }

        function addShadow(e, calendar, firstCalendar, secondCalendar, checkinDate, checkoutDate, checkinMonth, checkoutMonth, checkinYear, checkoutYear, tableIndex)
        { 
            if ((checkinDate.tagName == "NULL" || checkoutDate.tagName == "NULL") && e.target.children.length == 0 && e.target.className == "box")
            {
                e.target.classList.add("box_new_hover");
        
                if (checkinDate.tagName == "NULL" || checkoutDate.tagName == "NULL")
                {
                    applyShadowBetweenDates(calendar, firstCalendar, secondCalendar, e.target, checkinDate, checkoutDate, checkinMonth, checkoutMonth, checkinYear, checkoutYear, tableIndex, 0);
                }
            }
        }
        
        function removeShadow(e, firstCalendar, secondCalendar, checkinDate, checkoutDate, tableIndex)
        {
            if (((checkinDate.tagName == "NULL" || checkoutDate.tagName == "NULL") || checkoutDate.tagName != "NULL") && e.target.children.length == 0 && e.target.className == "box box_new_hover")
            {   
                e.target.classList.remove("box_new_hover");
        
                if (checkinDate.tagName == "NULL" || checkoutDate.tagName == "NULL")
                {
                    removeCalendarsShadows(firstCalendar, secondCalendar, selectedCheckinDate, selectedCheckoutDate, tableIndex);
                }
            }
        }

        calendar1.addEventListener("mouseover", function(e)
        {
            addShadow(e, calendar1, calendar1, calendar2, selectedStartDay, selectedEndDay, selectedStartMonth, selectedEndMonth, selectedStartYear, selectedEndYear, 2);
        })
        
        calendar1.addEventListener("mouseout", function(e)
        {
            removeShadow(e, calendar1, calendar2, selectedStartDay, selectedEndDay, 2);
        })
        
        calendar2.addEventListener("mouseover", function(e)
        {
            addShadow(e, calendar2, calendar1, calendar2, selectedStartDay, selectedEndDay, selectedStartMonth, selectedEndMonth, selectedStartYear, selectedEndYear, 2);
        })
        
        calendar2.addEventListener("mouseout", function(e)
        {
            removeShadow(e, calendar1, calendar2, selectedStartDay, selectedEndDay, 2);
        })

        let dropdown = room.getElementsByClassName("room_pricing_flying_rectangle_reservation_button_guest")[0];
        let dropdownWindow = document.createElement("DIV");
        dropdownWindow.className = "room_modal_guest_dropdown_window";
        dropdown.appendChild(dropdownWindow);

        function generateGuestDropdown()
        {
            let optionsDiv = document.createElement("DIV");
            optionsDiv.className = "room_modal_guest_dropdown_box";

            let adultsRow = document.createElement("DIV");
            adultsRow.className = "room_modal_guest_dropdown_row";

            let adultsText = document.createElement("DIV");
            adultsText.className = "room_modal_guest_dropdown_text_box";

            let adultsTextTop = document.createElement("DIV");
            adultsTextTop.className = "room_modal_guest_dropdown_textTop";
            adultsTextTop.innerText = "Adults";

            let adultsTextBottom = document.createElement("DIV");
            adultsTextBottom.className = "room_modal_guest_dropdown_textBottom";
            adultsTextBottom.innerText = "Age 13+";

            adultsText.appendChild(adultsTextTop);
            adultsText.appendChild(adultsTextBottom);

            let adultsControlButtons = document.createElement("DIV");
            adultsControlButtons.className = "room_modal_guest_dropdown_button_box";

            let adultsDecrementButton = document.createElement("BUTTON");
            adultsDecrementButton.className = "room_modal_guest_dropdown_decrement_button";
            adultsDecrementButton.innerHTML = `<svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" style="display: block; height: 12px; width: 12px; fill: currentcolor;">
                                                   <path d="m.75 6.75h10.5v-1.5h-10.5z"></path>
                                               </svg>`;

            let adultsIncrementButton = document.createElement("BUTTON");
            adultsIncrementButton.className = "room_modal_guest_dropdown_increment_button";
            adultsIncrementButton.innerHTML = `<svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" style="display: block; height: 12px; width: 12px; fill: currentcolor;">
                                                   <path d="m6.75.75v4.5h4.5v1.5h-4.5v4.5h-1.5v-4.5h-4.5v-1.5h4.5v-4.5z"></path>
                                               </svg>`;

            var adultsCounter = document.createElement("SPAN");
            adultsCounter.innerText = 1;

            adultsDecrementButton.disabled = !adultsDecrementButton.disabled;

            adultsControlButtons.appendChild(adultsDecrementButton);
            adultsControlButtons.appendChild(adultsCounter);
            adultsControlButtons.appendChild(adultsIncrementButton);

            adultsRow.appendChild(adultsText);
            adultsRow.appendChild(adultsControlButtons);

            let childrenRow = document.createElement("DIV");
            childrenRow.className = "room_modal_guest_dropdown_row";

            let childrenText = document.createElement("DIV");
            childrenText.className = "room_modal_guest_dropdown_text_box";

            let childrenTextTop = document.createElement("DIV");
            childrenTextTop.className = "room_modal_guest_dropdown_textTop";
            childrenTextTop.innerText = "Children";

            let childrenTextBottom = document.createElement("DIV");
            childrenTextBottom.className = "room_modal_guest_dropdown_textBottom";
            childrenTextBottom.innerText = "Ages 2-12";

            childrenText.appendChild(childrenTextTop);
            childrenText.appendChild(childrenTextBottom);

            let childrenControlButtons = document.createElement("DIV");
            childrenControlButtons.className = "room_modal_guest_dropdown_button_box";

            let childrenDecrementButton = document.createElement("BUTTON");
            childrenDecrementButton.className = "room_modal_guest_dropdown_decrement_button";
            childrenDecrementButton.innerHTML = `<svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" style="display: block; height: 12px; width: 12px; fill: currentcolor;">
                                                   <path d="m.75 6.75h10.5v-1.5h-10.5z"></path>
                                               </svg>`;

            let childrenIncrementButton = document.createElement("BUTTON");
            childrenIncrementButton.className = "room_modal_guest_dropdown_increment_button";
            childrenIncrementButton.innerHTML = `<svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" style="display: block; height: 12px; width: 12px; fill: currentcolor;">
                                                   <path d="m6.75.75v4.5h4.5v1.5h-4.5v4.5h-1.5v-4.5h-4.5v-1.5h4.5v-4.5z"></path>
                                               </svg>`;

            var childrenCounter = document.createElement("SPAN");
            childrenCounter.innerText = 0;

            childrenDecrementButton.disabled = !childrenDecrementButton.disabled;
            
            childrenControlButtons.appendChild(childrenDecrementButton);
            childrenControlButtons.appendChild(childrenCounter);
            childrenControlButtons.appendChild(childrenIncrementButton);

            childrenRow.appendChild(childrenText);
            childrenRow.appendChild(childrenControlButtons);

            let infantsRow = document.createElement("DIV");
            infantsRow.className = "room_modal_guest_dropdown_row";

            let infantsText = document.createElement("DIV");
            infantsText.className = "room_modal_guest_dropdown_text_box";

            let infantsTextTop = document.createElement("DIV");
            infantsTextTop.className = "room_modal_guest_dropdown_textTop";
            infantsTextTop.innerText = "Infants";

            let infantsTextBottom = document.createElement("DIV");
            infantsTextBottom.className = "room_modal_guest_dropdown_textBottom";
            infantsTextBottom.innerText = "Under 2";

            infantsText.appendChild(infantsTextTop);
            infantsText.appendChild(infantsTextBottom);

            let infantsControlButtons = document.createElement("DIV");
            infantsControlButtons.className = "room_modal_guest_dropdown_button_box";

            let infantsDecrementButton = document.createElement("BUTTON");
            infantsDecrementButton.className = "room_modal_guest_dropdown_decrement_button";
            infantsDecrementButton.innerHTML = `<svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" style="display: block; height: 12px; width: 12px; fill: currentcolor;">
                                                   <path d="m.75 6.75h10.5v-1.5h-10.5z"></path>
                                               </svg>`;

            let infantsIncrementButton = document.createElement("BUTTON");
            infantsIncrementButton.className = "room_modal_guest_dropdown_increment_button";
            infantsIncrementButton.innerHTML = `<svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" style="display: block; height: 12px; width: 12px; fill: currentcolor;">
                                                   <path d="m6.75.75v4.5h4.5v1.5h-4.5v4.5h-1.5v-4.5h-4.5v-1.5h4.5v-4.5z"></path>
                                               </svg>`;

            var infantsCounter = document.createElement("SPAN");
            infantsCounter.innerText = 0;

            infantsDecrementButton.disabled = !infantsDecrementButton.disabled;
            
            infantsControlButtons.appendChild(infantsDecrementButton);
            infantsControlButtons.appendChild(infantsCounter);
            infantsControlButtons.appendChild(infantsIncrementButton);

            infantsRow.appendChild(infantsText);
            infantsRow.appendChild(infantsControlButtons);

            let petsRow = document.createElement("DIV");
            petsRow.className = "room_modal_guest_dropdown_row";

            let petsText = document.createElement("DIV");
            petsText.className = "room_modal_guest_dropdown_text_box";

            let petsTextTop = document.createElement("DIV");
            petsTextTop.className = "room_modal_guest_dropdown_textTop";
            petsTextTop.innerText = "Pets";

            let petsTextBottom = document.createElement("DIV");
            petsTextBottom.className = "room_modal_guest_dropdown_textBottom_pets";
            petsTextBottom.innerText = "Bringing a service animal?";

            petsText.appendChild(petsTextTop);
            petsText.appendChild(petsTextBottom);

            let petsControlButtons = document.createElement("DIV");
            petsControlButtons.className = "room_modal_guest_dropdown_button_box";

            let petsDecrementButton = document.createElement("BUTTON");
            petsDecrementButton.className = "room_modal_guest_dropdown_decrement_button";
            petsDecrementButton.innerHTML = `<svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" style="display: block; height: 12px; width: 12px; fill: currentcolor;">
                                                   <path d="m.75 6.75h10.5v-1.5h-10.5z"></path>
                                               </svg>`;

            let petsIncrementButton = document.createElement("BUTTON");
            petsIncrementButton.className = "room_modal_guest_dropdown_increment_button";
            petsIncrementButton.innerHTML = `<svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" style="display: block; height: 12px; width: 12px; fill: currentcolor;">
                                                   <path d="m6.75.75v4.5h4.5v1.5h-4.5v4.5h-1.5v-4.5h-4.5v-1.5h4.5v-4.5z"></path>
                                               </svg>`;

            var petsCounter = document.createElement("SPAN");
            petsCounter.innerText = 0;
             
            petsControlButtons.appendChild(petsDecrementButton);
            petsControlButtons.appendChild(petsCounter);
            petsControlButtons.appendChild(petsIncrementButton);

            petsRow.appendChild(petsText);
            petsRow.appendChild(petsControlButtons);

            optionsDiv.appendChild(adultsRow);
            optionsDiv.appendChild(childrenRow);
            optionsDiv.appendChild(infantsRow);
            optionsDiv.appendChild(petsRow);
            
            let maximumGuestInformation = document.createElement("DIV");
            maximumGuestInformation.className = "room_modal_guest_dropdown_maximum_guest_number_info";

            if (roomData.bookingInfo.petsAllowed == false)
            {
                petsIncrementButton.disabled = !petsIncrementButton.disabled;
                petsDecrementButton.disabled = !petsDecrementButton.disabled;

                maximumGuestInformation.innerText = roomData.bookingInfo.maximumGuestInformation > 1
                                                  ? `This place has maximum of ${roomData.bookingInfo.maxNumberOfGuests} guest, not including infants. Pets aren't allowed.`
                                                  : `This place has maximum of ${roomData.bookingInfo.maxNumberOfGuests} guests, not including infants. Pets aren't allowed.`;
            }
            else
            {
                petsDecrementButton.disabled = !petsDecrementButton.disabled;

                maximumGuestInformation.innerText = roomData.bookingInfo.maximumGuestInformation > 1
                                                  ? `This place has maximum of ${roomData.bookingInfo.maxNumberOfGuests} guest, not including infants. Pets are allowed.`
                                                  : `This place has maximum of ${roomData.bookingInfo.maxNumberOfGuests} guests, not including infants. Pets are allowed.`;
            }

            var closeButtonDiv = document.createElement("DIV")
            closeButtonDiv.className = "room_modal_guest_dropdown_close_button_box";

            var closeButton = document.createElement("BUTTON");
            closeButton.className = "room_modal_guest_dropdown_close_button";
            closeButton.innerText = "Close";

            closeButtonDiv.appendChild(closeButton);

            dropdownWindow.appendChild(optionsDiv);
            dropdownWindow.appendChild(maximumGuestInformation);
            dropdownWindow.appendChild(closeButtonDiv);
        }

        function controlGuestDropdown()
        {
            if (dropdown != "" && dropdown != undefined)
            {
                dropdown.onclick = function()
                {
                    dropdownWindow.style.display = "block";
                    dropdown.childNodes[2].childNodes[0].style.transform = "rotate(180deg)";
                }
            
                document.body.addEventListener("click", function(e)
                {
                    if ((!dropdownWindow.contains(e.target) && !dropdown.contains(e.target) && dropdownWindow.style.display == "block")
                    ||  e.target.className == "room_modal_guest_dropdown_close_button")
                    {
                        dropdownWindow.style.display = "none";
                        dropdown.childNodes[2].childNodes[0].style.transform = "rotate(0deg)";
                    }
                })
            }
        }

        function controlGuestsValues()
        {
            let decrementAdults = room.getElementsByClassName("room_modal_guest_dropdown_decrement_button")[0];
            let incrementAdults = room.getElementsByClassName("room_modal_guest_dropdown_increment_button")[0];
            let adultsValue = room.getElementsByClassName("room_modal_guest_dropdown_button_box")[0].childNodes[1];

            let decrementChildren = room.getElementsByClassName("room_modal_guest_dropdown_decrement_button")[1];
            let incrementChildrem = room.getElementsByClassName("room_modal_guest_dropdown_increment_button")[1];
            let childrenValue = room.getElementsByClassName("room_modal_guest_dropdown_button_box")[1].childNodes[1];

            let decrementInfants = room.getElementsByClassName("room_modal_guest_dropdown_decrement_button")[2];
            let incrementInfants = room.getElementsByClassName("room_modal_guest_dropdown_increment_button")[2];
            let infantsValue = room.getElementsByClassName("room_modal_guest_dropdown_button_box")[2].childNodes[1];

            let decrementPets = room.getElementsByClassName("room_modal_guest_dropdown_decrement_button")[3];
            let incrementPets = room.getElementsByClassName("room_modal_guest_dropdown_increment_button")[3];
            let petsValue = room.getElementsByClassName("room_modal_guest_dropdown_button_box")[3].childNodes[1];

            let allGuestsValue = room.getElementsByClassName("room_pricing_flying_rectangle_reservation_button_guest")[0].childNodes[1];
            let guests = 1;
            let infants = "";
            let pets = "";

            incrementAdults.onclick = function ()
            {
                adultsValue.innerText ++;

                if (decrementAdults.disabled == true && adultsValue.innerText > 1)
                {
                    decrementAdults.disabled = !decrementAdults.disabled;
                }

                if ((incrementChildrem.disabled == false || incrementAdults.disabled == false) 
                &&  (+childrenValue.innerText + +adultsValue.innerText) == roomData.bookingInfo.maxNumberOfGuests)
                {
                    incrementAdults.disabled = !incrementAdults.disabled;
                    incrementChildrem.disabled = !incrementChildrem.disabled;
                }
 
                guests = (+adultsValue.innerText + +childrenValue.innerText) == 1 
                       ? `${+adultsValue.innerText + +childrenValue.innerText} Guest` 
                       : `${+adultsValue.innerText + +childrenValue.innerText} Guests`;
                
                if (+infantsValue.innerText >= 0)
                {
                    infants = infantsValue.innerText == 1
                            ? `, ${infantsValue.innerText} Infant`
                            :  infantsValue.innerText > 1
                            ? `, ${infantsValue.innerText} Infants`
                            : "";
                }

                if (+petsValue.innerText >= 0)
                {
                    pets = petsValue.innerText == 1
                         ? `, ${petsValue.innerText} Pet`
                         : petsValue.innerText > 1
                         ? `, ${petsValue.innerText} Pets`
                         : "";
                }

                allGuestsValue.innerText = `${guests}${infants}${pets}`;
            }

            decrementAdults.onclick = function ()
            {
                adultsValue.innerText --;

                if (decrementAdults.disabled == false && adultsValue.innerText == 1)
                {
                    decrementAdults.disabled = !decrementAdults.disabled;
                }

                if ((incrementChildrem.disabled == true || incrementAdults.disabled == true) 
                &&  (+childrenValue.innerText + +adultsValue.innerText) != roomData.bookingInfo.maxNumberOfGuests)
                {
                    incrementAdults.disabled = !incrementAdults.disabled;
                    incrementChildrem.disabled = !incrementChildrem.disabled;
                }

                guests = (+adultsValue.innerText + +childrenValue.innerText) == 1 
                       ? `${+adultsValue.innerText + +childrenValue.innerText} Guest` 
                       : `${+adultsValue.innerText + +childrenValue.innerText} Guests`;

                if (+infantsValue.innerText >= 0)
                {
                    infants = infantsValue.innerText == 1
                            ? `, ${infantsValue.innerText} Infant`
                            :  infantsValue.innerText > 1
                            ? `, ${infantsValue.innerText} Infants`
                            : "";
                }

                if (+petsValue.innerText >= 0)
                {
                    pets = petsValue.innerText == 1
                         ? `, ${petsValue.innerText} Pet`
                         : petsValue.innerText > 1
                         ? `, ${petsValue.innerText} Pets`
                         : "";
                }

                allGuestsValue.innerText = `${guests}${infants}${pets}`;
            }

            incrementChildrem.onclick = function ()
            {
                childrenValue.innerText ++;

                if (decrementChildren.disabled == true && childrenValue.innerText > 0)
                {
                    decrementChildren.disabled = !decrementChildren.disabled;
                }
          
                if ((incrementChildrem.disabled == false || incrementAdults.disabled == false) 
                &&  (+childrenValue.innerText + +adultsValue.innerText) == roomData.bookingInfo.maxNumberOfGuests)
                {
                    incrementChildrem.disabled = !incrementChildrem.disabled;
                    incrementAdults.disabled = !incrementAdults.disabled;
                }

                guests = (+adultsValue.innerText + +childrenValue.innerText) == 1 
                       ? `${+adultsValue.innerText + +childrenValue.innerText} Guest` 
                       : `${+adultsValue.innerText + +childrenValue.innerText} Guests`;
                
                if (+infantsValue.innerText >= 0)
                {
                    infants = infantsValue.innerText == 1
                            ? `, ${infantsValue.innerText} Infant`
                            :  infantsValue.innerText > 1
                            ? `, ${infantsValue.innerText} Infants`
                            : "";
                }

                if (+petsValue.innerText >= 0)
                {
                    pets = petsValue.innerText == 1
                         ? `, ${petsValue.innerText} Pet`
                         : petsValue.innerText > 1
                         ? `, ${petsValue.innerText} Pets`
                         : "";
                }

                allGuestsValue.innerText = `${guests}${infants}${pets}`;
            }

            decrementChildren.onclick = function ()
            {
                childrenValue.innerText --;

                if (decrementChildren.disabled == false && childrenValue.innerText == 0)
                {
                    decrementChildren.disabled = !decrementChildren.disabled;
                }

                if ((incrementChildrem.disabled == true || incrementAdults.disabled == true) 
                &&  (+childrenValue.innerText + +adultsValue.innerText) != roomData.bookingInfo.maxNumberOfGuests)
                {
                    incrementChildrem.disabled = !incrementChildrem.disabled;
                    incrementAdults.disabled = !incrementAdults.disabled;
                }

                guests = (+adultsValue.innerText + +childrenValue.innerText) == 1 
                       ? `${+adultsValue.innerText + +childrenValue.innerText} Guest` 
                       : `${+adultsValue.innerText + +childrenValue.innerText} Guests`;
                
                if (+infantsValue.innerText >= 0)
                {
                    infants = infantsValue.innerText == 1
                            ? `, ${infantsValue.innerText} Infant`
                            :  infantsValue.innerText > 1
                            ? `, ${infantsValue.innerText} Infants`
                            : "";
                }

                if (+petsValue.innerText >= 0)
                {
                    pets = petsValue.innerText == 1
                         ? `, ${petsValue.innerText} Pet`
                         : petsValue.innerText > 1
                         ? `, ${petsValue.innerText} Pets`
                         : "";
                }

                allGuestsValue.innerText = `${guests}${infants}${pets}`;
            }

            incrementInfants.onclick = function ()
            {
                infantsValue.innerText++;

                if (decrementInfants.disabled == true && infantsValue.innerText > 0)
                {
                    decrementInfants.disabled = !decrementInfants.disabled;
                }

                if (incrementInfants.disabled == false && infantsValue.innerText == 5)
                {
                    incrementInfants.disabled = !incrementInfants.disabled;
                }

                guests = (+adultsValue.innerText + +childrenValue.innerText) == 1 
                       ? `${+adultsValue.innerText + +childrenValue.innerText} Guest` 
                       : `${+adultsValue.innerText + +childrenValue.innerText} Guests`;
                
                if (+infantsValue.innerText >= 0)
                {
                    infants = infantsValue.innerText == 1
                            ? `, ${infantsValue.innerText} Infant`
                            :  infantsValue.innerText > 1
                            ? `, ${infantsValue.innerText} Infants`
                            : "";
                }

                if (+petsValue.innerText >= 0)
                {
                    pets = petsValue.innerText == 1
                         ? `, ${petsValue.innerText} Pet`
                         : petsValue.innerText > 1
                         ? `, ${petsValue.innerText} Pets`
                         : "";
                }

                allGuestsValue.innerText = `${guests}${infants}${pets}`;
            }

            decrementInfants.onclick = function ()
            {
                infantsValue.innerText --;

                if (decrementInfants.disabled == false && infantsValue.innerText == 0)
                {
                    decrementInfants.disabled = !decrementInfants.disabled;
                }

                if (incrementInfants.disabled == true && infantsValue.innerText != 5)
                {
                    incrementInfants.disabled = !incrementInfants.disabled;
                }

                guests = (+adultsValue.innerText + +childrenValue.innerText) == 1 
                       ? `${+adultsValue.innerText + +childrenValue.innerText} Guest` 
                       : `${+adultsValue.innerText + +childrenValue.innerText} Guests`;
                
                if (+infantsValue.innerText >= 0)
                {
                    infants = infantsValue.innerText == 1
                            ? `, ${infantsValue.innerText} Infant`
                            :  infantsValue.innerText > 1
                            ? `, ${infantsValue.innerText} Infants`
                            : "";
                }

                if (+petsValue.innerText >= 0)
                {
                    pets = petsValue.innerText == 1
                         ? `, ${petsValue.innerText} Pet`
                         : petsValue.innerText > 1
                         ? `, ${petsValue.innerText} Pets`
                         : "";
                }

                allGuestsValue.innerText = `${guests}${infants}${pets}`;
            }

            incrementPets.onclick = function ()
            {
                petsValue.innerText ++;

                if (decrementPets.disabled == true && petsValue.innerText > 0)
                {
                    decrementPets.disabled = !decrementPets.disabled;
                }

                if (incrementPets.disabled == false && petsValue.innerText == roomData.bookingInfo.maxNumberOfPets)
                {
                    incrementPets.disabled = !incrementPets.disabled;
                }

                guests = (+adultsValue.innerText + +childrenValue.innerText) == 1 
                       ? `${+adultsValue.innerText + +childrenValue.innerText} Guest` 
                       : `${+adultsValue.innerText + +childrenValue.innerText} Guests`;
                
                if (+infantsValue.innerText >= 0)
                {
                    infants = infantsValue.innerText == 1
                            ? `, ${infantsValue.innerText} Infant`
                            :  infantsValue.innerText > 1
                            ? `, ${infantsValue.innerText} Infants`
                            : "";
                }

                if (+petsValue.innerText >= 0)
                {
                    pets = petsValue.innerText == 1
                         ? `, ${petsValue.innerText} Pet`
                         : petsValue.innerText > 1
                         ? `, ${petsValue.innerText} Pets`
                         : "";
                }

                allGuestsValue.innerText = `${guests}${infants}${pets}`;
            }

            decrementPets.onclick = function ()
            {
                petsValue.innerText --;

                if (decrementPets.disabled == false && petsValue.innerText == 0)
                {
                    decrementPets.disabled = !decrementPets.disabled;
                }

                if (incrementPets.disabled == true && petsValue.innerText != roomData.bookingInfo.maxNumberOfPets)
                {
                    incrementPets.disabled = !incrementPets.disabled;
                }

                guests = (+adultsValue.innerText + +childrenValue.innerText) == 1 
                       ? `${+adultsValue.innerText + +childrenValue.innerText} Guest` 
                       : `${+adultsValue.innerText + +childrenValue.innerText} Guests`;
                
                if (+infantsValue.innerText >= 0)
                {
                    infants = infantsValue.innerText == 1
                            ? `, ${infantsValue.innerText} Infant`
                            :  infantsValue.innerText > 1
                            ? `, ${infantsValue.innerText} Infants`
                            : "";
                }

                if (+petsValue.innerText >= 0)
                {
                    pets = petsValue.innerText == 1
                         ? `, ${petsValue.innerText} Pet`
                         : petsValue.innerText > 1
                         ? `, ${petsValue.innerText} Pets`
                         : "";
                }

                allGuestsValue.innerText = `${guests}${infants}${pets}`;
            }
        }

        generateGuestDropdown();
        controlGuestDropdown();
        controlGuestsValues();

        var bg = document.getElementById("GreyBackground");

        window.onscroll = function() 
        {
            if ((document.documentElement.scrollTop > 1 || document.body.scrollTop > 1) && bg.style.display == "block")
            {    
                document.getElementById("MiniForm").style.display = "block";
                document.getElementById("GreyBackground").style.display = "none";
                document.getElementById("StaysMenuButtons").style.display = "none";
                document.getElementById("StaysMenuForm").style.display = "none";
                document.getElementById("ExperiencesMenuForm").style.display = "none";
                document.getElementById("TopHeader").style.height = "80px";

                initializeCalendars(calendar1, calendar2);

                if (moveLeft.disabled == false)
                {
                    moveLeft.disabled = !moveLeft.disabled;
                }  
            }
        };
        
        window.onclick = function()
        {
            if (document.getElementById("GreyBackground").style.display == "block")
            {
                document.getElementById("GreyBackground").onclick = function() 
                {
                    document.getElementById("GreyBackground").style.display = "none";
    
                    document.getElementById("TopHeader").style.height = "80px";
                    document.getElementById("ScrollDiv").style.zIndex = "10";
                    
                    document.getElementById("MiniForm").style.display = "block";
                    document.getElementById("StaysMenuButtons").style.display = "none";
                    document.getElementById("StaysMenuForm").style.display = "none";
                    
                    initializeCalendars(calendar1, calendar2);

                    if (moveLeft.disabled == false)
                    {
                        moveLeft.disabled = !moveLeft.disabled;
                    }                 
                };
            }
        }
    }

    roomControllDescriptionShowMore();
    roomControllImageCarousel();
    roomControllShowAllAmenities();
    roomControllShowAllReviews();
    roomControllCalendar();

    var reserveButton = room.getElementsByClassName("room_pricing_flying_rectangle_reservation_reserveButton")[0];

    reserveButton.onclick = function()
    {
        location.href = "https://www.youtube.com/watch?v=uD4izuDMUQA";
    }
}


