import aos from 'aos'

const init = () =>
  aos.init({
    duration: 500,
    offset: 0,
    startEvent: `load`,
    anchorPlacement: `top-bottom`,
    easing: `ease-in-out-sine`
  })

export default init
