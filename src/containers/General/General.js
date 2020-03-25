import React, { Component, Fragment } from 'react';
import axios from '../../axios';
import InfiniteScroll from 'react-infinite-scroller';
import Spinner from '../../components/UI/Spinner/Spinner';
import { createNotification } from '../../resources/utils';
import { FormattedMessage } from 'react-intl';
import classes from './General.module.scss';
import Input from '../../components/UI/Input/Input';
import Image from '../../components/UI/Thumbnail/Thumbnail';
import NoResults from '../../components/UI/NoResults/NoResults';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

export class General extends Component {
  state = {
    photos: [],
    hasMoreItems: true,
    page: 0,
    searchInput: {
      elementType: 'input',
      elementConfig: {
        type: 'text',
        placeholder: ''
      },
      value: this.props.searchText,
      isNumber: false
    },
    noResults: false,
    noResultsValue: ''
  };

  fetchData = () => {
    this.props.setSearchText(this.state.searchInput.value);
    axios
      .get('photos', {
        params: {
          _page: this.state.page,
          _limit: 50,
          q: this.state.searchInput.value
        }
      })
      .then(response => {
        if (response.data.length !== 0) {
          this.setState({
            photos: [...this.state.photos, ...response.data],
            page: this.state.page + 1
          });
        } else {
          this.setState({
            hasMoreItems: false,
            noResultsValue: this.state.searchInput.value
          });
        }
      })
      .catch(function(error) {
        createNotification(
          'error',
          <FormattedMessage id="general.errors.getPhotos" />
        );
      });
  };

  inputChangedHandler = event => {
    this.setState({
      searchInput: {
        ...this.state.searchInput,
        value: event.target.value,
        touched: true
      }
    });
  };

  inputEnterPressedHandler = event => {
    if (event.key === 'Enter') {
      this.setState(
        { photos: [], hasMoreItems: true, page: 0 },
        () => this.fetchData
      );
    }
  };

  onSubmitHandler = event => {
    this.setState(
      { photos: [], hasMoreItems: true, page: 0 },
      () => this.fetchData
    );
  };

  onClickHandler = photo => {
    delete photo.id;
    axios
      .post('albums/200/photos', photo)
      .then(response => {
        createNotification(
          'success',
          <FormattedMessage id="general.success.savedPhoto" />
        );
      })
      .catch(function(error) {
        createNotification(
          'error',
          <FormattedMessage id="general.errors.getPhotos" />
        );
      });
  };

  render() {
    let list = null;
    if (this.state.photos) {
      list = (
        <Fragment>
          {this.state.photos.map(photo => (
            <Image item={photo} key={uuidv4()} clicked={() => this.onClickHandler(photo)} />
          ))}
        </Fragment>
      );
    }

    const loader = (
      <div className={classes.LastItem}>
        <Spinner />
      </div>
    );

    return (
      <div className={classes.General}>
        <div className={classes.Header}>
          <h1>
            <FormattedMessage id="general.title" />
          </h1>
          <div className={classes.InputContainer}>
            <Input
              minHeight="80px"
              elementType={this.state.searchInput.elementType}
              elementConfig={this.state.searchInput.elementConfig}
              label={this.state.searchInput.label}
              value={this.state.searchInput.value}
              touched={this.state.searchInput.touched}
              changed={event => this.inputChangedHandler(event)}
              enterPressed={event => this.inputEnterPressedHandler(event)}
            />
            <button onClick={event => this.onSubmitHandler(event)}>
              <FontAwesomeIcon className={classes.Icon} icon="search" />
            </button>
          </div>
        </div>
        <InfiniteScroll
          className={classes.Content}
          pageStart={this.state.page}
          loadMore={this.fetchData}
          hasMore={this.state.hasMoreItems}
          loader={loader}
        >
          {list}
        </InfiniteScroll>
        {this.state.photos.length === 0 ? (
          <NoResults
            id={'general.noResults'}
            values={{ text: <b>{this.state.noResultsValue}</b> }}
          />
        ) : (
          ''
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    searchText: state.searchText
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setSearchText: searchText =>
      dispatch({ type: 'updateSearchText', searchText: searchText })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(General);
