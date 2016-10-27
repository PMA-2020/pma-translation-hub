import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import auth from './auth'
import data from './data'
import translationsUpdateDrawer from './translationsUpdateDrawer'

const rootReducer = combineReducers({
    routing: routerReducer,
    /* your reducers */
    auth,
    data,
    translationsUpdateDrawer
})

export default rootReducer
