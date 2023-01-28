var randomnumber1=Math.floor(Math.random()*6)+1;
var randomDiceImg= "dice"+ randomnumber1 +".png";
var randomImgSource="images/" +randomDiceImg;

var image1= document.querySelectorAll("img")[0];
 image1.setAttribute("src",randomImgSource);

 var randomnumber2= Math.floor(Math.random()*6)+1;
 var randomDiceImg2="dice"+ randomnumber2+ ".png";
 var randomImgSource2= "images/"+randomDiceImg2;
 document.querySelectorAll('img')[1].setAttribute("src",randomImgSource2);


if(randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML="Congo!Player1 won."
}
else if(randomnumber1<randomnumber2){
    document.querySelector("h1").innerHTML="Congo!Player2 won."
}else{
    document.querySelector("h1").innerHTML="Draw";
}

