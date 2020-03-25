import React from 'react';
import classes from './NotFound.module.scss';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
        return (
            <div className={classes.NotFound}>
                <section>
                    <div className={classes.NotFoundContainer}>
                        <div className={classes.TextContainer}>
                            <div className={classes.Title}>Oops!<br/>
                                <small>Parece que estas perdido</small>
                            </div>
                            <NavLink to='/' className={classes.GoToHome}>
                                Si... llevame al home u.u!
                            </NavLink>
                        </div>
                        <div className={classes.Circles}>
                            <p>404<br/>
                                <small>PAGE NOT FOUND</small>
                            </p>
                            <span className={[classes.Circle, classes.Big].join(' ')}/>
                            <span className={[classes.Circle, classes.Med].join(' ')}/>
                            <span className={[classes.Circle, classes.Small].join(' ')}/>
                        </div>

                    </div>
                </section>
            </div>
        );
    };

export default NotFound;
