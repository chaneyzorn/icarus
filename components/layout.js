import HomeHead from './head';
import Header from './header';
import styles from './layout.module.css';
import Link from 'next/link';

function Layout({children, home}) {
  return (
    <div className={styles.container}>
      <HomeHead />
      <Header home />

      <main>{children}</main>

      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}

export {Layout};
