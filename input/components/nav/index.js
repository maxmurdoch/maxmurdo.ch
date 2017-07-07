import {hh} from 'react-hyperscript-helpers'

import link from '../../components/link'
import {css} from 'glamor'
import menuIcon from '../../containers/menu-icon'

const linkClass = css({
  display: 'flex',
  alignItems: 'center'
})

const Nav = () =>
  link(
    {
      className: linkClass,
      to: '#menu'
    },
    [menuIcon()]
  )

export default hh(Nav)
