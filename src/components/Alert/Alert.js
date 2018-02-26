import React from 'react';
import { createAlert } from 'react-redux-alerts';
 
const Alert = ({ message, close }) => {
    setTimeout(close, 4000)
    return (
      <div className='alert'>
        {message}    
      </div>
    )
    
};
 
export default createAlert({
    alertName: 'Alert'
})(Alert)