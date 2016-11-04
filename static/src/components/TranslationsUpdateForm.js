import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../actions/translationsUpdateDrawer'
// # React-Addons-Update Method of Input Control
// import update from 'react-addons-update'


function mapStateToProps(state) {
    return {
        id: state.translationsUpdateDrawer.updateFormID,
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

  // # React 'Controlled Component' model
  //   handleChange(e) {
  //       this.setState({ value: e.target.value })
  // }

    //TODO: For-loop to generate appropriate number of fields for each language. Should have a 'languages' property within 'data'.
    //TODO: Get actual data to dynamically load in here.
    render() {
        // # Dynamically load language fields.
        var languages = []
        var languageField = (data, label) => {
            return (
                <div className="form-group">
                  <label>{label}</label>
                  <textarea className="form-control" id="exampleTextarea" rows="3" placeholder={label} value={data} onChange={(e) => update(data)}/>
                </div>
            )
        }
        Object.entries(this.props.formData.languages).forEach(([key]) => {
            var label = _.capitalize(key) + ' Text'
            languages.push(languageField(this.props.formData.languages[key], label))
        })


        //noinspection CheckTagEmptyBody
        return (
            <div>
                <form id={"TranslationUpdateForm-"+this.props.id} role="form" method='POST' action="">
                    <div className="form-group">
                      <label>Translation Type</label>

                      <input type="text" className="form-control" placeholder='Translation Type' value={this.props.formData.type} onChange={(e) => update(this.props.formData.type)}/>
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
                      <input type="text" className="form-control" placeholder='Question Appearances' value={this.props.formData.questionAppearances} onChange={(e) => update(this.props.formData.questionAppearances)} />
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
    formData: React.PropTypes.object
}
