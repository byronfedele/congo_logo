
var img;

var fileName;

var p, pp,diag,d;

function preload() {
  fileName = "Congo_Logo.png";
  img = loadImage(fileName);
  }

function initializeFields() {
  p = 0;
  pp = 0.1;
  d = dist(mouseX,mouseX,width/2,height/2);
  diag = sqrt((width/2)**2+(height/2)**2);
}

function setup() {
    initializeFields();
    createCanvas(151, 61);
    pixelDensity(1.0);
    cursor(HAND);
}

function draw() {
    //img.resize(width,height);
    image(img, 0, 0);
    if(mouseX<width && mouseY<height){
    d = dist(mouseX,mouseY,width/2,height/2);
    }
    pp = map(d,0,diag*2,0.1, 0.01);
    p += pp;
    loadPixels();
    for (let i = 0; i < 4*width*height*pixelDensity()*2; i +=4) {
            var c = color(pixels[i],pixels[i+1],pixels[i+2]); // get colors
            var v = map(brightness(c),0,255,0,TWO_PI);
            var rr = 255 / 2 + 255 / 2 * cos(p+v);
            var gg = 255 / 2 + 255 / 2 * cos(2 * PI / 2 + p+v);
            var bb = 255 / 2 + 255 / 2 * cos(4 * PI / 3 + p+v);
            pixels[i] = rr;
            pixels[i + 1] = gg;
            pixels[i + 2] = bb;

        }
    updatePixels();
}



