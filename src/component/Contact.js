import React from 'react';
import { Container, Row } from 'react-bootstrap';
import {FaFacebookSquare, FaWhatsappSquare, FaTwitterSquare, FaLinkedin, FaInstagramSquare, FaSnapchatSquare} from 'react-icons/fa'
import { BsDiscord } from 'react-icons/bs';
import {ImMail} from 'react-icons/im'

const Contact = () => {
    return (
        <div style={{ position: 'absolute',left:'50%', top:'50%', transform:'translate(-50%,-50%'}}>
                    <h2>Contact Us</h2>

                    <h3><a style={{ textDecoration: 'none' }} href="https://mail.google.com/mail/u/?authuser=blackcap10210@gmail.COM"><ImMail/>Mail</a></h3>
                    <h3><a style={{ textDecoration: 'none' }} href="https://www.facebook.com/ashikul2222"><FaFacebookSquare/>Facebook</a></h3>
                    <h3><a style={{ textDecoration: 'none' }} href="#"><FaTwitterSquare/>Twitter</a></h3>
                    <h3><a style={{ textDecoration: 'none' }} href="#"><FaInstagramSquare/>Instagram</a></h3>
                    <h3><a style={{ textDecoration: 'none' }} href="#"><FaSnapchatSquare/>Snapchat</a></h3>
                    <h3><a style={{ textDecoration: 'none' }} href="#"><FaLinkedin/>LinkedIn</a></h3>
                    <h3><a style={{ textDecoration: 'none' }} href="#"><BsDiscord/>Discord</a></h3>
                    <h3><a style={{ textDecoration: 'none' }} href="#"><FaWhatsappSquare/>Whatsapp</a></h3>
        </div>
    );
};

export default Contact;