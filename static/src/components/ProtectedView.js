import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../actions/data'
import TranslationTable from './TranslationTableComponent.js'
import TranslationsUpdateDrawer from './TranslationsUpdateDrawerComponent.js'
// Needed for 'RightNav', which I should probably put in its own component and maybe call 'UpdatePane'
//TODO: Update Pane - The following two need to be uncommented when ready to work on this.
// import RightNav from 'material-ui/Drawer'
// import Divider from 'material-ui/Divider'
//Not sure if I need these yet for the 'update' drawer/pane.
// import { browserHistory } from 'react-router'



function mapStateToProps(state) {
    return {
        data: state.data,
        token: state.auth.token,
        loaded: state.data.loaded,
        isFetching: state.data.isFetching,
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch)
}

@connect(mapStateToProps, mapDispatchToProps)
export default class ProtectedView extends React.Component {
    componentDidMount() {
        try {
            this.fetchData()
        } catch (e) {
            //pass
            console.log(e)
        }

    }

//TODO: Data - Fetch translation data from server. Both this function and in fetchData.
//     fetchProtectedData(token) {
//         try {
//         passing()
//         } catch (e) {
//         // pass
// }
//     }

    fetchData() {
        try {
            const token = this.props.token
            // this.props.fetchProtectedData(token)
            console.log(token)
        } catch (e) {
            //pass
            console.log(e)
        }

    }

    //noinspection JSMethodCanBeStatic
    render() {
        return (
            <div>
                {/*TODO: Fix lazy loading*/}
                {/*{!this.props.loaded*/}
                    {/*Note: For some reason this still shows even when loaded.*/}
                    {/*? <h1>Loading data...</h1>*/}
                    {/*:*/}
                    <div>
                        {/*<h1>Welcome back,&nbsp*/}
                            {/*{this.props.userName}!</h1>*/}
                        {/*Note: The below line doesn't work at the moment.*/}
                        {/*<h1>{this.props.data.data.email}</h1>*/}
                    </div>
                {/*}*/}
                {/*Note - This height tag is here as a placeholder for debugging tabel height issues.*/}
                {/*<div style={{height: "100%"}}>*/}
                <TranslationsUpdateDrawer/>
                <div>
                    {/*Visible to: */}
                    {/*This one should inherit from the base translation table and should have an extra column for 'status'. Such as 'new' or 'rejected'*/}
                    <TranslationTable title="Translations Needed"/>
                </div>
                <div>
                    {/*Visible to: */}
                    <TranslationTable title="Pending Approval" />
                </div>
                <div>
                    {/*Visible to: */}
                    <TranslationTable title="Approved"/>
                </div>



                {/*TODO: Update Pane - Make sure this opens correctly.*/}
                {/*<RightNav open={this.state.open} openSecondary={true}>*/}
                {/*<RightNav open={true} openSecondary={true}>*/}
                {/*The above two do not work at the moment, but the top one is ideal. The following line does currentlyw ork though.*/}
                {/*<RightNav openSecondary={true}>*/}
                        {/*TODO: Update Pane - Uncomment from here whenever permissions are in place. */}
                        {/*Conditional Authority Section */}
                        {/*Later on, change this logic to something like: !this.props.hasAuthority*/}
                        {/*It should not appear when the translator is clicking the pending approval button. Or perhaps the form options should just be different so they can edit submission, but not approve.*/}
                        {/* When this is ready, will* need to place within the {} object with below.*/}

                        {/*!this.props.isAuthenticated ?*/}
                            {/*<div>*/}
                                {/*<p>*/}
                                    {/*You do not have sufficient permissions to update */}
                                {/*</p>*/}
                            {/*</div>*/}
                            {/*:*/}

                    {/*TODO: Update Pane - Finish adding other pages first, then tackle this.*/}
                    {/*{*/}
                            {/*<div>*/}
                                {/*<p>*/}
                                    {/*Edit translation.*/}
                                {/*</p>*/}
                                {/*<Divider />*/}
                                    {/*Placeholder text for form.*/}
                            {/*</div>*/}
                    {/*}*/}
                {/*</RightNav>*/}


            </div>
        )
    }
}

ProtectedView.propTypes = {
    // fetchProtectedData: React.PropTypes.func,
    loaded: React.PropTypes.bool,
    userName: React.PropTypes.string,
    data: React.PropTypes.any,
    token: React.PropTypes.string,
}














//TODO: Update Pane - Figure out what else of this I need.

// import * as actionCreators from '../../actions/auth'
//
// function mapStateToProps(state) {
//     return {
//         token: state.auth.token,
//         userName: state.auth.userName,
//         isAuthenticated: state.auth.isAuthenticated,
//     }
// }
//
// function mapDispatchToProps(dispatch) {
//     return bindActionCreators(actionCreators, dispatch)
// }
//
// @connect(mapStateToProps, mapDispatchToProps)
// export class Header extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             open: false,
//         }
//
//     }
//
//     dispatchNewRoute(route) {
//         browserHistory.push(route)
//         this.setState({
//             open: false,
//         })
//
//     }
//
//
//     handleClickOutside() {
//         this.setState({
//             open: false,
//         })
//     }
//
//
//     logout(e) {
//         e.preventDefault()
//         this.props.logoutAndRedirect()
//         this.setState({
//             open: false,
//         })
//     }
//
//     openNav() {
//         this.setState({
//             open: true,
//         })
//     }
//
//     render() {
//         return (
//             <p></p>
//         )
//     }
// }
//
// Header.propTypes = {
//     logoutAndRedirect: React.PropTypes.func,
//     isAuthenticated: React.PropTypes.bool,
// }
