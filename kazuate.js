// 答え
let kotae = Math.floor(Math.random() * 10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;


let b = document.querySelector('button#guessButton');
b.addEventListener('click', hantei);

// 判定処理
function hantei() {
  // 入力値を取得して数値に変換
  let input = document.getElementById("userInput").value;
  let yoso = Number(input);

  // 回数を更新
  kaisu += 1;

  // コンソールに出力（HTMLには表示しない）
  console.log(kaisu + '回目の予想: ' + yoso);

  if (kaisu >= 4) {
    console.log('答えは ' + kotae + ' でした。すでにゲームは終わっています。');
    } else if (yoso === kotae) {
    console.log('正解です。おめでとう!');
    kaisu = 4; // ゲーム終了
    } else if (kaisu === 3) {
    console.log('まちがい。残念でした答えは ' + kotae + ' です。');
    } else if (yoso < kotae) {
    console.log('まちがい。答えはもっと大きいですよ。');
    } else {
    console.log('まちがい。答えはもっと小さいですよ。');
    }
}
