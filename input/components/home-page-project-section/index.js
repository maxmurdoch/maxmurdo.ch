import R from 'ramda'
import {hh} from 'react-hyperscript-helpers'
import containerBox from '../site-container-box'
import {css} from 'glamor'
import space from '../../constants/space'

const HomePageProjectSection = ({children}) => {
  return containerBox(
    {
      className: css({
        paddingTop: R.nth(3, space),
        marginTop: R.nth(3, space),
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center'
      })
    },
    [children]
  )
}

export default hh(HomePageProjectSection)
