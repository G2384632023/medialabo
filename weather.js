// 課題3-2 のプログラムはこの関数の中に記述するこ
function print(data) {
  console.log("都市名:", data.name);
  console.log("天気:", data.weather[0].description);
  console.log("最低気温:", data.main.temp_min + "℃");
  console.log("最高気温:", data.main.temp_max + "℃");
  console.log("湿度:", data.main.humidity + "%");
  console.log("風速:", data.wind.speed + "m/s");
  console.log("風向:", data.wind.deg + "°");
  console.log("緯度:", data.coord.lat);
  console.log("経度:", data.coord.lon);
}

let bnt = document.querySelector("button#searchBtn");
bnt.addEventListener("click", sendRequest);

//   function printDom(data) {
//     // すでに result が存在する場合は削除
//     const oldResult = document.querySelector('#result');
//     if (oldResult) {
//       oldResult.remove();
//     }
  
// document.addEventListener('DOMContentLoaded', function () {
//   const btn = document.querySelector('#searchBtn');
//   btn.addEventListener('click', sendRequest);
//   });
  
//     // div#result を作成して body に追加
//     const resultDiv = document.createElement('div');
//     resultDiv.id = 'result';
//     document.body.appendChild(resultDiv);
  
//     // ul 要素を作成
//     const u = document.createElement('ul');
  
//     // 各項目を li 要素として追加（配列を使わずに1つずつ）
//     let l;
  
//     l = document.createElement('li');
//     l.textContent = '都市名: ' + data.name;
//     u.insertAdjacentElement('beforeend', l);
  
//     l = document.createElement('li');
//     l.textContent = '天気: ' + data.weather[0].description;
//     u.insertAdjacentElement('beforeend', l);
  
//     l = document.createElement('li');
//     l.textContent = '最低気温: ' + data.main.temp_min + '℃';
//     u.insertAdjacentElement('beforeend', l);
  
//     l = document.createElement('li');
//     l.textContent = '最高気温: ' + data.main.temp_max + '℃';
//     u.insertAdjacentElement('beforeend', l);
  
//     l = document.createElement('li');
//     l.textContent = '湿度: ' + data.main.humidity + '%';
//     u.insertAdjacentElement('beforeend', l);
  
//     l = document.createElement('li');
//     l.textContent = '風速: ' + data.wind.speed + 'm/s';
//     u.insertAdjacentElement('beforeend', l);
  
//     l = document.createElement('li');
//     l.textContent = '風向: ' + data.wind.deg + '°';
//     u.insertAdjacentElement('beforeend', l);
  
//     l = document.createElement('li');
//     l.textContent = '緯度: ' + data.coord.lat;
//     u.insertAdjacentElement('beforeend', l);
  
//     l = document.createElement('li');
//     l.textContent = '経度: ' + data.coord.lon;
//     u.insertAdjacentElement('beforeend', l);
//   }
  


// 課題5-1 のイベントハンドラの定義


function printDom(data) {
  let r1 = document.getElementById('result');
  r1.remove();

  let r = document.createElement('div');
  r.id = 'result';
  document.body.insertAdjacentElement('beforeend', r);

  let p1 = document.createElement('p');
  p1.textContent = '都市名: ' + data.name;
  r.insertAdjacentElement('beforeend', p1);

  let p2 = document.createElement('p');
  p2.textContent = '天気: ' + data.weather[0].description;
  r.insertAdjacentElement('beforeend', p2);

  let p3 = document.createElement('p');
  p3.textContent = '最低気温: ' + data.main.temp_min + '℃';
  r.insertAdjacentElement('beforeend', p3);

  let p4 = document.createElement('p');
  p4.textContent = '最高気温: ' + data.main.temp_max + '℃';
  r.insertAdjacentElement('beforeend', p4);

  let p5 = document.createElement('p');
  p5.textContent = '湿度: ' + data.main.humidity + '%';
  r.insertAdjacentElement('beforeend', p5);

  let p6 = document.createElement('p');
  p6.textContent = '風速: ' + data.wind.speed + 'm/s';
  r.insertAdjacentElement('beforeend', p6);

  let p7 = document.createElement('p');
  p7.textContent = '風向: ' + data.wind.deg + '°';
  r.insertAdjacentElement('beforeend', p7);

  let p8 = document.createElement('p');
  p8.textContent = '緯度: ' + data.coord.lat;
  r.insertAdjacentElement('beforeend', p8);

  let p9 = document.createElement('p');
  p9.textContent = '経度: ' + data.coord.lon;
  r.insertAdjacentElement('beforeend', p9);
}
// 課題6-1 のイベントハンドラ sendRequest() の定義
function start(){
  let tosi = document.getElementById("kotae");
  let id = trance(tosi.value);
  console.log(id);

  if(id != 0) sendRequest(id);
}

function trance(S){
  let ID = 0;
  switch(S){
    case "カイロ":
    case "Cairo":
    case "エジプト":
      ID = 360630
      break;
    case "モスクワ":
    case "Moscow":
    case "ロシア":
      ID = 524901;
      break;
    case "ヨハネスブルク":
    case "Johannesburg":
    case "南アフリカ":
      ID = 993800;
      break;
    case "北京":
    case "Beijing":
    case "中華人民共和国":
      ID = 1816670;
      break;
    case "東京":
    case "Tokyo":
    case "日本":
      ID = 1850147;
      break;
    case "Singapore":
    case "シンガポール":
      ID = 1880252;
      break;
    case "Sydney":
    case "オーストラリア":
    case "シドニー":
      ID = 2147714;
      break;
    case "ロンドン":
    case "London":
    case "イギリス":
      ID = 2643743;
      break;
    case "パリ":
    case "Paris":
    case "フランス":
      ID = 2968815;
      break;
    case "リオデジャネイロ":
    case "Rio de Janeiro":
    case "ブラジル":
      ID = 3451189;
      break;
    case "ニューヨーク":
    case "New York":
      ID = 5128581;
      break;
    case "ロサンゼルス":
    case "Los Angeles":
      ID = 5368361;
      break;
  }
  return ID;
}

function sendRequest() {
  let tosi = document.getElementById("kotae");
  let id = trance(tosi.value);
  console.log(id);

  if(id === 0){
    alert("検索ワードを正しく入力してください");
    return;
  }
  

  const url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/'+ id + '.json';

  axios.get(url)
    .then(showResult)   // 通信成功時の処理
    .catch(showError)   // 通信失敗時の処理
    .then(finish);      // 通信完了時の処理
}

// 課題6-1: 通信が成功した時の処理
function showResult(resp) {
  let data = resp.data;

  // コンソール出力（デバッグ用）
  console.log(data);

  // 表示処理（print, printDom が定義されている前提）
  //print(data);
  printDom(data);
}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
  console.log(err);
  alert('通信に失敗しました。都市名を確認してください。');
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
  console.log('Ajax 通信が終わりました');
}

