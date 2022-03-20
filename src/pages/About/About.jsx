import React from 'react';
import Banner from '../../components/Banner/Banner';
import aboutBanner from '../../assets/aboutBanner.png';
import dropdownData from '../../data/dropdown.json';
import Dropdown from '../../components/Dropdown/Dropdown';

function About() {
  return (
    <section>
      <Banner imageSrc={aboutBanner} />
      {dropdownData.map(({ title, content }) => (
        <Dropdown key={title} title={title}>
          <p>{content}</p>
        </Dropdown>
      ))}
    </section>
  );
}

export default About;
