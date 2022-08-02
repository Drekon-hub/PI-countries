import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBarHome.module.css';
import world from '../../image/world.png';

export default function navBar({ firstPage, handleClick }) {
  return (
    <div>
      <nav className={styles.nav_item}>
        <ul>
          <li className={styles.world}>
            <Link to={'/home'}>
              <img className={styles.world_icon} src={world} alt="world" />
            </Link>
          </li>
          <li className={styles.link}>
            <Link to={'/home'}>
              <button className={styles.button_3}>Home</button>
            </Link>
          </li>
          <li className={styles.link}>
            <Link to={'/activities'}>
              <button className={styles.button_3}>Create Activitie</button>
            </Link>
          </li>
          {/* <li className="search-button">
            <button onClick={(e) => handleClick(e)}>Cargar todos los países</button>
          </li> */}
        </ul>
      </nav>
    </div>
  );
}
