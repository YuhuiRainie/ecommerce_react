import React, {Component,useState} from 'react';
import './sign-in.scss'
import FormInput from "../form-input/form-input";
import Button from "../button/button";
import {auth,signInWithGoogle} from "../../firebase/firebase.utils";
import {googleSignInStart,emailSignInStart} from "../../redux/user/user-action";
import {connect} from 'react-redux'


const SignIn = ({emailSignInStart,googleSignInStart}) =>{
    const [userCredentials,setCredentials] = useState({email:'',password:''})
    const { email, password } = userCredentials;
    const handleSubmit = async event => {
        event.preventDefault();
        // const {emailSignInStart} = this.props

        emailSignInStart(email,password)

        // try {
        //     await auth.signInWithEmailAndPassword(email, password);
        //     this.setState({ email: '', password: '' });
        // } catch (error) {
        //     alert(error.message);
        // }
    }
    const handleChange = event => {

        const name= event.target.name;
        const value = event.target.value;
       setCredentials({...userCredentials,[name]:value})
    }

        // const {googleSignInStart} = this.props
        return (
            <div  className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={handleSubmit}>
                    <FormInput name='email' type='email' value={email} required handleChange={handleChange} label='email' />
                    <FormInput name='password' type='password' value={password} required  handleChange={handleChange} label='password' />
                    <div className='buttons'>
                        <Button type='submit' value='Submit Form'>SIGN IN</Button>
                        <Button type="button" value='Submit Form' onClick={googleSignInStart} isGoogleSignIn >SIGN IN WITH GOOGLE</Button>
                    </div>
                </form>

            </div>
        );
    }

const mapDispatchToProps = dispatch =>({
    googleSignInStart:()=> dispatch(googleSignInStart()),
    emailSignInStart:(email,password) => dispatch(emailSignInStart({email,password}))
})

export default connect(null,mapDispatchToProps)(SignIn);
