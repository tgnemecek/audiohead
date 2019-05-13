import React from 'react';

import styles from './index.module.css';
import WorkItem from './WorkItem/index';

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

  render() {
    return (
      <div className={styles.works}>
        <h2>Main Works</h2>
        <Filter filter={this.state.filter} changeFilter={this.changeFilter}/>
        <div className={styles.works__grid}>
          <WorkItem filter={this.state.filter}/>
          <WorkItem filter={this.state.filter}/>
          <WorkItem filter={this.state.filter}/>
          <WorkItem filter={this.state.filter}/>
          <WorkItem filter={this.state.filter}/>
          <WorkItem filter={this.state.filter}/>
          <WorkItem filter={this.state.filter}/>
          <WorkItem filter={this.state.filter}/>
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