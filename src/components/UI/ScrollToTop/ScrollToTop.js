import React from 'react';
import classes from './ScrollToTop.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ScrollToTop = (props) => {
  const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};
	
  return (
    <button
      title="Back to top"
      className={classes.ScrollToTop}
      onClick={() => scrollToTop()}
    >
      <span className={classes.Arrow}>
			<FontAwesomeIcon
                className={classes.Icon}
                title={'Go to top'}
                icon="rocket"
              />
			</span>
    </button>
  );
}

export default ScrollToTop;
