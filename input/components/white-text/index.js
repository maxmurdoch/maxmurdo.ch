import {hh} from 'react-hyperscript-helpers'
import text from '../text'

const WhiteText = ({...props}) => {
  return text({color: 'white', ...props})
}

export default hh(WhiteText)
