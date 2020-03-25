import React, { useState, useEffect, Fragment } from 'react';
import classes from './MyPhotos.module.scss';
import { FormattedMessage } from 'react-intl';
import Spinner from '../../components/UI/Spinner/Spinner';
import axios from '../../axios';
import { createNotification } from '../../resources/utils';
import Modal from '../UI/Modal/Modal';
import NoResults from '../UI/NoResults/NoResults';
import Image from '../UI/FullSizeImage/FullSizeImage';
import { v4 as uuidv4 } from 'uuid';

const MyPhotos = props => {
  const [myPhotos, setMyPhotos] = useState([]);
  const [noResults, setNoResults] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({});

  let showModalHandler = (photo) => {
    setModalData(photo);
    setShowModal(true);
  };
  let closeModalHandler = () => {
    setShowModal(false);
  };

  document.body.style.overflow =  'scroll';

  if(showModal){
    document.body.style.overflow = 'hidden';
  } 

  let list = null;
  if (myPhotos) {
    list = (
      <Fragment>
        {myPhotos.map(photo => (
					<Image item={photo} key={uuidv4()} onEditClicked={() => editHandler(photo)} onDeleteClicked={() => deleteHandler(photo.id)}/>			
        ))}
      </Fragment>
    );
  }

  if(noResults) {
    list = <NoResults id={'myPhotos.noResults'}  />
  }

  const fetchData = () => {
    list = <div>
      <Spinner/>
    </div>;
    axios
      .get('albums/200/photos')
      .then(response => {
        setMyPhotos([...response.data]);
        if (response.data.length === 0) {
          setNoResults(true);
        }
      })
      .catch(function(error) {
        createNotification(
          'error',
          <FormattedMessage id="myPhotos.errors.getPhotos" />
        );
      });
  };

  let isMyPhotosEmpty = myPhotos === [];
  useEffect(() => {
    fetchData();
  }, [isMyPhotosEmpty]);

  let editHandler = photo => {
    showModalHandler(photo);
  };

  let deleteHandler = id => {
    axios
      .delete('photos/' + id)
      .then(response => {
        fetchData();
        createNotification(
          'success',
          <FormattedMessage id="myPhotos.success.delete" />
        );
      })
      .catch(function(error) {
        createNotification(
          'error',
          <FormattedMessage id="myPhotos.errors.delete" />
        );
      });
  };

  return (
    <div className={classes.MyPhotos}>
      <div className={classes.Header}>
        <h1>
          <FormattedMessage id="myPhotos.title" />
        </h1>
      </div>
      <div className={classes.Content}>
        {list}
      </div>
      <Modal show={showModal} info={modalData} modalClosed={closeModalHandler} />
    </div>
  );
};

export default MyPhotos;
