import { img, hh } from 'react-hyperscript-helpers'
import styles from './image.css'
import R from 'ramda'
import classNames from 'classnames'

const Image = ({
  position,
  description = '',
  ...props,
}) => {
  return img(
    {
      className: classNames(
        styles.image,
        R.prop(position, styles)
      ),
      alt: description,
      ...props,
    }
  )
}

export default hh(Image)
