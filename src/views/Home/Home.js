import React, { PureComponent } from 'react';

import MediasSearch from 'components/Home/MediasSearch/MediasSearch';
import MediasGenres from 'components/Home/MediasGenres/MediasGenres';
import MediaList from 'components/Home/MediaList/MediaList';

import classes from './Home.module.scss';

class Home extends PureComponent {
  render() {
    return (<div className={classes.PageWrap}>
      <MediasSearch/>
      <div className={classes.PageContent}>
        <section>
          <MediasGenres/>
        </section>
        <section>
          <MediaList/>
        </section>
      </div>
    </div>);
  }
}

export default Home;
