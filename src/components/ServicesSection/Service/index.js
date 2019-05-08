import React from 'react';
import styles from './index.module.css';
import Block from 'components/Block/index';

export default class Service extends React.Component {
  showText = () => {

  }

  render() {
    return (
      <div className={styles.services__container} onMouseOver={this.showText}>
        <h3>{this.props.title}</h3>
        <img src={this.props.img} height="50" width="50"/>
        <div className={styles.services__dropbox}>
          {this.props.text}
        </div>
      </div>
    )
  }
}