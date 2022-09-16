import { Button } from 'react-bootstrap';
import React, { useState } from 'react';
import TypingTestContainer from './TypingTestContainer';
import { Provider } from 'react-redux';
import store from '../Redux/Store/store';

const StartTestButton = () => {
    let [clicked,setClicked] = useState(false);
    const handleClicked = () =>{
        //setRedux to initialstate here first
        //now toggle clicked
        setClicked(true);
    }

    return (
        <>
            <Provider store={store}>
            {clicked===false?(<div className='text-center mt-5 p-2'><Button className='px-5 py-3 fs-3' style={{ backgroundColor:'black', color:'LightBlue', margin:'5px', padding:'10px', border:'2px solid yellow', boxShadow: '2px 2px black'}} onClick={handleClicked}><b>Start Test</b></Button>{' '}</div>) : <TypingTestContainer/> }
            </Provider>
        </>
    );
};

export default StartTestButton;