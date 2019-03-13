
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
//轮播
+(function(){
  var width=$(window).innerWidth();
  var $farther=$('.myCarousel-main');
  $farther.children().css('width',width/2);
  //轮播切换器
  var $myCarouselControl=$('.myCarousel-control');
  if(width>767){
    var span=`<span class="active"></span><span></span>`
  }else{
    span=`<span class="active"></span><span></span><span></span><span></span>`;
    $farther.children().css('width',width);
  }
  if(width<500){
    $('.container-fluid .row-second div').attr('class','col-sm-3 col-xs-12 p')
  }else{
    $('.container-fluid .row-second div').attr('class','col-sm-3 col-xs-6 p')
  }
  $myCarouselControl.html(span);
  var controllerWidth=parseFloat($myCarouselControl.css('width'));
  $myCarouselControl.css('margin-left',-controllerWidth/2);

  $(window).resize(function(){
    width=$(window).innerWidth();
    $farther.css('left',-width);
    $farther.css('transition','none');
    $farther=$('.myCarousel-main');
    if(width>767){
      $farther.children().css('width',width/2);
      span=`<span class="active"></span><span></span>`
    }else{
      $farther.children().css('width',width);
      span=`<span class="active"></span><span></span><span></span><span></span>`;
    }
    if(width<500){
      $('.container-fluid .row-second div').attr('class','col-sm-3 col-xs-12 p')
    }else{
      $('.container-fluid .row-second div').attr('class','col-sm-3 col-xs-6 p')
    }
    $myCarouselControl.html(span);
    spans=$myCarouselControl.children('span');
    var controllerWidth=parseFloat($myCarouselControl.css('width'));
    $myCarouselControl.css('margin-left',-controllerWidth/2);
  });
  var carousel=setInterval(cut,6000);

  //切换图片模式
  function cut(){
    var left=$farther.css('left');
    var controllerWidth=parseFloat($myCarouselControl.css('width'));
    $myCarouselControl.css('margin-left',-controllerWidth/2);
    ifLeft(left,$farther,width,$myCarouselControl);
  }


  //点击轮播切换器
  var spans=$myCarouselControl.children('span');
  $myCarouselControl.on('click','span',function(){
    if(!($(this).hasClass('active'))){
      var index=spans.index(this);
      var left=-width*(index-1)+'px';
      clearInterval(carousel);
      carousel=setInterval(cut,6000);
      ifLeft(left,$farther,width,$myCarouselControl);
    }
  })

  //判断left值
  function ifLeft(left,$farther,width,$myCarouselControl){
    $farther.css('transition','all 500ms ease-out');
    if(left=='0px'){
      $farther.css('left',-width);
      if(width>767){
        $myCarouselControl.children().last().addClass('active').siblings('.active').removeClass('active');
      }else{
        $myCarouselControl.children().eq(1).addClass('active').siblings('.active').removeClass('active');
      }
    }else if(left==`-${width}px`){
      if(width>767){
        $farther.css('left',0);
        $myCarouselControl.children().first().addClass('active').siblings('.active').removeClass('active');
      }else{
        $farther.css('left',-2*width);
        $myCarouselControl.children().eq(2).addClass('active').siblings('.active').removeClass('active');
      }
    }else if(left==`-${2*width}px`){
      $farther.css('left',-3*width);
      $myCarouselControl.children().eq(3).addClass('active').siblings('.active').removeClass('active');
    }
    else{
      $farther.css('left',0);
      $myCarouselControl.children().eq(0).addClass('active').siblings('.active').removeClass('active');
    }
  }
})();


//小头像淡入淡出
+(function(){
  var $lis=$('.fourth-main li');
  var $spans=$('.pic-control span');
  var i=0;
  var timer=setInterval(toggle,2000);
  $spans.click(function(){
    var index=$spans.index(this);
    i=index-1;
    clearInterval(timer);
    toggle();
    timer=setInterval(toggle,2000);
  })
  function toggle(){
      i++;
      $($lis[i]).addClass('active').siblings('.active').removeClass('active');
      $($spans[i]).addClass('active').siblings('.active').removeClass('active');
      if(i==2){
        i=-1;
      }
  }
})();

//全局滚动监听
$('.logo').css({'left':0,opacity:1});
var width=$(window).innerWidth();
$('.fourth-main').css('left',-width);
$(window).scroll(function(){
  var scroll=$(window).scrollTop();
  var third=$('.pthird').offset().top;
  var fourth=$('.fourth-main').offset().top;
  var sixth=$('.row-sixth').offset().top;
  if(scroll>third+200){
    $('.fourth-main').css({'left':0,opacity:1});
  }
  if(scroll>third-500){
    $('.pthird').css({'left':0,opacity:1});
  }
  if(scroll>fourth){
    $('.row-fifth button').css({'left':0,opacity:1});
  }
  if(scroll>sixth-500){
    $('.row-sixth .col-xs-12').css({'left':0,opacity:1});
  }
})

