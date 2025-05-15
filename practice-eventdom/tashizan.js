function calc() {
    let left = parseInt(document.getElementById("left").value, 10);
    let right = parseInt(document.getElementById("right").value, 10);
    let result = left + right;
    document.getElementById("answer").textContent = result;
  }
  
  let b = document.querySelector('button#calc');
  b.addEventListener("click", calc);
  