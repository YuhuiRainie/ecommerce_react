import React,{useState} from 'react';
import FormInput from "../form-input/form-input";
import Button from "../button/button";
import './sign-up.scss'
import {auth,createUserProfileDocument} from "../../firebase/firebase.utils";
import {connect} from 'react-redux'
import {signUpStart} from '../../redux/user/user-action'




const SignUp = ({signUpStart}) => {
    const [userCredentials,setUserCredentials] =useState ({
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
    })
    const {displayName,email,password,confirmPassword} = userCredentials
   const handleSubmit = async event => {
    // Create data in the database
        event.preventDefault();
        // const {signUpStart} = this.props
        if(password !== confirmPassword) {
            alert("Password do not match!")
            return
        }
        signUpStart(displayName,email,password)
        // this.setState({
        //             displayName:'',
        //             email:'',
        //             password:'',
        //             confirmPassword:''
        //         })
        // try {
        //     const {user} =await  auth.createUserWithEmailAndPassword(email,password)
        //     await createUserProfileDocument(user,{displayName})
        //     this.setState({
        //         displayName:'',
        //         email:'',
        //         password:'',
        //         confirmPassword:''
        //     })
        // } catch (e) {
        //     alert(e.message)
        // }
    }

   const handleChange = event => {
        const {name,value} = event.target;
        setUserCredentials({...userCredentials,[name]:value})
    }


        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with email and password</span>
                <form className='sign-up-form' onSubmit={handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={handleChange}
                        label='Display Name'
                        required
                    />
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        onChange={handleChange}
                        label='Email'
                        required
                    />
                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={handleChange}
                        label='Password'
                        required
                    />
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={handleChange}
                        label='Confirm Password'
                        required
                    />
                    <Button type='submit' >SIGN UP</Button>
                </form>
            </div>
        );
    }

const mapDispatchToProps = dispatch => ({
    signUpStart:(displayName,email,password,confirmPassword) => dispatch(signUpStart({displayName,email,password,confirmPassword}))
})
export default connect(null,mapDispatchToProps)(SignUp);
