import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import Navbar from 'react-bootstrap/Navbar';

const Navigationbar = ({name,isAdmin}) => {
    const handleLogOut = () =>{
      signOut(auth).then(() => {
        window.location.reload();
      }).catch((error) => {
        
      });
    }

    return (
        <>
          <Navbar className='bg-dark vw-80'>
            <Container className="justify-space-between">
            <Navbar.Brand className='text-warning fs-3'>T A P I N</Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
                <Link to="/">
                  <Button className='btn btn-success mx-1'><b>Home</b></Button>
                </Link>
                <Link to="/starttest">
                  <Button className='btn btn-success mx-1'><b>Practice</b></Button>
                </Link>
                {
                  isAdmin===true?<Link to="/addText">
                  <Button className='btn btn-success mx-1'><b>AddText</b></Button>
                </Link>:null
                }

                <Link to="/contact">
                  <Button className='btn btn-success mx-1'><b>Contact</b></Button>
                </Link>
                {
                  name===""?(<>
                  <Link to="/signup">
                  <Button className='btn btn-success mx-1'><b>Register</b></Button>
                </Link>
                  <Link to="/login">
                  <Button className='btn btn-success mx-1'><b>LogIn</b></Button>
                </Link>
                  </>) :
                  (<>
                  <Link to="/">
                  <Button className='btn btn-success mx-1' onClick={handleLogOut}><b>Logout</b></Button>
                </Link>
                  <h2 className='mt-2 ms-2 text-primary'><b>{name}</b></h2>
                  </>)
                }
            </Navbar.Collapse>
            </Container>
          </Navbar>  
        </>
    );
};

export default Navigationbar;