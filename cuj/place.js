var mapContainer = document.getElementById('map'), // 지도를 표시할 div  
    mapOption = { 
        center: new kakao.maps.LatLng(37.6563583788839, 127.06343442037239), // 지도의 중심좌표
        level: 2 // 지도의 확대 레벨
    };

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
 
// // 마커를 표시할 위치와 내용을 가지고 있는 객체 배열입니다 
// var positions = [
//     {
//         content: '<div class="marker">에이블짐 노원본점</div>', 
//         latlng: new kakao.maps.LatLng(37.65665787748533, 127.06357916682649)
//    },
//     {
//         content: '<div class="marker">와우짐 노원점</div>', 
//         latlng: new kakao.maps.LatLng(37.65668243542254, 127.06398433116033 )
//     },
//     {
//         content: '<div class="marker">뷰티짐</div>', 
//         latlng: new kakao.maps.LatLng(37.655650028289365, 127.06541134342837)
//     },
//     {
//         content: '<div class="marker">바디짐 헬스</div>',
//         latlng: new kakao.maps.LatLng(37.656604486092, 127.0664547864153)
//     },
//     {
//         content: '<div class="marker">크로스핏 블리리언트</div>',
//         latlng: new kakao.maps.LatLng( 37.65733502688685, 127.0651181693316)
//     },
//     {
//         content: '<div class="marker">아이언 휘트니스</div>',
//         latlng: new kakao.maps.LatLng(37.654128561430674, 127.06322287600598)
//     },
//     {
//         content: '<div class="marker">재미짐 노원점</div>',
//         latlng: new kakao.maps.LatLng(37.65321958037771, 127.06130697095786)
//     },
//     {
//         content: '<div class="marker">버클다운짐</div>',
//         latlng: new kakao.maps.LatLng(37.65814777355016, 127.0616510102199)
//     },
//     {
//         content: '<div class="marker">에블짐 노원역점</div>',
//         latlng: new kakao.maps.LatLng(37.653544395806975, 127.06041199376021)
//     },
//     {
//         content: '<div class="marker">크로스핏 라쿤짐</div>',
//         latlng: new kakao.maps.LatLng(37.65323873908073, 127.059074551355)
//     },
//     {
//         content: '<div class="marker">비나이더 상계점</div>',
//         latlng: new kakao.maps.LatLng( 37.652553199101675, 127.06063783187406)
//     }
// ];

// for (var i = 0; i < positions.length; i ++) {
//     // 마커를 생성합니다
//     var marker = new kakao.maps.Marker({
//         map: map, // 마커를 표시할 지도
//         position: positions[i].latlng // 마커의 위치
//     });

//     // 마커에 표시할 인포윈도우를 생성합니다 
//     var infowindow = new kakao.maps.InfoWindow({
//         content: positions[i].content // 인포윈도우에 표시할 내용
//     });

//     // 마커에 mouseover 이벤트와 mouseout 이벤트를 등록합니다
//     // 이벤트 리스너로는 클로저를 만들어 등록합니다 
//     // for문에서 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
//     kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow));
//     kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));
    
// }


// // 인포윈도우를 표시하는 클로저를 만드는 함수입니다 
// function makeOverListener(map, marker, infowindow) {
//     return function() {
//         infowindow.open(map, marker);
//     };
// }

// // 인포윈도우를 닫는 클로저를 만드는 함수입니다 
// function makeOutListener(infowindow) {
//     return function() {
//         infowindow.close();
//     };
// }


// 마커를 표시할 위치입니다 
var position =  new kakao.maps.LatLng(37.65665787748533, 127.06357916682649);

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
  position: position,
  clickable: true // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
});

// 마커를 지도에 표시합니다.
marker.setMap(map);

// 마커를 클릭했을 때 마커 위에 표시할 인포윈도우를 생성합니다
var iwContent = '<div class="marker"><a href="http://www.ablegym.co.kr/center/center/index.jsp?no=15" target="blank">에이블짐 노원본점</a></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

// 인포윈도우를 생성합니다
var infowindow = new kakao.maps.InfoWindow({
    content : iwContent,
    removable : iwRemoveable
});

// 마커에 클릭이벤트를 등록합니다
kakao.maps.event.addListener(marker, 'click', function() {
      // 마커 위에 인포윈도우를 표시합니다
      infowindow.open(map, marker);  
});


var position2 =  new kakao.maps.LatLng(37.65668243542254, 127.06398433116033 );
var marker2 = new kakao.maps.Marker({
  position: position2,
  clickable: true
});
marker2.setMap(map);
var iwContent2 = '<div class="marker"><a href="https://m.blog.naver.com/PostList.naver?blogId=nowonmonster" target="blank">와우짐 노원본점</a></div>',
    iwRemoveable2 = true;

var infowindow2 = new kakao.maps.InfoWindow({
    content : iwContent2,
    removable : iwRemoveable2
});

kakao.maps.event.addListener(marker2, 'click', function() {
      infowindow2.open(map, marker2);  
});

// 

var position3 =  new kakao.maps.LatLng(37.655650028289365, 127.06541134342837);
var marker3 = new kakao.maps.Marker({
  position: position3,
  clickable: true
});
marker3.setMap(map);
var iwContent3 = '<div class="marker"><a href="https://blog.naver.com/beautygym0717" target="blank">뷰티짐</a></div>',
    iwRemoveable3 = true;

var infowindow3 = new kakao.maps.InfoWindow({
    content : iwContent3,
    removable : iwRemoveable3
});

kakao.maps.event.addListener(marker3, 'click', function() {
      infowindow3.open(map, marker3);  
});
// 
var position4 =  new kakao.maps.LatLng(37.656604486092, 127.0664547864153);
var marker4 = new kakao.maps.Marker({
  position: position4,
  clickable: true
});
marker4.setMap(map);
var iwContent4 = '<div class="marker"><a href="https://blog.naver.com/lkh96708/222816116025" target="blank">바디짐</a></div>',
    iwRemoveable4 = true;

var infowindow4 = new kakao.maps.InfoWindow({
    content : iwContent4,
    removable : iwRemoveable4
});

kakao.maps.event.addListener(marker4, 'click', function() {
      infowindow4.open(map, marker4);  
});
// 
var position5 =  new kakao.maps.LatLng( 37.65787000879186, 127.07458724316695);
var marker5 = new kakao.maps.Marker({
  position: position5,
  clickable: true
});
marker5.setMap(map);
var iwContent5 = '<div class="marker"><a href="https://blog.naver.com/gozldvkdnj" target="blank">킥복싱 모아이짐</a></div>',
    iwRemoveable5 = true;

var infowindow5 = new kakao.maps.InfoWindow({
    content : iwContent5,
    removable : iwRemoveable5
});

kakao.maps.event.addListener(marker5, 'click', function() {
      infowindow5.open(map, marker5);  
});
// 
var position6 =  new kakao.maps.LatLng(37.654128561430674, 127.06322287600598);
var marker6 = new kakao.maps.Marker({
  position: position6,
  clickable: true
});
marker6.setMap(map);
var iwContent6 = '<div class="marker"><a href="https://blog.naver.com/iron-fitness" target="blank">아이언 휘트니스</a></div>',
    iwRemoveable6 = true;

var infowindow6 = new kakao.maps.InfoWindow({
    content : iwContent6,
    removable : iwRemoveable6
});

kakao.maps.event.addListener(marker6, 'click', function() {
      infowindow6.open(map, marker6);  
});
// 
var position7 =  new kakao.maps.LatLng(37.65321958037771, 127.06130697095786);
var marker7 = new kakao.maps.Marker({
  position: position7,
  clickable: true
});
marker7.setMap(map);
var iwContent7 = '<div class="marker"><a href="https://blog.naver.com/jaemigym_1" target="blank">재미짐 노원점</a></div>',
    iwRemoveable7 = true;

var infowindow7 = new kakao.maps.InfoWindow({
    content : iwContent7,
    removable : iwRemoveable7
});

kakao.maps.event.addListener(marker7, 'click', function() {
      infowindow7.open(map, marker7);  
});
var position8 =  new kakao.maps.LatLng(37.65814777355016, 127.0616510102199);
var marker8 = new kakao.maps.Marker({
  position: position8,
  clickable: true
});
marker8.setMap(map);
var iwContent8 = '<div class="marker"><a href="https://blog.naver.com/jej120506" target="blank">버클다운짐</a></div>',
    iwRemoveable8 = true;

var infowindow8 = new kakao.maps.InfoWindow({
    content : iwContent8,
    removable : iwRemoveable8
});

kakao.maps.event.addListener(marker8, 'click', function() {
      infowindow8.open(map, marker8);  
});
//
var position9 =  new kakao.maps.LatLng(37.65323873908073, 127.059074551355)
var marker9 = new kakao.maps.Marker({
  position: position9,
  clickable: true
});
marker9.setMap(map);
var iwContent9 = '<div class="marker"><a href="http://www.crossfitkr.com/" target="blank">크로스핏 라쿤짐</a></div>',
    iwRemoveable9 = true;

var infowindow9 = new kakao.maps.InfoWindow({
    content : iwContent9,
    removable : iwRemoveable9
});

kakao.maps.event.addListener(marker9, 'click', function() {
      infowindow9.open(map, marker9);  
});
//
var position10 =  new kakao.maps.LatLng( 37.652553199101675, 127.06063783187406);
var marker10 = new kakao.maps.Marker({
  position: position10,
  clickable: true
});
marker10.setMap(map);
var iwContent10 = '<div class="marker"><a href="https://www.instagram.com/nowon_beneider/" target="blank">비나이더 상계점</a></div>',
    iwRemoveable10 = true;

var infowindow10 = new kakao.maps.InfoWindow({
    content : iwContent10,
    removable : iwRemoveable10
});

kakao.maps.event.addListener(marker10, 'click', function() {
      infowindow10.open(map, marker10);  
});