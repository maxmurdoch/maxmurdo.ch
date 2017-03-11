import { hh, div } from 'react-hyperscript-helpers'
import style from '../../helpers/style'

const SiteContainer = ({children}) => {
  const className = style({
    paddingLeft: '5%',
    paddingRight: '5%',
    width: '100%',
    height: 'auto',
    maxWidth: '100vw',
    boxSizing: 'border-box',
  })

  return div({
    className,
  }, [children])
}

export default hh(SiteContainer)
