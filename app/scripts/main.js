$(document).ready(function () {
   let windowHeight = $(window).height();
   let heightHeader = $('.header').height();
   $('.wrapper').css('height',windowHeight - (heightHeader+5));
   $(window).resize(function () {
       let windowHeight = $(window).height();
       let heightHeader = $('.header').height();
       $('.wrapper').css('height',windowHeight - (heightHeader+5));
   })
});