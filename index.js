const bars = () =>{
  // timeline na poj bars
  // onComplete pozwala na zapętlenie i nowe losowanie
  const tl_bars = gsap.timeline({onComplete: bars});
  //losowanie scale
  const scale = ()=>{
    return 0.1 + Math.random()*3;
  }
  //losowanie coloru
  const color = ()=>{
    const colors = ['green','red','blue']
    return colors[Math.floor(Math.random() * 3)]
  }

  const barsEl = document.querySelectorAll('#voice-bars rect');

    tl_bars.set(barsEl,{y: -30, visibility: 'visible', transformOrigin: '50% 50%'})
    tl_bars.to(barsEl, .7, {scaleY: scale, fill: color, ease: Bounce.easeIn, stagger:{
      each: 0.1,
      repeat: 1,
      yoyo: true
    }})
  return tl_bars
}


const move = (legs) =>{
  const tl_move = gsap.timeline()
    tl_move.to(legs,{y: -60, ease: Power0.ease, stagger:{
      each: .5,
      repeat: -1,
      yoyo: true
    }})

  return tl_move
}

const blink = () =>{
  const eyes = document.querySelectorAll('#eye-right, #eye-left');
  
  const tl_blink = gsap.timeline({repeat: -1, yoyo: true, delay: 2,repeatDelay: 4})
    tl_blink.set(eyes, {transformOrigin: '50% 50%'})
    tl_blink.to(eyes, .1,{scaleY: 0, fill: "#231f20"})
    tl_blink.to(eyes, .1,{scaleY: 1, fill: "#48b3e6"})


  return tl_blink
}

// Master Timeline
const master = gsap.timeline();
  master.add('start')
  master.add(bars(),'start')
  master.add(move(document.querySelectorAll('#leg-right,#leg-left')),'start')
  master.add(blink(),'start')