const head = document.querySelector('.head');
// console.log(head);

const flipFn = function() {
  // Generate 1 or 0
  // If Math.random() generates a number less than 0.5 the 
  // result will be 0 otherwise it should be 1.
  result = Math.round(Math.random());
  console.log(result);

  if(result == 0) {
    this.classList.remove('tail');
    this.classList.add('head');
    this.classList.toggle('flip');
  } else {
    this.classList.remove('head');
    this.classList.add('tail');
    this.classList.toggle('flip');
  }
}

head.addEventListener('click', flipFn);
