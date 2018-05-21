import R from 'ramda'
import {kebabCase} from 'voca'
import React from 'react'
import PropTypes from 'prop-types'
import SiteContainer from '../components/site-container'
import Header from '../components/header'
import HomePageProject from '../components/home-page-project'
import {injectGlobal} from 'emotion'
import cursor from '../assets/cursor-default.svg'

injectGlobal`
  * {
    cursor: url('${cursor}'), auto
  }
`

const IndexPage = ({
  data: {
    allWorkJson,
    mathsBuildersOrderOne,
    mathsBuildersOrderTwo,
    mathsBuildersOrderThree,
    mathsBuildersNthTermOne,
    mathsBuildersNthTermTwo,
    mathsBuildersNthTermThree,
    mathsBuildersNthTermFour,
    mathsBuildersNthTermFive,
    mathsBuildersNthTermSix,
    mathsBuildersNthTermSeven,
    mathsBuildersNthTermEight,
    mathsBuildersNthTermNine,
    mathsBuildersHome,
    mathsBuildersSignIn,
    mathsBuildersTutorialOne,
    mathsBuildersTutorialTwo,
    mathsBuildersTutorialThree,
    mathsBuildersTutorialFive,
    mathsBuildersTutorialSix,
    mathsBuildersTutorialSeven,
    mathsBuildersTutorialNine,
    mathsBuildersTutorialTen,
    mathsBuildersTutorialTwelve,
    mathsBuildersTutorialFourteen,
    codeAtUniOne,
    codeAtUniTwo,
    codeAtUniThree,
    imageChange,
    personablyAgenda,
    personablyChooseApp,
    personablyComposeMessage,
    personablyComposeMessage2,
    personablyTemplates,
    personablyChooseWho1,
    personablyChooseWho2,
    personablyChooseTask,
    adaptiveLabIntroOne,
    adaptiveLabIntroTwo,
    adaptiveLabIntroThree,
    adaptiveLabFour,
    adaptiveLabClients,
    adaptiveLabJobs,
    adaptiveLabBuildBeta,
    adaptiveLabSmartyCover
  }
}) => {
  const imagesForProject = {
    'code-at-uni': [
      {
        image: codeAtUniOne,
        type: 'laptop'
      },
      {
        image: codeAtUniTwo,
        type: 'laptop'
      },
      {
        image: codeAtUniThree,
        type: 'laptop'
      }
    ],
    'maths-builders': [
      {
        image: mathsBuildersHome,
        type: 'phone'
      },
      {
        image: mathsBuildersSignIn,
        type: 'phone'
      },
      {
        image: mathsBuildersTutorialOne,
        type: 'phone'
      },
      {
        image: mathsBuildersTutorialTwo,
        type: 'phone'
      },
      {
        image: mathsBuildersTutorialThree,
        type: 'phone'
      },
      {
        image: mathsBuildersTutorialFive,
        type: 'phone'
      },
      {
        image: mathsBuildersTutorialSix,
        type: 'phone'
      },
      {
        image: mathsBuildersTutorialSeven,
        type: 'phone'
      },
      {
        image: mathsBuildersTutorialNine,
        type: 'phone'
      },
      {
        image: mathsBuildersTutorialTen,
        type: 'phone'
      },
      {
        image: mathsBuildersTutorialTwelve,
        type: 'phone'
      },
      {
        image: mathsBuildersTutorialFourteen,
        type: 'phone'
      },
      {
        image: mathsBuildersOrderOne,
        type: 'phone'
      },
      {
        image: mathsBuildersOrderTwo,
        type: 'phone'
      },
      {
        image: mathsBuildersOrderThree,
        type: 'phone'
      },
      {
        image: mathsBuildersNthTermOne,
        type: 'phone'
      },
      {
        image: mathsBuildersNthTermTwo,
        type: 'phone'
      },
      {
        image: mathsBuildersNthTermThree,
        type: 'phone'
      },
      {
        image: mathsBuildersNthTermFour,
        type: 'phone'
      },
      {
        image: mathsBuildersNthTermFive,
        type: 'phone'
      },
      {
        image: mathsBuildersNthTermSix,
        type: 'phone'
      },
      {
        image: mathsBuildersNthTermSeven,
        type: 'phone'
      },
      {
        image: mathsBuildersNthTermEight,
        type: 'phone'
      },
      {
        image: mathsBuildersNthTermNine,
        type: 'phone'
      },
      {
        image: imageChange,
        type: 'phone'
      }
    ],
    personably: [
      {
        image: personablyAgenda,
        type: 'laptop'
      },
      {
        image: personablyChooseApp,
        type: 'laptop'
      },
      {
        image: personablyChooseTask,
        type: 'laptop'
      },
      {
        image: personablyChooseWho1,
        type: 'laptop'
      },
      {
        image: personablyChooseWho2,
        type: 'laptop'
      },
      {
        image: personablyComposeMessage,
        type: 'laptop'
      },
      {
        image: personablyComposeMessage2,
        type: 'laptop'
      },
      {
        image: personablyTemplates,
        type: 'laptop'
      }
    ],
    'adaptive-lab': [
      {
        image: adaptiveLabIntroOne,
        type: 'laptop'
      },
      {
        image: adaptiveLabIntroTwo,
        type: 'laptop'
      },
      {
        image: adaptiveLabIntroThree,
        type: 'laptop'
      },
      {
        image: adaptiveLabFour,
        type: 'laptop'
      },
      {
        image: adaptiveLabClients,
        type: 'laptop'
      },
      {
        image: adaptiveLabJobs,
        type: 'laptop'
      },
      {
        image: adaptiveLabSmartyCover,
        type: 'laptop'
      },
      {
        image: adaptiveLabBuildBeta,
        type: 'laptop'
      }
    ]
  }
  const workList = R.map(R.prop('node'), allWorkJson.edges)
  const mapWithIndex = R.addIndex(R.map)

  return (
    <div>
      <SiteContainer>
        <Header />
        <div name="work">
          {mapWithIndex(
            (
              {tools, client, brief, backgroundColor, services, fields: {slug}},
              key
            ) => {
              const getId = R.prop('client')

              const previousProjectId = kebabCase(
                getId(R.prop(R.dec(key), workList))
              )
              const nextProjectId = kebabCase(
                getId(R.prop(R.inc(key), workList))
              )

              return (
                <HomePageProject
                  key={key}
                  tools={tools}
                  services={services}
                  index={key}
                  backgroundColor={backgroundColor}
                  total={R.length(workList)}
                  client={client}
                  images={R.prop(kebabCase(slug), imagesForProject)}
                  brief={brief}
                  slug={slug}
                  previousProjectId={
                    R.isEmpty(previousProjectId) ? undefined : previousProjectId
                  }
                  nextProjectId={
                    R.isEmpty(nextProjectId) ? undefined : nextProjectId
                  }
                />
              )
            },
            workList
          )}
        </div>
      </SiteContainer>
    </div>
  )
}

IndexPage.propTypes = {
  data: PropTypes.object
}

export default IndexPage

export const query = graphql`
  query AllWorkJson {
    allWorkJson(sort: {fields: [order], order: ASC}) {
      edges {
        node {
          id
          brief
          client
          tools
          services
          backgroundColor
          order
          fields {
            slug
          }
        }
      }
    }
    mathsBuildersHome: imageSharp(id: {regex: "/maths-builders/home-page/"}) {
      sizes {
        ...GatsbyImageSharpSizes_noBase64
      }
    }
    mathsBuildersSignIn: imageSharp(id: {regex: "/sign-in-three/"}) {
      sizes {
        ...GatsbyImageSharpSizes_noBase64
      }
    }
    mathsBuildersOrderOne: imageSharp(
      id: {regex: "/maths-builders/order-one/"}
    ) {
      sizes {
        ...GatsbyImageSharpSizes_noBase64
      }
    }
    mathsBuildersOrderTwo: imageSharp(
      id: {regex: "/maths-builders/order-two/"}
    ) {
      sizes {
        ...GatsbyImageSharpSizes_noBase64
      }
    }
    mathsBuildersOrderThree: imageSharp(
      id: {regex: "/maths-builders/order-three/"}
    ) {
      sizes {
        ...GatsbyImageSharpSizes_noBase64
      }
    }
    mathsBuildersNthTermOne: imageSharp(
      id: {regex: "/maths-builders/nth-term-one/"}
    ) {
      sizes {
        ...GatsbyImageSharpSizes_noBase64
      }
    }
    mathsBuildersNthTermTwo: imageSharp(
      id: {regex: "/maths-builders/nth-term-two/"}
    ) {
      sizes {
        ...GatsbyImageSharpSizes_noBase64
      }
    }
    mathsBuildersNthTermThree: imageSharp(
      id: {regex: "/maths-builders/nth-term-three/"}
    ) {
      sizes {
        ...GatsbyImageSharpSizes_noBase64
      }
    }
    mathsBuildersNthTermFour: imageSharp(
      id: {regex: "/maths-builders/nth-term-four/"}
    ) {
      sizes {
        ...GatsbyImageSharpSizes_noBase64
      }
    }
    mathsBuildersNthTermFive: imageSharp(
      id: {regex: "/maths-builders/nth-term-five/"}
    ) {
      sizes {
        ...GatsbyImageSharpSizes_noBase64
      }
    }
    mathsBuildersNthTermSix: imageSharp(
      id: {regex: "/maths-builders/nth-term-six/"}
    ) {
      sizes {
        ...GatsbyImageSharpSizes_noBase64
      }
    }
    mathsBuildersNthTermSeven: imageSharp(
      id: {regex: "/maths-builders/nth-term-seven/"}
    ) {
      sizes {
        ...GatsbyImageSharpSizes_noBase64
      }
    }
    mathsBuildersNthTermEight: imageSharp(
      id: {regex: "/maths-builders/nth-term-eight/"}
    ) {
      sizes {
        ...GatsbyImageSharpSizes_noBase64
      }
    }
    mathsBuildersNthTermNine: imageSharp(
      id: {regex: "/maths-builders/nth-term-nine/"}
    ) {
      sizes {
        ...GatsbyImageSharpSizes_noBase64
      }
    }
    mathsBuildersTutorialOne: imageSharp(
      id: {regex: "/maths-builders/tutorial-one/"}
    ) {
      sizes {
        ...GatsbyImageSharpSizes_noBase64
      }
    }
    mathsBuildersTutorialTwo: imageSharp(
      id: {regex: "/maths-builders/tutorial-two/"}
    ) {
      sizes {
        ...GatsbyImageSharpSizes_noBase64
      }
    }
    mathsBuildersTutorialThree: imageSharp(
      id: {regex: "/maths-builders/tutorial-three/"}
    ) {
      sizes {
        ...GatsbyImageSharpSizes_noBase64
      }
    }
    mathsBuildersTutorialFive: imageSharp(
      id: {regex: "/maths-builders/tutorial-five/"}
    ) {
      sizes {
        ...GatsbyImageSharpSizes_noBase64
      }
    }
    mathsBuildersTutorialSix: imageSharp(
      id: {regex: "/maths-builders/tutorial-six/"}
    ) {
      sizes {
        ...GatsbyImageSharpSizes_noBase64
      }
    }
    mathsBuildersTutorialSeven: imageSharp(
      id: {regex: "/maths-builders/tutorial-seven/"}
    ) {
      sizes {
        ...GatsbyImageSharpSizes_noBase64
      }
    }
    mathsBuildersTutorialNine: imageSharp(
      id: {regex: "/maths-builders/tutorial-nine/"}
    ) {
      sizes {
        ...GatsbyImageSharpSizes_noBase64
      }
    }
    mathsBuildersTutorialTen: imageSharp(
      id: {regex: "/maths-builders/tutorial-ten/"}
    ) {
      sizes {
        ...GatsbyImageSharpSizes_noBase64
      }
    }
    mathsBuildersTutorialTwelve: imageSharp(
      id: {regex: "/maths-builders/tutorial-twelve/"}
    ) {
      sizes {
        ...GatsbyImageSharpSizes_noBase64
      }
    }
    mathsBuildersTutorialFourteen: imageSharp(
      id: {regex: "/maths-builders/tutorial-fourteen/"}
    ) {
      sizes {
        ...GatsbyImageSharpSizes_noBase64
      }
    }
    imageChange: imageSharp(id: {regex: "/image-change/"}) {
      sizes {
        ...GatsbyImageSharpSizes_noBase64
      }
    }
    codeAtUniOne: imageSharp(id: {regex: "/code-at-uni/hero/"}) {
      sizes {
        ...GatsbyImageSharpSizes_noBase64
      }
    }
    codeAtUniTwo: imageSharp(id: {regex: "/code-at-uni/search/"}) {
      sizes {
        ...GatsbyImageSharpSizes_noBase64
      }
    }
    codeAtUniThree: imageSharp(id: {regex: "/code-at-uni/quote/"}) {
      sizes {
        ...GatsbyImageSharpSizes_noBase64
      }
    }
    personablyAgenda: imageSharp(id: {regex: "/agenda/"}) {
      sizes {
        ...GatsbyImageSharpSizes_noBase64
      }
    }
    personablyComposeMessage: imageSharp(id: {regex: "/compose-message-1/"}) {
      sizes {
        ...GatsbyImageSharpSizes_noBase64
      }
    }
    personablyComposeMessage2: imageSharp(id: {regex: "/compose-message-2/"}) {
      sizes {
        ...GatsbyImageSharpSizes_noBase64
      }
    }
    personablyTemplates: imageSharp(id: {regex: "/templates/"}) {
      sizes {
        ...GatsbyImageSharpSizes_noBase64
      }
    }
    personablyChooseWho1: imageSharp(id: {regex: "/choose-who-1/"}) {
      sizes {
        ...GatsbyImageSharpSizes_noBase64
      }
    }
    personablyChooseWho2: imageSharp(id: {regex: "/choose-who-2/"}) {
      sizes {
        ...GatsbyImageSharpSizes_noBase64
      }
    }
    personablyChooseApp: imageSharp(id: {regex: "/choose-app/"}) {
      sizes {
        ...GatsbyImageSharpSizes_noBase64
      }
    }
    personablyChooseTask: imageSharp(id: {regex: "/choose-task/"}) {
      sizes {
        ...GatsbyImageSharpSizes_noBase64
      }
    }
    adaptiveLabIntroOne: imageSharp(id: {regex: "/adaptive-lab-1/"}) {
      sizes {
        ...GatsbyImageSharpSizes_noBase64
      }
    }
    adaptiveLabIntroTwo: imageSharp(id: {regex: "/adaptive-lab-2/"}) {
      sizes {
        ...GatsbyImageSharpSizes_noBase64
      }
    }
    adaptiveLabIntroThree: imageSharp(id: {regex: "/adaptive-lab-3/"}) {
      sizes {
        ...GatsbyImageSharpSizes_noBase64
      }
    }
    adaptiveLabFour: imageSharp(id: {regex: "/adaptive-lab-4/"}) {
      sizes {
        ...GatsbyImageSharpSizes_noBase64
      }
    }
    adaptiveLabClients: imageSharp(id: {regex: "/adaptive-lab-clients/"}) {
      sizes {
        ...GatsbyImageSharpSizes_noBase64
      }
    }
    adaptiveLabJobs: imageSharp(id: {regex: "/adaptive-lab-jobs/"}) {
      sizes {
        ...GatsbyImageSharpSizes_noBase64
      }
    }
    adaptiveLabBuildBeta: imageSharp(id: {regex: "/build-you-beta/"}) {
      sizes {
        ...GatsbyImageSharpSizes_noBase64
      }
    }
    adaptiveLabSmartyCover: imageSharp(
      id: {regex: "/adaptive-lab-smarty-cover/"}
    ) {
      sizes {
        ...GatsbyImageSharpSizes_noBase64
      }
    }
  }
`
