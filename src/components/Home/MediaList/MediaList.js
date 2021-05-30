import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectMediaList, makeSelectMediaListLoading } from 'redux/selectors';

import { Typography, Card, Spin } from 'antd';
import CustomEmpty from 'components/reusable/CustomEmpty/CustomEmpty';

import classes from './MediaList.module.scss';

const { Title } = Typography;

class MediaList extends PureComponent {
  getFilteredMediaList = () => {
    const { mediaList, selectedGenres } = this.props;
    if (!selectedGenres || !selectedGenres.length) return mediaList;
    return mediaList.filter(media => selectedGenres.includes(media.primaryGenreName));
  }

  render() {
    const { mediaListLoading } = this.props;
    const filteredMediaList = this.getFilteredMediaList();

    return (<Spin tip="Loading..." spinning={mediaListLoading}>
      <Title
        className={classes.SectionTitle}
        level={4}
      >
        Results {filteredMediaList.length > 0 ? `(${filteredMediaList.length})` : ''}
      </Title>
      { filteredMediaList.length
        ? (<div className={classes.MediaList}>
            { filteredMediaList.map(media => (
              <Card
                key={media.trackId}
                cover={
                  <div className={classes.MediaCover}>
                    <img alt={`${media.trackName} - ${media.artistName}`} src={media.artworkUrl100} />
                  </div>
                }
                bordered={false}
                size="small"
                className={classes.MediaTile}
              >
                <div className={classes.MediaTileMeta}>
                  <p className={classes.Title}>{media.trackName}</p>
                  <p className={classes.Description}>{media.artistName}</p>
                </div>
              </Card>
            )) }
          </div>)
        : <CustomEmpty />
      }
    </Spin>);
  }
}

const mapStateToProps = createStructuredSelector({
  mediaList: makeSelectMediaList(),
  mediaListLoading: makeSelectMediaListLoading(),
});
const withConnect = connect(mapStateToProps, null);
export default compose(withConnect)(MediaList);
