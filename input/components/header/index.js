import {hh, header} from 'react-hyperscript-helpers'
import {css} from 'glamor'

import container from '../site-container'
import logo from '../logo'
import nav from '../nav'
import grid from '../grid'
import cell from '../cell'

const className = css({
  backgroundColor: 'white',
  display: 'flex',
  flexWrap: 'wrap',
  height: '15vmin',
  justifyContent: 'space-between',
  left: 0,
  position: 'fixed',
  right: 0,
  top: 0,
  zIndex: 1
})

const Header = () => header({className}, [
  container([
    grid({
      wrap: false,
      justify: 'between',
      align: 'stretch'
    }, [
      cell({
        small: {
          auto: true
        },
        medium: {
          column: 1,
          of: 2
        },
        large: {
          column: 1,
          of: 2
        }
      }, [logo()]),
      cell({
        small: {
          auto: true
        },
        medium: {
          column: 1,
          of: 2
        },
        large: {
          column: 1,
          of: 2
        },
        align: 'center',
        grow: 1,
        justify: 'end'
      }, [nav()])
    ])
  ]
  )]
)

export default hh(Header)
