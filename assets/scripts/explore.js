// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  let voices = [];
  const synth = window.speechSynthesis;
  const selectionList = document.getElementById('voice-select');
  const textToSpeech = document.querySelector('textarea');

  function populateVoices(){
    voices = synth.getVoices();

    for(let i = 0; i < voices.length; i++){
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
      option.value = `${voices[i].name} (${voices[i].lang})`;

      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      selectionList.appendChild(option);
    }
  }

  populateVoices();
  if (speechSynthesis.onvoiceschanged !== undefined){
    speechSynthesis.onvoiceschanged = populateVoices;
  }

  const faceImg = document.querySelector('img');

  const playBtn = document.querySelector('button');
  textToSpeech.value = textToSpeech.textContent;
  playBtn.addEventListener('click', function(){
    const wordsToSay = new SpeechSynthesisUtterance(textToSpeech.value);
    const selectedOption = selectionList.selectedOptions[0].getAttribute('data-name');
    for (let i = 0; i < voices.length ; i++) {
      if (voices[i].name === selectedOption) {
        wordsToSay.voice = voices[i];
      }
    }

    wordsToSay.addEventListener('start', (event)=>{
      faceImg.src = 'assets/images/smiling-open.png';
    })

    wordsToSay.addEventListener('end', (event)=>{
      faceImg.src = 'assets/images/smiling.png';
    })

    synth.speak(wordsToSay);
    textToSpeech.blur();
  })

}