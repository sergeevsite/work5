$(document).ready(function(){
  $('#menuMobile').on('click', buttonMenu);

  function buttonMenu() {
    $('.sidebar').toggle().toggleClass('col-md-6');
    $('.header-menu__icon').toggleClass('header-menu__icon_active');
    $('.header-menu').toggleClass('header-menu_active');
  }

});