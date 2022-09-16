import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ShowResult from './ShowResult';
import Timer from './Timer';
import TypingTest from './TypingTest';

const TypingTestContainer = () => {
    let [flag,setflag] = useState(false);
    return (
        <>
          <Container>
            <Row className='text-center justify-content-center my-3'>
              {
              flag===false ? (<div className='d-flex'><Timer flag={flag} setflag={setflag}/>
              <TypingTest/></div>) : <ShowResult/>
              } 
            </Row>
          </Container> 
        </>
    );
};

export default TypingTestContainer;