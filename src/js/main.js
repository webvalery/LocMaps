const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const image = new Image();
image.src = './img/waves.svg';
let imageWidth = window.innerWidth;
let imageHeight = 200;

const imageSlice = 5;
image.addEventListener('load', draw);


let speed = 0;
let kf = 10;
function draw() {

  speed += 0.5;
  ctx.clearRect(0, canvas.height - imageHeight, canvas.width, canvas.height);
  for (let i = 0; i < imageWidth; i++){
    ctx.drawImage(
      image,
      i * imageSlice, // sx
      Math.sin(speed - (i / 12) * 3) +  Math.sin(speed - (i / 10)), // sy
      imageSlice, // swidth 
      imageHeight, // sheight

      i * imageSlice, // x
      canvas.height - imageHeight, // y
      imageSlice, // width
      imageHeight // height
    );
  }
  requestAnimationFrame(draw);
}
ctx.font = "100px Verdana";
ctx.strokeText("Привет )", 100, 400);
draw();


