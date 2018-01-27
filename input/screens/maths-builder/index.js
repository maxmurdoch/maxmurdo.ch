import {css} from 'glamor'
import {div, img} from 'react-hyperscript-helpers'
import text from '../../components/text'
import menu from '../../containers/menu'
import grid from '../../components/grid'
import cell from '../../components/cell'
import menuBlur from '../../containers/menu-blur'
import lightGreyLine from '../../components/light-grey-line'
import headerPadding from '../../components/header-padding'
import container from '../../components/site-container'
import containerBox from '../../components/site-container-box'
import mathsBuildersResearchBrand from '../../assets/maths-builders-research-brand.jpg'
import mathsBuildersResearchUi from '../../assets/maths-builders-research-ui.jpg'
import hardProblem from '../../assets/hard-problem.svg'
import breakItUp from '../../assets/break-it-up.svg'
import solveEasyProblems from '../../assets/solve-easy-problems.svg'
import solveHardProblems from '../../assets/solve-hard-problem.svg'

const MathsBuilder = () => {
  return div([
    menu(),
    menuBlur([
      headerPadding([
        container({top: true}, [
          grid({align: 'baseline'}, [
            cell(
              {
                medium: {column: 1, of: 3},
                large: {column: 1, of: 3},
                className: css({height: 'auto'})
              },
              [text({size: 2}, 'Project')]
            ),
            cell(
              {
                medium: {column: 2, of: 3},
                large: {column: 2, of: 3},
                className: css({height: 'auto'})
              },
              [text({size: 3}, ['Maths Builders'])]
            )
          ])
        ]),
        container({top: true}, [
          grid({align: 'baseline'}, [
            cell(
              {
                medium: {column: 1, of: 3},
                large: {column: 1, of: 3},
                className: css({height: 'auto'})
              },
              [text({size: 2}, 'Client')]
            ),
            cell(
              {
                medium: {column: 2, of: 3},
                large: {column: 2, of: 3},
                className: css({height: 'auto'})
              },
              [text({size: 3}, ['University of Cambridge'])]
            )
          ])
        ]),
        containerBox([
          grid({align: 'baseline'}, [
            cell(
              {
                medium: {column: 1, of: 3},
                large: {column: 1, of: 3}
              },
              [text({size: 2}, 'Brief')]
            ),
            cell(
              {
                medium: {column: 2, of: 3},
                large: {column: 2, of: 3}
              },
              [
                text({size: 2}, [
                  `The team at Cambridge University had a clear vision for how to teach GCSE maths: take a big problem, break it down into small problems, combine the answers to solve the big problem. Break, build, break, build. 

                  I was asked to realise their vision to design the product, which I did in three phases: research, design, prototype.`
                ])
              ]
            )
          ])
        ]),
        container([grid([cell([lightGreyLine()])])]),
        containerBox([
          grid({align: 'baseline'}, [
            cell(
              {
                medium: {column: 1, of: 3},
                large: {column: 1, of: 3}
              },
              [text({size: 2}, 'Research')]
            ),
            cell(
              {
                medium: {column: 2, of: 3},
                large: {column: 2, of: 3}
              },
              [
                text({size: 2}, [
                  'I spent the first two weeks testing different ways to model the product with the hope of getting them in front of teachers and students as quickly as possible.'
                ])
              ]
            ),
            cell(
              {
                medium: {column: 1, of: 2},
                large: {column: 1, of: 2}
              },
              [
                container({top: true, left: false, right: false}, [
                  img({
                    className: css({width: '100%'}),
                    src: mathsBuildersResearchUi
                  })
                ])
              ]
            ),
            cell(
              {
                medium: {column: 1, of: 2},
                large: {column: 1, of: 2}
              },
              [
                container({top: true, left: false, right: false}, [
                  img({
                    className: css({width: '100%'}),
                    src: mathsBuildersResearchBrand
                  })
                ])
              ]
            )
          ])
        ]),
        container([grid([cell([lightGreyLine()])])]),
        containerBox([
          grid({align: 'baseline'}, [cell([text({size: 2}, 'Design')])])
        ]),
        containerBox([
          grid({align: 'baseline'}, [
            cell(
              {
                medium: {column: 1, of: 4},
                large: {column: 1, of: 4},
                direction: 'column'
              },
              [img({src: hardProblem}), text({size: 1}, '1. Hard problem')]
            ),
            cell(
              {
                medium: {column: 1, of: 4},
                large: {column: 1, of: 4}
              },
              [img({src: breakItUp})]
            ),
            cell(
              {
                medium: {column: 1, of: 4},
                large: {column: 1, of: 4}
              },
              [img({src: solveEasyProblems})]
            ),
            cell(
              {
                medium: {column: 1, of: 4},
                large: {column: 1, of: 4}
              },
              [img({src: solveHardProblems})]
            )
          ])
        ])
      ])
    ])
  ])
}

export default MathsBuilder
