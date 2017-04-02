import {hh} from 'react-hyperscript-helpers'
import {css} from 'glamor'

import text from '../text'
import link from '../link'

const className = css({
  display: 'flex',
  alignSelf: 'stretch',
  alignItems: 'center',
  lineHeight: 1,
  margin: 0
})

const Logo = () => link({
  href: '/'
}, [text({
  tag: 'h1',
  size: 1,
  className
}, 'Max Murdoch')])

export default hh(Logo)
