let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");

ctx.fillStyle = "red";
ctx.fillRect(350, 200, 100, 200); //x , y , w , h

ctx.strokeStyle = "green";
ctx.strokeRect(100, 100, 60, 90); //x,y,w,h

ctx.beginPath();
ctx.moveTo(200, 200);
ctx.lineTo(200, 100);
ctx.lineTo(200, 0);
ctx.lineTo(0, 200);
ctx.lineTo(200, 200);
ctx.lineTo(400, 200);
ctx.stroke();
// ctx.fill();
ctx.closePath();

ctx.font = "28px cursive";
ctx.fillStyle = "purple";
ctx.fillText("samarth", 100, 200);
