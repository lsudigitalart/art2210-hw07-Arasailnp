var nasa
var playTime, loadTime
var amp, level
var bgcolor
var fft

function preload(){
 
  nasa= loadSound("nasa.mp3")
  bg = loadImage("cover.jpg")
}

function setup(){
  createCanvas(1200, 1200)
  
    if (nasa.isLoaded()){
      loadTime = millis()
      nasa.play()
    }
    amp = new p5.Amplitude()
    fft = new p5.FFT()
}

function draw(){
  image(bg,0,0,1200,1200)
  playTime = millis() - loadTime
  level = amp.getLevel()
  
  push();
  let waveform1 = fft.waveform();
  noFill();
  beginShape();
  stroke("300");
  strokeCap (PROJECT)
  strokeWeight(10);
  for (var i = 0; i< waveform1.length; i++){
    let x = map(i, 0, waveform1.length / 100, 0, width);
    let y = map( waveform1[i], -1, 1, 10, height*3);
    vertex(x ,y/3);
  }
  endShape();
  pop();
  
  var spectrum = fft.analyze();
  var trebleVol = fft.getEnergy("treble");
  var midVol = fft.getEnergy("mid");
  var bassVol = fft.getEnergy("bass");

  fill(30)
  noStroke()
square(250 / 2, height - (250 / 2), trebleVol);
  square(width / 2, height - (250 / 2), midVol);
  square(width-150 / 2, height - (250 / 2), bassVol);



}

