
//  header scaling
window.onscroll = function() { headerScaling() };

function headerScaling() 
{
    if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1)
    {
        document.getElementById("StaysMenuFormStays").style.top = "25px";
        document.getElementById("StaysMenuFormExperiences").style.top = "25px";
        document.getElementById("StaysMenuButtons").style.top = "-50px";
        document.getElementById("TopHeader").style.paddingBottom = "10px";
    }
    else 
    {
        document.getElementById("StaysMenuFormStays").style.top = "100px";
        document.getElementById("StaysMenuFormExperiences").style.top = "100px";
        document.getElementById("StaysMenuButtons").style.top = "20px";
        document.getElementById("TopHeader").style.paddingBottom = "80px";
    }
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
var buttonLeft = document.getElementById("ScrollLeft");
var buttonRight = document.getElementById("ScrollRight");

buttonLeft.onclick = function()
{
    document.getElementById("ScrollMenu").scrollLeft -= 650;
}

buttonRight.onclick = function()
{
    document.getElementById("ScrollMenu").scrollLeft += 650;
}

