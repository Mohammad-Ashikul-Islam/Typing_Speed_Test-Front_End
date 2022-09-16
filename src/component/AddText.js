import React from 'react';
import axios from 'axios';
import { Button, Card } from 'react-bootstrap';

const AddText = () => {
    let textareaText;
    const handleChange = (e) => {
        e.preventDefault();
        textareaText = e.target.value;
    }
    const postMessage = async () =>{
        axios({
            method: 'post',
            url: "http://localhost:5000/api/add",
            headers: {}, 
            data: {"text": textareaText}
          });
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        postMessage();
        alert("Added Text Sucessfully")
        window.location.reload()
    }

    return (
        <div className="d-flex justify-content-md-center align-items-center mt-2">
            <Card className='border-0 bg-secondary'>
                <Card.Body>
                <form onSubmit={handleSubmit}>
                    <textarea type='text' className="d-flex justify-content-md-center align-items-center form-control col-xs-12" rows="7" cols="50" onChange={handleChange} placeholder='Enter your text here....'>

                    </textarea>
                    <br/>
                    <Button type='submit' className='bg-dark border border-primary text-white d-flex justify-content-md-center align-items-center'><b>Sumbit</b></Button>
                </form>
                </Card.Body>
            </Card>
        </div>
    );
};

export default AddText;