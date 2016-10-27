import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../actions/translationsUpdateDrawer'
import RightNav from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';

function mapStateToProps(state) {
    return {
        open: state.translationsUpdateDrawer.translationUpdateDrawerOpenState
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

    //TODO: Make this work.
    // handleClickOutside() {
    //     this.setState({
    //         open: false,
    //     });
    // }


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
                        <h1>Closed</h1>
                        <button onClick={(e) => this.openDrawer(e)}>Click to open me.</button>
                    </div>
                    :
                    <div>
                        <h1>Open</h1>
                        <button onClick={(e) => this.closeDrawer(e)}>Click to close me.</button>
                        <RightNav openSecondary={true} zDepth={3}/>
                        {/*<RightNav openSecondary={true} width="30%" zDepth={3}/>*/}
                    </div>
                }
            </div>
        )
    }
}


TranslationsUpdateDrawer.propTypes = {
    open: React.PropTypes.bool,
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