import React from "react";
import { navigate } from "gatsby";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import styles from './index.module.css';

import { workList } from 'startup/work-list/index';
import Header from 'components/Header/index';
import Footer from 'components/Footer/index';

export default class WorkPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.location.state;
  }

  componentDidMount() {
    if (!this.state) navigate("/#works");
  }

  changePage = (value) => {
    var index = this.state.index;
    value = Number(value);
    var newIndex = index + value;
    var length = this.state.length;
    var nextObject = workList[newIndex];
    this.setState({
      title: '',
      subtitle: '',
      thumbnail: '',
      category: '',
      type: '',
      year: '',
      production: '',
      work: '',
      description: '',
      externalLink: '',
      backgroundImage: '',
      extra: '',
      index: newIndex,
      length,
      ...nextObject
    });
  }

  browseWorks = (direction) => {
    if (direction === -1 && this.state.index === 0) return null;
    if (direction === 1 && this.state.index === (this.state.length-1)) return null;
    return (
      <button
        onClick={() => this.changePage(direction)}
        className={styles.work__pageButton}
        style={direction === 1 ? {right: 0} : {left: 0}}>
          <FontAwesomeIcon icon={faArrowLeft} size="2x" flip={direction === 1 ? "horizontal" : "vertical"}/>
      </button>
    )
  }

  render() {
    if (!this.state) return null;
    return (
      <>
        <div
          style={{backgroundImage: `linear-gradient( rgba(0,0,0,.5), rgba(0,0,0,.5) ), url(${this.state.backgroundImage})`}}
          className={styles.work__container}>
          <Header position="relative"/>
          <div className={styles.work__header}>
            {this.browseWorks(-1)}
            {this.browseWorks(1)}
            <h1>{this.state.title}</h1>
            <h2>{this.state.subtitle}</h2>
          </div>
          <div className={styles.work__content}>
            <div><strong>Title: </strong><span>{this.state.title}</span></div>
            <div><strong>Type: </strong><span>{this.state.type}</span></div>
            <div><strong>Year: </strong><span>{this.state.year}</span></div>
            <div><strong>Production: </strong><span>{this.state.production}</span></div>
            <div><strong>Work Executed: </strong><span>{this.state.work}</span></div>
            <div><strong>Description: </strong><span>{this.state.description}</span></div>
            {conditionalContent("Read More: ", this.state.externalLink, {isLink: true})}
          </div>
          {this.state.extra ?
            <div className={styles.work__extra}>
              {renderExtra(this.state.extra)}
            </div>
          : null}
        </div>
        <Footer key={this.state.index}/>
      </>
    )
  }
}

function renderExtra(extra) {
  if (!extra) return null;
  return extra.map((item, i) => {
    return <div key={i}>{conditionalContent(item.label, item.value, item.options)}</div>
  })
}

function conditionalContent(label, value, options) {
  options = {
    isLink: false,
    isIframe: false,
    ...options
  }

  if (!value) return null;

  if (options.isLink) {
    return <div><strong>{label}</strong><a href={value} target="_blank" rel="noopener noreferrer">{value}</a></div>
  } else if (options.isIframe) {
    return (
      <div>
        <h2>{label}</h2>
        <iframe
          title={Math.random()}
          width="100%"
          height="450"
          scrolling="no"
          frameBorder="no"
          src={value}/>
      </div>
    )
  } else return <div><strong>{label}</strong><span>{value}</span></div>
}