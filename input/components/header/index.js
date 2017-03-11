import { hh, h, header } from 'react-hyperscript-helpers'
import { Sticky } from 'react-sticky'
import logo from '../logo'
import link from '../link'
import nav from '../nav'
import style from '../../helpers/style'
import R from 'ramda'
import space from '../../constants/space'
import { v4 } from 'uuid'

const className = style({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  height: '10vh',
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  minHeight: R.nth(8, space),
})

const Header = () => h(Sticky, [
  header({
    className,
  },
    [
      logo(),
      nav([
        link({
          key: v4(),
          href: '#about',
        }, ['About']),
        link({
          key: v4(),
          href: '#work',
        }, ['Work']),
        link({
          key: v4(),
          href: '#contact',
        }, ['Contact']),
      ]),
    ]),
])

export default hh(Header)
