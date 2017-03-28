import {hh} from 'react-hyperscript-helpers'
import {v4} from 'uuid'

import link from '../../components/link'
import {css} from 'glamor'
import text from '../../components/text'

const linkClass = css({
  display: 'flex',
  alignItems: 'center'
})

const Nav =
  () => link({
    key: v4(),
    className: linkClass,
    href: '#menu'
  }, [
    text({
      size: 2
    }, 'Menu')
  ])

export default hh(Nav)
