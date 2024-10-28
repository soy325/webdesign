// menu
$('li.main-menu').mouseenter(function () {
    $(this).find('ul.sub-menu').stop().slideDown()
})
$('li.main-menu').mouseleave(function () {
    $(this).find('ul.sub-menu').stop().slideUp()
})

// slide
setInterval(function () {
    $('.slide-wrap').stop().animate({ 'top': '-100%' }, function () {
        $('.slide:first').appendTo('.slide-wrap')
        $('.slide-wrap').css({ 'top': '0' })
    })
}, 3000)

// tab
$('.tab-menu li').click(function () {
    $('.tab-menu li').removeClass('on')
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