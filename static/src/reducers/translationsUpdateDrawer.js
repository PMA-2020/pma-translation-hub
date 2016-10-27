import { OPEN_TRANSLATIONS_UPDATE_DRAWER, CLOSE_TRANSLATIONS_UPDATE_DRAWER } from '../constants/index'
import { createReducer } from '../utils/misc'

const initialState = {
    translationUpdateDrawerOpenState: false
}

export default createReducer(initialState, {
    [OPEN_TRANSLATIONS_UPDATE_DRAWER]: (state) =>
        Object.assign({}, state, {
            translationUpdateDrawerOpenState: true
        }),
    [CLOSE_TRANSLATIONS_UPDATE_DRAWER]: (state) =>
        Object.assign({}, state, {
            translationUpdateDrawerOpenState: false
        }),
})
