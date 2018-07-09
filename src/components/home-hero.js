import React from 'react'
import * as R from 'ramda'
import {css} from 'emotion'
import cursorDown from '../assets/cursor-down.svg'
import Flex from '../components/flex'
import Header from '../components/header'

import mathsBuilderImage from '../assets/images/maths-builders/order-two.png'

const mapIndex = R.addIndex(R.map)

const data = [
  {
    title: 'University of Cambridge',
    description:
      'Research, design and prototyping for a new app that teaches GCSE maths on your phone',
    image: mathsBuilderImage
  },
  {
    title: 'University of Cambridge',
    description:
      'Research, design and prototyping for a new app that teaches GCSE maths on your phone',
    image: mathsBuilderImage
  },
  {
    title: 'University of Cambridge',
    description:
      'Research, design and prototyping for a new app that teaches GCSE maths on your phone',
    image: mathsBuilderImage
  }
]

const HomeHero = () => <Header />

export default HomeHero
