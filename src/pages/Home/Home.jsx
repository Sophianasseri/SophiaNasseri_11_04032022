import React from 'react';
import { Link } from 'react-router-dom';
import homeBanner from '../../assets/homeBanner.png';
import Banner from '../../components/Banner/Banner';
import Thumb from '../../components/Thumb/Thumb';
import data from '../../data/accommodation.json';
import styles from './home.module.css';

function Home() {
  return (
    <main>
      <Banner imageSrc={homeBanner}>
        <h1 className={styles.bannerText}>Chez vous, partout et aileurs</h1>
      </Banner>
      <section className={styles.container}>
        {data.map((element) => (
          <div key={element.id}>
            <Link to={`/accommodation/${element.id}`}>
              <Thumb imageSrc={element.cover} title={element.title} />
            </Link>
          </div>
        ))}
      </section>
    </main>
  );
}

export default Home;
