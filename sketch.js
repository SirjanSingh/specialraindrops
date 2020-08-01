var rainarr = []

class raindrop{
  constructor(rx,rv,ra,rs){
    //console.log("const. started");
    this.x = rx;
    var r = random();
    this.alpha = ra+20;
    this.scale = 5+rs*22;
    this.velocity = rv*10;
    this.y = -20;
    if(r < 0.2){
      this.char = '1';
    }else if(r < 0.5){
      this.char = '0';
    }else if(r < 0.8){
      this.char = '!';
    }else if(r < 0.99){
      this.char = '#';
    }else{
      this.char = "rgb("+round((this.x/750)*255)+",100,"+round((this.y/750)*255)+")";
      this.scale = 25;
    }
    //console.log("x: "+this.x+"\ny: "+this.y+"\nchar: "+this.char+"\naplha: "+this.alpha+"\nvelocity: "+this.velocity);
    this.work();
    //console.log(this.velocity);
  }

  work(){
    //console.log("y: "+this.y+"\nfps: "+frameRate());
    //console.log("y: "+this.y);
    fill((this.x/750)*255,255,(this.y/750)*255,this.alpha);
    textStyle(NORMAL);
    noStroke();
    if(this.char !== '1' && this.char !== '0' && this.char !== '!' && this.char !== '#'){
      strokeWeight(1);
      textStyle(BOLD);
      stroke(255,255,255,100);
      fill((this.x/750)*255,100,(this.y/750)*255,255);
      this.char = "rgb("+round((this.x/750)*255)+",100,"+round((this.y/750)*255)+")";
    }
    textSize(this.scale);
    text(this.char,this.x,this.y);
    if(this.y < 750){
      //console.log("y < 750")
      this.y += 50*(this.velocity+2)/frameRate();
    }
  }
}

function setup(){
  createCanvas(750,750);
  frameRate(360)
}

function draw() {
  background(0,0,0);
  //if(frameCount%50 === 0)
  rainarr.push(new raindrop(random(0,750),random(),random(0,255),random()));
  for(var i = rainarr.length-1; i > 0; i -= 1){
    rainarr[i].work();
    if(rainarr[i].y >= 750){
      rainarr.splice(i,1);
    }
  }
  textSize(100);
  fill(random()*255,random()*255,random()*255)
  text("RAINDROPS!",70,frameCount+100)
}