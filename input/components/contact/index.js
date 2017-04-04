import {css} from 'glamor'
import {hh, div} from 'react-hyperscript-helpers'

import text from '../../components/text'

const Contact = () => (
  div({
    className: css({
      height: '100vh'
    })
  }, [
    text({size: 4}, 'Hello I am Max')
  ])
)

export default hh(Contact)
