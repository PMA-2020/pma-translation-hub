import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../actions/translationsUpdateDrawer'
// # React-Addons-Update Method of Input Control
// import update from 'react-addons-update'


function mapStateToProps(state) {
    return {
        id: state.translationsUpdateDrawer.updateFormID,
        newID: state.translationsUpdateDrawer.newUpdateFormID,
        formData: state.translationsUpdateDrawer.updateFormData
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch)
}


@connect(mapStateToProps, mapDispatchToProps)
export default class TranslationsUpdateForm extends React.Component {
  // # React 'Controlled Component' model
  // # https://facebook.github.io/react/docs/forms.html#controlled-components
  //   constructor(props) {
  //       super(props);
  //       this.state = {value: ''}
  //
  //       this.handleChange = this.handleChange.bind(this);
  //       this.handleSubmit = this.handleSubmit.bind(this);
  // }

    componentDidMount() {
        try {
            {}
        } catch (e) {
            console.log(e)
        }

    }

    getID() {
        return this.props.id
    }

    handleSubmit() {

    }

    handleChange(e, fieldID, oldValue) {
        var userEnteredValue = e.target.value
        //This code does the same thing.
        // var userEnteredValue = document.getElementById(fieldID).value
        this.props.reportUpdateFormDirty()
        this.props.updateTheUpdateFormData(this.getID(), fieldID, userEnteredValue)

        //TODO: Replace update() with something more in line with Redux.
        // Any way to use 'e' as devined in 'onChange={(e)'? / IE: this.setState({ value: e.target.value })  [Note: Tried and didn't work.]
        return update(value)
    }

  // # React 'Controlled Component' model
  //   handleChange(e) {
  //     this.setState({ value: e.target.value })
  // }

    //TODO: For-loop to generate appropriate number of fields for each language. Should have a 'languages' property within 'data'.
    //TODO: Get actual data to dynamically load in here.
    render() {
        // # Dynamically load language fields.
        var languages = []
        var languageField = (data, id, label) => {
            return (
                <div className="form-group">
                  <label>{label}</label>
                  <textarea className="form-control" id={id} rows="3" placeholder={label} value={data} onChange={(e) => this.handleChange(e, id, data)}/>
                </div>
            )
        }
        Object.entries(this.props.formData.languages).forEach(([key]) => {
            var label = _.capitalize(key) + ' Text'
            languages.push(languageField(this.props.formData.languages[key], key, label))
        })


        //noinspection CheckTagEmptyBody
        return (
            <div>
                <form id={"TranslationUpdateForm-"+this.getID()} role="form" method='POST' action="" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                      <label>Translation Type</label>
                        <input type="text" id='type' className="form-control" placeholder='Translation Type'
                               defaultValue={this.props.formData.type} value={this.props.formData.type}
                               onChange={(e) => this.handleChange(e, 'type', this.props.formData.type)}/>
                        {/*Previously Iteration */}
                        {/*<input type="text" id='updateForm_Type' className="form-control" placeholder='Translation Type' defaultValue={this.props.formData.type} value={this.props.formData.type} onChange={(e) => update(this.props.formData.type)}/>*/}

                      {/*TODO: use 'update' from React-Addons-Update to make state changes the 'React' way. Using 'apply', 'set', or whatever*/}
                      {/*# React-Addons-Update Method of Input Control*/}
                      {/*<input type="text" className="form-control" placeholder='Translation Type' value={this.props.formData.type} onChange={(e) => update(this.props.formData.type, {$apply: function(x) {return "test";}})}/>*/}
                      {/*React 'Controlled Components' method*/}
                      {/*<input type="text" className="form-control" placeholder='Translation Type' value={this.state.value} onChange={this.handleChange}/>*/}
                      {/*My other attempts: */}
                      {/*<input type="text" className="form-control" placeholder='Translation Type' defaultValue={this.props.formData.type} onChange={this.setFormData}/>*/}
                      {/*<input type="text" className="form-control" placeholder='Translation Type'  defaultValue={this.props.formData.type} value={this.props.formData.type}/>*/}
                    </div>
                    <div className="form-group">
                      <label>Question Appearances</label>
                      <input type="text" id="appearances" className="form-control" placeholder='Question Appearances'
                             value={this.props.formData.appearances}
                             onChange={(e) => this.handleChange(e, 'appearances', this.props.formData.appearances)} />
                    </div>
                    {languages}
                    {/*<button type="submit" action="" className="btn btn-primary" style={{background: "#00bcd4"}}>Submit</button>*/}
                    <button type="submit" action="" className="btn btn-primary">Submit</button>
                </form>

            </div>
        )
    }
}


TranslationsUpdateForm.propTypes = {
    id: React.PropTypes.number,
    newID: React.PropTypes.number,
    formData: React.PropTypes.object
}
