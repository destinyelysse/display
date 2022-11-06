var speed = 2;
frameRate = 60;
hexagons = [];
colors = [
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
                triangle(this.center.x, this.center.y, this.p1.x, this.p1.y, this.p2.x, this.p2.y);
                triangle(this.center.x, this.center.y, this.p2.x, this.p2.y, this.p3.x, this.p3.y);
                triangle(this.center.x, this.center.y, this.p3.x, this.p3.y, this.p4.x, this.p4.y);
                triangle(this.center.x, this.center.y, this.p4.x, this.p4.y, this.p5.x, this.p5.y);
                triangle(this.center.x, this.center.y, this.p5.x, this.p5.y, this.p6.x, this.p6.y);
                triangle(this.center.x, this.center.y, this.p6.x, this.p6.y, this.p1.x, this.p1.y);
            },
            fadeInOut() {
                if(this.dimming){
                    this.opacity -= 1;
                    if (this.opacity <= 0){
                        this.dimming = false;
                    }
                } else {
                    this.opacity += 1;
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