import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducers/index'

const debugware = []
//noinspection JSUnresolvedVariable
if (process.env.NODE_ENV !== 'production') {
    //noinspection JSUnresolvedFunction
    const createLogger = require('redux-logger')

    debugware.push(createLogger({
        collapsed: true,
    }))
}

export default function configureStore(initialState) {
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunkMiddleware, ...debugware)
    )

    //noinspection JSUnresolvedVariable
    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        //noinspection JSUnresolvedVariable
        module.hot.accept('../reducers', () => {
            //noinspection JSUnresolvedFunction
            const nextRootReducer = require('../reducers/index').default

            store.replaceReducer(nextRootReducer)
        })
    }

    return store
}
