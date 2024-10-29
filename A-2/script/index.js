// header-menu
$('li.main-menu').mouseenter(function () {
    $('.sub-menu').stop().slideDown(400)
    $('header').addClass('on')
})
$('li.main-menu').mouseleave(function () {
    $('.sub-menu').stop().slideUp(400)
    $('header').removeClass('on')
})

// slide
setInterval(function () {
    $('.slide-wrap').stop().animate({ 'left': '-100%' }, function () {
        $('.slide:first').appendTo('.slide-wrap')
        $('.slide-wrap').css({ 'left': '0' })
    })
}, 3000)

// pop-up

$('li.modal').click(function () {
    $('.popup').fadeIn()
    $('body').addClass('on')
})
$('a.close').click(function () {
    $('.popup').fadeOut()
    $('body').removeClass('on')
})