export default function() {
  $('.menu-btn').on('click', () => {
    $('.menu-btn').toggleClass('menu-btn--active');
    $('.mob-menu').toggleClass('mob-menu--active');
    $('body').toggleClass('lock');
    $('main').toggleClass('lock');
    $("body").css( "padding-right", window.innerWidth - document.body.clientWidth)
  })
}