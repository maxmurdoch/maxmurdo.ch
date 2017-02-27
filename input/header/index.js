import { hh, header } from 'react-hyperscript-helpers'
import logo from '../logo'
import link from '../link'
import nav from '../nav'
import cxs from 'cxs'
import { v4 } from 'uuid'

const className = cxs({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
})

const Header = () => header({className}, [
  logo(),
  nav([
    link({key: v4(), href: '#about'}, ['About']),
    link({key: v4(), href: '#work'}, ['Work']),
    link({key: v4(), href: '#contact'}, ['Contact']),
  ]),
])

export default hh(Header)
