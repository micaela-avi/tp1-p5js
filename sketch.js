function setup() {
    createCanvas(512, 512);
  }
  
  function draw() {
    background(220);
    //background(255); // blanco fondo
    //background (200); // gris oscuro
    // line (x1,y1,x2,y2);
  
    // line (200,400,0,0);
  
    //quad (x1,y1,x2,y2,x3,y3,x4,y4);
    //ej interesante
    //quad (250,215,220,315, 320,315,320,215);
  
    //QUAD
    //push();
    //fill(230);
    //strokeWeight (1);
    //quad (180,170,150,280,300,320,360,230);
    //pop();}
  
    push();
    strokeWeight(3);
    quad(15, 100, 45, 420, 470, 450, 500, 25); //figura 12
    pop();
  
    quad(5, 15, 15, 450, 500, 480, 480, 70); //figura 11
    quad(30, 50, 30, 350, 450, 420, 470, 100); //figura 10
    quad(50, 80, 80, 320, 405, 390, 440, 160); // figura 9
    quad(80, 100, 100, 300, 395, 370, 400, 140); // figura 8
  
    push();
    strokeWeight(3);
    quad(100, 130, 120, 320, 380, 350, 390, 120); // figura 7
    pop();
  
    push();
    strokeWeight(4);
    quad(130, 165, 140, 310, 330, 350, 380, 160); // figura 6
    pop();
  
    quad(140, 150, 150, 300, 300, 320, 360, 190); // figura 5
  
    push();
    strokeWeight(3);
    //quad (160,180,180,290,300,305,350,190);
    quad(160, 185, 170, 295, 300, 305, 340, 200); // figura 4 - oficial
    pop();
  
    noFill();
    quad(180, 195, 180, 290, 300, 305, 320, 215); // figura 3 - el que sigue despues del rectangulo 2
  
    //RECTANGULOS
    //rect (160,190, 165, 125),
    //rect (x,y, ancho,alto);
    strokeWeight(2); //rectangulo 2
    rect(196, 205, 100, 80);
    strokeWeight(1);
    rect(210, 215, 70, 60); // rectangulo 1 - el más pequeño
  }
  