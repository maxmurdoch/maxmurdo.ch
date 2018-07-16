import React from 'react'
import PropTypes from 'prop-types'
import {kebabCase} from 'voca'
import {map, addIndex, prop, dec, inc, length, isEmpty} from 'ramda'

import Project from './Project'

const Home = ({
  location,
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
  const workList = map(prop('node'), allWorkJson.edges)
  const mapWithIndex = addIndex(map)

  return (
    <div name="work">
      {mapWithIndex(
        (
          {tools, client, brief, backgroundColor, services, fields: {slug}},
          key
        ) => {
          const getId = prop('client')

          const previousProjectId = kebabCase(getId(prop(dec(key), workList)))
          const nextProjectId = kebabCase(getId(prop(inc(key), workList)))

          return (
            <Project
              location={location}
              key={key}
              tools={tools}
              services={services}
              index={key}
              backgroundColor={backgroundColor}
              total={length(workList)}
              client={client}
              images={prop(kebabCase(slug), imagesForProject)}
              brief={brief}
              slug={slug}
              previousProjectId={
                isEmpty(previousProjectId) ? undefined : previousProjectId
              }
              nextProjectId={isEmpty(nextProjectId) ? undefined : nextProjectId}
            />
          )
        },
        workList
      )}
    </div>
  )
}

export default Home

Home.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object
}
