// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // objects for horn image and horn audio
  const currImg = document.querySelector("[alt='No image selected']");
  const currAudio = document.querySelector("audio");
  const hornType = document.getElementById("horn-select");
  hornType.addEventListener('change', function(event){
    //air-horn selected
    if(event.target.value == 'air-horn'){
      currImg.alt = 'Air Horn Image';
      currImg.src = 'assets/images/air-horn.svg';
      currAudio.src = 'assets/audio/air-horn.mp3';
    }
    //car horn selected
    else if(event.target.value == 'car-horn'){
      currImg.alt = 'Car Horn Image';
      currImg.src = 'assets/images/car-horn.svg';
      currAudio.src = 'assets/audio/car-horn.mp3';
    }
    //party horn selected
    else if(event.target.value == 'party-horn'){
      currImg.alt = 'Party Horn Image';
      currImg.src = 'assets/images/party-horn.svg';
      currAudio.src = 'assets/audio/party-horn.mp3';
    }
  })

  //objects for the volume and volume icon
  const currVolume = document.getElementById('volume');
  const currIcon = document.querySelector("[alt='Volume level 2']");
  currVolume.addEventListener('input', function(event){
    if(event.target.value == 0){
       currIcon.src = 'assets/icons/volume-level-0.svg';
       currIcon.alt = 'Volume level 0';
       //adjusting volume of the audio object
       currAudio.volume = 0;
    }
    else if(event.target.value < 33){
      currIcon.src = 'assets/icons/volume-level-1.svg';
      currIcon.alt = 'Volume level 1';
      //adjusting volume of the audio object (out of 1.0)
      currAudio.volume = event.target.value/100.0;
    }
    else if(event.target.value < 67){
      currIcon.src = 'assets/icons/volume-level-2.svg';
      currIcon.alt = 'Volume level 2';
      //adjusting volume of the audio object (out of 1.0)
      currAudio.volume = event.target.value/100.0;
    }
    else if(event.target.value < 100){
      currIcon.src = 'assets/icons/volume-level-3.svg';
      currIcon.alt = 'Volume level 3';
      //adjusting volume of the audio object (out of 1.0)
      currAudio.volume = event.target.value/100.0;
    }
  })

  const jsConfetti = new JSConfetti();
  const playBtn = document.querySelector('button');
  playBtn.addEventListener('click', function(){
    if(hornType.value == 'party-horn'){
      jsConfetti.addConfetti();
    }
    currAudio.play();
  })

}