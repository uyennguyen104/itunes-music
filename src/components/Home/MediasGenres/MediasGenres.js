import React, { PureComponent } from 'react';
import { Typography } from 'antd';

import classes from './MediasGenres.module.scss';

class MediasGenres extends PureComponent {
  render() {
    const { Title } = Typography;

    return (<>
      <Title level={4}>Filter Genre</Title>
      genres
    </>);
  }
}
export default MediasGenres;
