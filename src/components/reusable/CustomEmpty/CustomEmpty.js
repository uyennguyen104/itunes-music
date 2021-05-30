import React from 'react';

import { Empty } from 'antd';

import classes from './CustomEmpty.module.scss';

const CustomEmpty = () => (
  <div className={classes.EmptyWrap}>
    <Empty description={<span className={classes.NoResultText}>No Results</span>} />
  </div>
);

export default CustomEmpty;
