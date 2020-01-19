let response;
const 메인 = document.querySelector("#top");
let url2 = location.search.split("=")[1];

xhr.onreadystatechange = function () {
    if (xhr.readyState === xhr.DONE) {
        if (xhr.readyState === xhr.DONE) {
            if (xhr.status === 200 || xhr.status === 201) {
                response = xhr.responseText;
                let 쿠폰 = eval(JSON.parse(response).쿠폰);
                console.log(쿠폰);
                for (var i = 0; i < 쿠폰; i++) {
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