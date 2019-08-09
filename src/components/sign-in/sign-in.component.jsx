import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from  '../custom-button/custom-button.component';
import {signInWithGoogle} from '../../firebase/firebase.utils';
class SignIn extends React.Component{
  constructor(){
    super()
    this.state = {
       email: "",
       password: ""
    }
  }
  hndleSubmit = event =>{
    event.preventDefault()
   this.setState({
     email: "",
     password: ""
   })
  }
  handleChange = (event) =>{
    const {value, name} = event.target
    this.setState({
      [name]:value
    })
  }
  render(){
    return(
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign with your e-mail and password</span>
        <form onSubmit={this.hndleSubmit}>
          <FormInput 
              name="email"
              type="email"
              value={this.state.email}
              required
              handleChange={this.handleChange}
              label="email"
              />
          <FormInput 
              name="password"
              value={this.state.password}
              type="password"
              required
              handleChange={this.handleChange}
              label="password"
              />
            <div className='buttons'>
          <CustomButton type='submit'>Sign in</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>{" "}Sign in with Google {" "}</CustomButton>
            </div>
        </form>
      </div>
    )
  }
}

export default SignIn;