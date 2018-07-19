let canvas = document.querySelector("#draw");
let ctx = canvas.getContext('2d');

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

ctx.strokeStyle="green";
ctx.lineJoin="round";
ctx.lineCap="round";
ctx.lineWidth=0;

let isDrawing = false;
let lastX=0;
let lastY= 0;
let hue=0;
let direction=true;

function draw (e) {
    if (!isDrawing) return;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
    hue++;
    ctx.strokeStyle=`hsl(${hue}, 100%, 50%)`;
    if (hue>=360) {
        hue=0;
    }  

    if (ctx.lineWidth>=50 || ctx.lineWidth<=1) {
        direction = !direction;
    }
    if (direction) {
        ctx.lineWidth=ctx.lineWidth+1;
    } else {
        ctx.lineWidth=ctx.lineWidth-1;
    }
    
}





canvas.addEventListener("mousedown", (e)=> {
    isDrawing=true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
    console.log(ctx.lineWidth);
});

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", ()=> isDrawing=false);
canvas.addEventListener("mouseout", ()=> isDrawing=false);