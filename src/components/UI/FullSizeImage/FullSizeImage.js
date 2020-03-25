import React from 'react';
import classes from './FullSizeImage.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const fullSizeImage = props => {
  return (
    <div key={props.item.id} className={classes.ImgContainer}>
      <img alt={props.item.title} src={props.item.url}></img>

      <div className={classes.Overlay}>
        <label>{props.item.description}</label>
        <FontAwesomeIcon
          className={classes.Icon}
          title={'Edit photo'}
          icon="pen"
          onClick={props.onEditClicked}
        />
        <FontAwesomeIcon
          className={classes.Icon}
          title={'Delete photo'}
          icon="trash"
          onClick={props.onDeleteClicked}
        />
      </div>
    </div>
  );
};

export default fullSizeImage;
