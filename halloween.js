var speed = 1;
frameRate = 100;
confetti = [];
halloween = [
    [0, 255, 0],[200, 0, 255],[255, 126, 0]
]

function setup() {

    createCanvas(displayWidth, displayHeight);

    for(let i = 0; i<50; i++){
        let confettiFlake = {
            opacity: random(0,255),
            x: random(0, displayWidth),
            y: random(0, displayHeight),
            selectedColor: random(halloween),
        }
        confetti.push(confettiFlake);
    }
}

function mousePressed(){
    let fs = fullscreen();
    fullscreen(!fs);
}

function draw() {
    background(0);
    for(let i = 0; i<confetti.length;i++){
        flake = confetti[i];
        fill(flake.selectedColor[0], flake.selectedColor[1], flake.selectedColor[2], flake.opacity);
        ellipse(flake.x, flake.y, 100);
        if(flake.opacity > 1){
            flake.opacity -= speed;
        } else {
            flake.opacity = 255;
        }
    }

    ellipseMode(CENTER);
    fill('rgba(0,0,0,0.9)');
    ellipse(displayWidth/2, displayHeight/2,displayWidth*.7,displayHeight*.3);

    let displayText = "HAPPY\n HALLOWEEN!";
    textSize(72);
    textAlign(CENTER, CENTER);
    fill(255, 126, 0);
    text(displayText, displayWidth/2, displayHeight/2);
}