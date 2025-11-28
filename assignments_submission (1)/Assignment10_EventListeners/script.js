// Assignment 10 script
const changeColorBtn = document.getElementById('changeColorBtn');
const zoomImg = document.getElementById('zoomImg');
const keyInput = document.getElementById('keyInput');
const keyOutputSpan = document.querySelector('#keyOutput .key');

function randomColor(){ return '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6,'0'); }

changeColorBtn.addEventListener('click', () => {
  document.body.style.backgroundColor = randomColor();
});

// Double-click to toggle zoom
let zoomed = false;
zoomImg.addEventListener('dblclick', () => {
  zoomed = !zoomed;
  zoomImg.style.transform = zoomed ? 'scale(1.5)' : 'scale(1)';
});

// Keyboard logger: listen on input and fallback to document
keyInput.addEventListener('keydown', (e) => {
  keyOutputSpan.textContent = e.key === ' ' ? 'Space' : e.key;
});
// Also update on keyup so user sees release too (optional)
document.addEventListener('keyup', (e) => {
  // only update if input not focused to show global keys
  if(document.activeElement !== keyInput){
    keyOutputSpan.textContent = e.key === ' ' ? 'Space' : e.key;
  }
});