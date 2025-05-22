let b = document.querySelector('button#calc');
b.addEventListener('click',greeting);

function greeting() {
  let left = Number(document.querySelector('input#left').value);
  let right = Number(document.querySelector('input#right').value);
  let answer = left + right;

  document.querySelector('span#answer').textContent = answer;
}
  