import React from 'react';

import styles from './index.module.css';

export default class TopSection extends React.Component {
  render() {
    return (
      <div className={styles.top}>
        <img src="http://www.audiohead.cx/wp-content/uploads/2016/08/ezgif.com-crop.gif" width="100%"/>
        <TopVideo/>
      </div>
    )
  }
}

class TopVideo extends React.Component {
  render() {
    return (
      <div className={styles.top__video}>
        <iframe width="420" height="315"
          src="https://www.youtube.com/watch?v=O8-xW1Q2udg">
        </iframe>
        <div className={styles.top__container__logo}>
          <div className={styles.top__logo}>
            <img src="http://www.audiohead.cx/wp-content/uploads/2016/08/AUDIOHEAD.png" width="100%"/>
          </div>
        </div>
      </div>
    )
  }
}