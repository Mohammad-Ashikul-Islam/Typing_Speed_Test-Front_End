import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import InputControl from './InputControl';
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase"
import { Card } from 'react-bootstrap';

function LogIn(){
    const navigate = useNavigate();
    const [values,setValues] = useState({
        email: "",
        pass: "",
    });

    const [errorMsg, setErrorMsg] = useState("");
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

    const handleSubmission = () =>{ 
        if(!values.email || !values.pass){
            setErrorMsg("Fill all fields");
            return;
        }
        setErrorMsg("")
        signInWithEmailAndPassword(auth, values.email, values.pass)
        .then( async(res) => {
            setSubmitButtonDisabled(false);
            
            navigate("/");
        })
        .catch( (err) => {
            setSubmitButtonDisabled(false)
            setErrorMsg(err.message)
        });
    }


    return (
        <div className='d-flex justify-content-center m-3 p-3'>
            <b>
            <Card className='d-flex justify-content center bg-secondary text-dark'>
                <h3 className='text-center text-warning'>LogIn</h3>
                
                <div className='d-flex justify-content-center m-1 p-1'>
                    <InputControl placeholder="Enter email address"  onChange={ (event) => setValues( (prev) => ({ ...prev, email: event.target.value }) )} />
                </div>

                <div className='d-flex justify-content-center m-1 p-1'>
                    <InputControl type='password' placeholder="Enter your password" onChange={ (event) => setValues( (prev) => ({ ...prev, pass: event.target.value }) )} />

                </div>
                
                <div>
                <b>{errorMsg}</b>
                    
                    <div className='d-flex justify-content-center m-1 p-1'>
                        <button className='bg-dark text-white' disabled={submitButtonDisabled} onClick={handleSubmission}><b>LogIn</b></button>
                    </div>
                    <p className='d-flex justify-content-center m-1 p-1 text-white'>
                        Already have an account?{" "}
                        <span>
                            <Link className='text-decoration-none text-warning' to='/signup'><b>SignUp</b></Link>
                        </span>
                    </p>
                </div>
            </Card>
            </b>
        </div>
    );
};

export default LogIn;