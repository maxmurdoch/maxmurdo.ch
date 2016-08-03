import { DOM } from 'react'
import styles from './image.css'
import R from 'ramda'
import classNames from 'classnames'

const Image = ({
  position,
  description = '',
  ...props,
}) => {
  return DOM.img(
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

export default Image
