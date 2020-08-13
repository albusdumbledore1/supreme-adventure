const Bodies= Matter.Bodies
const Engine  = Matter.Engine
const World = Matter.World

var ground,particles;

var engine, world;
var dividers = []
var plinko = []
var particles = []



function setup() {
  engine = Engine.create();
    world = engine.world;
  createCanvas(480,800);
 
  ground  = new Ground(width/2,800,width,20);

for(k = 0;k<=width;k = k+80){
  dividers.push(new Ground (k,700,10,200));
}

for(j = 40;j <=width;j = j+50){
  plinko.push(new Plinko(j,75));
}

for(l = 30;l <=width;l = l+50){
  plinko.push(new Plinko(l,125));
}
for(k = 40;k <=width;k = k+50){
  plinko.push(new Plinko(k,175));
}

for(m = 30;m <=width;m = m+50){
  plinko.push(new Plinko(m,225));
}

for(n = 40;n <=width;n = n+50){
  plinko.push(new Plinko(n,275));
}

for(o = 30;o <=width;o = o+50){
  plinko.push(new Plinko(o,325));
}


for(p = 40;p <=width;p = p+50){
  plinko.push(new Plinko(p,375));
}

for(a = 30;a <=width;a = a+50){
  plinko.push(new Plinko(a,425));
}

for(b = 40;b <=width;b = b+50){
  plinko.push(new Plinko(b,475));
}





}

function draw() {
  background(0);  

  ground.display();
  for(k=0;k<dividers.length;k++){
    dividers[k].display();
  }

  for(j = 0;j<plinko.length; j++){
  plinko[j].display();
  }
  
  for(l = 0;l<plinko.length; l++){
    plinko[l].display();
    }

    for(k = 0;k<plinko.length; k++){
      plinko[k].display();
      }

      for(m = 0;m<plinko.length; m++){
        plinko[m].display();
        }

        for(n = 0;n<plinko.length; n++){
          plinko[n].display();
          }

          for(o = 0;o<plinko.length; o++){
            plinko[o].display();
            }   

            for(p = 0;p<plinko.length; p++){
              plinko[p].display();
              }   
              
            for(a = 0;a<plinko.length; a++){
              plinko[a].display();
              }   

              for(b = 0;b<plinko.length; b++){
                plinko[b].display();
                } 
            
                if(frameCount%60 === 0) {
                  particles.push(new Particle(random(width/2-10, width/2+10),10,10))
                }


      for(t = 40;t <=width;t = t+0){
  particles.push(new Particle(t,475));
}
for(t = 0;t<particles.length; t++){
  particles[t].display();
  } 


    

}