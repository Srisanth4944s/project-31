
// var string = "Srisanth";
// console.log(string);

// var number = 10;
// console.log(number)

// var bool = true;
// console.log(bool);

// var object;
// console.log(object);

// object = null;
// console.log(object);

// var array1 = [1,2,3,4,5];
// console.log(array1[2]);

// var array2 = ["srisanth",56,"value",true]
// console.log(array2);

// var array3 = [[1,2],2,[5,7]];
// console.log(array3[2][1])

// array3.push(32);
// array.pop();
// console.log(array3)

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;

var gameState = "onsling"

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1600,700);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1900,20);
    platform = new Ground(150, 615, 300, 170);

    box1 = new Box(700,620,70,70);
    box2 = new Box(920,620,70,70);
    pig1 = new Pig(810, 650);
    log1 = new Log(810,610,300, PI/2);

    box3 = new Box(700,600,70,70);
    box4 = new Box(920,600,70,70);
    pig3 = new Pig(810, 610);

    log3 =  new Log(810,580,300, PI/2);

    box5 = new Box(810,560,70,70);
    log4 = new Log(760,560,150, PI/7);
    log5 = new Log(870,560,150, -PI/7);

    bird = new Bird(600,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:370});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    if(gameState !== "launched"){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}
}

function mouseReleased(){
    slingshot.fly();
    gameState = "launched"
}

function keyPressed(){
    if(keyCode === 32){
        //slingshot.attach(bird.body);
    }
}