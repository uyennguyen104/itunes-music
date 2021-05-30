import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getMediaList } from 'redux/actions/mediaActions';
import { debounce } from 'lodash';
import axios from 'axios';

import { Input } from 'antd';
import Icon from 'components/reusable/Icon/Icon'

import classes from './MediasSearch.module.scss';

class MediasSearch extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
    }
  }

  loadMediaList = () => {
    this.cancelTokenSource && this.cancelTokenSource.cancel();
    this.fetchSuggestedMedias();
  }
  fetchSuggestedMedias = debounce(async () => {
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

  handleInputSearchChange = (e) => {
    this.setState({
      term: e.target.value,
    }, () => {
      this.loadMediaList();
    });
  }

  render() {
    return (<div className={classes.SearchWrap}>
      <Input
        className={classes.SearchInput}
        placeholder="Search your entertainment"
        prefix={<Icon className={classes.SearchInputIcon} size="22px" icon="search" />}
        bordered={false}
        onChange={this.handleInputSearchChange}
      />
    </div>);
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getMediaList: (payload) => dispatch(getMediaList(payload)),
  };
};
const withConnect = connect(null, mapDispatchToProps);
export default compose(withConnect)(MediasSearch);
