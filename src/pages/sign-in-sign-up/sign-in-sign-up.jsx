import React from 'react';
import SignIn from "../../components/sign-in/sign-in";
import SignUp from "../../components/sign-up/sign-up";
// import './sign-in-sign-up.scss'
import Grid from "@material-ui/core/Grid";
const SignInSignUp = () => {
    return (
        <Grid container className='sign-in-sign-up' direction='row' justify='space-around' alignItems='center' spacing={4}>
            <Grid item xs={12} md={6}> <SignIn /></Grid>
            <Grid item xs={12} md={6}><SignUp /></Grid>
        </Grid>
    );
};

export default SignInSignUp;
