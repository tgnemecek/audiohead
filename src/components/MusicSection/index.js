import React from 'react';

import styles from './index.module.css';

export default class MusicSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: "main"
    }
  }

  changeTab = (e) => {
    this.setState({ tab: e.target.value });
  }

  render() {
    return (
      <div className={styles.music}>
        <h2>Original Music</h2>
        <Tab tab={this.state.tab} changeTab={this.changeTab}/>
        <Soundcloud tab={this.state.tab}/>
      </div>
    )
  }
}

class Tab extends React.Component {

  isActive = (name) => {
    if (name === this.props.tab) {
      return {background: "red"}
    } else return {}
  }

  renderTabs = () => {
    return (
      <>
        <button className={styles.tab} style={this.isActive("main")} onClick={this.props.changeTab} value="main">
          Demo Reel
        </button>
        <button className={styles.tab} style={this.isActive("adventure")} onClick={this.props.changeTab} value="adventure">
          Adventure
        </button>
        <button className={styles.tab} style={this.isActive("epic")} onClick={this.props.changeTab} value="epic">
          Epic
        </button>
        <button className={styles.tab} style={this.isActive("melancholic")} onClick={this.props.changeTab} value="melancholic">
          Melancholic
        </button>
        <button className={styles.tab} style={this.isActive("suspense")} onClick={this.props.changeTab} value="suspense">
          Suspense
        </button>
      </>
    )
  }

  render() {
    return (
      <div>
        {this.renderTabs()}
      </div>
    )
  }
}

class Soundcloud extends React.Component {

  getSource = () => {
    switch (this.props.tab) {
      case "main":
        return "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/317113609%3Fsecret_token%3Ds-bXGLG&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true";
        break;
      case "adventure":
        return "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/35201153%3Fsecret_token%3Ds-LHA6H&amp;color=168d81&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false";
        break;
      case "epic":
        return "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/35203176%3Fsecret_token%3Ds-vFmsu&amp;color=168d81&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false";
        break;
      case "melancholic":
        return "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/35204113%3Fsecret_token%3Ds-XvMKA&amp;color=168d81&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false";
        break;
      case "suspense":
        return "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/35498575%3Fsecret_token%3Ds-RhbvV&amp;color=168d81&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false";
        break;
    }
  }

  render() {
    return (
      <iframe
        width="100%" height="415"
        scrolling="no" frameborder="no"
        src={this.getSource()}>
      </iframe>
    )
  }
}