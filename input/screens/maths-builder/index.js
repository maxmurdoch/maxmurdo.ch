import {hh} from 'react-hyperscript-helpers'
import R from 'ramda'
import {css} from 'glamor'
import {div, img} from 'react-hyperscript-helpers'

import graphikSample from '../../assets/graphik-big-light.svg'
import graphikRegularSample from '../../assets/graphik-medium-reg.svg'
import colourPalette from '../../components/colour-palette'
import graphikSmallUpperSample from '../../assets/graphik-small-upper.svg'
import headerPadding from '../../components/header-padding'
import {medium, large} from '../../constants/media'
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
import tutorialOne from '../../assets/tutorial-one.png'
import tutorialTwo from '../../assets/tutorial-two.png'
import tutorialThree from '../../assets/tutorial-three.png'
import tutorialFour from '../../assets/tutorial-four.png'
import tutorialFive from '../../assets/tutorial-five.png'
import tutorialSix from '../../assets/tutorial-six.png'
import tutorialSeven from '../../assets/tutorial-seven.png'
import tutorialEight from '../../assets/tutorial-eight.png'
import tutorialNine from '../../assets/tutorial-nine.png'
import tutorialTen from '../../assets/tutorial-ten.png'
import tutorialEleven from '../../assets/tutorial-eleven.png'
import tutorialTwelve from '../../assets/tutorial-twelve.png'
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

const testimonial = hh(() =>
  containerBox([
    grid({justify: 'center'}, [
      cell({}, [
        text(
          {
            smallSize: 2,
            mediumSize: 3,
            marginBottom: true,
            className: css({
              maxWidth: '40em'
            })
          },
          [
            `‘We found working with Max was a very efficient
process and resulted in a new version of our system that
achieved all our aims. This was delivered on time and within
budget. At the end of the project he gave an excellent
presentation on his design to our sponsors which was very
well received. I would recommend him as a web designer and
developer without reservation. As and when I have further
requirements for this sort of work, I will certainly try and
hire him if he is available.’`
          ]
        )
      ]),
      cell(
        {
          bottomGutter: true,
          direction: 'column'
        },
        [
          text({size: 0}, ['Richard Prager']),
          text({size: 0}, ['Head of Cambridge University School of Technology'])
        ]
      )
    ])
  ])
)

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
          img({
            className: css({
              width: '50%',
              [medium]: {width: '100%'}
            }),
            src: graphikSample
          }),
          link(
            {
              target: 'external',
              to: 'https://commercialtype.com/catalog/graphik',
              className: css({
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
          bottomGutter: true
        },
        [
          grid(
            {
              align: 'center',
              direction: 'column'
            },
            [
              cell(
                {
                  direction: 'column',
                  small: {column: 1, of: 3}
                },
                [
                  img({
                    className: css({
                      width: '100%',
                      [medium]: {width: '75%'}
                    }),
                    src: graphikRegularSample
                  }),
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
              )
            ]
          )
        ]
      ),
      cell(
        {
          medium: {column: 1, of: 3},
          large: {column: 1, of: 3},
          direction: 'column',
          className: css({
            alignItems: 'flex-end',
            [medium]: {
              alignItems: 'flex-start'
            }
          }),
          bottomGutter: true
        },
        [
          img({
            className: css({
              width: '20%',
              [medium]: {
                width: '25%'
              }
            }),
            src: graphikSmallUpperSample
          }),
          link(
            {
              target: 'external',
              to: 'https://commercialtype.com/catalog/graphik',
              className: css({
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

const mathsBuildersPrinciples = hh(() =>
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
          small: {column: 1, of: 2},
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
          text({size: 0}, ['Take a big problem'])
        ]
      ),
      cell(
        {
          small: {column: 1, of: 2},
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
          text({size: 0}, ['Break it into smaller problems'])
        ]
      ),
      cell(
        {
          small: {column: 1, of: 2},
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
          text({size: 0}, ['Solve the smaller problems'])
        ]
      ),
      cell(
        {
          small: {column: 1, of: 2},
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
          text({size: 0}, ['Solve the big problem'])
        ]
      )
    ])
  ])
)

const mathsBuilderLogo = hh(() =>
  caseStudySection([
    grid({align: 'baseline'}, [
      cell(
        {
          className: css({marginBottom: R.nth(5, space)})
        },
        [text({size: 1}, 'Logo')]
      )
    ]),
    containerBox(
      {
        className: css({
          backgroundColor: lightGrey
        })
      },
      [
        grid({align: 'baseline'}, [
          cell(
            {
              medium: {column: 1, of: 3},
              large: {column: 1, of: 3}
            },
            [
              img({
                src: largeColourLogo,
                className: css({
                  marginBottom: R.nth(5, space),
                  [medium]: {marginBottom: 0}
                })
              })
            ]
          ),
          cell(
            {
              className: css({
                justifyContent: 'center',
                [medium]: {justifyContent: 'flex-start'}
              }),
              medium: {column: 1, of: 3},
              large: {column: 1, of: 3}
            },
            [
              img({
                src: mediumColourLogo,
                className: css({
                  marginBottom: R.nth(5, space),
                  [medium]: {marginBottom: 0}
                })
              })
            ]
          ),
          cell(
            {
              className: css({
                justifyContent: 'flex-end',
                [medium]: {justifyContent: 'flex-start'}
              }),
              medium: {column: 1, of: 3},
              large: {column: 1, of: 3}
            },
            [
              img({
                src: smallColourLogo
              })
            ]
          )
        ])
      ]
    )
  ])
)

const MathsBuilder = () =>
  headerPadding([
    containerBox([
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
                    'The team had a clear vision for how to teach GCSE maths: don’t just tell a student the answer to a big problem. Help them solve a bunch of small problems so they can solve the big problem on their own.'
                  ]),
                  text(
                    {size: 2, className: css({marginTop: R.nth(2, space)})},
                    [
                      'My job was to communicate this model in a digital form, which I did in rounds of research, design and prototype.'
                    ]
                  )
                ])
              ])
            ]
          )
        ])
      ])
    ]),
    mathsBuildersPrinciples(),
    mathsBuilderLogo(),
    typography(),
    colourPalette({colors}),
    containerBox([
      grid([
        cell(
          {
            className: css({marginBottom: R.nth(5, space)})
          },
          [text({size: 1}, 'User interface')]
        )
      ]),
      container(
        {
          top: true,
          className: css({
            backgroundColor: lightGrey
          })
        },
        [
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
          ]),
          grid([
            cell([
              imageRow({
                images: [tutorialOne, tutorialTwo, tutorialThree]
              })
            ])
          ]),
          grid([
            cell([
              imageRow({
                images: [tutorialFour, tutorialFive, tutorialSix]
              })
            ])
          ]),
          grid([
            cell([
              imageRow({
                images: [tutorialSeven, tutorialEight, tutorialNine]
              })
            ])
          ]),
          grid([
            cell([
              imageRow({
                images: [tutorialTen, tutorialEleven, tutorialTwelve]
              })
            ])
          ])
        ]
      )
    ]),
    testimonial()
  ])

export default MathsBuilder
