const head = document.querySelector('.head');
// console.log(head);

let headNr = 0;
let tailNr = 0;

const flipFn = function() {
  const face = document.querySelector('#face');
  // console.log(face);

  // Generate 1 or 0
  // If Math.random() generates a number less than 0.5 the 
  // result will be 0 otherwise it should be 1.
  result = Math.round(Math.random());
  console.log(result);

  if(result == 0) {
    this.classList.remove('tail');
    this.classList.add('head');
    this.classList.toggle('flip');
    resultFace = 'Head';
    headNr++ ;
  } else {
    this.classList.remove('head');
    this.classList.add('tail');
    this.classList.toggle('flip');
    resultFace = 'Tail';
    tailNr++ ;
  }
  // face.textContent = result == 0 ? headNr + ' time(s) ' + resultFace : tailNr + ' times ' + resultFace;
  // Same as above with Template Literal
  // face.textContent = result == 0 ? `${headNr} time(s) ${resultFace}` : `${tailNr} times ${resultFace}`;
  // Same as above but shorter
  // face.textContent = `${result ? tailNr : headNr} time(s) ${resultFace}`;

  // Same as above but after one second delay
  setTimeout(function(){
    face.textContent = `${result ? tailNr : headNr} time(s) ${resultFace}`;
  },1000);
}

head.addEventListener('click', flipFn);
