import React from 'react';
import { Link } from "gatsby";
import styles from './index.module.css';

import { sectionsList } from 'startup/sections-list/index';

export default class Header extends React.Component {
  renderMenu = () => {
    return sectionsList.map((section, i) => {
      return (
        <div key={i} className={styles.header__link}>
          <Link to={"/#"+section.value}>{section.title}</Link>
        </div>
      )
    })
  }

  render() {
    return (
      <>
        <div className={styles.header__container} style={{position: this.props.position || "fixed"}}>
          <div className={styles.header}>
            {this.renderMenu()}
          </div>
        </div>
      </>
    )
  }
}