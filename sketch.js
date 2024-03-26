//establish the variables
let h; //hour
let m; //minute
let s; //second
let mo; //month
let d; //day
let img; 

function preload(){
  img = loadImage('ejsb.jpg')
  img2 = loadImage('hbth.webp')
}

let f = "red"; //controls font color
let bg = 0; //controls bg color

function setup() {
  createCanvas(windowWidth, windowHeight);
  clockfont = loadFont("DS-DIGI.TTF");
}

function draw() {
  background(bg);
  
  //intialize the variables with the functions to read your computers clock/calendar
  h = hour();
  m = minute();
  s = second();
  mo = month();
  d = day();
  y = year();
  
  //calling the values as text() functions
  noStroke();
  fill(f);
  textFont(clockfont);
  textSize(width/10);
  textAlign(CENTER);
  if(m < 10)
    m = "0" + m
  else if (s < 10)
    s = "0" + s
  text(mo + "/" + d +"/" + y, width/2, height/2 + 150);
  textSize(width/4);
  text(h + ":" + m + ":" + s, width/2, height/2);
  
  
  
  //preform a check that will trigger once the data and time are true
  if (mo == 4 && d == 1 && h == 0 && m == 0 && s >= 0 || mouseIsPressed) {
    bg = 255;
    f = 0;
    imageMode(CENTER);
    image(img, width/2, height/2);
    print("First Day of Spring Break!");
  } 
  else if (mo ==5 && d == 29 && h == 0 && m == 0 && s >= 0) { 
    bg = 255
    f = 0
    imageMode(CENTER);
    image(img2, width/2, height/2);
    print("Happy Birthday To Me!");
    
  }
}
