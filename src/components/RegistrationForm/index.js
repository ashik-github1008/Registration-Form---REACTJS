// Write your JS code here
import './index.css'
import {Component} from 'react'

class RegistrationForm extends Component {
  state = {
    isRegistered: false,
    firstName: '',
    lastName: '',
    isRequiredFirstName: false,
    isRequiredLastName: false,
  }

  submitForm = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state

    if (!firstName || !lastName) {
      if (!firstName) {
        this.setState({isRequiredFirstName: true, isRegistered: false})
      }
      if (!lastName) {
        this.setState({isRequiredLastName: true, isRegistered: false})
      }
      if (!firstName && !lastName) {
        this.setState({
          isRequiredFirstName: true,
          isRequiredLastName: true,
          isRegistered: false,
        })
      }
    } else {
      this.setState({isRegistered: true})
    }
  }

  onClickSubmitAnotherResponse = () => {
    this.setState({isRegistered: false, firstName: '', lastName: ''})
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  onBlurFirstName = event => {
    const {firstName} = this.state
    if (firstName === '') {
      this.setState({isRequiredFirstName: true})
    } else {
      this.setState({isRequiredFirstName: false})
    }
  }

  onBlurLastName = event => {
    const {lastName} = this.state
    if (lastName === '') {
      this.setState({isRequiredLastName: true})
    } else {
      this.setState({isRequiredLastName: false})
    }
  }

  renderFirstNameField = () => {
    const {firstName, isRequiredFirstName} = this.state
    const requiredInputStyle = isRequiredFirstName ? 'requiredInputStyle' : ''
    return (
      <>
        <label className="input-label" htmlFor="first-name">
          FIRST NAME
        </label>
        <input
          type="text"
          id="first-name"
          className={`input-field ${requiredInputStyle}`}
          value={firstName}
          onChange={this.onChangeFirstName}
          onBlur={this.onBlurFirstName}
          placeholder="First name"
        />
        {isRequiredFirstName ? <p className="required-msg">Required</p> : ''}
      </>
    )
  }

  renderLastNameField = () => {
    const {lastName, isRequiredLastName} = this.state
    const requiredInputStyle = isRequiredLastName ? 'requiredInputStyle' : ''
    return (
      <>
        <label className="input-label" htmlFor="lastname">
          LAST NAME
        </label>
        <input
          type="text"
          id="lastname"
          className={`input-field ${requiredInputStyle}`}
          value={lastName}
          onChange={this.onChangeLastName}
          onBlur={this.onBlurLastName}
          placeholder="Last name"
        />
        {isRequiredLastName ? <p className="required-msg">Required</p> : ''}
      </>
    )
  }

  renderSuccessContainer = () => {
    return (
      <div
        className="success-container"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
          alt="success"
          className="mb-3"
        />
        <p className="mb-5">Submitted Successfully</p>
        <button type="button" className="submit-btn" onClick={this.onClickSubmitAnotherResponse}>
          Submit Another Response
        </button>
      </div>
    )
  }

  render() {
    const {isRegistered} = this.state

    return (
      <div className="app-container">
        <div className="main-container">
          <h1 className="heading mb-5">Registration</h1>
          {isRegistered ? (
            this.renderSuccessContainer()
          ) : (
            <form className="form-container" onSubmit={this.submitForm}>
              <div className="input-container mb-3">
                {this.renderFirstNameField()}
              </div>
              <div className="input-container">
                {this.renderLastNameField()}
              </div>
              <div className="submit-btn-container mt-4">
                <button type="submit" className="submit-btn">
                  Submit
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
