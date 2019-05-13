import React from 'react';
import { Link } from "gatsby";
import styles from './index.module.css';

export default class Header extends React.Component {

  renderMenu = () => {
    const goToSection = (e) => {
      var value = e.target.value;
      this.props.goToSection(value);
    }

    return this.props.sections.map((section, i) => {
      return (
        <div key={i} className={styles.header__link}>
          <Link to={"/#"+section.value} onClick={goToSection}>{section.title}</Link>
        </div>
      )
    })
  }

  render() {
    return (
      <div className={styles.header__container}>
        <div className={styles.header}>
          {this.renderMenu()}
        </div>
      </div>

    )
  }
}