import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h3>these are the terms</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit laboriosam impedit voluptas perspiciatis, eligendi maxime. Fugit nisi corrupti eveniet ipsa saepe iure dolor. Facilis, quas. Eaque optio fugit saepe voluptatem!</p>
            <p><Link to="/register">go back to register</Link></p>
        </div>
    );
};

export default Terms;