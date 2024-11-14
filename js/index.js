$(window).scroll(function(){
    let top = $(window).scrollTop();
    if(top > 0){
        $('.top').css('display','block');
    } else{
        $('.top').css('display','none');
    }
    if(top > 833){
        $('header').css('background-color','rgba(34,34,34,0.7)');
    } else {
        $('header').css('background-color','#00000000');
    }
    if(top > 310){
        $('.crt > section').css('opacity','1');
    } else {
        $('.crt > section').css('opacity','0');
    }
    if(top > 1370){
        $('.news > section').css('opacity','1');
    } else {
        $('.news > section').css('opacity','0');
    }
    if(top > 2200){
        $('.brand').css('opacity','1');
    } else {
        $('.brand').css('opacity','0');
    }
    if(top > 2436){
        $('.brand > ul').css('opacity','1');
    } else {
        $('.brand > ul').css('opacity','0');
    }
    if(top > 3205){
        $('.place > section').css('opacity','1');
    } else {
        $('.place > section').css('opacity','0');
    }
})
let lastScroll = 0;
$(window).scroll(function(){
    let cuScroll = $(this).scrollTop();
    if(lastScroll < cuScroll){
        $('header').stop().animate({top:-100},100);
    } else {
        $('header').stop().animate({top:0},100);
    }
    lastScroll = cuScroll
})
$('.top').click(function(){
    $(window).scrollTop(0);
})
// let newsSlide = $('.sliders').bxSlider({
//     mode: 'horizontal',
//     speed:1000,
//     auto:true,
//     controls:false,
//     pager:false
// });
let mainSlide = $('.slider').bxSlider({
    mode: 'horizontal',
    speed:1000,
    auto:true,
    onSlideNext:function(){
        let cp = mainSlide.getCurrentSlide();
        $('.wrap .pager > span').eq(cp).css('background-color','#fff');
        $('.wrap .pager > span').eq(cp+1).css('background-color','rgba(255, 255, 255, 0.5)');
        $('.wrap .pager > span').eq(cp-1).css('background-color','rgba(255, 255, 255, 0.5)');
    },
    onSlidePrev:function(){
        let cp = mainSlide.getCurrentSlide();
        $('.wrap .pager > span').eq(cp).css('background-color','#fff');
        $('.wrap .pager > span').eq(cp+1).css('background-color','rgba(255, 255, 255, 0.5)');
        $('.wrap .pager > span').eq(cp-1).css('background-color','rgba(255, 255, 255, 0.5)');
        $('.wrap .pager > span').eq(cp-2).css('background-color','rgba(255, 255, 255, 0.5)');
    }
},5000);
$('form > input').focusin(function(e){
    $('form').css('width','240px');
})
$('form > input').focusout(function(){
    $('form').css('width','70px');
    $(this).val('');
})
let ap = mainSlide.getSlideCount();
$('.wrap .next').click(function(){
    mainSlide.goToNextSlide();
})
$('.wrap .prev').click(function(){
    mainSlide.goToPrevSlide();
})
// let apNews = newsSlide.getSlideCount();
// $('.news .next').click(function(){
//     newsSlide.goToNextSlide();
// })
// $('.news .prev').click(function(){
//     newsSlide.goToPrevSlide();
// })
$('.main_bg > .text > a').hover(function(){
    $(this).children(0).attr('src','./images/next_black.png');
}, function(){
    $(this).children(0).attr('src','./images/next_pink.png');
})
$('.crt > a').hover(function(){
    $(this).children(0).attr('src','./images/next_black.png').css('opacity','0.4');
},function(){
    $(this).children(0).attr('src','./images/next_pink.png').css('opacity','1');
})
$('.news > a').hover(function(){
    $(this).children(0).attr('src','./images/next_black.png').css('opacity','0.4');
},function(){
    $(this).children(0).attr('src','./images/next_pink.png').css('opacity','1');
})
