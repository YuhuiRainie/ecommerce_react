import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const WithSpinner = WrapperedComponent => {
    const spinner = ({isLoading,...otherProps}) => {
    return isLoading? (
        <div style={{height:'400px',display: 'flex', justifyContent: 'center', alignItems:'center'}}> <CircularProgress size={70} /></div>
    ):(
        <WrapperedComponent {...otherProps} />
    )
};
    return spinner;
}
export default WithSpinner;
