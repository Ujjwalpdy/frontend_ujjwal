// Assignment 7 script - pattern generator

const sizeInput = document.getElementById('sizeInput');
const triangleBtn = document.getElementById('triangleBtn');
const pyramidBtn = document.getElementById('pyramidBtn');
const diamondBtn = document.getElementById('diamondBtn');
const clearBtn = document.getElementById('clearBtn');
const output = document.getElementById('output');

function renderLines(lines){
  // Clear and append with coloring for even/odd rows
  output.innerHTML = '';
  lines.forEach((ln, idx) => {
    const span = document.createElement('div');
    span.className = (idx % 2 === 0) ? 'row-even' : 'row-odd';
    span.textContent = ln;
    output.appendChild(span);
  });
}

function rightTriangle(n){
  const lines = [];
  for(let i=1;i<=n;i++){
    // numbers 1..i separated by space
    lines.push(Array.from({length:i}, (_,k)=>k+1).join(' '));
  }
  return lines;
}

function pyramid(n){
  const lines = [];
  for(let i=1;i<=n;i++){
    const spaces = ' '.repeat(n - i);
    const nums = Array.from({length:i}, (_,k)=>k+1).join(' ');
    lines.push(spaces + nums);
  }
  return lines;
}

function diamond(n){
  const lines = [];
  // upper including middle
  for(let i=1;i<=n;i++){
    const spaces = ' '.repeat(n - i);
    const nums = Array.from({length:i}, (_,k)=>k+1).join(' ');
    lines.push(spaces + nums);
  }
  // lower part
  for(let i=n-1;i>=1;i--){
    const spaces = ' '.repeat(n - i);
    const nums = Array.from({length:i}, (_,k)=>k+1).join(' ');
    lines.push(spaces + nums);
  }
  return lines;
}

triangleBtn.addEventListener('click', ()=>{
  const n = Math.max(1, Math.floor(+sizeInput.value)||1);
  renderLines(rightTriangle(n));
});

pyramidBtn.addEventListener('click', ()=>{
  const n = Math.max(1, Math.floor(+sizeInput.value)||1);
  renderLines(pyramid(n));
});

diamondBtn.addEventListener('click', ()=>{
  const n = Math.max(1, Math.floor(+sizeInput.value)||1);
  renderLines(diamond(n));
});

clearBtn.addEventListener('click', ()=> output.innerHTML = '');