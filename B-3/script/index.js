$('li.main-menu').mouseenter(function(){
    $(this).stop().find('ul.sub-menu').slideDown()
})
$('li.main-menu').mouseleave(function(){
    $(this).stop().find('ul.sub-menu').slideUp()
})

// slide
setInterval(function () {
    $('.slide-wrap').stop().animate({ 'top': '-100%' }, function () {
        $('.slide:first').appendTo('.slide-wrap')
        $('.slide-wrap').css({ 'top': '0' })
    })
	}, 3000)

    // pop-up
    $('.modal').click(function(){
        $('.popup').fadeIn()
    })
    $('a.close').click(function(){
        $('.popup').fadeOut()
    })