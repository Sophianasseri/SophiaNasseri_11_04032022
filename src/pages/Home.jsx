import React, { useEffect, useState } from 'react';
import homeBanner from '../assets/homeBanner.png';
import Banner from '../components/Banner';
import Thumb from '../components/Thumb';

function Home() {
  const [isError, setError] = useState(null);
  const [accommodationData, setAccommodationData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch('/api/accommodaton.json')
      .then((response) => response.json())
      .then(
        (data) => {
          setAccommodationData(data);
          setIsLoaded(true);
        },
        (error) => {
          setError(error);
          setIsLoaded();
        },
      );
  }, []);

  if (isError) {
    return <p>Oups! il y eu un problème</p>;
  }
  return (
    <main>
      <Banner imageSrc={homeBanner}>
        <p>Chez vous, partout et aileurs</p>
      </Banner>
      {isLoaded ? (
        <section className="thumb-container">
          {accommodationData.map((element) => (
            <div key={element.id}>
              <Thumb imageSrc={element.cover} title={element.title} />
            </div>
          ))}
        </section>
      ) : (
        <p>Chargement</p>
      )}
    </main>
  );
}

export default Home;
