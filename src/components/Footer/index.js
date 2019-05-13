import React from 'react';

import styles from './index.module.css';

export default class Footer extends React.Component {
  render() {
    return (
      <div className={styles.footer} style={this.props.style || {}}>
        <div>Copyright text Current Year Audiohead.cx</div>
      </div>
    )
  }
}