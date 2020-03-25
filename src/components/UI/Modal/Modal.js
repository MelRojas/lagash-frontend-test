import React, { useState, useEffect, Fragment } from 'react';
import classes from './Modal.module.scss';
import axios from '../../../axios';
import Backdrop from '../Backdrop/Backdrop';
import { createNotification } from '../../../resources/utils';
import { useIntl, FormattedMessage } from 'react-intl';
import Button from '../Button/Button';
import Input from '../Input/Input';

const Modal = props => {
  const intl = useIntl();
  const [descriptionInput, setDescriptionInput] = useState({
    elementType: 'textarea',
    elementConfig: {
      type: 'text',
      placeholder: intl.formatMessage({id: 'myPhotos.noDescription'})
    },
    value: '',
    isNumber: false,
    touched: false
  });

  useEffect(() => {
    setDescriptionInput({
        ...descriptionInput,
        value: props.info.description ? props.info.description : '',
        touched: false
      })
  }, [!props.show]);

  const handleSubmit = event => {
    event.preventDefault();
    if (descriptionInput.value.trim() !== '') {
        let data = props.info;
        data['description'] = descriptionInput.value;
      axios.put('photos/' + props.info.id, data)
        .then(function(response) {
          createNotification(
            'success',
            <FormattedMessage id="myPhotos.success.update" />
          );
          props.modalClosed();
        })
        .catch(function(error) {
          createNotification(
            'error',
            <FormattedMessage id="myPhotos.errors.update" />
          );
        });
    }
  };

  const inputChangedHandler = event => {
    setDescriptionInput({
      ...descriptionInput,
      value: event.target.value,
      touched: true
    });
  };

  const modalClasses = [classes.Modal];

  if (!props.show) {
    modalClasses.push(classes.HideModal);
  }

  return (
    <Fragment>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <div className={modalClasses.join(' ')}>
        <button className={classes.CloseButton} onClick={props.modalClosed} />
        <div className={classes.ModalContainer}>
          <div className={classes.ImageContainer}>
            <img alt={props.info.title} src={props.info.url} />
          </div>
          <div className={classes.DataContainer}>
            <h4>{props.info.title}</h4>
            <Input
              minHeight="80px"
              elementType={descriptionInput.elementType}
              elementConfig={descriptionInput.elementConfig}
              label={descriptionInput.label}
              value={descriptionInput.value}
              errorMessage={descriptionInput.errorMessage}
              invalid={!descriptionInput.valid}
              shouldValidate={descriptionInput.validation}
              touched={descriptionInput.touched}
              changed={event => inputChangedHandler(event)}
            />
            <Button disabled={!descriptionInput.value || !descriptionInput.touched} clicked={event =>handleSubmit(event)}>
              <FormattedMessage id="myPhotos.save" />
            </Button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Modal;
