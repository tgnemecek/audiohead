import React from 'react';

import styles from './index.module.css';

export default class Header extends React.Component {

  renderMenu = () => {
    const goToSection = (e) => {
      var value = e.target.value;
      this.props.goToSection(value);
    }

    return this.props.sections.map((section, i) => {
      return <button key={i} value={section.value} onClick={goToSection}>{section.title}</button>
    })
  }

  render() {
    return (
      <div className={styles.header}>
        {this.renderMenu()}
      </div>
    )
  }
}