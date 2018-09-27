import React from 'react';
import Wrapper from '../../hoc/Wrapper';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const layout = (props) => (
    <Wrapper>
        <Toolbar />
        <SideDrawer/>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Wrapper>
);

export default layout;