import React from 'react';
import { useParams } from 'react-router-dom';
import Carousel from '../../components/Carousel/Carousel';
import Dropdown from '../../components/Dropdown/Dropdown';
import Host from '../../components/Host/Host';
import Rating from '../../components/Rating/rating';
import Tags from '../../components/Tags/Tags';
import data from '../../data/accommodaton.json';
import styles from './accommodation.module.css';

function Accomodation() {
  const { id } = useParams();
  return (
    <main>
      {data
        .filter((elt) => elt.id === id)
        .map((accommodation) => (
          <div key={accommodation.id}>
            <section>
              <Carousel imageScr={accommodation.pictures} />
            </section>
            <section>
              <div className={styles.info}>
                <div>
                  <h2 className={styles.title}>{accommodation.title}</h2>
                  <p className={styles.location}>{accommodation.location}</p>
                  <ul className={styles.tag}>
                    {accommodation.tags.map((tag) => (
                      <Tags key={tag.id} content={tag} />
                    ))}
                  </ul>
                </div>
                <div>
                  <div className={styles.host}>
                    <Host
                      name={accommodation.host.name}
                      imageScr={accommodation.host.picture}
                    />
                  </div>
                  <Rating rateValue={accommodation.rating} />
                </div>
              </div>

              <div className={styles.dropdown}>
                <Dropdown
                  title="Description"
                  content={<p>{accommodation.description}</p>}
                  smallDropdown
                />

                <Dropdown
                  title="Équipements"
                  content={accommodation.equipments.map((eq) => (
                    <ul key={eq.id}>
                      <li>{eq}</li>
                    </ul>
                  ))}
                  smallDropdown
                />
              </div>
            </section>
          </div>
        ))}
    </main>
  );
}

export default Accomodation;
