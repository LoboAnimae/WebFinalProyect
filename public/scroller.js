var tl = new TimelineMax({ onUpdate: updatePercentage })
var tl2 = new TimelineMax()
const controller = new ScrollMagic.Controller()

tl.from('#whoAmIText', 0.5, { x: 200, opacity: 0 })
tl.from('#whoAmIText2', 0.5, { x: -200, opacity: 0 })
tl.from('#imageComputerScreen', 0.3, {
  x: -200,
  opacity: 0,
})
tl.from('#imageWho', 0.7, {
  x: -200,
  opacity: 0,
  scaleX: 0.25,
  scaleY: 0.25,
})

tl2.from('#beenToPlaces', 0.01, {
  x: -100,
  y: -100,
  opacity: 0,
})

tl2.from('#antigua img', 0.01, {
  x: 100,
  y: 100,
  opacity: 0,
  scaleX: 0.25,
  scaleY: 0.25,
})

const scene = new ScrollMagic.Scene({
  triggerElement: '#whoAmI',
  triggerHook: 'onLeave',
  duration: '100%',
})
  .setPin('#whoAmI')
  .setTween(tl)
  .addTo(controller)

const scene2 = new ScrollMagic.Scene({
  triggerElement: '#whoAmI2',
  triggerHook: 'onLeave',
  duration: '25%',
})
  .setTween(tl2)
  .addTo(controller)

function updatePercentage() {
  //percent.innerHTML = (tl.progress() *100 ).toFixed();
  tl.progress()
}
