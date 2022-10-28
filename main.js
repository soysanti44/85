//Create a reference for canvas 
canvas =document.getElementById("myCanvas");
//Give specific height and width to the car image
ctx =canvas.getContext("2d");
car_ancho =75;
car_alto =100;
background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.
car_Y =225
car_X =5

function add() {
	//upload car, and background images on the canvas.
background_parcking =new Image();
background_parcking.onload =uploadBackground;
background_parcking.src =background_image;

greencar_img =new Image();
greencar_img.onload =uploadgreencar;
greencar_img.src =greencar_image;
}

function uploadBackground() {
	//Define function ‘uploadBackground’
ctx.drawImage(background_parcking,0,0,canvas.width,canvas.height);
}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
 ctx.drawImage(greencar_img,car_X,car_Y,car_ancho,car_alto);
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	//Define function to move the car upward
	if (car_Y>=0) {
    car_Y =car_Y - 10;
	uploadBackground();
	uploadgreencar();
	}
}

function down()
{
	//Define function to move the car downward
	if (car_Y<=350) {
		car_Y =car_Y + 10;
		uploadBackground();
		uploadgreencar();
		}
}

function left()
{
	//Define function to move the car left side
	if (car_X>=0) {
		car_X =car_X - 10;
		uploadBackground();
		uploadgreencar();
	}
}

function right()
{
	//Define function to move the car right side
	if (car_X<=750) {
		car_X =car_X + 10;
		uploadBackground();
		uploadgreencar();
	}
}
