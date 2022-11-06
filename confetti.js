var speed = 4;
frameRate = 100;
confetti = [];
colors = [

    [[255, 0, 0], [0, 255, 0], [0, 0, 255], [255, 0, 255], [255, 255, 0], [255, 126, 0]], /* random */
    [[66, 129, 164], [72, 169, 166], [228, 223, 218], [212, 180, 131], [193, 102, 107]], /* beach */
    [[220, 237, 255], [148, 176, 218], [143, 145, 162], [80, 90, 91], [52, 63, 62]], /* ocean */
    [[246, 16, 103], [94, 35, 157], [0, 240, 181], [109, 236, 175], [244, 244, 237]], /* watermelon */
    [[241, 232, 184], [249, 231, 132], [229, 143, 101], [208, 83, 83]], /* hot */
    [[212, 175, 185], [209, 207, 226], [156, 173, 206], [126, 196, 207], [82, 178, 207]], /* pastel */
    [[167, 153, 183], [152, 136, 165], [119, 100, 114], [68, 85, 82], [41, 77, 74]], /* lavender mint */
    [[196, 30, 61], [125, 17, 40], [255, 44, 85], [60, 9, 25], [226, 41, 79]], /* reds */
    [[60, 73, 63], [126, 141, 133], [179, 191, 184], [240, 247, 244], [162, 227, 196]], /* greens */
    [[255, 0, 0]], /* red */
    [[0, 255, 0]], /* green */
    [[0, 0, 255]], /* blue */
    [[255, 0, 255]], /* purple */
    [[255, 255, 0]], /* yellow */
    [[255, 126, 0]] /* orange */
]

function setup() {

    createCanvas(windowWidth, windowHeight);

    selectedPalette = random(colors);

    for(let i = 0; i<200; i++){
        let confettiFlake = {
            opacity: random(0, 255),
            x: random(0, windowWidth),
            y: random(0, windowHeight),
            selectedColor: random(selectedPalette),
        }
        confetti.push(confettiFlake);
    }
}

function draw() {
    background(0);
    for(let i = 0; i<confetti.length;i++){
        flake = confetti[i];
        fill(flake.selectedColor[0], flake.selectedColor[1], flake.selectedColor[2], flake.opacity);
        ellipse(flake.x, flake.y, 40);
        if(flake.opacity > 1){
            flake.opacity -= speed;
        } else {
            flake.opacity = 255;
        }
    }
}