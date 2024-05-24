// main.js

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

// 랜덤 광고배너
let r_num = Math.floor(Math.random()*8)+1;
document.write(r_num);    // 1~8 랜덤숫자 부여받음
document.getElementById('r_banner_img').src='./images/random_banner'+r_num+'.jpg';
console.log(r_num);