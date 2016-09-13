import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import { postsByReddit,selectedReddit } from '../routes/Async/reducers'

const rootReducer = combineReducers({
  postsByReddit,
  selectedReddit,
  routing
})

export default rootReducer
