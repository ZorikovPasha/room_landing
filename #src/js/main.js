import sliders from "./modules/sliders"
import toggleMobMenu from "./modules/toggle-mob-menu"
import validate from "./modules/validate"

$(function(){
  sliders()
  toggleMobMenu()
  validate()

  new WOW().init();
});