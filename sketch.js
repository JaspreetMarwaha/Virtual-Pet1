//Create variables here

var  dog, happyDog, database, foodS, foodStock,dogIMG,happyDogImg,database;
function preload()
{
	//load images here

  dogIMG=loadImage("images/dogImg.png");
  happyDogIMG=loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
 
 database=firebase.database();
 foodStock=database.ref("Food");
 foodStock.on=("value",readStock); 
 foodStock.set(20);

  dog =createSprite(250,360,10,60);
  dog.addImage(dogIMG);
  dog.scale=0.2;

}


function draw() {  

  background("pink");
  if(foodS!==undefined){
    textSize(20);
    fill("white");
    text("Note: Press Up Arrow to feed your pet  milk",50,50);
    text("Food Remaining:"+foodS,150,150);

    if(keyWentDown(UP_ARROW)){
      writeStck(foodS);
      dog.addImage(happyDogimg);

      if(keyWentDown(UP_ARROW)){
        dog.addImage(dogIMG);
    }

    if(foodS==0){
      foodS=20;
    }
  }
  drawSprites();
  //add styles here

}}

function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;}
    database.ref("/").update({
      Food:x
    });
    

  }

function readStock(data){
foodS=data.val();
}








