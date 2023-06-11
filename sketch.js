var R = 250

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight, WEBGL)
  canvas.parent('#sketch')
  
  angleMode(DEGREES)
}

function draw() {
  background(0)
  
  strokeWeight(2)
  randomSeed(42)
  
  push()
  // orbitControl()
  translate(-width/2 + 1.75 * R, -height/2 + R + 60)
  // rotateZ(-45)
  rotateY(-frameCount * 0.1)

  for (var i = 0; i < 3000; i++) {    
    var s = random(0, 360)
    var t = random(0, 360)
    
    var dR = 0 // map(noise(s * 0.005, t * 0.005), 0, 1, 0, 25)

    if (random() < 0.1) {
      dR += random(R, width)
    }
    
    var x = (R + dR) * cos(s) * sin(t)
    var y = (R + dR) * sin(s) * sin(t)
    var z = (R + dR) * cos(t)
  
    stroke(255, random(100, 200))
    point(x, y, z)
  }
  pop()
}