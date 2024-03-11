let nums = [510, 515, 520, 535, 537, 542, 545, 560, 564, 573, 576];
let circW = [65, 90, 170, 280, 360, 400]
let circH = [20, 30, 50, 70, 80, 90];
//let numCircles = 5;

function setup()
{
  createCanvas(500, 700);
} 

function draw(){
background(45);

fill(255);
beginShape();
vertex(290, 0);
bezierVertex(300, 495, 217, 317, 200, 470);
vertex(0, 0);
endShape();

ellipse(200, 485, 10);
ellipse(200, 545, 10);
ellipse(200, 577, 10);


fill(255, 50);
noStroke();
for(var i = 0; i < nums.length; i++){
  ellipse(200, nums[i], 10)
}
fill(255, 200);
ellipse(131, 326, 10);
ellipse(138, 342, 10)

ellipse(300, 70, 10);


fill(255, 15);
for(var i = 0; i < 6; i++){
ellipse (200, 645, circW[i], circH[i]);
}


//noLoop();



// beginShape();
//     fill(255);
//     vertex(width*8/24,height/2);
//     bezierVertex(width*8/24,height*17/32,  width*8/24,height*19/32,   width*9/24,height*19/32);//peak1-left
//     bezierVertex(width*10/24,height*19/32,  width*9/24,height*17/32  ,width*10/24,height*17/32);//peak1-right
//     bezierVertex(width*11/24,height*17/32,  width*19/48,height*23/32  ,width*11/24,height*23/32);//peak2-left
//     bezierVertex(width*12/24,height*23/32,  width*11/24,height*21/32  ,width*12/24,height*21/32);//peak2-right
//     bezierVertex(width*13/24,height*21/32,  width*11/24,height*29/32  ,width*13/24,height*29/32);//peak3-left
//     bezierVertex(width*29/48,height*29/32,  width*13/24,height*19/32  ,width*14/24,height*19/32);//peak3-right
//     bezierVertex(width*15/24,height*19/32,  width*14/24,height*22/32  ,width*15/24,height*22/32);//peak4-left
//     bezierVertex(width*16/24,height*22/32,  width*16/24,height*19/32  ,width*16/24,height/2);//peak4-right
//     vertex(width*8/24,height/2);
//   endShape();


//beginShape();
//noStroke();
// fill("Yellow");
//   vertex(300, 45);
//   vertex(width/3, height/3);
//   vertex(100, 100);
// endShape(CLOSE);

// fill("Red");
// textSize(32);
// textAlign(LEFT);
// text("(" + floor(mouseX) + ", " + floor(mouseY) + ")", mouseX, mouseY);
// }