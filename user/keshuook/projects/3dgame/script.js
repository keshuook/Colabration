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
				x+=0.3;
				z--;
			}else{
				x-=0.3;
				z++;
			}
		},5);
    }
	}
	// does not let it go out of hand
	if(z < 0){
		x -= 0.6;
		z = 0;
	}else if(z > 180){
		x += 0.6;
		z = 180;
	}
}
// draws all at the rate of the const FPS
setInterval(function(){
	y = -z+450;
	rect(0,0,canvas.width,canvas.height,"#fff");
	rect(0,500,canvas.width,100,"green");
	if(z > 0){
	rect(x,y,z+420,z+50,'red');
	rect(x,y,z,z,'blue');
	rect(x+150,y,z+270,z,'#4caf50');
	rect(x+200,y,z-10,z+50,'#000');
	circle(x+100,500,z/4,0,);
	circle(x+430,500,z/4,0,);
	}
	document.getElementById('events').innerHTML = "x: "+Math.floor(x)+" y: "+y+" z: "+z;
},FPS);
