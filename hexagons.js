var speed = 4;
frameRate = 128;
hexagons = [];
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
    [[255, 126, 0]], /* orange */
    [[82, 178, 207]], /* vibes */
]

function setup() {

    createCanvas(windowWidth, windowHeight);

    selectedPalette = random(colors);

    for(let i = 0; i<200; i++){
        var hexagon = {
            selectedColor: random(selectedPalette),
            opacity: random(0,254),
            dimming: true,
            size: 20,
            center: {
                x: random(0, windowWidth),
                y: random(0, windowHeight),
            },
            l(){ 
                return Math.sqrt((this.size*this.size) - ((this.size/2)*(this.size/2)));
            },
            drawHexagon() {
                fill(this.selectedColor[0], this.selectedColor[1], this.selectedColor[2], this.opacity);
                noStroke();
                beginShape();
                vertex(this.p1.x,this.p1.y);
                vertex(this.p2.x,this.p2.y);
                vertex(this.p3.x,this.p3.y);
                vertex(this.p4.x,this.p4.y);
                vertex(this.p5.x,this.p5.y);
                vertex(this.p6.x,this.p6.y);
                endShape(CLOSE);
            },
            fadeInOut() {
                if(this.dimming){
                    this.opacity -= speed;
                    if (this.opacity <= 0){
                        this.dimming = false;
                    }
                } else {
                    this.opacity += speed;
                    if(this.opacity >= 255){
                        this.dimming = true;
                    }
                }
            }
        };
        hexagon.p1 = {
            x: hexagon.center.x + hexagon.size,
            y: hexagon.center.y
        };
        hexagon.p2 = {
            x: hexagon.center.x + hexagon.size/2,
            y: hexagon.center.y - hexagon.l()
        };
        hexagon.p3 = {
                x: hexagon.center.x - hexagon.size/2,
                y: hexagon.center.y - hexagon.l()
        };
        hexagon.p4 = {
            x: hexagon.center.x - hexagon.size,
            y: hexagon.center.y
        };
        hexagon.p5 = {
            x: hexagon.center.x - hexagon.size/2,
            y: hexagon.center.y + hexagon.l()
        };
        hexagon.p6 = {
            x: hexagon.center.x + hexagon.size/2,
            y: hexagon.center.y + hexagon.l()
        };
        hexagons.push(hexagon);
    }
}

function draw() {
    background(0);
    for(let i = 0; i<hexagons.length;i++){
        let specificHexagon = hexagons[i];
        specificHexagon.drawHexagon();
        specificHexagon.fadeInOut();
    }
}