import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavigationItems.module.scss';
import {FormattedMessage} from 'react-intl';


const navigationItems = () => {
    return (
        <ul className={classes.NavigationItems}>
            <li className={classes.NavigationItem}>
                <NavLink
                    exact={true}
                    activeClassName={classes.active}
                    to="/">
                        <FormattedMessage id='common.toolbar.searchPhotos' />
                </NavLink>
            </li>
            <li className={classes.NavigationItem}>
                <NavLink
                    exact={true}
                    activeClassName={classes.active}
                    to="/my-photos">
                        <FormattedMessage id='common.toolbar.myPhotos' />
                </NavLink>
            </li>
        </ul>
    );
};

export default navigationItems;
