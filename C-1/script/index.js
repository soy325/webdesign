// menu
$('li.main-menu').mouseenter(function () {
    $(this).find('ul.sub-menu').stop().slideDown()
})
$('li.main-menu').mouseleave(function () {
    $(this).find('ul.sub-menu').stop().slideUp()
})

// tab
$('.tab-menu li').click(function () {
    $('.tab-menu li').removeClass('on')
    $(this).addClass('on')

    let idx = $(this).index()
    $('.tab').hide()
    $('.tab').eq(idx).show()
})

// slide
$('.slide').eq(0).siblings().hide()
let idx = 0
setInterval(function () {
    idx++
    if (idx === 3) {
        idx = 0
    }
    $('.slide').fadeOut()
    $('.slide').eq(idx).fadeIn()
}, 3000)

// popup
$('li.modal').click(function () {
    $('.popup').fadeIn()
})
$('a.close').click(function () {
    $('.popup').fadeOut()
})