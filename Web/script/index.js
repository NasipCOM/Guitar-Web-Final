$(document).ready(function(){

    $(window).scroll(function(){
        if($(this).scrollTop() > 500){
            $('#but').fadeIn();
        }
        else{
            $('#but').fadeOut();
        }
    });

    $("#but").click(function(){
        $('html, body').animate({scrollTop: 0}, 1200);
    });
});