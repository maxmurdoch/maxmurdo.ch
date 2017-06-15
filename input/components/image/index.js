import {img, hh} from "react-hyperscript-helpers"
import {css} from "glamor"

const Image = ({className, ...props}) => {
  const style = css({maxWidth: `100%`}, className)
  return img({
    className: style,
    ...props
  })
}

export default hh(Image)
