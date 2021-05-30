import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectMediaGenres } from 'redux/selectors';

import { Typography, Tag } from 'antd';

import classes from './MediaGenres.module.scss';

const { CheckableTag } = Tag;
const { Title } = Typography;

class MediaGenres extends PureComponent {
  isGenreSelected = (genre) => this.props.selectedGenres.includes(genre);

  render() {
    const { mediaGenres } = this.props;

    return (<>
      <Title className={classes.SectionTitle} level={4}>Filter Genre</Title>
      <div className={classes.GenreTags}>
        { mediaGenres.map(genre => {
          const isChecked = this.isGenreSelected(genre);

          return (<CheckableTag
              className={`${classes.GenreTag} ${isChecked ? classes.Checked : ''}`}
              key={genre}
              checked={isChecked}
              onChange={(checked) => this.props.onGenreToggle({ genre, checked })}
            >
              { genre.includes('/') ? genre.replaceAll('/', ' / ') : genre }
            </CheckableTag>)
          })
        }
      </div>
    </>);
  }
}
const mapStateToProps = createStructuredSelector({
  mediaGenres: makeSelectMediaGenres(),
});
const withConnect = connect(mapStateToProps, null);
export default compose(withConnect)(MediaGenres);
