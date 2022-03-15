import React from 'react';
import Banner from '../components/Banner/Banner';
import aboutBanner from '../assets/aboutBanner.png';
import dropdownData from '../data/dropdownData';
import Dropdown from '../components/Dropdown/Dropdown';

function About() {
  return (
    <section>
      <Banner imageSrc={aboutBanner} />
      {dropdownData.map(({ title, content }) => (
        <Dropdown title={title} content={content} />
      ))}
    </section>
  );
}

export default About;
