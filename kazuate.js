let kotae = Math.floor(Math.random() * 10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

let kaisu = 0;

let b = document.querySelector('button#kotae');
b.addEventListener('click', hantei);

function hantei() {
let yos = document.querySelector('input[name="kotae"]');
    let yoso = Number(yos.value);
  kaisu += 1;

  // コンソールに出力（HTMLには表示しない）
 
  let ans = document.querySelector("span#answer");
  let res = document.querySelector("span#result");
  ans.textContent = kaisu + '回目の予想：'+yoso;
  if (kaisu >= 5) {
      res.textContent ='答えは'+kotae+'でした.すでにゲームは終わっています';
  } else if(yoso === kotae) {
      res.textContent ='正解です.おめでとう！';
      kaisu = 4;
  } else if(kaisu === 4) {
      res.textContent ='まちがい．残念でした答えは '+kotae+' です．';
  } else if(kotae > yoso) {
      res.textContent ='まちがい．答えはもっと大きいですよ';
  } else if(kotae < yoso) {
      res.textContent ='まちがい．答えはもっと小さいですよ';
  }
}