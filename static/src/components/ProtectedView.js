import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/data';
import TranslationTable from './TranslationTableComponent.js';

function mapStateToProps(state) {
    return {
        data: state.data,
        token: state.auth.token,
        loaded: state.data.loaded,
        isFetching: state.data.isFetching,
    };
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

@connect(mapStateToProps, mapDispatchToProps)
export default class ProtectedView extends React.Component {
    componentDidMount() {
        try {
            this.fetchData();
        } catch (e) {
            //pass
            console.log(e);
        }

    }

//     fetchProtectedData(token) {
//         try {
//         passing();
//         } catch (e) {
//         // pass
// }
//     }

    fetchData() {
        //TODO: Fetch translation data from server.
        try {
            const token = this.props.token;
            // this.props.fetchProtectedData(token);
        } catch (e) {
            //pass
            console.log(e);
        }

    }

    render() {
        return (
            <div>
                {/*{!this.props.loaded*/}
                    {/*Note: For some reason this still shows even when loaded.*/}
                    {/*? <h1>Loading data...</h1>*/}
                    {/*:*/}
                    <div>
                        {/*<h1>Welcome back,&nbsp;*/}
                            {/*{this.props.userName}!</h1>*/}
                        {/*Note: The below line doesn't work at the moment.*/}
                        {/*<h1>{this.props.data.data.email}</h1>*/}
                    </div>
                {/*}*/}
                <TranslationTable/>
                <TranslationTable/>
                <TranslationTable/>
            </div>
        );
    }
}

ProtectedView.propTypes = {
    // fetchProtectedData: React.PropTypes.func,
    loaded: React.PropTypes.bool,
    userName: React.PropTypes.string,
    data: React.PropTypes.any,
    token: React.PropTypes.string,
};
