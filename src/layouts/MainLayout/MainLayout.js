import React, { Component } from 'react';

class MainLayout extends Component {
  render = () => (<>
    { this.props.children }
  </>);
}

export default MainLayout;
