import React from 'react';
import classes from './Logo.css';
import burguerLogo from '../../assets/images/logo.png';

const toolbar = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={burguerLogo} alt="Logo"/>
    </div>
);

export default toolbar;