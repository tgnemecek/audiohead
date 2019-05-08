import React from "react";
import { Link } from "gatsby";

import 'styles/global.css';

import Header from 'components/Header/index';
import TopSection from 'components/TopSection/index';
import ServicesSection from 'components/ServicesSection/index';
import AboutSection from 'components/AboutSection/index';
import WorksSection from 'components/WorksSection/index';
import ContactSection from 'components/ContactSection/index';
import Footer from 'components/Footer/index';

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.sections = [
      {value: "top", title: "Top"},
      {value: "services", title: "Services"},
      {value: "contact", title: "Contact"}
    ];
  }

  goToSection = () => {

  }

  render() {
    return (
      <div>
        <Header sections={this.sections} goToSection={this.goToSection}/>
        <div className="content">
          <TopSection/>
          <ServicesSection/>
          <AboutSection/>
          <WorksSection/>
          <ContactSection/>
        </div>
        <Footer/>
      </div>
    )
  }
}