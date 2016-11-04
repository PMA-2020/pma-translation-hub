import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../actions/translationsUpdateDrawer'
import TranslationsUpdateForm from './TranslationsUpdateForm'
import RightNav from 'material-ui/Drawer'
import Divider from 'material-ui/Divider'
// import FontAwesome from 'react-fontawesome'


function mapStateToProps(state) {
    return {
        // open: state.translationsUpdateDrawer.translationUpdateDrawerOpenState,
        rowID: state.translationsUpdateDrawer.updateFormID,
        dataType: state.translationsUpdateDrawer.updateFormDataType
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch)
}


@connect(mapStateToProps, mapDispatchToProps)
export default class TranslationsUpdateDrawer extends React.Component {
    componentDidMount() {
        try {
            {}
        } catch (e) {
            console.log(e)
        }

    }

    //TODO: Make this work. https://github.com/callemall/material-ui/issues/4341
    // handleClickOutside() {
    //     this.setState({
    //         open: false,
    //     });
    // }

    // openDrawer(e) {
    //     e.preventDefault();
    //     this.props.openTranslationsUpdateDrawer();
    // }

    closeDrawer(e) {
        e.preventDefault()
        this.props.closeTranslationsUpdateDrawer()
        // this.setState({ isDrawerOpen: false })
    }

    render() {
        return (
            <div>
                <RightNav openSecondary={true} width="40%" zDepth={3}>
                {/*<RightNav zDepth={3} openSecondary={true} open={this.state.isDrawerOpen} docked={false} className="app-drawer" onRequestChange={this.closeDrawer}>*/}
                {/*<RightNav zDepth={3} openSecondary={true} docked={false} className="app-drawer" onRequestChange={this.closeDrawer}>*/}
                    <div style={{padding: "10px"}}>
                        {/*<div style={{justifyContent: 'flex-end'}}>*/}
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        {/*<div>*/}
                        {/*<div style={{alignItems: 'flex-end'}}>*/}
                            {/*<div style={{float: 'left'}}>*/}
                                {/*<h3 style={{float: 'left'}}>{this.props.title}</h3>*/}
                                {/*<h4 style={{alignItems: 'left'}}>Update Row #{this.props.rowID}</h4>*/}
                                <p style={{alignItems: 'left', verticalAlign: 'bottom'}}><strong>Update Translation {this.props.rowID}</strong> <em>({this.props.dataType})</em></p>
                                {/*{this.props.title}*/}
                            {/*</div>*/}
                            {/*<div style={{float: 'right'}}>*/}
                                {/*<i className="fa fa-times" aria-hidden="true"></i>*/}
                                {/*<FontAwesome className='super-crazy-colors' name='rocket' size='2x' spin style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/>*/}
                                {/*<FontAwesome className='time' name='close' size='2x' style={{float: 'right'}}/>*/}
                                {/*<FontAwesome onClick={(e) => this.closeDrawer(e)} className='time' name='close' size='2x'*/}
                                             {/*style={{alignItems: 'right', verticalAlign: 'middle',*/}
                                             {/*color: 'grey', hoverState:'black', active: 'yellow'*/}
                                             {/*}}/>*/}

                                <p><a href="" style={{hovorColor: "pink", active: "black"}}>
                                    {/*<i className="fa fa-times fa-2x" onClick={(e) => this.closeDrawer(e)} name='close' size='2x'*/}
                                        {/*style={{alignItems: 'right', verticalAlign: 'top', color: 'grey', hoverColor: "pink"}} />*/}
                                    <i className="fa fa-times" onClick={(e) => this.closeDrawer(e)} name='close' size='2x'
                                        style={{alignItems: 'right', verticalAlign: 'middle', paddingTop: '0px', fontSize: "1.2em", color: 'grey', hoverColor: "#00bcd4"}} />
                                </a></p>
                            {/*</div>*/}
                        </div>

                        <Divider/>
                        <br/>

                        <TranslationsUpdateForm/>

                    </div>
                </RightNav>
            </div>
        )
    }
}


TranslationsUpdateDrawer.propTypes = {
    // open: React.PropTypes.bool,
    rowID: React.PropTypes.number,
    dataType: React.PropTypes.string
    // title: React.PropTypes.string
}


// Reference to Material UI
// Drawer.defaultProps = {
//   disableSwipeToOpen: false,
//   docked: true,
//   open: null,
    // Want to use openSecondary
//   openSecondary: false,
//   swipeAreaWidth: 30,
//   width: null,
//   zDepth: 2
// };
// Drawer.contextTypes = {
//   muiTheme: _react.PropTypes.object.isRequired
// };
// exports.default = Drawer;