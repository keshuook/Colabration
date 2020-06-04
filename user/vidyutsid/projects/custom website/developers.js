var card = document.getElementById('card');
var card2 = document.getElementById('card2');
card.addEventListener("mouseover", animate);
card2.addEventListener("mouseover", animate2);
function info(x){
	document.getElementById('info').innerHTML = x;
}
function animate() {
	info("Keshuook");
}
function animate2() {
	info("vidyutsid");
}
setTimeout(function(){
	console.clear();
},1000);