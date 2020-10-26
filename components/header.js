import Link from 'next/link';
import {name} from '../lib/constants';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';

export default function Header({home}) {
  return (
    <header className={styles.header}>
      {home ? (
        <div>
          <img
            src="/images/profile.jpg"
            className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
            alt={name}
          />
          <h1 className={utilStyles.heading2Xl}>{name}</h1>
        </div>
      ) : (
        <div>
          <Link href="/">
            <a>
              <img
                src="/images/profile.jpg"
                className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                alt={name}
              />
            </a>
          </Link>
          <h2 className={utilStyles.headingLg}>
            <Link href="/">
              <a className={utilStyles.colorInherit}>{name}</a>
            </Link>
          </h2>
        </div>
      )}
    </header>
  );
}
