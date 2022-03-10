import React from 'react';
import homeBanner from '../assets/homeBanner.png';
import Banner from '../components/Banner';

function Home() {
  return (
    <main>
      <Banner imageSrc={homeBanner}>
        <p>Chez vous, partout et aileurs</p>
      </Banner>
    </main>
  );
}

export default Home;
