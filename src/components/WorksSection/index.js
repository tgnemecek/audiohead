import React from 'react';

import styles from './index.module.css';
import WorkItem from './WorkItem/index';

export default class WorksSection extends React.Component {
  render() {
    return (
      <div className={styles.works}>
        <h2>Main Works</h2>
        <div className={styles.works__grid}>
          <WorkItem/>
          <WorkItem/>
          <WorkItem/>
          <WorkItem/>
          <WorkItem/>
          <WorkItem/>
          <WorkItem/>
          <WorkItem/>
        </div>
      </div>
    )
  }
}