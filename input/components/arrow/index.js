import {svg, path} from 'react-hyperscript-helpers'
import {css} from 'glamor'

const Arrow = ({
  width = 16,
  height = 16,
  stroke = 'currentcolor',
  strokeWidth = 1,
  className
}) => {
  const style = css({}, className)

  return svg(
    {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 8 8',
      width,
      height,
      fill: 'none',
      stroke,
      strokeWidth,
      className: style
    },
    [
      path({
        d: 'M3.5, 0.5 L7.5, 0.5'
      }),
      path({
        d: 'M7.5, 4.5 L7.5, 0.5'
      }),
      path({
        d: 'M0.5,7.5 L7.775, 0.225'
      })
    ]
  )
}

export default Arrow
