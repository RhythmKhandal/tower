const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var ground;
var stand;

function preload(){

}

function setup(){
    createCanvas(1300,600)
    engine = Engine.create();
	world = engine.world;

    ground=new Ground(100,100,1300.20)



    Engine.run(engine);

}

function draw(){
    background("black")

    ground.display();
}
