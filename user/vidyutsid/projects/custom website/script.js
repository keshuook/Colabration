var load = document.getElementById('loader');
var loadtext = document.getElementById('load-text');
function loaded(){
	setTimeout(function(){
	load.style.display = "none";
	},200);
}
setInterval(function(){
	if(navigator.onLine == false){
		setTimeout(function(){
			loadtext.innerHTML = "You have been disconnected.";
			load.style.display = "block";
			},1000);
		}else{
			setTimeout(function(){
			load.style.display = "none";
			},1000);
		}
},50);
function error(){
	console.error("Error");
	loadtext.innerHTML = "Error please reload the page.";
	load.style.display = "block";
}