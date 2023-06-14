/* 

Name: 

Date: 

*/

// Vars:

var Origin1_X;
var Origin1_Y;
var Origin2_X;
var Origin2_Y;

var TimeSinceFired_1 = 0;
var TimeSinceFired_2 = 0;

var RateOfFire = 10;
var Projectiles

var Colors = ["Red", "Orange", "Yellow", "Green", "Turquoise", "Blue"]

var time = 0


function CreateProjectiles(X, Y, dir, num) 
{

    var CurrentProjectile;
    
    if(num == 1) TimeSinceFired_1 += deltaTime / 1000;
    else TimeSinceFired_2 += deltaTime / 1000;
    
    if((TimeSinceFired_1 >= 1 / RateOfFire && num == 1) || (TimeSinceFired_2 >= 1 / RateOfFire && num == 2))
    {
      
        if(num == 1) TimeSinceFired_1 = 0;
        else TimeSinceFired_2 = 0;
        
        CurrentProjectile = createSprite(X, Y, random(10, 50), random(10, 50));

        CurrentProjectile.collider = 'kinematic';

        CurrentProjectile.Color = color(random(Colors));

        CurrentProjectile.speed = random(3, 8);

        CurrentProjectile.direction = random(dir -30, dir +30)
        
        CurrentProjectile.rotation = (random(360));

        CurrentProjectile.rotationSpeed = random(-10, 10);

        CurrentProjectile.draw = function()
        {
            fill(this.Color);
            noStroke();
            rect(0, 0, this.width, this.height);
        }

        Projectiles.add(CurrentProjectile);

        

    }


    
}

function gravity()
{
    for(p of Projectiles)
    {
        p.vel.y += 18 / getFrameRate();
    }
    
}


function setup() 
{
    createCanvas(windowWidth, windowHeight);

    Projectiles = new Group();
    
    //console.log(width);
    //console.log(height);
    
    
    
}

function draw()
{

    if(time > 120 * 1000) frameRate(20);
    else time += deltaTime
    
    //console.log(time);
    //console.log(getFrameRate());

    background(255);

    textSize(width / 14)
    textAlign("center");

    text("Congratulations", width/2, height/3);
    text("Maddie", width/2, height/3 + width / 10);
    

    CreateProjectiles(width/2 - width/6, height/2, -140, 1);
    CreateProjectiles(width/2 + width/6, height/2, -50, 2);

    gravity()

}

