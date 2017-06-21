import cursorActive from '../../assets/cursor-active.svg'

const linkStyle = {
  cursor: `url(${cursorActive}), auto`,
  transition: `cursor 400ms`,
  ':hover': {
    cursor: `url(${cursorActive}), auto`
  }
}

export default linkStyle
