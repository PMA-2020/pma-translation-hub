import { OPEN_TRANSLATIONS_UPDATE_DRAWER, CLOSE_TRANSLATIONS_UPDATE_DRAWER, SET_UPDATE_FORM } from '../constants/index'
import { createReducer } from '../utils/misc'

const initialState = {
    translationUpdateDrawerOpenState: false
}


const getUpdateFormData = (id) => {
    //TODO: Get from .json. However Chrome / browsers don't let you load locally. Have to access from server asynchronously over API. So below two lines will not work.
    // var json = $.getJSON('mockupData.json')
    // var data = JSON.parse(json)
    var data = {
        "1": {
            type: "Label",
            questionAppearances: "FQ107, SQ303, SQ304",
            languages: {
                english: "Hello world!",
                swahili: "Hello world (in Swahili!)",
                french: "Hello world (in French!)",
            }
        },
        "2": {
            type: "Label",
            questionAppearances: "FQ107, SQ303, SQ304",
            languages: {
                english: "Hello world!",
                swahili: "Hello world (in Swahili!)",
                french: "Hello world (in French!)",
            }
        },
        "3": {
            type: "Label",
            questionAppearances: "FQ107, SQ303, SQ304",
            languages: {
                english: "Hello world!",
                swahili: "Hello world (in Swahili!)",
                french: "Hello world (in French!)",
            }
        },
        "4": {
            type: "Label",
            questionAppearances: "FQ107, SQ303, SQ304",
            languages: {
                english: "Hello world!",
                swahili: "Hello world (in Swahili!)",
                french: "Hello world (in French!)",
            }
        },
        "5": {
            type: "Label",
            questionAppearances: "FQ107, SQ303, SQ304",
            languages: {
                english: "Hello world!",
                swahili: "Hello world (in Swahili!)",
                french: "Hello world (in French!)",
            }
        },
        "6": {
            type: "Label",
            questionAppearances: "FQ107, SQ303, SQ304",
            languages: {
                english: "Hello world!",
                swahili: "Hello world (in Swahili!)",
                french: "Hello world (in French!)",
            }
        }
    }


    return {
        id: id,
        type: data[id].type,
        english: data[id].english,
        swahili: data[id].swahili,
        french: data[id].french,
        questionAppearances: data[id].questionAppearances
    }
}


// TODO: expect ...

// const getUpdateFormData = (id) => {
//     if (id === 1) {
//         console.log('test')
//         return {
//             id: id,
//             name: "test name",
//             englishText: "test text"
//         }
//     }
//     else if (id === 2)
//         return 2
//     else
//         return {}
// }


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
            updateFormData: getUpdateFormData(id)
        })
})
