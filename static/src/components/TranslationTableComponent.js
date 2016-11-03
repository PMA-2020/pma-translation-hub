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
// # Iterate through each entry in data by ID.
var translationTexts = []
Object.entries(data).forEach(([key]) => {
    var item = {}
    item.id = key

    // # Iterate through each key/val of the entry.
    Object.entries(data[key]).forEach(([key2, value]) => {
        if (typeof value !== 'object') {
            item[key2] = value
        } else if (typeof value === 'object') {

            // # Iterate through each key/val of the languages property of the entry.
            Object.entries(data[key][key2]).forEach(([key3, value2]) => {
                item[key3] = value2
            })

        } else {
            item[key2] = 'Error reading item value.'
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

    data = this.fetchData()

    // * It's a data format example.
    // Not working for some reason.
    // priceFormatter(cell, row) {
    //   return '<i class="glyphicon glyphicon-usd"></i> ' + cell
    // }

    render() {
        return (
            <div>
                {/*TODO: Remove this test below. */}
                {/*<h1 onClick={(e) => this.openDrawer(e)}>{this.props.title}</h1>*/}
                {/*<h1 onClick={() => this.openDrawer()}>{this.props.title}</h1>*/}

                {/*<strong>Testing Ground</strong>*/}
                {/*<br/>*/}
                {/*ID: {translationTextsNew[3].id}*/}
                {/*<br/>*/}
                {/*Type: {translationTextsNew[3].type}*/}
                {/*<br/>*/}
                {/*English: {translationTextsNew[3].french}*/}
                {/*<hr/>*/}

                <h1>{this.props.title}</h1>
                {/*<BootstrapTable data={translationTexts} selectRow={selectRowProp} options={options} striped={true} hover={true} pagination={true} columnFilter={true} search={true} clearSearch={true} insertRow={true} exportCSV={true} bordered={false} height="100%" maxHeight={300}>*/}
                {/*<BootstrapTable data={translationTexts} selectRow={selectRowProp} striped={true} hover={true} pagination={true} columnFilter={true} search={true} clearSearch={true} insertRow={true} exportCSV={true} bordered={false} height="100%" maxHeight={300}>*/}
                <BootstrapTable data={this.data} options={this.options} striped={true} hover={true} pagination={true} columnFilter={true} search={true} clearSearch={true} insertRow={true} exportCSV={true} bordered={false} height="100%" maxHeight={300}>
                {/*<BootstrapTable data={translationTexts} striped={true} hover={true} pagination={true} columnFilter={true} search={true} clearSearch={true} insertRow={true} exportCSV={true} bordered={false} height="100%" maxHeight={300}>*/}
                {/*<BootstrapTable data={translationTexts}>*/}
                    <TableHeaderColumn dataField="id" isKey={true} dataAlign="center" dataSort={true}>#</TableHeaderColumn>
                    <TableHeaderColumn dataField="type" dataSort={true}>Type</TableHeaderColumn>
                    <TableHeaderColumn dataField="english" dataSort={true}>English</TableHeaderColumn>
                    <TableHeaderColumn dataField="swahili" dataSort={true}>Swahili</TableHeaderColumn>
                    <TableHeaderColumn dataField="french" dataSort={true}>French</TableHeaderColumn>
                    <TableHeaderColumn dataField="questionAppearances" dataSort={false}>In Questions</TableHeaderColumn>
                    {/*Not working for some reason.*/}
                    {/*<TableHeaderColumn dataField="price" dataFormat={priceFormatter}>Product Price</TableHeaderColumn>*/}
                </BootstrapTable>
                <br/>
                <br/>
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
