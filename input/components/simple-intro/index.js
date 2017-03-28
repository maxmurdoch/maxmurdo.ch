import {hh, div, br} from 'react-hyperscript-helpers'
import {css} from 'glamor'

import text from '../text'
import grid from '../grid'
import cell from '../cell'

const SimpleIntro =
  () => div({
    className: css({
      height: '80vh',
      marginTop: '10vh',
      marginBottom: '10vh',
      maxWidth: '100%',
      boxSizing: 'border-box'
    })
  }, [
    grid({
      align: 'center'
    }, [
      cell([
        text({size: 4}, [
          `Hi`,
          br(),
          `I’m Max`,
          br(),
          `I design and build digital\u00A0products`
        ])
      ])
    ])
  ])

export default hh(SimpleIntro)
