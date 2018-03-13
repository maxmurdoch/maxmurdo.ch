import {hh} from 'react-hyperscript-helpers'
import R from 'ramda'
import {css} from 'glamor'
import {div, img} from 'react-hyperscript-helpers'

import graphikSample from '../../assets/graphik-big-light.svg'
import graphikRegularSample from '../../assets/graphik-medium-reg.svg'
import colourPalette from '../../components/colour-palette'
import graphikSmallUpperSample from '../../assets/graphik-small-upper.svg'
import headerPadding from '../../components/header-padding'
import {large} from '../../constants/media'
import link from '../../components/link'
import caseStudySection from '../../components/case-study-section'
import bigProblem from '../../assets/big-problem.svg'
import breakItUp from '../../assets/break-it-up.svg'
import cell from '../../components/cell'
import container from '../../components/site-container'
import containerBox from '../../components/site-container-box'
import firstPage from '../../images/sign-in-one.png'
import orderFirst from '../../images/order-one.png'
import orderSecond from '../../images/order-two.png'
import orderThird from '../../images/order-three.png'
import grid from '../../components/grid'
import imageRow from '../../components/image-row'
import largeColourLogo from '../../assets/logo-big-broken.svg'
import mediumColourLogo from '../../assets/logo-small-broken.svg'
import questionList from '../../images/maths-builder-question-list.png'
import questionListFilter from '../../images/maths-builder-question-list-2.png'
import passwordHidden from '../../images/password-hidden.png'
import signInOne from '../../images/sign-in-two.png'
import signInTwo from '../../images/sign-in-three.png'
import smallColourLogo from '../../assets/logo-colour-small-blue.svg'
import solveEasyProblems from '../../assets/solve-easy-problems.svg'
import solveHardProblems from '../../assets/solve-hard-problem.svg'
import space from '../../constants/space'
import {lightGrey} from '../../constants/colour'
import text from '../../components/text'

const colors = [
  '#040F23',
  '#95A0A3',
  '#EEF0F0',
  '#5886F4',
  '#40E68B',
  '#FF6767'
]

const typography = hh(() =>
  container({top: true}, [
    grid([
      cell(
        {
          className: css({marginBottom: R.nth(5, space)})
        },
        [text({size: 1}, 'Typography')]
      )
    ]),
    grid({align: 'end'}, [
      cell(
        {
          medium: {column: 1, of: 3},
          large: {column: 1, of: 3},
          justify: 'center',
          direction: 'column',
          bottomGutter: true
        },
        [
          img({className: css({width: '100%'}), src: graphikSample}),
          link(
            {
              target: 'external',
              to: 'https://commercialtype.com/catalog/graphik',
              className: css({
                width: '100%',
                marginTop: R.nth(3, space)
              })
            },
            [text({size: 0}, 'Graphik, Light, 40/48')]
          )
        ]
      ),
      cell(
        {
          medium: {column: 1, of: 3},
          large: {column: 1, of: 3},
          align: 'center',
          direction: 'column',
          bottomGutter: true
        },
        [
          img({className: css({width: '50%'}), src: graphikRegularSample}),
          link(
            {
              target: 'external',
              to: 'https://commercialtype.com/catalog/graphik',
              className: css({
                marginTop: R.nth(3, space)
              })
            },
            [text({size: 0}, 'Graphik, Regular, 18/24')]
          )
        ]
      ),
      cell(
        {
          medium: {column: 1, of: 3},
          large: {column: 1, of: 3},
          direction: 'column',
          bottomGutter: true
        },
        [
          img({
            className: css({width: '25%'}),
            src: graphikSmallUpperSample
          }),
          link(
            {
              target: 'external',
              to: 'https://commercialtype.com/catalog/graphik',
              className: css({
                width: '100%',
                marginTop: R.nth(3, space)
              })
            },
            [text({size: 0}, 'Graphik, Regular, Uppercase, 12/18')]
          )
        ]
      )
    ])
  ])
)

const MathsBuildersPrinciples = hh(() =>
  caseStudySection([
    grid({align: 'baseline'}, [
      cell(
        {
          className: css({marginBottom: R.nth(5, space)})
        },
        [text({size: 1}, 'Principles')]
      )
    ]),
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
          })
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
          })
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
          })
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
          })
        ]
      )
    ])
  ])
)

const MathsBuilderLogo = hh(() =>
  caseStudySection([
    grid({align: 'baseline'}, [
      cell(
        {
          medium: {column: 1, of: 2},
          large: {column: 2, of: 4}
        },
        [
          img({
            src: largeColourLogo,
            className: css({
              width: '50%',
              marginBottom: R.nth(3, space)
            })
          })
        ]
      ),
      cell(
        {
          medium: {column: 1, of: 2},
          large: {column: 1, of: 4}
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
          large: {column: 1, of: 4}
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
  ])
)

const MathsBuilder = () =>
  headerPadding([
    container({bottom: true}, [
      div([
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
                    'The team had a clear vision for how to teach GCSE maths: don’t just tell a student the answer to a big problem. Help them solve a bunch of small problems so they can solve the big problem.'
                  ]),
                  text(
                    {size: 2, className: css({marginTop: R.nth(2, space)})},
                    [
                      'My job was to bring this model to a digital form, which I did in three phases: research, design, prototype.'
                    ]
                  )
                ])
              ])
            ]
          )
        ])
      ])
    ]),
    containerBox([
      container(
        {
          top: true,
          className: css({
            backgroundColor: lightGrey
          })
        },
        [
          grid([
            cell(
              {
                className: css({marginBottom: R.nth(5, space)})
              },
              [text({size: 1}, 'User interface')]
            )
          ]),
          grid([
            cell([
              imageRow({
                images: [firstPage, questionList, questionListFilter]
              })
            ])
          ]),
          grid([
            cell([
              imageRow({
                images: [signInOne, signInTwo, passwordHidden]
              })
            ])
          ]),
          grid([
            cell([
              imageRow({
                images: [orderFirst, orderSecond, orderThird]
              })
            ])
          ])
        ]
      )
    ]),
    typography(),
    colourPalette({colors})
  ])

export default MathsBuilder
