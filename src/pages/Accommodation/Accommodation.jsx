import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Carousel from '../../components/Carousel/Carousel';
import Dropdown from '../../components/Dropdown/Dropdown';
import Host from '../../components/Host/Host';
import Rating from '../../components/Rating/Rating';
import Tags from '../../components/Tags/Tags';
import data from '../../data/accommodation.json';
import styles from './accommodation.module.css';

function Accomodation() {
  const { id } = useParams();
  const [accommodation, setAccommodation] = useState(undefined);
  const navigate = useNavigate();

  useEffect(() => {
    if (accommodation === undefined) {
      const element = data.find((elt) => elt.id === id);
      /* Redirect to page error 404 if user change id parameter to an undefined one */
      if (element === undefined) {
        navigate('/404');
      } else {
        setAccommodation(element);
      }
    }
  }, []);
  return (
    <main>
      {accommodation ? (
        <div key={accommodation.id}>
          <section>
            <Carousel imageArr={accommodation.pictures} />
          </section>
          <section>
            <div className={styles.info}>
              <div>
                <h2 className={styles.title}>{accommodation.title}</h2>
                <p className={styles.location}>{accommodation.location}</p>
                <ul className={styles.tag}>
                  {accommodation.tags.map((tag) => (
                    <Tags key={tag} content={tag} />
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
              <Dropdown title="Description" smallDropdown>
                <p>{accommodation.description}</p>
              </Dropdown>

              <Dropdown title="Équipements" smallDropdown>
                <ul>
                  {accommodation.equipments.map((eq) => (
                    <li key={eq.id}>{eq}</li>
                  ))}
                </ul>
              </Dropdown>
            </div>
          </section>
        </div>
      ) : (
        <p>Chargement...</p>
      )}
    </main>
  );
}

export default Accomodation;
