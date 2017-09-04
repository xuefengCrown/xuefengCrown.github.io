function drawRec(){
	var drawing = document.getElementById("drawing");
	//make sure <canvas> is completely supported
	if (drawing.getContext){
		var context = drawing.getContext("2d");
		var gradient = context.createRadialGradient(20, 20, 3, 20, 20, 25);
		gradient.addColorStop(0, "white");
		gradient.addColorStop(1, "black");
		//context.fillStyle = "rgba(0,0,255,0.5)";
		context.fillStyle = gradient;
		context.fillRect(0, 0, 40, 40);	
	}
}			
window.onload = function(){
	drawRec();
}