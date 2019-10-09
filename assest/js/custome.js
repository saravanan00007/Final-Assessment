$(document).ready(function(){
    $(".template-wrap a").click(function(){
      alert("Hi, This juat a template!!!");
    });
    $(".template-wrap .btn").click(function(){
      alert("Hi, This juat a template!!!");
    });
  });

  $(function () {

    $(window).bind("resize", function () {
      alert('get start!!!');
        console.log($(this).width())
        if ($(window).width() <= 425) {
            $('.form-section .title-part ').removeClass('text-left d-inline-block')
            $('.form-section .input-place').removeClass('p-0')
        }else{
          alert("Welcome Saravanan!!!");
        }
    }).trigger('resize');
})