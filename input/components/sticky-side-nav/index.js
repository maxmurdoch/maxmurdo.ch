import {h, hh} from 'react-hyperscript-helpers'
import {Sticky} from 'react-sticky'

import sideNav from '../side-nav'

const StickySideNav = () => {
  return h(Sticky, [
    ({style, isSticky}) => {
      console.log(`side nav style`, style)
      console.log(`side nav isSticky`, isSticky)
      return sideNav({style, isSticky})
    }
  ])
}

export default hh(StickySideNav)
