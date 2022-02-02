const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const image = new Image();
image.src = '../img/waves.svg';
let imageWidth = window.innerWidth;
let imageHeight = 200;

const imageSlice = 2;
image.addEventListener('load', draw);


let speed = 0;
function draw() {

  speed += 0.07;
  ctx.clearRect(0, canvas.height - imageHeight - 10, canvas.width, canvas.height);
  for(let i = 0; i < imageWidth; i++){
    ctx.drawImage(
      image,
      i * imageSlice,
      0,
      imageSlice,
      imageHeight,

      i * imageSlice,
      canvas.height - imageHeight - (Math.sin(speed - (i / 20)) * 10),
      imageSlice,
      imageHeight
    );
  }
  requestAnimationFrame(draw);
}
ctx.font = "100px Verdana";
ctx.strokeText("Big smile!", 100, 400);
draw();


