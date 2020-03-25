import React from 'react';
import Toolbar from '../../components/UI/Toolbar/Toolbar';
import classes from './Layout.module.scss';

function Layout(props) {
    return(
        <div className={classes.Layout}>
            <div className={classes.ContentWrapper}>
                <Toolbar />
                <main className={classes.Content}>
                    {props.children}
                </main>
            </div>
        </div>
    );
}

export default Layout;