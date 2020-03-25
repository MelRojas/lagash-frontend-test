import React from 'react';
import classes from './Input.module.scss';

const input = (props) => {
    let inputElement = null;
    const inputClasses = [classes.InputElement, props.inputClasses];

    switch ( props.elementType ) {
        case ( 'input' ):
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed}
                onKeyPress={props.enterPressed} />;
            break;
        case ( 'textarea' ):
        inputElement = <textarea
            className={inputClasses.join(' ')}
            {...props.elementConfig}
            value={props.value}
            onChange={props.changed}
            onKeyPress={props.enterPressed} />;
        break;
        default:
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed}
                onKeyPress={props.enterPressed} />;
    }

    return (
        <div className={classes.Input}>
            {inputElement}
        </div>

    );

};

export default input;
