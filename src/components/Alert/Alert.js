import React from 'react';
import { createAlert } from 'react-redux-alerts';
 
const Alert = ({ message, close }) => (
    <div className='Alert'>
        {message}
        <button onClick={close}> Click to Dismiss me </button>
    </div>
);
 
export default createAlert({
    alertName: 'Alert'
})(Alert);