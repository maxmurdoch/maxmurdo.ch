import R from 'ramda'
import {css} from 'glamor'
import {div, img} from 'react-hyperscript-helpers'

import {medium, large} from '../../constants/media'
import bigProblem from '../../assets/big-problem.svg'
import breakItUp from '../../assets/break-it-up.svg'
import cell from '../../components/cell'
import container from '../../components/site-container'
import containerBox from '../../components/site-container-box'
import firstPage from '../../images/sign-in-one.png'
import fullPageHeader from '../../components/full-page-header'
import grid from '../../components/grid'
import imageRow from '../../components/image-row'
import largeColourLogo from '../../assets/logo-big-broken.svg'
import mediumColourLogo from '../../assets/logo-small-broken.svg'
import menu from '../../containers/menu'
import menuBlur from '../../containers/menu-blur'
import navMargin from '../../components/nav-margin'
import signInOne from '../../images/sign-in-two.png'
import signInTwo from '../../images/sign-in-three.png'
import smallColourLogo from '../../assets/logo-colour-small-blue.svg'
import solveEasyProblems from '../../assets/solve-easy-problems.svg'
import solveHardProblems from '../../assets/solve-hard-problem.svg'
import space from '../../constants/space'
import text from '../../components/text'

const MathsBuilder = () => {
  return div([
    container([
      fullPageHeader(
        {
          className: css({
            display: 'flex',
            justifyContent: 'center'
          })
        },
        [
          img({
            className: css({
              width: '50%',
              [medium]: {width: '40%'},
              [large]: {width: '30%'}
            }),
            'data-aos': 'fade-in',
            'data-aos-delay': 200,
            src: largeColourLogo
          })
        ]
      )
    ]),
    containerBox([
      grid({align: 'baseline'}, [
        cell(
          {
            medium: {column: 1, of: 3},
            large: {column: 1, of: 3},
            direction: 'column',
            className: css({height: 'auto'})
          },
          [
            grid({direction: 'column'}, [
              cell(
                {
                  className: css({marginBottom: R.nth(0, space)})
                },
                [text({size: 1}, 'Project')]
              ),
              cell([
                text(
                  {
                    size: 3,
                    className: css({marginBottom: R.nth(4, space)})
                  },
                  ['Maths Builders']
                )
              ])
            ]),
            grid({direction: 'column'}, [
              cell(
                {
                  className: css({marginBottom: R.nth(0, space)})
                },
                [text({size: 1}, 'Client')]
              ),
              cell([
                text(
                  {
                    size: 3,
                    className: css({marginBottom: R.nth(4, space)})
                  },
                  ['University of Cambridge']
                )
              ])
            ])
          ]
        ),
        cell(
          {
            medium: {column: 2, of: 3},
            large: {column: 2, of: 3},
            className: css({height: 'auto'})
          },
          [
            grid({align: 'baseline'}, [
              cell(
                {
                  className: css({marginBottom: R.nth(0, space)})
                },
                [text({size: 1}, 'Brief')]
              ),
              cell({direction: 'column'}, [
                text({size: 2}, [
                  'The team had a clear vision for how to teach GCSE maths: take a big problem, break it down into small problems, combine the answers to solve the big problem.'
                ]),
                text({size: 2, className: css({marginTop: R.nth(2, space)})}, [
                  'I was asked to realise their vision to design the product, which I did in three phases: research, design, prototype.'
                ])
              ])
            ])
          ]
        )
      ])
    ]),
    containerBox([
      grid({align: 'baseline'}, [
        cell(
          {
            medium: {column: 1, of: 3},
            large: {column: 1, of: 3},
            className: css({marginBottom: R.nth(0, space)})
          },
          [text({size: 1}, 'Principles')]
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
        )
      ])
    ]),
    container({bottom: true}, [
      grid({align: 'baseline'}, [
        cell(
          {
            medium: {column: 1, of: 2},
            large: {column: 1, of: 4},
            direction: 'column'
          },
          [
            img({
              src: bigProblem,
              className: css({
                marginBottom: R.nth(3, space),
                [large]: {marginTop: 0}
              })
            }),
            text({size: 2}, '1. Take a big problem')
          ]
        ),
        cell(
          {
            medium: {column: 1, of: 2},
            large: {column: 1, of: 4},
            direction: 'column'
          },
          [
            img({
              src: breakItUp,
              className: css({
                marginTop: R.nth(5, space),
                marginBottom: R.nth(3, space),
                [large]: {marginTop: 0}
              })
            }),
            text({size: 2}, '2. Break it up')
          ]
        ),
        cell(
          {
            medium: {column: 1, of: 2},
            large: {column: 1, of: 4},
            direction: 'column'
          },
          [
            img({
              src: solveEasyProblems,
              className: css({
                marginTop: R.nth(5, space),
                marginBottom: R.nth(3, space),
                [large]: {marginTop: 0}
              })
            }),
            text({size: 2}, '3. Solve smaller problems')
          ]
        ),
        cell(
          {
            medium: {column: 1, of: 2},
            large: {column: 1, of: 4},
            direction: 'column'
          },
          [
            img({
              src: solveHardProblems,
              className: css({
                marginTop: R.nth(5, space),
                marginBottom: R.nth(3, space),
                [large]: {marginTop: 0}
              })
            }),
            text({size: 2}, '4. Solve the big problem')
          ]
        )
      ])
    ]),
    container({top: true}, [
      grid({align: 'baseline'}, [cell([text({size: 1}, 'Brand')])])
    ]),
    containerBox([
      grid({align: 'baseline'}, [
        cell(
          {
            medium: {column: 1, of: 2},
            large: {column: 1, of: 3}
          },
          [
            img({
              src: largeColourLogo,
              className: css({
                marginBottom: R.nth(3, space)
              })
            })
          ]
        ),
        cell(
          {
            medium: {column: 1, of: 2},
            large: {column: 1, of: 3}
          },
          [
            img({
              src: mediumColourLogo,
              className: css({
                marginBottom: R.nth(3, space)
              })
            })
          ]
        ),
        cell(
          {
            medium: {column: 1, of: 2},
            large: {column: 1, of: 3}
          },
          [
            img({
              src: smallColourLogo,
              className: css({
                marginBottom: R.nth(3, space)
              })
            })
          ]
        )
      ])
    ]),
    container({top: true}, [
      grid({align: 'baseline'}, [cell([text({size: 1}, 'UI')])])
    ]),
    containerBox([
      imageRow({
        images: [firstPage, signInOne, signInTwo]
      })
    ])
  ])
}

export default MathsBuilder
