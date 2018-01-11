import { RECEIVE_SONGS, RECEIVE_SONG } from '../actions/song_actions';
import { RECEIVE_NEW_PLAYLIST } from '../actions/playlist_actions';
import { RECEIVE_ALBUM } from '../actions/album_actions';
import { RECEIVE_ARTIST } from '../actions/artist_actions';

const songReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_SONGS:
    return Object.assign({}, state, action.payload.songs);
    case RECEIVE_SONG:
    return Object.assign({}, state, {[action.song.id]: action.song});
    case RECEIVE_NEW_PLAYLIST:
    return Object.assign({}, state, action.payload.songs);
    case RECEIVE_ALBUM:
    return Object.assign({}, state, action.payload.songs);
    case RECEIVE_ARTIST:
    return Object.assign({}, state, action.payload.songs);
    default:
    return state;
  }
};

export default songReducer;
