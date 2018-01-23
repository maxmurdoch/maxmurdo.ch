import {css} from 'glamor'
import {div, img} from 'react-hyperscript-helpers'
import text from '../../components/text'
import menu from '../../containers/menu'
import grid from '../../components/grid'
import cell from '../../components/cell'
import menuBlur from '../../containers/menu-blur'
import fullPageHeader from '../../components/full-page-header'
import container from '../../components/site-container'
import containerBox from '../../components/site-container-box'
import mathsBuildersLogo from '../../assets/maths-builders-logo.svg'

const MathsBuilder = () => {
  return div([
    menu(),
    menuBlur([
      fullPageHeader([
        container({bottom: true}, [
          div(
            {
              className: css({
                display: 'flex',
                flexWrap: 'wrap',
                height: '100%',
                border: '2px solid black'
              })
            },
            [
              div(
                {
                  className: css({
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '50%',
                    height: 'calc(100% / 3)',
                    borderRight: '2px solid black'
                  })
                },
                [
                  container([
                    div(
                      {
                        className: css({
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center'
                        })
                      },
                      [
                        img({
                          src: mathsBuildersLogo
                        })
                      ]
                    )
                  ])
                ]
              ),
              div(
                {
                  className: css({
                    width: '50%',
                    height: 'calc(100% / 3)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  })
                },
                [
                  container([
                    div(
                      {
                        className: css({
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center'
                        })
                      },
                      [text({size: 4}, 'Maths builders')]
                    )
                  ])
                ]
              ),
              div(
                {
                  className: css({
                    width: '100%',
                    height: 'calc(100% / 3 * 2)',
                    borderTop: '2px solid black'
                  })
                },
                [
                  containerBox([
                    text({size: 3}, [
                      'Maths builders is a service that helps you study for a GCSE maths exam.'
                    ])
                  ])
                ]
              )
            ]
          )
        ])
      ])
    ])
  ])
}

export default MathsBuilder
