/*============DO NOT TOUCH THESE======================*/
var hair = document.getElementById("hair"),
    eyes = document.getElementById("eyes"),
    nose = document.getElementById("nose"),
    mouth = document.getElementById("mouth");

hair.style.width = "60%";
hair.style.top = "0%";
eyes.style.width = "20%";
eyes.style.top = "40%";
nose.style.width = "20%";
nose.style.top = "55%";
mouth.style.width = "20%";
mouth.style.top = "75%";

/*==================YOUR WORK STARTS BELOW=====================*/

////LEVEL 3////
var hairI = 1;
var eyeI = 1;
var noseI = 1;
var mouthI = 1;

document.getElementById("hair").addEventListener("click", function() {
    hairI ++;
    if(hairI == 4){
        hairI = 1;
    }
    document.getElementById("hair").src="img/hair"+ hairI + ".png";
});

document.getElementById("eyes").addEventListener("click", function() {
    eyeI ++;
    if(eyeI == 4){
        eyeI = 1;
    }
    document.getElementById("eyes").src="img/eyes"+ eyeI + ".png";
});

document.getElementById("nose").addEventListener("click", function() {
    noseI ++;
    if(noseI == 4){
        noseI = 1;
    }
    document.getElementById("nose").src="img/nose"+ noseI + ".png";
});

document.getElementById("mouth").addEventListener("click", function() {
    mouthI ++;
    if(mouthI == 4){
        mouthI = 1;
    }
    document.getElementById("mouth").src="img/mouth"+ mouthI + ".png";
});