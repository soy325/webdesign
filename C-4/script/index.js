// menu
$('li.main-menu').mouseenter(function () {
    $(this).find('ul.sub-menu').stop().fadeIn()
})
$('li.main-menu').mouseleave(function () {
    $(this).find('ul.sub-menu').stop().fadeOut()
})

// slide
setInterval(function () {
    $('.slide-wrap').stop().animate({ 'left': '-100%' }, function () {
        $('.slide:first').appendTo('.slide-wrap')
        $('.slide-wrap').css({ 'left': '0' })
    })
}, 3000)
