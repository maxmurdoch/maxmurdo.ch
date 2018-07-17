import styled from 'react-emotion'
import {
  alignItems,
  alignSelf,
  alignContent,
  justifyContent,
  flexWrap,
  flexBasis,
  width,
  flexDirection,
  flex,
  height,
  background,
  borderTop,
  borderRight,
  borderLeft,
  borderBottom,
  style,
  space,
  position
} from 'styled-system'

const overflow = style({
  prop: 'overflow'
})

const Flex = styled('div')`
  display: flex;
  ${overflow}
  ${alignSelf}
  ${borderLeft}
  ${borderRight}
  ${borderTop}
  ${borderBottom}
  ${width}
  ${space}
  ${alignItems}
  ${alignContent}
  ${justifyContent}
  ${flexWrap}
  ${flexBasis}
  ${flexDirection}
  ${flex}
  ${height}
  ${background}
  ${position}
`

export default Flex
