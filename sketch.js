var ball;
var database;
function setup(){
    database=firebase.database(); //initialise the database 
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    var balldb=database.ref('ball/position'); // .ref refers to which value of db are we refering;
    balldb.on("value",readPosition,showError()) //.on creates a listener which keeps on checking the changes in the value in db
//if value is changed, call readPosition function
//showerror is for displaying error msgs

}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}

function readPosition(data){
    position=data.val();
    ball.x=position.x;
    ball.y=position.y;
}

function showError(){
    console.log("error in value")
}