import React from 'react';
import Wrapper from '../../hoc/Wrapper';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = (props) => (
    <Wrapper>
        <Toolbar />
        <main className={classes.Content}>
            {props.children}
        </main>
    </Wrapper>
);

export default layout;