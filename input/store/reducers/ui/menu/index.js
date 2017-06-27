import R from 'ramda'
import {TOGGLE_MENU} from '../../../actions/ui'

const defaultState = {
  isOpen: false
}

const menu = (state = defaultState, action) => {
  const conditions = R.cond([
    [R.equals(TOGGLE_MENU), () => ({isOpen: R.not(state.isOpen)})],
    [R.T, () => state]
  ])

  return conditions(action.type)
}

export default menu
