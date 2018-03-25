var color =document.getElementById("color");
////LEVEL 2a////

color.addEventListener("change", function()  {
    document.getElementById("preview").style.backgroundColor = color.value;
});

////LEVEL 2b////
document.getElementById("numberB").addEventListener("click", function() {
     changeType("number");
});

document.getElementById("rangeB").addEventListener("click", function() {
     changeType("range");
});

////LEVEL 2c////
document.getElementById("range1").addEventListener("change", function() {
    document.getElementById("hair").style.width= document.getElementById("range1").value + "%";
});

document.getElementById("range2").addEventListener("change", function() {
    document.getElementById("eyes").style.width= document.getElementById("range2").value + "%";
});

document.getElementById("range3").addEventListener("change", function() {
    document.getElementById("nose").style.width= document.getElementById("range3").value + "%";
});

document.getElementById("range4").addEventListener("change", function() {
    document.getElementById("mouth").style.width= document.getElementById("range4").value + "%";
});


////LEVEL 4a////

document.getElementById("plusB").addEventListener("click", function() {
    createFace();    
});

////LEVEL 4b////


document.getElementById("randomB").addEventListener("click", function() {
    randomFace() 
});

////LEVEL 5a////
var num = 0;
function createFace() {
    
    num++;
    var newDiv= document.createElement("div")
    newDiv.className = "divCopy"
    newDiv.style.backgroundColor= document.getElementById("preview").style.backgroundColor;
    newDiv.id= num;
    newDiv.addEventListener("click", function(){
     removeDiv(newDiv.id);
    });
    
    var newImg1= document.createElement("img");
    var newImg2= document.createElement("img");
    var newImg3= document.createElement("img");
    var newImg4= document.createElement("img");
    
    newImg1.src= document.getElementById("hair").src;
    newImg1.className="items"
    newImg1.style.cssText=document.getElementById("hair").style.cssText;
    newDiv.appendChild(newImg1);
    
    newImg2.src= document.getElementById("eyes").src;
    newImg2.className="items"
    newImg2.style.cssText=document.getElementById("eyes").style.cssText;
    newDiv.appendChild(newImg2);

    newImg3.src= document.getElementById("nose").src;
    newImg3.className="items"
    newImg3.style.cssText=document.getElementById("nose").style.cssText;
    newDiv.appendChild(newImg3);
    
    newImg4.src= document.getElementById("mouth").src;
    newImg4.className="items"
    newImg4.style.cssText=document.getElementById("mouth").style.cssText;
    newDiv.appendChild(newImg4);


    document.getElementById("display").appendChild(newDiv);
}

function randomFace() {
    var ImgN1 = Math.round(Math.random()*2)+1;
    var ImgN2 = Math.round(Math.random()*2)+1;
    var ImgN3 = Math.round(Math.random()*2)+1;
    var ImgN4 = Math.round(Math.random()*2)+1;
    var bgR= Math.round(Math.random()*255);
    var bgG= Math.round(Math.random()*255);
    var bgB= Math.round(Math.random()*255);
    
    var hairW = Math.round(Math.random()*70);
    var eyesW = Math.round(Math.random()*40);
    var noseW = Math.round(Math.random()*30);
    var mouthW = Math.round(Math.random()*35);
    
    document.getElementById("preview").style.backgroundColor="rgb("+bgR+","+bgG+","+bgB+")"

    document.getElementById("hair").src="img/hair" + ImgN1 +".png";
    document.getElementById("eyes").src="img/eyes" + ImgN2 +".png";
    document.getElementById("nose").src="img/nose" + ImgN3 +".png";
    document.getElementById("mouth").src="img/mouth" + ImgN4 +".png";
    
    document.getElementById("hair").style.width = hairW +"%";
    document.getElementById("eyes").style.width = eyesW +"%";
    document.getElementById("nose").style.width = noseW +"%";
    document.getElementById("mouth").style.width = mouthW +"%";
    
    document.getElementById("range1").value=hairW;
    document.getElementById("range2").value=eyesW;
    document.getElementById("range3").value=noseW;
    document.getElementById("range4").value=mouthW;
    
}


////LEVEL 5b////

function changeType(type) {
    document.getElementById("range1").type =type;
    document.getElementById("range2").type =type;
    document.getElementById("range3").type =type;
    document.getElementById("range4").type =type;
}

////LEVEL 6////

document.getElementById("autoB").addEventListener("click", function() {
   
      var myInterval =  setInterval(function() {
            randomFace();
            createFace();
        },500);
    document.getElementById("stopB").addEventListener("click", function(){
 
    clearInterval(myInterval);
});

});

//Bonus//
function removeDiv(id){
    document.getElementById(id).remove();
}


































