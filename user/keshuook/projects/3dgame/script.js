// Defines all canvas elements and draw functions
var canvas = document.getElementById('canvas');
var canvasContext = canvas.getContext('2d');
function rect(x,y,x2,y2,color) {
canvasContext.fillStyle = color;
canvasContext.fillRect(x,y,x2,y2);
}
function circle(x,y,middle,radius,color){
canvasContext.fillStyle = color;
canvasContext.beginPath();
canvasContext.arc(x,y,middle,radius,Math.PI,true);
canvasContext.fill();
}
// gets keys that are pressed
document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        move(+2,"z");
    }
    else if (e.keyCode == '40') {
        move(-2,"z");
    }
    else if (e.keyCode == '37') {
        move(-3*z/20,"x");
    }
    else if (e.keyCode == '39') {
        move(+3*z/20,"x");
    }

}
// declares variables and costants
const FPS = 1000/120;
var x = 100;
var y = 300;
var z = 40;
function move(num,dir){
	if (dir == "x"){
    for (var i = 0; i < num; i++) {
		    x++;
    }
	}else{
    for (var i = 0; i < num; i++) {
		    z++;
    }
	}
	if(z < 0){
		z = 0;
	}else if(z > 150){
		z = 150;
	}
}
// draws al at the rate of const FPS
setInterval(function(){
	rect(0,0,canvas.width,canvas.height,"#fff");
	rect(0,500,1200,100,"green");
	rect(x,y,z,z+50,'red');
	document.getElementById('events').innerHTML = "x: "+Math.floor(x)+" y: "+y+" z: "+z;
},FPS);
