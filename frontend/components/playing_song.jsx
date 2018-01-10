import React from 'react';
import secToMin from 'sec-to-min';

class PlayingSong extends React.Component {
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (this.props.isSongPlaying) {
      this.pause();
    } else {
      this.play();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.playingSong !== this.props.playingSong) {
      this.props.setAudioSrc(nextProps.playingSong.url);
      this.props.audio.load();
      if (this.props.isSongPlaying) {
        this.props.audio.play();
      } else {
        this.play();
      }
    }
  }

  play() {
    this.props.audio.play();
    this.props.toggleSongPlaying();
  }

  pause() {
    this.props.audio.pause();
    this.props.toggleSongPlaying();
  }

  render() {
    const playPauseBtn = (
      this.props.isSongPlaying ?
      <i className="fa fa-pause-circle-o playing-song-btn" aria-hidden="true"
        onClick={this.handleClick}></i> :
        <i className="fa fa-play-circle-o" aria-hidden="true"
          onClick={this.handleClick}></i>
      );
      return (
        <footer id="playing-song">
          <div className='playing-song-info'>
            {this.props.playingSong.title}
          </div>
          <div className='song-controls'>
            <i className="fa fa-step-backward playing-song-btn" aria-hidden="true"></i>
            {playPauseBtn}
            <i className="fa fa-step-forward playing-song-btn" aria-hidden="true"></i>
          </div>
          <div className='volume-container'>
          </div>
        </footer>
      );
    }
  }

  export default PlayingSong;
