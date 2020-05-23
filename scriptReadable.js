var isSmallScreen = window.innerWidth < 1230;
var isSpecialScreen = window.innerWidth < 1360 && window.innerWidth > 1200;
var clicked = 0;

window.onresize = getMeasures;

function getMeasures() {
    isSmallScreen = window.innerWidth < 1230;
    isSpecialScreen = window.innerWidth < 1360 && window.innerWidth > 1200;
    if(!isSmallScreen){
        reset();
    }
}

window.onscroll = function() {this.isSmallScreen ? {} : scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("webtitle").style.fontSize = "15px";
    if(isSpecialScreen){
        document.getElementById("webtitle").style.marginTop = "5px";
        document.getElementById("navbar").style.height = "80px";
    }
    document.getElementById("header").style.height = "15px";
    document.getElementById("header").style.paddingTop = "5px";
    document.getElementById("header").style.paddingBottom = "50px";
    for (let i = 0; i < 4; i++) {
        document.getElementsByClassName("tab")[i].style.fontSize = "15px";
        if(isSpecialScreen){
            document.getElementsByClassName("tab")[i].style.marginTop = "-20px";
        }
    }

    document.getElementById("socialHeader").style.width = "25px";
    document.getElementById("linkedin").src = "images/linkedinB.png";
    document.getElementById("email").src = "images/emailB.png";
    document.getElementById("twitter").src = "images/twitterB.png";
} else {
    reset();
}
}

function reset(){
    document.getElementById("header").style.height = "150px";
    document.getElementById("webtitle").style.fontSize = isSpecialScreen ? "20px" : "30px";
    if(isSpecialScreen){
        document.getElementById("webtitle").style.marginTop = "0px";
        document.getElementById("navbar").style.height = "45px";
        document.getElementById("header").style.height = "110px";
    }
    else{
        document.getElementById("navbar").style.height = "80px";
        document.getElementById("header").style.height = "150px";
    }
    for (let i = 0; i < 4; i++) {
        document.getElementsByClassName("tab")[i].style.fontSize = isSpecialScreen ? "20px" : "25px";
        if(isSpecialScreen){
            document.getElementsByClassName("tab")[i].style.marginTop = "-40px";
        }
        else{
            document.getElementsByClassName("tab")[i].style.marginTop = "-20px";
        }
    }
    document.getElementById("header").style.padding = "30px";

    document.getElementById("socialHeader").style.width = "81px";
    document.getElementById("linkedin").src = "images/linkedin.png";
    document.getElementById("email").src = "images/email.png";
    document.getElementById("twitter").src = "images/twitter.png";
}

function menuClick(){
    if(!clicked){
        document.getElementById("header").style.backgroundColor = "black";
        document.getElementById("verticalLinks").style.display = "block";
        document.getElementById("vertSocial").style.display = "block";
        document.getElementById("menuIcon").src = "images/x.png";
        clicked = 1;
    }
    else{
        document.getElementById("verticalLinks").style.display = "none";
        document.getElementById("header").style.backgroundColor = "darkslategray";
        document.getElementById("vertSocial").style.display = "none";
        document.getElementById("menuIcon").src = "images/menu.png";
        clicked = 0;
    }
}