import {hh} from 'react-hyperscript-helpers'

import siteContainer from '../site-container'

const SiteContainerBox = ({children}) =>
  siteContainer({top: true, bottom: true}, [children])

export default hh(SiteContainerBox)
