import React, { PureComponent } from 'react';

import { Input } from 'antd';
import Icon from 'components/reusable/Icon/Icon'

import classes from './MediaSearch.module.scss';

class MediaSearch extends PureComponent {
  render() {
    const { term } = this.props;

    return (<div className={classes.SearchWrap}>
      <Input
        className={classes.SearchInput}
        placeholder="Search your entertainment"
        prefix={<Icon className={classes.SearchInputIcon} size="22px" icon="search" />}
        bordered={false}
        value={term}
        allowClear
        onChange={this.props.onTermChange}
      />
    </div>);
  }
}
export default MediaSearch;
