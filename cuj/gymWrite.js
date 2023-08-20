//버튼을 눌렀을 때 내용이 비어져 있을면 경고창으로 알림
var title = document.getElementById("title");
var photo = document.getElementById("photo");
var address = document.getElementById("address");
var price = document.getElementById("price");
var content = document.getElementById("content");
var notice = document.getElementById("notice");
var time = document.getElementById("time");
var place = document.getElementById("place");
var button = document.getElementById("btn");
var check = document.querySelectorAll("input[type='checkbox']");
// 글을 담을 변수 선언, alert창이 나오고 작성했던 글들이 사라지지 않게 하기 위함
var saveTitle = "";
var savePhoto = "";
var saveAddress = "";
var savePrice = "";
var saveContent = "";
var saveNotice = "";
var saveTime = "";
var savePlace = "";

title.addEventListener('input', function() {
    saveTitle = title.value;
});
photo.addEventListener('input', function() {
    savePhoto = photo.value;
})
address.addEventListener('input', function() {
    saveAddress = address.value;
})
price.addEventListener('input', function() {
    savePrice = price.value;
})
content.addEventListener('input', function() {
    saveContent = content.value;
});
notice.addEventListener('input', function() {
    saveNotice = notice.value;
})
time.addEventListener('input', function() {
    saveTime = time.value;
})
place.addEventListener('input', function() {
    savePlace = place.value;
});




//버튼을 눌렀을 때 내용이 비어져 있을면 경고창으로 알림
button.addEventListener('click',function(){

    var checkedCount = 0;//체크박스가 선택한 수를 담을 변수
    for (var i = 0; i < check.length; i++) {
        if (check[i].checked) {//체크박스에 선택을 했을 경우
            checkedCount++;//수를 증가
        }
    }

    if(saveTitle === ""){
        alert('시설명을 입력해주세요');
    }else if(savePhoto === ""){
        alert('시설 사진을 업로드해주세요')
    }else if(saveAddress === ""){
        alert('주소를 입력해주세요')
    }else if(savePrice === ""){
        alert('가격을 입력해주세요')
    }else if (checkedCount === 0) {
        alert("최소한 한 개 이상의 체크박스를 선택하세요.");
    }else if(saveContent === ""){
        alert('내용을 입력해주세요')
    }else if(saveNotice === ""){
        alert('공지사항을 입력해주세요')
    }else if(saveTime === ""){
        alert('운영시간을 입력해주세요')
    }else if(savePlace === ""){
        alert('위치 사진을 업로드해주세요')
    }else{
        //버튼을 submit 타입으로 변환
        button.type = "submit";
        // 폼을 제출
        button.closest('form').submit();
    }
});


