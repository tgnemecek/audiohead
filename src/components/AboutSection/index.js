import React from 'react';

import styles from './index.module.css';

export default class AboutSection extends React.Component {
  render() {
    return (
      <div className={styles.about}>
        <h2>About</h2>
        <div className={styles.about__text}>
          <div className={styles.about__icon}>,,</div>
          <p>AudioHead is an audio studio designed to produce sound and music for different media, mainly for films and games. We work on establishing an optimal point between art and craft, always delivering professional-quality audio that speaks closely with the media it’s been produced for.
We don’t see ourselves as artists, but as artisans, focused on helping to craft meaningful experiences for people, although others may often see our creations as works of art.</p>
          </div>
      </div>
    )
  }
}