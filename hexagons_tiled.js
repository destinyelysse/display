var speed = 4;
frameRate = 60;
hexagons = [];
colors = [
    [[82, 178, 207]], /* vibes */
]
hexagonSize = 50;
l = Math.sqrt((hexagonSize*hexagonSize) - ((hexagonSize/2)*(hexagonSize/2)));


function setup() {

    createCanvas(windowWidth, windowHeight);

    for(let i = 0; i<17; i++){
        for (let j = 0; j<14;j++){
            var hexagon = {
                id: j + (i*14),
                selectedColor: [82, 178, 207],
                opacity: random(0,254),
                dimming: true,
                center: {
                    x: 2 * i * (hexagonSize) - (i*l/2),
                    y: 2 * j * (l + 1) + ((i%2)*l) + (i%2 * 1)
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
                x: hexagon.center.x + hexagonSize,
                y: hexagon.center.y
            };
            hexagon.p2 = {
                x: hexagon.center.x + hexagonSize/2,
                y: hexagon.center.y - l
            };
            hexagon.p3 = {
                    x: hexagon.center.x - hexagonSize/2,
                    y: hexagon.center.y - l
            };
            hexagon.p4 = {
                x: hexagon.center.x - hexagonSize,
                y: hexagon.center.y
            };
            hexagon.p5 = {
                x: hexagon.center.x - hexagonSize/2,
                y: hexagon.center.y + l
            };
            hexagon.p6 = {
                x: hexagon.center.x + hexagonSize/2,
                y: hexagon.center.y + l
            };
            hexagons.push(hexagon);
        }
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

/* ! NOTE */
/* Set opacity to i*j for a rolling fade effect. */