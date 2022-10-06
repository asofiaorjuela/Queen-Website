let mySound;
function preload() {
  soundFormats('mp3', 'ogg');
  mySound = loadSound('assets/Dont Stop Me Now');
  mySound2 = loadSound('assets/Somebody To Love');
  mySound3 = loadSound('assets/Love of my Life - Queen In Rock In Rio 85 - HD');
  mySound4 = loadSound('assets/Radio Ga Ga');
  mySound5 = loadSound('assets/Fat Bottomed Girls');
  mySound6 = loadSound('assets/Another One Bites the Dust (Live @ Wembley 1986)');
}


function setup() {
   
    let btn1 = select("#playA");
    btn1.mousePressed(cancion1);

    let btn2 = select("#playB");
    btn2.mousePressed(cancion2);

    let btn3 = select("#playC");
    btn3.mousePressed(cancion3);

    let btn4 = select("#playD");
    btn4.mousePressed(cancion4);

    let btn5 = select("#playE");
    btn5.mousePressed(cancion5);

    let btn6 = select("#playF");
    btn6.mousePressed(cancion6);

  }

  function cancion1(){
    mySound.play();
  }
  
  function cancion2() {
    mySound2.play();
  }

  function cancion3() {
    mySound3.play();
  }

  function cancion4() {
    mySound4.play();
  }

  function cancion5() {
    mySound5.play();
  }

  function cancion6() {
    mySound6.play();
  }

  function draw() {
    
  }

  