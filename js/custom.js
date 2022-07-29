$(function() {

  //메인 상단 페이지 fade out

    var slide = new Swiper(".mainSwiper", {
        loop : true,
        effect:'fade',
        pagination: {
          el: ".main_slide .swiper-pagination",
          clickable: true,
        },
      });

      //스크롤시 상단 header 변화

      $(window).scroll(function(){

        curr = $(this).scrollTop();
    
        if(curr > 0){
         $('header .logo_wrap').addClass('white') 
        }else{
          $('header .logo_wrap').removeClass('white') 
        }
       
    
      })

      $(window).scroll(function(){
        var header_wrap = $('.header_wrap'),
            scroll = $(window).scrollTop();
      
        if (scroll >= 100) 
        {header_wrap.addClass('fixed')}
        else {header_wrap.removeClass('fixed')}
      });


      //open 클릭시 변화
      
      $('header .gnb_wrap .more_button').click(function(e){
        e.preventDefault();
      $('header .header_wrap.fixed .gnb_wrap .menulist, header .header_wrap.fixed .gnb_wrap .all').toggleClass('hide');
      $('header .gnb_wrap .submenumore').toggleClass('on').css({height: auto},300);
      $('header .gnb_wrap .more_button').toggleClass('rotate');
      
      });


    //히든 메뉴 메뉴 열림/닫힘
    
    $('.logo_wrap .hd_left .menu_bar').click(function(e){
      e.preventDefault();
      $('.aside , .aside_bg').addClass('on');
      $('body').addClass('hidden')
    });

    $('.aside_top .btn_close, .aside_bg').click(function(e){
      e.preventDefault();
      $('.aside, .aside_bg').removeClass('on');
      $('body').removeClass('hidden')
  
    });


    //히든 메뉴 서브메뉴 열림 닫힘

    $('.aside .hidden_menu').click(function(e){
      e.preventDefault();
  
      h = $(this).siblings('.sub').children('ul').outerHeight();
  
      if($(this).siblings('.sub').outerHeight() > 0){
        $('.aside .sub').stop().animate({height: 0}, 300)
        $(this).removeClass('on')
      }else {
        $('.aside .sub').stop().animate({height: 0}, 300)
        $(this).siblings('.sub').stop().animate({height: h}, 300)
        $(this).addClass('on')
      }
    });


    //메인 하단 상품 슬라이드
    var bottom_slide = new Swiper(".main_list_Swiper", {
      slidesPerView: 2.2,
      spaceBetween: 10,
      freeMode: true,
    });

    //탑 버튼

    $(window).scroll(function(){

      curr = $(this).scrollTop();
  
      if(curr > 100){
       $('.top_btn').addClass('on') 
      }else{
        $('.top_btn').removeClass('on') 
      }
  
    })

    $('.gototop').click(function(e){
      e.preventDefault();
      $('html,body').animate({scrollTop:0},300)
  
    })



  

})