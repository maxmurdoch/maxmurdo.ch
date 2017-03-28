import {hh, footer, address, br, ul, li} from 'react-hyperscript-helpers'
import R from 'ramda'
import {css} from 'glamor'

import space from '../../constants/space'
import link from '../link'
import text from '../text'
import grid from '../grid'
import cell from '../cell'

const Footer = () => {
  return footer({
    className: css({
      paddingTop: R.nth(4, space),
      marginTop: R.nth(4, space),
      paddingBottom: R.nth(4, space),
      marginBottom: R.nth(4, space)
    })
  }, [
    grid([
      cell({
        medium: {
          column: 1,
          of: 3
        },
        large: {
          column: 1,
          of: 3
        }
      }, [
        ul({
          className: css({
            listStyle: 'none',
            padding: 0,
            margin: 0
          })
        }, [
          li([
            link({

            }, [
              text({
                size: 2,
                className: css({
                  margin: 0
                })
              }, ['max@maxmurdo.ch'])
            ])
          ]),
          li([
            text({
              size: 2,
              className: css({
                margin: 0
              })
            }, ['Medium'])
          ]),
          li([
            text({
              size: 2,
              className: css({
                margin: 0
              })
            }, ['tumblr'])
          ])
        ])
      ]),
      cell({
        medium: {
          column: 1,
          of: 3
        },
        large: {
          column: 1,
          of: 3
        }
      }, [
        ul({
          className: css({
            listStyle: 'none',
            padding: 0,
            margin: 0
          })
        }, [
          li([
            link({

            }, [
              text({
                size: 2,
                className: css({
                  margin: 0
                })
              }, ['Twitter'])
            ])
          ]),
          li([
            text({
              size: 2,
              className: css({
                margin: 0
              })
            }, ['Medium'])
          ]),
          li([
            text({
              size: 2,
              className: css({
                margin: 0
              })
            }, ['tumblr'])
          ])
        ])
      ]),
      cell({
        medium: {
          column: 1,
          of: 3
        },
        large: {
          column: 1,
          of: 3
        }
      }, [
        address({
          className: css({
            fontStyle: 'normal'
          })
        }, [
          text({
            size: 2,
            className: css({
              margin: 0
            })
          }, [
            'Murdoch Studio',
            br(),
            '6A St Andrews Court',
            br(),
            'Thame',
            br(),
            'Oxford',
            br(),
            'OX9 3WT'
          ])
        ])
      ])
    ])
  ])
}

export default hh(Footer)
