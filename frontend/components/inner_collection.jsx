import React from 'react';
import {NavBarContainer} from './playlist_form_container';
import * as innerCollectionUtil from '../util/inner_collection_util';
import AddSongFormContainer from './add_song_form_container';

class InnerCollection extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (innerCollectionUtil.shouldFetchInfo(this.props)) {
      const id = innerCollectionUtil.switchOnType(
        this.props, {}, {}, 'id'
      );
      this.props.fetchAction(id);
    }
  }

  componentWillReceiveProps(nextProps) {
    if ((nextProps.location.pathname !== this.props.location.pathname)
    && (innerCollectionUtil.shouldFetchInfo(nextProps)))
    {
      const id = innerCollectionUtil.switchOnType(
        nextProps, {}, {}, 'id');
        nextProps.fetchAction(id);
      }
    }

    render() {
      let component = null;
      if (this.props.component) {
        component = <this.props.component
          playlists={this.props.playlists}
          songs={this.props.songs}
          currentUserId={this.props.currentUserId}
          />;
      }

      let form = null;
      if (this.props.isAddSongFormDisplayed) {
        form = <AddSongFormContainer />;
      }
      return (
        <section id="inner-collection">
          {form}
          <NavBarContainer />
          {component}
        </section>
      );
    }
  }

  export default InnerCollection;
