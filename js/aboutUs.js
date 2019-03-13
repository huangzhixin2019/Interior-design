
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
$('.second-main').css({'left':0,opacity:1});
//全局滚动监听
$('.logo').css({'left':0,opacity:1});
$(window).scroll(function(){
  var scroll=$(window).scrollTop();
  var second=$('.second-row').offset().top;
  var third=$('.third-row').offset().top;
  var sixth=$('.row-sixth').offset().top;
  if(scroll>third-400){
    $('.third-main').css({'left':0,opacity:1});
  }
  if(scroll>sixth-500){
    $('.row-sixth .col-xs-12').css({'left':0,opacity:1});
  }
})

