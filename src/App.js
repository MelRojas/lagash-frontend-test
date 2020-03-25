import React from 'react';
import classes from './App.module.scss';
import { NotificationContainer } from 'react-notifications';
import { Switch, Route, withRouter } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import General from './containers/General/General';
import MyPhotos from './components/MyPhotos/MyPhotos';
import Layout from './hoc/Layout/Layout';
import ScrollToTop from './components/UI/ScrollToTop/ScrollToTop';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faPlus,
  faSearch,
  faPen,
  faTrash,
  faRocket
} from '@fortawesome/free-solid-svg-icons';

library.add(faPlus, faSearch, faPen, faTrash, faRocket);

function App() {
  return (
    <div className={classes.App}>
      <NotificationContainer />
      <Layout>
        <Switch>
          <Route path="/my-photos" component={MyPhotos} />
          <Route exact strict path="/" component={General} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
      <ScrollToTop />
    </div>
  );
}

export default withRouter(App);
