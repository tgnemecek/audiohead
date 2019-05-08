import React from 'react';
import { Link } from "gatsby";

import styles from './index.module.css';

export default class WorkItem extends React.Component {
  constructor(props) {
    super(props);
    this.numberOfColumns = 6; // Change here
    this.style = {
      width: (100 / this.numberOfColumns) + "%"
    }
  }
  render() {
    return (
      <div className={styles.works__item} style={this.style}>
        <Link to="/work"/>
        <div>
          <div>Title</div>
          <div>Subtitle</div>
        </div>
        <img src="http://www.audiohead.cx/wp-content/uploads/2017/08/Icon-180.png" width="100%"/>
      </div>
    )
  }
}