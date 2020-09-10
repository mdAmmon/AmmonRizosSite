import React from 'react';

import './withSpinner.css';

const WithSpinner = WrappedComponent => ({isLoading, ...otherProps}) =>{
    return isLoading? (
    <div className="spinner-overlay">
        <div className="spinner-container">

        </div>
    </div>
    ): <WrappedComponent {...otherProps}/>;
}

export default WithSpinner;

