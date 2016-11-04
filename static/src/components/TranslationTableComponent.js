// Docs: http://allenfang.github.io/react-bootstrap-table/docs.html
import React from 'react'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../actions/translationsUpdateDrawer'
import { data } from '../testData'
// # Experimentation
// import * as actionCreators from '../actions/data'
// import store from '../store/configureStore'

// function mapStateToProps(state) {
//     return {
//         data: state.data,
//         token: state.auth.token,
//         loaded: state.data.loaded,
//         isFetching: state.data.isFetching,
//     }
// }

function mapStateToProps(state) {
    return {
        open: state.translationsUpdateDrawer.translationUpdateDrawerOpenState
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch)
}

/*
*  Data Conversion Process
*  The following logic converts data as presented by database into a format for display in a table.
* */
var translationTexts = []

    // var rawData = rawDataList
    // var filteredLanguages = []
    //
    // // # Iterate through each entry.
    // Object.entries(rawData).forEach(([entryKey]) => {
    //     // var language
    //
    //     // # Iterate through each language of each entry.
    //     Object.entries(data[entryKey].languages).forEach(([languageKey]) => {
    //         if ((languageKey in filteredLanguages) !== true) {
    //             filteredLanguages.push(languageKey)
    //         }
    //     })
    // })
    //
    // filteredLanguages = ["english", "swahili"]
    // return filteredLanguages





// # # The following code converts dataset from an object to a list. This conversion helps the data be read by the table.
// # Iterate through each entry in data by ID.
Object.entries(data).forEach(([entryKey]) => {
    var item = {}
    item.id = entryKey

    // # Iterate through each key/val property of the entry.
    Object.entries(data[entryKey]).forEach(([propertyKey, propertyValue]) => {
        if (typeof propertyValue !== 'object') {
            item[propertyKey] = propertyValue
        } else if (typeof propertyValue === 'object') {

            // # Iterate through each key/val of the languages property of the entry.
            Object.entries(data[entryKey][propertyKey]).forEach(([languageKey, languageValue]) => {
                item[languageKey] = languageValue
            })

        } else {
            item[propertyKey] = 'Error reading item value.'
        }
    })
    translationTexts.push(item)
})

// var translationTexts = translationTextsNew


// # Experimentation
// helper = function() {
//     console.log("test")
// }

// const options = {
//     onRowClick: function(row) {
//         // console.log(row.id);
//         this.openDrawer()
//     }
// }

// var test = actionCreators.openTranslationsUpdateDrawer()

// const options = {
//     onRowClick: function(row) {
//         console.log(row.id);
//         console.log(test)
//         console.log(store.getState)
        // store.dispatch(actionCreators.openTranslationsUpdateDrawer())
        // this.openDrawer()
        // this.props.openDrawer()
        // this.props.openTranslationsUpdateDrawer()
        // console.log(this)
        // state.translationsUpdateDrawer()
//     }
// }

// const selectRowProp = {
//     mode: 'radio',
//     onSelect: function(row, isSelected, event) {
//         console.log(row.id);
//     }
// }

// @connect(mapStateToProps, mapDispatchToProps)
@connect(mapStateToProps, mapDispatchToProps)
export default class TranslationTable extends React.Component {
    constructor(props) {
        super(props);
        this.openDrawer = this.openDrawer.bind(this);
        this.options.onRowClick = this.options.onRowClick.bind(this);
    }

    componentDidMount() {
        this.fetchData()
    }

    //TODO: Fetch data from server, only with authorized access.
    // By itself, '{}' does nothing. It is similar to 'pass' in Python.
    fetchProtectedData(token) {
        try {
            {}
            console.log(token)
        } catch (e) {
            {}
            console.log(e)
            console.log(token)
        }
    }

    // openDrawerforSubmits(e) {
    //     e.preventDefault();
    //     this.props.openTranslationsUpdateDrawer();
    // }

    openDrawer() {
        this.props.openTranslationsUpdateDrawer()
    }

    setUpdateForm(rowID) {
        this.props.setUpdateForm(rowID)
    }

    options = {
        onRowClick: function(row) {
            // console.log(row.id)
            this.openDrawer()
            this.setUpdateForm(row.id)
        }
    }

    fetchData() {
        // const token = this.props.token
        // try {
        //     {}
        //     this.props.fetchProtectedData(token)
        // } catch (e) {
        //     {}
        //     console.log(e)
        // }
        var rawData = translationTexts
        var filteredData = []

        for (let x of rawData) {
            if (x.status === this.props.dataType) {
                filteredData.push(x)
            }
        }

        return filteredData
    }

    fetchLanguages() {
        var filteredLanguages = []

        // # Iterate through each entry.
        Object.entries(data).forEach(([entryKey]) => {
            // var language

            // # Iterate through each language of each entry.
            Object.entries(data[entryKey].languages).forEach(([languageKey]) => {
                if (!filteredLanguages.includes(languageKey) && (data[entryKey].status === this.props.dataType)) {
                    filteredLanguages.push(languageKey)
                }
                // if (!languages.includes(language)) {
                //     languages.push(language)
                // }
            })
        })

        return filteredLanguages
    }

    data = this.fetchData()

    languages = this.fetchLanguages()

    render() {
        const fields = [['id', '#'], ['type', 'Type'], ['questionAppearances', 'Appearances']]
        // # Push language identifier and label to the list of fields to be rendered.
        for (let language of this.languages) {
            fields.push([language, _.capitalize(language)])
        }

        return (
            <div>
                {/*TODO: Remove this test below. */}
                {/*<h1 onClick={(e) => this.openDrawer(e)}>{this.props.title}</h1>*/}
                {/*<h1 onClick={() => this.openDrawer()}>{this.props.title}</h1>*/}

                {/* # Other options for tables. */}
                {/*<BootstrapTable data={translationTexts} selectRow={selectRowProp} options={options} striped={true} hover={true} pagination={true} columnFilter={true} search={true} clearSearch={true} insertRow={true} exportCSV={true} bordered={false} height="100%" maxHeight={300}>*/}
                {/*<BootstrapTable data={translationTexts} selectRow={selectRowProp} striped={true} hover={true} pagination={true} columnFilter={true} search={true} clearSearch={true} insertRow={true} exportCSV={true} bordered={false} height="100%" maxHeight={300}>*/}
                {/*<BootstrapTable data={translationTexts} striped={true} hover={true} pagination={true} columnFilter={true} search={true} clearSearch={true} insertRow={true} exportCSV={true} bordered={false} height="100%" maxHeight={300}>*/}
                {/*<BootstrapTable data={translationTexts}>*/}

                <h1>{this.props.title}</h1>
                <BootstrapTable data={this.data} keyField={fields[0][0]} options={this.options} striped={true} hover={true} pagination={true} search={true}
                                clearSearch={true} insertRow={true} exportCSV={true} bordered={false} height="auto">
                                {/* # Other option for table properties. */}
                                {/*{height="100%"}*/}
                                {/*maxheight={300}*/}
                                {/*columnFilter={true}*/}

                    { fields.map(([field, label]) => <TableHeaderColumn dataField={ field }>{ label }</TableHeaderColumn>) }

                </BootstrapTable>
            </div>
        )
    }
}

TranslationTable.propTypes = {
    // loaded: React.PropTypes.bool,
    // userName: React.PropTypes.string,
    data: React.PropTypes.any,
    // token: React.PropTypes.string,
    open: React.PropTypes.bool,
    openTranslationsUpdateDrawer: React.PropTypes.func,
    setUpdateForm: React.PropTypes.func
}
