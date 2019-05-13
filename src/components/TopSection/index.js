import React from 'react';

import styles from './index.module.css';

export default class TopSection extends React.Component {
  render() {
    return (
      <div className={styles.top}>
        {/* <img src="http://www.audiohead.cx/wp-content/uploads/2016/08/ezgif.com-crop.gif" width="100%"/> */}
        <TopVideo/>
      </div>
    )
  }
}

class TopVideo extends React.Component {
  render() {
    return (
      <div>
        <iframe width="900" height="500" className={styles.top__video}
          src="https://www.youtube.com/embed/O8-xW1Q2udg">
        </iframe>
      </div>
    )
  }
}