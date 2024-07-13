
//  header scaling
window.onscroll = function() { headerScaling() };


function headerScaling() 
{
    if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1)
    {
        document.getElementById("StaysMenuFormStays").style.top = "25px";
        document.getElementById("StaysMenuFormExperiences").style.top = "25px";
        document.getElementById("StaysMenuButtons").style.top = "-50px";
        document.getElementById("TopHeader").style.height = "60px";
    }
    else 
    {
        document.getElementById("StaysMenuFormStays").style.top = "100px";
        document.getElementById("StaysMenuFormExperiences").style.top = "100px";
        document.getElementById("StaysMenuButtons").style.top = "20px";
        document.getElementById("TopHeader").style.height = "150px";
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

