canvas = document.getElementById("mycanvas");
ctx = canavs.getContext("2d");

grrencar_width = 75;
greencar_height = 100;

greencar_x = 5;
greencar_y = 225;

background_image = "parkingLot.png";
greencar_image = "car2.png";

function add()
{
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    greencar_imgTag = new Image();
    greencar_imgTag.onload = uploadgreencar;
    greencar_imgTag.src = greencar_imgTag;
}

function uploadBackground()
{
    ctx.drawImage(background_imgTag, 0, 0, canavs.widht, canvas.height);
}

function uploadgreencar()
{
    ctx.drawImage(greencar_imgTag, greencar_x, greencar_y, greencar_width, greencar_height);
}

window.addEventListener("mykeydown", my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log("Key Pressed");

    if (keyPressed == '37')
    {
        left();
        console.log("LEFT ARROW KEY");
    }

    if(keyPressed == '38')
    {
        up();
        console.log("UP ARROW KEY");
    }

    if(keyPressed == '39')
    {
        right();
        console.log("RIGHT ARROW KEY");
    }

    if(keyPressed == '40')
    {
        down();
        console.log("DOWN ARROW KEY");
    }
}

function up()
{
    if(grrencar_y >= 0)
    {
        greencar_y = greencar_y - 10;
        console.log("When up arrow is preseed, X = " + greencar_x + "Y = " + greencar_y);
        uploadBackground();
        uploadgreencar()
    }
}

function down()
{
    if(greencar_y <= 0)
    {
        greencar_y = greencar_y + 10;
        console.log("When down arrow is preseed, X = " + greencar_x + "Y = ", greencar_y);
        uploadBackground();
        uploadgreencar();
    }
}

function left()
{
    if(greencar_x >= 0)
    {
        grrencar_x = greencar_x - 10;
        console.log("When left arrow is preseed, X = " + greencar_x + "Y = ", greencar_y);
        uploadBackground();
        uploadgreencar();
    }
}

function right()
{
    if(greencar_x <= 0);
    {
        greencar_x = greencar_x + 10;
        console.log("When right arrow is preseed, X = " + greencar_x + "Y = " + greencar_y);
        uploadBackground();
        uploadgreencar();

    }
}
