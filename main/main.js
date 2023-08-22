let $slideBox = $('.slide-box');
let $slideImgs = $('.slide-img');

let slideWidth = 1400; 
let currentIdx = 0;
let slideCnt = $slideImgs.length;
console.log('slideCnt : ' + slideCnt);

checkEnd();

$('.next').on('click', function () {
  console.log('aaa');
  currentIdx++;
  console.log('currentIdx : ' + currentIdx);
  $slideBox.css('left', -(currentIdx * slideWidth));
  $slideBox.css('transition', '0.5s ease');
  checkEnd();
});

$('.prev').on('click', function () {
  console.log('bbb');
  currentIdx--;
  console.log('currentIdx : ' + currentIdx);
  $slideBox.css('left', -(currentIdx * slideWidth));
  $slideBox.css('transition', '0.5s ease');
  checkEnd();
});

function checkEnd() {
  if (currentIdx <= 0) {
    $('.prev').css('display', 'none');
  } else {
    $('.prev').css('display', 'block');
  }

  if (currentIdx >= slideCnt - 1) {
    $('.next').css('display', 'none');
  } else {
    $('.next').css('display', 'block');
  }
}

    document.querySelector('#img1').addEventListener('click', e=>{
        window.location = 'https://blog.naver.com/dkfnal2232/223089463104?&isInf=true';
    });
    document.querySelector('#img2').addEventListener('click', e=>{
        window.location = 'https://blog.naver.com/so_younique/223136833307?&isInf=true';
    });
    document.querySelector('#img3').addEventListener('click', e=>{
        window.location = 'http://www.samsunghospital.com/dept/blogBoard/blogView.do?brd_seq=27332&DP_CODE=SCC';
    });


