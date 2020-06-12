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
    if (e.keyCode == '87') {
		// W key pressed
        move(+2,"z");
    }
    else if (e.keyCode == '83') {
		// S key pressed
        move(-2,"z");
    }
    else if (e.keyCode == '65') {
		// A key pressed
        move(-3*z/40,"x");
    }
    else if (e.keyCode == '68') {
		// D key pressed
        move(+3*z/40,"x");
    }

}
// declares variables and costants
const FPS = 1000/240;
var x = 100;
var y = 300;
var z = 40;
// Function move used when WASD pressed
function move(num,dir){
	if(num < 0){
		num = -num;
		var back = true;
	}else{
		var back = false;
	}
	if (dir == "x"){
		// adds lag
    for (var i = 0; i < num; i++) {
		setTimeout(function(){
			if(back){
				x--;
			}else{
				x++;
			}
		},5);
    }
	}else{
    for (var i = 0; i < num; i++) {
		setTimeout(function(){
			if(back){
				z--;
			}else{
				z++;
			}
		},5);
    }
	}
	// does not let it go out of hand
	if(z < 0){
		z = 0;
	}else if(z > 150){
		z = 150;
	}
}
// draws al at the rate of const FPS
setInterval(function(){
	rect(0,0,canvas.width,canvas.height,"#fff");
	rect(0,500,canvas.width,100,"green");
	rect(x,y,z,z+50,'red');
	document.getElementById('events').innerHTML = "x: "+Math.floor(x)+" y: "+y+" z: "+z;
},FPS);