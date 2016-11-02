// Docs: http://allenfang.github.io/react-bootstrap-table/docs.html
import React from 'react'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
// import { BootstrapTable, TableHeaderColumn } from 'z-react-bootstrap-table-dev'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
// import * as actionCreators from '../actions/data'
import * as actionCreators from '../actions/translationsUpdateDrawer'
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

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators(actionCreators, dispatch)
// }


// * products will be presented by react-bootstrap-table
var translationTexts = [{
      id: 1,
      type: "Label",
      english: "Hello world!",
      swahili: "Hello world (in Swahili!)",
      french: "Hello world (in French!)",
      questionAppearances: "FQ107, SQ303, SQ304"
  },{
      id: 2,
      type: "Label",
      english: "Hello you!",
      swahili: "Hello you (in Swahili!)",
      french: "Hello you (in French!)",
      questionAppearances: "FQ107, SQ333, SQ204"
  },{
      id: 3,
      type: "Label",
      english: "Hello there!",
      swahili: "Hello there (in Swahili!)",
      french: "Hello there (in French!)",
      questionAppearances: "FQ507, SQ403, SQ304"
  },{
      id: 4,
      type: "Hint",
      english: "Hello friend!",
      swahili: "Hello friend (in Swahili!)",
      french: "Hello friend (in French!)",
      questionAppearances: "FQ227, SQ303, SQ304"
  },{
      id: 5,
      type: "Label",
      english: "Hello gov'na!",
      swahili: "Hello gov'na (in Swahili!)",
      french: "Hello gov'na (in French!)",
      questionAppearances: "FQ107, SQ303, SQ234"
  },{
      id: 6,
      type: "Message Constraint",
      english: "Hello hello!",
      swahili: "Hello hello (in Swahili!)",
      french: "Hello hello (in French!)",
      questionAppearances: "FQ186, SQ303, SQ994"
  },{
      id: 7,
      type: "Label",
      english: "Hello to you!",
      swahili: "Hello to you (in Swahili!)",
      french: "Hello to you (in French!)",
      questionAppearances: "FQ111, SQ222, SQ304"
  }]

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
        const token = this.props.token
        try {
            {}
            this.props.fetchProtectedData(token)
        } catch (e) {
            {}
            console.log(e)
        }
    }

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
                <h1>{this.props.title}</h1>
                {/*<BootstrapTable data={translationTexts} selectRow={selectRowProp} options={options} striped={true} hover={true} pagination={true} columnFilter={true} search={true} clearSearch={true} insertRow={true} exportCSV={true} bordered={false} height="100%" maxHeight={300}>*/}
                {/*<BootstrapTable data={translationTexts} selectRow={selectRowProp} striped={true} hover={true} pagination={true} columnFilter={true} search={true} clearSearch={true} insertRow={true} exportCSV={true} bordered={false} height="100%" maxHeight={300}>*/}
                <BootstrapTable data={translationTexts} options={this.options} striped={true} hover={true} pagination={true} columnFilter={true} search={true} clearSearch={true} insertRow={true} exportCSV={true} bordered={false} height="100%" maxHeight={300}>
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
    fetchProtectedData: React.PropTypes.func,
    // loaded: React.PropTypes.bool,
    // userName: React.PropTypes.string,
    data: React.PropTypes.any,
    // token: React.PropTypes.string,
    open: React.PropTypes.bool,
    openTranslationsUpdateDrawer: React.PropTypes.func,
    setUpdateForm: React.PropTypes.func
}
