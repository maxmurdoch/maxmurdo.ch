import { img, hh } from 'react-hyperscript-helpers'
import R from 'ramda'
import classnames from 'classnames'
import { space } from '../constants/space'
import cxs from 'cxs'

const base = cxs({
  width: '80vmax',
  maxWidth: '100%',
  marginBottom: R.nth(2, space),
})

const right = cxs({
  float: 'right',
  maxWidth: '35vmax',
  marginLeft: R.nth(2, space),
})

const Image = ({
  position,
  description = '',
  ...props
}) => {
  return img(
    {
      className: classnames(
        base,
        {
          [right]: R.equals(position, 'right'),
        }
      ),
      alt: description,
      ...props,
    }
  )
}

export default hh(Image)
