export default function () {
  $('.example-slider__slider, .preview-silder__slider').slick({
    infinite: true,
    arrows: true,
    dots: true,
    centerMode: true,
    autoplay: 3000,
    prevArrow: '<img class="slider-arr slider-arr-left" src="images/slider-arr-left.svg" alt="">',
    nextArrow: '<img class="slider-arr slider-arr-right" src="images/slider-arr-right.svg" alt=""></img>',

    responsive: [
      {
        breakpoint: 780,
        settings: {
          arrows: false,
          centerMode: false,
        }
      },
    ]
  });
}