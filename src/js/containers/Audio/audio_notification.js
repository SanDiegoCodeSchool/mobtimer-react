import React from 'react';
import ReactDOM from 'react-dom';

class AudioNotification extends React.Component {
  componentDidUpdate(props) {
    const { playNotification } = this.props
    if (playNotification) {
      this.play();
    }
  }

  play() {
    var audio = ReactDOM.findDOMNode(this.refs.audioTag);

    audio.load();
    audio.play();
  }

  render() {
    return (
      <audio ref="audioTag">
        <source src="audio/music_box.mp3" type="audio/mpeg" />
        <source src="audio/music_box.wav" type="audio/wav" />
      </audio>
    );
  }
};

export default AudioNotification;