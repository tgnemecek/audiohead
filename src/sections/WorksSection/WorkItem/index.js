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
    if (this.props.filter !== "all" && this.props.category !== this.props.filter) return null;
    return (
      <Link to="/work" className={styles.works__item} style={this.style} state={this.props}>
        <div className={styles.works__item__image}>
          <img src={this.props.thumbnail} width="100%"/>
        </div>
        <div className={styles.works__item__text}>
          <h3>'{this.props.title}'</h3>
          <h4>({this.props.subtitle})</h4>
        </div>
      </Link>
    )
  }
}