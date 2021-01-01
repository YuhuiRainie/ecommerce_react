import React from 'react';
import './button.scss'

const Button = ({children,isGoogleSignIn, ...otherProps}) => {

    return (

        <div className={`${isGoogleSignIn?'google-sign-in':''} custom-button` }{...otherProps}>
            {children}
        </div>
    );
};

export default Button;
