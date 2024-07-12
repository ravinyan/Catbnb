
//  header scaling
window.onscroll = function() { headerScaling() };

function headerScaling() 
{
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50)
    {
        document.getElementById("header").style.height = "100px";
    }
    else 
    {
        document.getElementById("header").style.height = "200px";
    }
}

