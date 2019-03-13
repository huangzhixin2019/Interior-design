
$('.menu').click(function(){
  var $ul=$('ul.nav-main');
  var $over=$('.over');
  if($(this).hasClass('active')){
    $(this).removeClass('active');
    $ul.removeClass('active');
    $over.removeClass('active');
  }else{
    $(this).addClass('active');
    $ul.addClass('active');
    $over.addClass('active');
  }
});
//全局点击事件监听
$(window).click(function(e){
  var $over=$('.over');
  if(!($(e.target).hasClass('menu'))&&$(e.target).parents('.menu').length==0&&$over.hasClass('active')){
    $('.menu').click();
  }
});

//全局滚动监听
$('.logo').css({'left':0,opacity:1});
$('.second-row').css({'left':0,opacity:1});
$(window).scroll(function(){
  var scroll=$(window).scrollTop();
  var fifth=$('.row-fifth').offset().top;
  var sixth=$('.row-sixth').offset().top;
  if(scroll>fifth-800){
    $('.row-fifth .col-xs-12').css({'left':0,opacity:1});
  }
  if(scroll>sixth-600){
    $('.row-sixth .col-xs-12').css({'left':0,opacity:1});
  }
})

