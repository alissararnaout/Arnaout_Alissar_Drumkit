
(() => {
  console.log('drumkit js file loaded');

  function removeHighLight(e) {

    if (e.propertyName !=="transform") {
      return;
    } else {
      e.target.classList.remove('playing');
}


function logKey(e) {
  //debugger;
  //console.log(e);
const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
const key = document.querySelector(`div[data-key="${e.keyCode}"]`);

key.classList.add('playing');



if (!audio) { return; }

audio.currentTime = 0;
audio.play();

}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionandremoveHighLight'));


  window.addEventListener('keydown',logKey);
})();
