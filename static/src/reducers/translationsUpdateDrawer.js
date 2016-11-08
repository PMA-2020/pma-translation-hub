import { OPEN_TRANSLATIONS_UPDATE_DRAWER, CLOSE_TRANSLATIONS_UPDATE_DRAWER, SET_UPDATE_FORM, OPEN_UPDATE_FORM_PROMPT,
    CLOSE_UPDATE_FORM_PROMPT, CLOSE_AND_SET_UPDATE_FORM, REPORT_UPDATE_FORM_DIRTY, UPDATE_THE_UPDATE_FORM_DATA
} from '../constants/index'
import { createReducer } from '../utils/misc'
import { data } from '../testData'

const initialState = {
    translationUpdateDrawerOpenState: false
}


// TODO: Testing via 'expect'.
const setUpdateForm = (id) => {
    return {
        updateFormID: id,
        updateFormDataType: data[id].status,
        updateFormData: {
            id: id,
            type: data[id].type,
            status: data[id].status,
            languages: data[id].languages,
            appearances: data[id].appearances
        }
    }
}


// # How this works.
// Object.assign() takes 3 arguments. It merges the 2nd and 3rd items into a new item defined as the first argument.
export default createReducer(initialState, {
    [OPEN_TRANSLATIONS_UPDATE_DRAWER]: (state) =>
        Object.assign({}, state, {
            translationUpdateDrawerOpenState: true
        }),
    [CLOSE_TRANSLATIONS_UPDATE_DRAWER]: (state) =>
        Object.assign({}, state, {
            translationUpdateDrawerOpenState: false
        }),
    [OPEN_UPDATE_FORM_PROMPT]: (state, id) =>
        Object.assign({}, state, {
            setUpdateFormPromptOpenState: true,
            newUpdateFormID: id
        }),
    [CLOSE_UPDATE_FORM_PROMPT]: (state) =>
        Object.assign({}, state, {
            setUpdateFormPromptOpenState: false,
        }),
    [SET_UPDATE_FORM]: (state, id) =>
        Object.assign({}, state, {
            updateFormID: id,
            updateFormDataType: data[id].status,
            //TODO: Use the setUpdateForm function instead.
            updateFormData: {
                id: id,
                type: data[id].type,
                status: data[id].status,
                languages: data[id].languages,
                appearances: data[id].appearances,
            },
        }),
    [CLOSE_AND_SET_UPDATE_FORM]: (state) => {
        var stateUpdates = setUpdateForm(state.newUpdateFormID)
        stateUpdates.setUpdateFormPromptOpenState = false
        return Object.assign({}, state, stateUpdates)
    },
    [REPORT_UPDATE_FORM_DIRTY]: (state) =>
        Object.assign({}, state, {
            updateFormDirty: true
        }),
    [UPDATE_THE_UPDATE_FORM_DATA]: (state, update) => {
        var updateFormData = state.updateFormData
        if (update.field in updateFormData)
            updateFormData[update.field] = update.value
        else
            try {
                // Ideally would use recursion here to loop through the whole object to try to find a match.
                updateFormData.languages[update.field] = update.value
            } catch (e) {
                console.log(e)
                console.log("Additional Error Info: There was a problem with updating state. This may be the result of " +
                    "an error with how this form's reducer is referencing fields.")
            }

        return Object.assign({}, state, {
            updateFormData: updateFormData
        })
    }
})

