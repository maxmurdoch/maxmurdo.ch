import {h, hh} from "react-hyperscript-helpers"
import {Sticky} from "react-sticky"

import sideNav from "../side-nav"

const SideNav = () => {
  return h(
    Sticky,
    {
      style: {
        position: `absolute`,
        top: 0,
        left: 0,
        right: `inherit`
      },
      stickyStyle: {
        position: `fixed`,
        top: 0,
        left: 0,
        right: `inherit`
      }
    },
    [sideNav()]
  )
}

export default hh(SideNav)
