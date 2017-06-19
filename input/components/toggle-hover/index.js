import {compose, withState, withHandlers} from 'recompose'

const toggleHover = compose(
  withState(`isHovered`, `toggleHover`, false),
  withHandlers({
    onMouseEnter: ({toggleHover}) => () => toggleHover(true),
    onMouseLeave: ({toggleHover}) => () => toggleHover(false)
  })
)

export default toggleHover
