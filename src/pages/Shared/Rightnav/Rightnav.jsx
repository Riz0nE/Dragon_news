import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import Qzone from '../Qzone/Qzone';

const Rightnav = () => {
    return (
        <div>
            <h3>Login With</h3>
            <Button className='my-2' variant="outline-primary"><FaGoogle />Login With Google</Button>
            <Button className='mb-3' variant="outline-primary"><FaGithub />Login With Github</Button>
            <div>
                <h3 className='mb-3'>Find Us On</h3>
                <ListGroup>
                    <ListGroup.Item disabled><FaFacebook></FaFacebook>Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter></FaTwitter>Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram></FaInstagram>Instagram</ListGroup.Item>

                </ListGroup>
                <Qzone></Qzone>
            </div>
        </div>
    );
};

export default Rightnav;