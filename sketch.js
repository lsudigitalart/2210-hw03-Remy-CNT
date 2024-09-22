function setup() {
    createCanvas(1000, 340);  
    background (35, 198, 231)
}

function draw(){
    background(35, 97, 231);
    for (var y = 2; y <= 1000; y += 5) {
        for (var x = 0; x <= 1000; x += 15) {
         ellipse(0 + x, y, 16 - y/10.0, 16 - y/10.0)
        }    
    }
    
   }

