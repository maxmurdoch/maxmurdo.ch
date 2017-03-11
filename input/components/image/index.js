import { img, hh } from 'react-hyperscript-helpers'
import classnames from 'classnames'
import style from '../../helpers/style'

const base = style({
  maxWidth: '100%',
})

const Image = ({className, ...props}) => {
  return img(
    {
      className: classnames(base, className),
      ...props,
    }
  )
}

export default hh(Image)
