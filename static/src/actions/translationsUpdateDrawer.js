// How to make actions in Redux - https://github.com/acdlite/flux-standard-action
// An action MUST: (1) be a plain JavaScript object, (2) have a type property.
// An action MAY: (1) have a error property, (2) have a payload property, (3) have a meta property.
import { OPEN_TRANSLATIONS_UPDATE_DRAWER, CLOSE_TRANSLATIONS_UPDATE_DRAWER, SET_UPDATE_FORM, OPEN_UPDATE_FORM_PROMPT,
    CLOSE_UPDATE_FORM_PROMPT, CLOSE_AND_SET_UPDATE_FORM, REPORT_UPDATE_FORM_DIRTY, UPDATE_THE_UPDATE_FORM_DATA
} from '../constants/index'


export function openTranslationsUpdateDrawer() {
    return {
        type: OPEN_TRANSLATIONS_UPDATE_DRAWER,
    }
}

export function closeTranslationsUpdateDrawer() {
    return {
        type: CLOSE_TRANSLATIONS_UPDATE_DRAWER,
    }
}

export function setUpdateForm(id) {
    return {
        type: SET_UPDATE_FORM,
        payload: id
    }
}

export function openSetUpdateFormPrompt(id) {
    return {
        type: OPEN_UPDATE_FORM_PROMPT,
        payload: id
    }
}

export function closeSetUpdateFormPrompt(id) {
    return {
        type: CLOSE_UPDATE_FORM_PROMPT,
        payload: id
    }
}

export function closeAndSetUpdateForm() {
    return {
        type: CLOSE_AND_SET_UPDATE_FORM
    }
}

export function reportUpdateFormDirty() {
    return {
        type: REPORT_UPDATE_FORM_DIRTY
    }
}

export function updateTheUpdateFormData(fieldID, userEnteredValue) {
    var newUpdateFormData = {}
    newUpdateFormData.field = fieldID
    newUpdateFormData.value = userEnteredValue
    return {
        type: UPDATE_THE_UPDATE_FORM_DATA,
        payload: newUpdateFormData
    }
}
