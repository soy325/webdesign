// menu
$('li.main-menu').mouseenter(function(){
    $('ul.sub-menu').stop().fadeIn()
    $('header').addClass('on')
})
$('li.main-menu').mouseleave(function(){
    $('ul.sub-menu').stop().fadeOut()
    $('header').removeClass('on')
})

// slide
$('.slide').eq(0).siblings().hide()
let idx=0
setInterval(function(){
    idx++
    if(idx===3){
        idx=0
    }
    $('.slide').fadeOut()
    $('.slide').eq(idx).fadeIn()
},3000)

// tab
$('.tab-list li').click(function(){
    $('.tab-list li').removeClass('on')
    $(this).addClass('on')

    let idx = $(this).index()
    $('.tab').hide()
    $('.tab').eq(idx).show()
})

// popup
$('li.modal').click(function () {
    $('.popup').fadeIn()
})
$('a.close').click(function () {
    $('.popup').fadeOut()
})