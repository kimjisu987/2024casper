// main.js

// 화면 스크롤시 헤더가 올라가면 헤더 고정하기
$(document).ready(function(){

  $('header').mouseenter(function(){
    $('header').addClass('h_act');
    $('header h1 img').attr('src','./images/logo-casper_black.png');
  });
  
  $('header').mouseleave(function(){
    let sPos = $(window).scrollTop();
    if(sPos >= 1){

    } else {
      $('header').removeClass('h_act');
      $('header h1 img').attr('src','./images/logo-casper-white.png');
    }
  });
  
  $(window).scroll(function(){
    let sPos = $(this).scrollTop();
      if(sPos >= 1){
      $('header').addClass('h_act');
      $('header h1 img').attr('src','./images/logo-casper_black.png');
    } else {
      $('header').removeClass('h_act');
      $('header h1 img').attr('src','./images/logo-casper-white.png');
    }
  });

  $(window).trigger('scroll');  // 페이지 스크롤 다운된 상태에서 새로고침 시 헤더 보이지 않는 현상 -> 스크롤 강제 발생시킨다.
  
});


// TOP3 스와이퍼
$(document).ready(function(){
let swiper = new Swiper('.top3', {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,    // 무한반복
  navigation: {
    nextEl: ".top3 .swiper-button-next",
    prevEl: ".top3 .swiper-button-prev",
  },
  pagination: {
    el: ".top3 .swiper-pagination",
    clickable: true,    // 컨트롤 버튼 클릭 가능하도록
  }
});

// 이벤트 스와이퍼
let swiper2 = new Swiper('.event', {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,    // 무한반복
  navigation: {
    nextEl: ".event .swiper-button-next",
    prevEl: ".event .swiper-button-prev",
  },
  pagination: {
    el: ".event .swiper-pagination",
    clickable: true,    // 컨트롤 버튼 클릭 가능하도록
  }
});
});

// 랜덤 광고배너
let r_num = Math.floor(Math.random()*8)+1;
document.write(r_num);    // 1~8 랜덤숫자 부여받음
document.getElementById('r_banner_img').src='./images/random_banner'+r_num+'.jpg';

// 모달
$(document).ready(function(){
  let modal = `
  <div class="modal">
    <div class="modal_inner">
      <a href="#" title="이벤트 바로가기">
        <img src="./images/main_Popup_PC_450x600.jpg" alt="팝업이미지">
      </a>
      <div class="modal_bottom">
        <input type="checkbox" id="modal_today"><label for="modal_today">일주일간 창 보지 않기</label>
        <input type="button" value="닫기" class="c_btn">
      </div>
    </div>
  </div>
  `;

  $('body').append(modal);

  if($.cookie('popup')=='none'){
    $('.modal').hide();
  }

  function close_popup(){
    if($('#modal_today').is(':checked')){
      $.cookie('popup','none',{expires:7, path:'/'})
      $('.modal').hide();
    } else{
      $('.modal').hide();
    }
  }

  $('.c_btn').click(function(){
    close_popup();
  })
});

// 사이드 내비게이션_방법1
$(document).ready(function(){
  $('#m_navi a').click(function(){
    let id_name = $(this).attr('class');
    $('html, body').animate({scrollTop : $('#' + id_name).offset().top - 70},500);
  });
});

// 사이드 내비게이션_방법2
/* $(document).ready(function(){
  let nav = $('#m_navi > ul > li');
  nav.click(function(){
    let i = $(this).index();
    let offTop = $('main section').offset().top;
    if(i==0){
      $('html, body').animate({scrollTop : $('#intro').offset().top}, 500);
    } else if(i==1){
      $('html, body').animate({scrollTop : $('#drive_con').offset().top}, 500);
    } else if(i==2){
      $('html, body').animate({scrollTop : $('#event_con').offset().top}, 500);
    } else if(i==4){
      $('html, body').animate({scrollTop : $('#buy_con').offset().top}, 500);
    } else{
      $('html, body').animate({scrollTop : $('#cs_con').offset().top}, 500);
    }
  })
}); */

// 소개에 영상 한 번만 재생시
/* $(document).ready(function(){
  if(sPos>=1650){
    $('.intro_title_left').addClass('act1');
    $('.intro_title_right').addClass('act2');
  }
}); */