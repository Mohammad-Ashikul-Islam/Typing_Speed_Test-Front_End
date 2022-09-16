import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import InputControl from './InputControl';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { auth } from "../firebase"
import { Card } from 'react-bootstrap';

function SignUp(){
    const navigate = useNavigate();
    const [values,setValues] = useState({
        name: "",
        email: "",
        pass: "",
    });

    const [errorMsg, setErrorMsg] = useState("");
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

    const handleSubmission = () =>{ 
        if(!values.name || !values.email || !values.pass){
            setErrorMsg("Fill all fields");
            return;
        }
        setErrorMsg("")
        createUserWithEmailAndPassword(auth, values.email, values.pass)
        .then( async(res) => {
            setSubmitButtonDisabled(false);
            const user = res.user;
            await updateProfile(user, {
                displayName: values.name
            })
            navigate("/");
            window.location.reload();
        })
        .catch( (err) => {
            setSubmitButtonDisabled(false)
            setErrorMsg(err.message)
        });
    }

    return (
        <div className='d-flex justify-content-center m-3 p-3'>
            <Card className='d-flex justify-content center bg-secondary text-dark'>
                <h3 className='text-center text-warning'>SignUp</h3>

                <div className='d-flex justify-content-center m-1 p-1'>
                    <InputControl placeholder="Enter your name" onChange={ (event) => setValues( (prev) => ({ ...prev, name: event.target.value }) )} />
                </div>
                
                <div className='d-flex justify-content-center m-1 p-1'>
                <InputControl placeholder="Enter email address"  onChange={ (event) => setValues( (prev) => ({ ...prev, email: event.target.value }) )}/>
                </div>

                <div className='d-flex justify-content-center m-1 p-1'>
                <InputControl type='password' placeholder="Enter your password" onChange={ (event) => setValues( (prev) => ({ ...prev, pass: event.target.value }) )} />
                </div>

                <div>
                    <b>{errorMsg}</b>
                    
                    <div className='d-flex justify-content-center m-1 p-1'>
                        <button className='bg-dark text-white' onClick={handleSubmission} disabled={submitButtonDisabled}><b>SignUp</b></button>
                    </div>
                    
                    <p className='d-flex justify-content-center m-1 p-1 text-white'>
                        Already have an account?{" "}
                        <span>
                            <Link className='text-decoration-none text-warning' to='/login'><b>LogIn</b></Link>
                        </span>
                    </p>
                </div>
            </Card>
        </div>
    );
};

export default SignUp;