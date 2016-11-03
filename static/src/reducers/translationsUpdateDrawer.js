import { OPEN_TRANSLATIONS_UPDATE_DRAWER, CLOSE_TRANSLATIONS_UPDATE_DRAWER, SET_UPDATE_FORM } from '../constants/index'
import { createReducer } from '../utils/misc'
import { data } from '../testData'

const initialState = {
    translationUpdateDrawerOpenState: false
}

// # Old data fetching method.
// const getUpdateFormData = (id) => {
//     return {
//         id: id,
//         type: data[id].type,
//         status: data[id].status,
//         languages: data[id].languages,
//         questionAppearances: data[id].questionAppearances,
//         english: data[id].languages.english,
//         swahili: data[id].languages.swahili,
//         french: data[id].languages.french
//     }
// }

// TODO: Testing via 'expect'.


export default createReducer(initialState, {
    [OPEN_TRANSLATIONS_UPDATE_DRAWER]: (state) =>
        Object.assign({}, state, {
            translationUpdateDrawerOpenState: true
        }),
    [CLOSE_TRANSLATIONS_UPDATE_DRAWER]: (state) =>
        Object.assign({}, state, {
            translationUpdateDrawerOpenState: false
        }),
    [SET_UPDATE_FORM]: (state, id) =>
        Object.assign({}, state, {
            updateFormID: id,
            updateFormDataType: data[id].status,
            // # Old data fetching method.
            // updateFormData: getUpdateFormData(id)
            updateFormData: {
                id: id,
                type: data[id].type,
                status: data[id].status,
                languages: data[id].languages,
                questionAppearances: data[id].questionAppearances,
                english: data[id].languages.english,
                swahili: data[id].languages.swahili,
                french: data[id].languages.french
            }
        })
})
