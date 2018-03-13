import {hh} from 'react-hyperscript-helpers'
import {css} from 'glamor'
import containerBox from '../../components/site-container-box'

const PageHeightContainer = ({backgroundColor, children}) => {
  return containerBox(
    {
      className: css({
        backgroundColor
      })
    },
    [children]
  )
}

export default hh(PageHeightContainer)
