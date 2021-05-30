import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectMediaList } from 'redux/selectors';

import { Typography } from 'antd';
import { Card } from 'antd';

import classes from './MediaList.module.scss';


class MediaList extends PureComponent {
  render() {
    const { Title } = Typography;
    const { Meta } = Card;
    const { mediaList } = this.props;

    return (<>
      <Title level={4}>Results (100)</Title>
      { mediaList.length
        ? (<div className={classes.MediaList}>
            { mediaList.map(media => (
              <Card
                key={media.trackId}
                cover={<img alt={`${media.trackName} - ${media.artistName}`} src={media.artworkUrl100} />}
                bordered={false}
                size="small"
                className={classes.MediaTile}
              >
                <Meta title={media.trackName} description={media.artistName} />
              </Card>
            )) }
          </div>)
        : 'No results'
      }

    </>);
  }
}

const mapStateToProps = createStructuredSelector({
  mediaList: makeSelectMediaList(),
});
const withConnect = connect(mapStateToProps, null);
export default compose(withConnect)(MediaList);
