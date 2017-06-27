import cursorActive from '../../assets/cursor-active.svg'

const linkStyle = {
  cursor: `url(${cursorActive}), auto`,
  transition: `300ms all cubic-bezier(0.785, 0.135, 0.15, 0.86)`,
  ':hover': {
    cursor: `url(${cursorActive}), auto`
  }
}

export default linkStyle
