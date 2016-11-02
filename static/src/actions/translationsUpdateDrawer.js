// How to make actions in Redux - https://github.com/acdlite/flux-standard-action
// An action MUST: (1) be a plain JavaScript object, (2) have a type property.
// An action MAY: (1) have a error property, (2) have a payload property, (3) have a meta property.

import { OPEN_TRANSLATIONS_UPDATE_DRAWER, CLOSE_TRANSLATIONS_UPDATE_DRAWER, SET_UPDATE_FORM } from '../constants/index'

export function openTranslationsUpdateDrawer() {
    return {
        type: OPEN_TRANSLATIONS_UPDATE_DRAWER,
        // payload: true
        // open: true
    }
}

export function closeTranslationsUpdateDrawer() {
    return {
        type: CLOSE_TRANSLATIONS_UPDATE_DRAWER,
        // payload: false
        // open: false
    }
}

export function setUpdateForm(id) {
    return {
        type: SET_UPDATE_FORM,
        payload: id
    }
}
