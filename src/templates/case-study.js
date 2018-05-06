import React from 'react'
import PropTypes from 'prop-types'
import Text from '../components/text'

const CaseStudy = ({data: {workJson}}) => {
  return <Text tag="h1">{workJson.title}</Text>
}

CaseStudy.propTypes = {
  data: PropTypes.object
}

export default CaseStudy

export const query = graphql`
  query CaseStudyQuery($slug: String!) {
    workJson(fields: {slug: {eq: $slug}}) {
      title
      description
    }
  }
`
