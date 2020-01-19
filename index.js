let xhr = new XMLHttpRequest();
const date = new Date();

if('serviceWorker' in navigator) {
  navigator.serviceWorker
           .register('sw.js')
           .then(function() { console.log("Service Worker Registered"); });
}


function getCoupon(url) {
    let response;
    const 메인 = document.querySelector("#top");
    let url2 = url.replace('/', '');
    while (메인.hasChildNodes()) {
        메인.removeChild(메인.firstChild);
    }
    xhr.onreadystatechange = function () {
        if (xhr.readyState === xhr.DONE) {
            if (xhr.readyState === xhr.DONE) {
                if (xhr.status === 200 || xhr.status === 201) {
                    response = xhr.responseText;
                    let 쿠폰 = eval(JSON.parse(response).쿠폰);
                    console.log(쿠폰);
                    for (var i = 0; i < 쿠폰.length; i++) {
                        const 이미지 = document.createElement("img");
                        이미지.setAttribute("src", 쿠폰[i].사진);
                        이미지.setAttribute("alt", 쿠폰[i].내용);
                        이미지.setAttribute("class", "box 쿠폰");
                        메인.appendChild(이미지);
                    }
                    console.log(xhr.responseText);
                }
            } else {
                console.error(xhr.responseText);
            }
        }
    };
    xhr.open('GET', 'https://costcocoupon.herokuapp.com/?data=' + url2);
    xhr.send();
}


if (isHolidayCheck(date)) {
    const 휴무공지 = document.querySelector("#휴무");
    휴무공지.innerHTML = '오늘은</br><span class="강조">휴무</span>입니다.'
}

xhr.onreadystatechange = function () {

    let response;
    if (xhr.readyState === xhr.DONE) {
        if (xhr.status === 200 || xhr.status === 201) {
            console.log(xhr.responseText);
            response = xhr.responseText;
            let 쿠폰목록 = eval(JSON.parse(response).쿠폰목록);
            const 메인 = document.querySelector("#top");
            for (var i = 0; i < 쿠폰목록.length; i++) {
                const 이미지 = document.createElement("img");
                const a = document.createElement("a");
                이미지.setAttribute("src", 쿠폰목록[i].사진);
                이미지.setAttribute("alt", 쿠폰목록[i].내용);
                이미지.setAttribute("class", "box 쿠폰");
                a.href = `javascript:getCoupon('${쿠폰목록[i].주소}')`;
                a.appendChild(이미지);
                메인.appendChild(a);
            }
        } else {
            console.error(xhr.responseText);
        }
    }
};
xhr.open('GET', 'https://costcocoupon.herokuapp.com/?list=1');
xhr.send();
