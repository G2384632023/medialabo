let b = document.querySelector('button#henkou');
b.addEventListener('click',changeDom);

function changeDom() {
    let p = document.querySelector('p#takudai');
    let a = document.createElement('a');  
    a.textContent = '拓殖大学HP';                 // 要素 a のテキスト設定
    a.setAttribute('href', 'https://www.takushoku-u.ac.jp');
    p.insertAdjacentElement('afterend', a);      // p の直後に a を追加
    let u2 = document.querySelector('ul#kazoeuta');
    let l =document.createElement('li');
    l.textContent='ヨット';
    u2.insertAdjacentElement('beforeend', l);
    let i = document.querySelector('img#bluemoon');
    i.setAttribute('src', 'bluemoon.jpg');

    let u1 = document.querySelector('ul#kassen');
    u1.remove(); 

    let u = document.createElement('ul');
    l = document.createElement('li');      // 赤のli要素を作成して，
    l.textContent = '赤';                  // ul要素の中に追加
    u.insertAdjacentElement('beforeend', l);     

    l = document.createElement('li');      // 緑のli要素を作成して，
    l.textContent = '緑';                  // ul要素の中に追加
    u.insertAdjacentElement('beforeend', l);     

    l = document.createElement('li');      // 青のli要素を作成して，
    l.textContent = '青';                  // ul要素の中に追加
    u.insertAdjacentElement('beforeend', l);

    p = document.querySelector('p#primary');     // p#primary 要素の
    p.insertAdjacentElement('afterend', u);      // 直後に ul要素を追加
}