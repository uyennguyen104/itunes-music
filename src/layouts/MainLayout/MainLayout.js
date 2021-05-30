import React, { Component } from 'react';

import classes from './MainLayout.module.scss';

class MainLayout extends Component {
  render = () => (<div className={classes.Wrap}>
    { this.props.children }
  </div>);
}

export default MainLayout;
