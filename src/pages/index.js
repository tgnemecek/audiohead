import React from "react";
import { Link } from "gatsby";

import 'styles/global.css';

import Header from 'components/Header/index';
import TopSection from 'sections/TopSection/index';
import ServicesSection from 'sections/ServicesSection/index';
import AboutSection from 'sections/AboutSection/index';
import WorksSection from 'sections/WorksSection/index';
import MusicSection from 'sections/MusicSection/index';
import ContactSection from 'sections/ContactSection/index';
import Footer from 'components/Footer/index';

export default class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="content">
          <TopSection/>
          <ServicesSection/>
          <AboutSection/>
          <WorksSection/>
          <MusicSection/>
          <ContactSection/>
        </div>
        <Footer/>
      </div>
    )
  }
}