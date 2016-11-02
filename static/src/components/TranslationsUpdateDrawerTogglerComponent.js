import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../actions/translationsUpdateDrawer'
import TranslationUpdateDrawer from './TranslationsUpdateDrawerComponent'

function mapStateToProps(state) {
    return {
        open: state.translationsUpdateDrawer.translationUpdateDrawerOpenState
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch)
}


@connect(mapStateToProps, mapDispatchToProps)
export default class TranslationsUpdateDrawerToggler extends React.Component {
    openDrawer(e) {
        e.preventDefault();
        this.props.openTranslationsUpdateDrawer();
    }

    closeDrawer(e) {
        e.preventDefault();
        this.props.closeTranslationsUpdateDrawer();
    }

    render() {
        return (
            <div>
                {!this.props.open
                    ?
                    <div>
                        {/*<h1>Closed</h1>*/}
                        <button onClick={(e) => this.openDrawer(e)}>Update Translations</button>
                    </div>
                    :
                    <div>
                        {/*<h1>Open</h1>*/}
                        <button onClick={(e) => this.closeDrawer(e)}>Close Translation Updater</button>
                        {/*<RightNav openSecondary={true} zDepth={3}/>*/}
                        <TranslationUpdateDrawer title="Update Row"/>
                        {/*<RightNav openSecondary={true} width="30%" zDepth={3}/>*/}
                    </div>
                }
            </div>
        )
    }
}


TranslationsUpdateDrawerToggler.propTypes = {
    openTranslationsUpdateDrawer: React.PropTypes.func,
    closeTranslationsUpdateDrawer:React.PropTypes.func
}


// Reference to Mateiral UI
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