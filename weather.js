// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {
  if (data.id === 360630) {
      console.log("Location: Cairo");
  } else if (data.id === 524901) {
      console.log("Location: Moscow");
  } else if (data.id === 993800) {
      console.log("Location: Johannesburg");
  } else if (data.id === 1816670) {
      console.log("Location: Beijing");
  } else if (data.id === 1850147) {
      console.log("Location: Tokyo");
  } else if (data.id === 1880252) {
      console.log("Location: Singapore");
  } else if (data.id === 2147714) {
      console.log("Location: Sydney");
  } else if (data.id === 2643743) {
      console.log("Location: London");
  } else if (data.id === 2968815) {
      console.log("Location: Paris");
  } else if (data.id === 3451189) {
      console.log("Location: Rio de Janeiro");
  } else if (data.id === 5128581) {
      console.log("Location: New York");
  } else if (data.id === 5368361) {
      console.log("Location: Los Angeles");
  } else {
      console.log("Location: Unknown");
  }
  
  console.log("Longitude: " + data.coord.lon);
  console.log("Latitude: " + data.coord.lat);
  console.log("Weather: " + data.weather[0].description);
  console.log("Min Temperature: " + data.main.temp_min + "°C");
  console.log("Max Temperature: " + data.main.temp_max + "°C");
  console.log("Humidity: " + data.main.humidity + "%");
  console.log("Wind Speed: " + data.wind.speed + " m/s");
  console.log("Wind Direction: " + data.wind.deg + "°");
}


// 課題5-1 の関数 printDom() はここに記述すること
function printDom(data) {

}

// 課題5-1 のイベントハンドラの定義
function show() {

}

// 課題5-1, 6-1 のイベントハンドラ登録処理は以下に記述




// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {

}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {

}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}

////////////////////////////////////////
// 以下はグルメのデータサンプル
// 注意: 第5回までは以下を変更しないこと！
// 注意2: 課題6-1 で以下をすべて削除すること
let data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};

