class Raindrop{
    constructor(){

        var options={
            'restitution':1.0,
        
        }
        
    
        this.body=Bodies.rectangle(0,0,10,height,options);

        
        this.body1 = loadImage("sym.PNG");
        this.body2 = loadImage("sym2.PNG");
        this.body3 = loadImage("sym3.PNG");
        this.body4 = loadImage("sym4.PNG");
        this.body5 = loadImage("sym5.PNG");
        this.body6 = loadImage("sym6.PNG");
        this.body7 = loadImage("sym7.PNG");
        this.body8= loadImage("sym8.PNG");
        this.body9 = loadImage("sym9.PNG");


       
        this.width = width;
        width = 5;

        this.height = height;
        height = 20+Math.random();

    
             
        this.body.position.x = Math.random()*800 ;

        this.body.position.y = Math.random()*400;
      
        Body.setVelocity( this.body, {x: 0, y:5});

        World.add(world,this.body);

        console.log(this.body.position.y);
   

        }
    display(){

        var pos= this.body.position;


        if(pos.y>400){
            pos.y = pos.y - 400

            Body.setVelocity( this.body, {x: 0, y: 10});
        }


        var rand = Math.round(random(1,9));
        switch(rand) {
          case 1: this.body.addImage(this.body1);
                  break;
          case 2: this.body.addImage(this.body2);
                  break;
          case 3: this.body.addImage(this.body3);
                  break;
          case 4: this.body.addImage(this.body4);
                  break;
          case 5: this.body.addImage(this.body5);
                  break;
          case 6: this.body.addImage(this.body6);
                  break;
          case 7: this.body.addImage(this.body7);
                  break;
          case 8: this.body.addImage(this.body8);
                  break;
          case 9: this.body.addImage(this.body9);

          default: break;
        }

        

        rectMode(CENTER);

        console.log(pos.y);

        rect(pos.x, pos.y,width ,height);
    }
}