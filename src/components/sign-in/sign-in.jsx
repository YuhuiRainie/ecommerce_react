import React, {Component} from 'react';
import './sign-in.scss'
import FormInput from "../form-input/form-input";
import Button from "../button/button";
import {auth,signInWithGoogle} from "../../firebase/firebase.utils";



class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password:''
        }
    }
    handleSubmit = async event => {
        event.preventDefault();
        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
        } catch (error) {
            alert(error.message);
        }
    }
    handleChange = event => {

        const name= event.target.name;
        const value = event.target.value;
        this.setState({[name]:value})
    }
    render() {
        return (
            <div  className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' type='email' value={this.state.email} required handleChange={this.handleChange} label='email' />
                    <FormInput name='password' type='password' value={this.state.password} required  handleChange={this.handleChange} label='password' />
                    <div className='buttons'>
                        <Button type='submit' value='Submit Form'>SIGN IN</Button>
                        <Button type="submit" value='Submit Form' onClick={signInWithGoogle} isGoogleSignIn >SIGN IN WITH GOOGLE</Button>
                    </div>
                </form>

            </div>
        );
    }
}

export default SignIn;
