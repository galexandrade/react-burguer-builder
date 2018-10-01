import React from 'react';
import classes from './Logo.css';
import burguerLogo from '../../assets/images/logo.png';

const toolbar = (props) => (
    <div className={classes.Logo}>
        <img alt="Logo" src={burguerLogo}/>
    </div>
);

export default toolbar;