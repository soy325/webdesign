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