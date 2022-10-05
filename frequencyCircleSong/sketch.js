
var song
var fft


function preload() {
    song = loadSound('meTalking.mp3')
}

function setup() {
    // mic = new p5.AudioIn();
    // mic.start();
    // getAudioContext().resume();
    createCanvas(windowWidth, windowHeight)
    angleMode(DEGREES)

    background(0);
    fft = new p5.FFT()



}

function draw() {

    // randomSeed(173891309)

    noFill()
    // strokeWeight(1)
    stroke(random(100,225),random(100,225),random(100,225),random(10,150));

    translate(width/2, height/2)
    scale(0.75)

    var wave = fft.waveform()

    
    for (var t = -1; t<= 1; t += 2) {
        beginShape()
        for (var i = 0; i <= 180; i += 0.1) {
        var index = floor(map(i, 0, 180, 0, wave.length - 1))
        var r = map(wave[index]*random(1,3), -1, 1, 150, 350)
        var x = r * sin(i) * t
        var y = r * cos(i)
        vertex(x, y)
    }
    endShape()
    }
}

function mouseClicked() {
    if (song.isPlaying()) {
        song.pause()
        noLoop()
    } else {
        song.play()
        loop()
    }
}