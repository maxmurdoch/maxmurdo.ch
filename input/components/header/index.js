import { hh, h, header } from 'react-hyperscript-helpers'
import { Sticky } from 'react-sticky'
import logo from '../logo'
import nav from '../nav'
import style from '../../helpers/style'
import grid from '../grid'
import cell from '../cell'
import R from 'ramda'
import space from '../../constants/space'

const className = style({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  height: '10vh',
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  minHeight: R.last(space),
})

const Header = () => h(Sticky, [
  header({ className }, [
    grid([
      cell({
        column: 1,
        of: 6,
      }, [logo()]),
      cell({
        medium: {
          column: 3,
          of: 6,
        },
        large: {
          column: 3,
          of: 6,
        },
      }, [nav()]),
    ]),
  ]
)])

export default hh(Header)
