import React from 'react';

import styles from './index.module.css';
import WorkItem from './WorkItem/index';
import { workList } from 'startup/work-list/index';

export default class WorksSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: "all"
    }
  }

  changeFilter = (e) => {
    this.setState({ filter: e.target.value });
  }

  renderWorks = () => {
    return workList.map((work, i, array) => {
      return <WorkItem key={i} filter={this.state.filter} index={i} length={array.length} {...work}/>
    })
  }

  render() {
    return (
      <div id="works" className={styles.works}>
        <h2>Main Works</h2>
        <Filter filter={this.state.filter} changeFilter={this.changeFilter}/>
        <div className={styles.works__grid}>
          {this.renderWorks()}
        </div>
      </div>
    )
  }
}

class Filter extends React.Component {

  isActive = (name) => {
    if (this.props.filter === name) {
      return {background: "red"};
    } else return {};
  }


  renderfilter = () => {
    return (
      <>
        <button className={styles.filter} style={this.isActive("all")} onClick={this.props.changeFilter} value="all">
          All
        </button>
        <button className={styles.filter} style={this.isActive("film")} onClick={this.props.changeFilter} value="film">
          Films
        </button>
        <button className={styles.filter} style={this.isActive("game")} onClick={this.props.changeFilter} value="game">
          Games
        </button>
      </>
    )
  }

  render() {
    return (
      <div>
        {this.renderfilter()}
      </div>
    )
  }
}