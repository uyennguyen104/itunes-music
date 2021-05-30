import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getMediaList } from 'redux/actions/mediaActions';
import { debounce } from 'lodash';
import axios from 'axios';

import MediaSearch from 'components/Home/MediaSearch/MediaSearch';
import MediaGenres from 'components/Home/MediaGenres/MediaGenres';
import MediaList from 'components/Home/MediaList/MediaList';

import classes from './Home.module.scss';

class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      selectedGenres: [],
    }
  }

  loadMediaList = () => {
    this.cancelTokenSource && this.cancelTokenSource.cancel();
    this.fetchSuggestedMedia();
  }
  fetchSuggestedMedia = debounce(async () => {
    this.cancelTokenSource = axios.CancelToken.source();
    this.props.getMediaList({
      params: {
        term: this.state.term,
        media: 'music',
        limit: 200,
      },
      cancelToken: this.cancelTokenSource.token,
    });
  }, 200);

  handleTermChange = (e) => {
    this.setState({
      term: e.target.value,
    }, () => {
      this.loadMediaList();
    });
  }
  handleGenreToggle = ({ genre, checked }) => {
    const { selectedGenres } = this.state;
    const nextSelectedGenres = checked ? [...selectedGenres, genre] : selectedGenres.filter(g => g !== genre);
    this.setState({
      selectedGenres: nextSelectedGenres,
    });
  }

  render() {
    const { selectedGenres, term } = this.state;

    return (<div className={classes.PageWrap}>
      <MediaSearch
        term={term}
        onTermChange={this.handleTermChange}
      />
      <div className={classes.PageContent}>
        <section>
          <MediaGenres
            selectedGenres={selectedGenres}
            onGenreToggle={this.handleGenreToggle}
          />
        </section>
        <section>
          <MediaList selectedGenres={selectedGenres}/>
        </section>
      </div>
    </div>);
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getMediaList: (payload) => dispatch(getMediaList(payload)),
  };
};
const withConnect = connect(null, mapDispatchToProps);
export default compose(withConnect)(Home);
