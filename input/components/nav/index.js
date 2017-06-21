import {hh} from 'react-hyperscript-helpers'

import link from '../../components/link'
import {css} from 'glamor'
import menuIcon from '../menu-icon'

const linkClass = css({
  display: `flex`,
  alignItems: `center`
})

const Nav = () =>
  link(
    {
      className: linkClass,
      href: `#menu`,
      'data-aos': `fade-up`
    },
    [menuIcon()]
  )

export default hh(Nav)
