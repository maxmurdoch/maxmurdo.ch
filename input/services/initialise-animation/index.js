import aos from 'aos'

const init = () =>
  aos.init({
    duration: 400,
    offset: 0,
    startEvent: `load`,
    anchorPlacement: `top-bottom`,
    easing: `ease-in-out-sine`
  })

export default init
