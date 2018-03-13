import {hh} from 'react-hyperscript-helpers'

import siteContainer from '../site-container'

const SiteContainerBox = ({className, children}) =>
  siteContainer({className, top: true, bottom: true}, [children])

export default hh(SiteContainerBox)
