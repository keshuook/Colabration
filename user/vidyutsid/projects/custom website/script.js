var load = document.getElementById('loader');
// load.innerHTML = "Loading";
function loaded(){
	setTimeout(function(){
	load.innerHTML = "";
	},200);
}
setInterval(function(){
	if(navigator.onLine == false){
		setTimeout(function(){
			var Win = window.open("","","height=200;width=200;");
			Win.document.write("<h1>Error: Disconnected</h1>");
			setTimeout(function(){
					Win.close();
			},1000);
		},500);
	}
},50);
function error(){
	console.error("Error");
	document.write("error");
}