import React from 'react';
import classes from './NoResults.module.scss';
import {FormattedMessage} from 'react-intl';

const noResults = props => {
  return (
    <div className={classes.NoResults}>
      <FormattedMessage
        id={props.id}
        values={props.values}
      />
    </div>
  );
};

export default noResults;
