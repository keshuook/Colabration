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
document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        move(+1,"z");
    }
    else if (e.keyCode == '40') {
        move(-1,"z");
    }
    else if (e.keyCode == '37') {
        move(-3,"x");
    }
    else if (e.keyCode == '39') {
        move(+3,"x");
    }

}
var x = 100;
var y = 100;
var z = 40;
var size = 10;
function move(num,dir){
	if (dir == "x"){
		x += num;
	}else{
		z += num;
		size += num;
	}
	if(size < 0){
		size = 0;
		z = 0;
	}
}
setInterval(function(){
	rect(0,0,canvas.width,canvas.height,"#fff");
	rect(x,y,size,size,'green');
	document.getElementById('events').innerHTML = "x: "+x+" y: "+y+" z: "+z;
},50);