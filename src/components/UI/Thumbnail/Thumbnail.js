import React from 'react';
import classes from './Thumbnail.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const thumbnail = props => {
  return (
    <div
      className={classes.ImgContainer}
      onClick={props.clicked}
    >
      <img alt={props.item.title} src={props.item.thumbnailUrl}></img>
      <div className={classes.Overlay}>
        <FontAwesomeIcon className={classes.Icon} icon="plus" />
      </div>
    </div>
  );
};

export default thumbnail;
