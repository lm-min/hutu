$(document).ready(function () {
  // tab-menu
  $('.tab-menu > li').on('click', function () {
    $('.tab-menu > li').removeClass('on');
    $('.tab-content > li').removeClass('on');

    $(this).addClass('on');
    $('.tab-content > li').eq($(this).index()).addClass('on');
  });

  // modal
  $('.btn-modal').on('click', function () {
    console.log('click');
    $('.modal').addClass('active');
  });
  $('.modal .btn-close').on('click', function () {
    console.log('click-of');
    $('.modal').removeClass('active');
  });

  /* artist */
  // 작가 더보기 : explain-hide
  $('.artistCont .btn-more, .myArtCont .btn-more, .orderCompleted .btn-more').on('click', function () {
    if ($('.artistIntro').hasClass('active')) {
      $('.artistIntro').removeClass('active');
      $(this).text('작가 더 알아보기');
    } else {
      $('.artistIntro').addClass('active');
      $(this).text('닫기');
    }

    // $('.artistIntro').addClass('active');
  });

  // 찜(하트) 아이콘 click event - color 테스트
  $('.wish i').on('click', function () {
    if ($(this).hasClass('xi-heart-o')) {
      $(this).attr('class', 'xi-heart');
    } else {
      $(this).attr('class', 'xi-heart-o');
    }
  });
  // slider
  $('.art-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  });
  $('.ordered-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    // autoplay: true,
    // autoplaySpeed: 3000,
  });
});
