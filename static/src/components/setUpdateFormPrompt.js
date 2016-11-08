import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../actions/translationsUpdateDrawer'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
// import RaisedButton from 'material-ui/RaisedButton';

function mapStateToProps(state) {
    return {
        previousID: state.translationsUpdateDrawer.updateFormID,
        // newID: state.translationsUpdateDrawer.newUpdateFormID,
        open: state.translationsUpdateDrawer.setUpdateFormPromptOpenState
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch)
}


@connect(mapStateToProps, mapDispatchToProps)
export default class SetUpdateFormPrompt extends React.Component {
    constructor(props) {
        super(props)
        // this.closeAndSetUpdateForm = this.closeAndSetUpdateForm.bind(this);
    }

    getID() {
        return this.props.id
    }


    render() {
        const actions = [
          <FlatButton
            label="Cancel"
            primary={true}
            onTouchTap={this.props.closeSetUpdateFormPrompt}
          />,
            // label="Go Back"

          <FlatButton
            label="Proceed"
            primary={true}
            keyboardFocused={true}
            onTouchTap={this.props.closeAndSetUpdateForm}
            />
        ]

        return (
          <div>
            <Dialog
              title="Clear changes?"
              actions={actions}
              modal={false}
              open={this.props.open}
              onRequestClose={this.props.closeSetUpdateFormPrompt}
            >
              You have made changes to translation {this.props.previousID} that have not yet been submitted. Selecting a new else
                translation for modification will clear these changes. Are you sure you wish to proceed?
            </Dialog>
          </div>
        )
     }
}


SetUpdateFormPrompt.propTypes = {
    open: React.PropTypes.bool,
    previousID: React.PropTypes.number
    // id: React.PropTypes.number,
    // newID: React.PropTypes.number,
}
