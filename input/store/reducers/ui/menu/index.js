import R from 'ramda'
import {TOGGLE_MENU, CLOSE_MENU} from '../../../actions/ui'

const defaultState = {
  isOpen: false
}

const menu = (state = defaultState, action) => {
  const conditions = R.cond([
    [R.equals(TOGGLE_MENU), () => ({isOpen: R.not(state.isOpen)})],
    [R.equals(CLOSE_MENU), () => ({isOpen: false})],
    [R.T, () => state]
  ])

  return conditions(action.type)
}

export default menu
