import Link from 'next/link';
import styles from '@/app/page.module.css';

const Header = () => {
  return (
    <header className={styles.pageHeader}>
        {/* Link the logo to the home page */}
        <Link href="/">
          <img src="/OnlyImportsLogo.png" alt="Header Image" className={styles.headerImage} />
        </Link>
        <nav className={styles.headerNav}>
          <ul className={styles.navList}>
            <li>
              <Link href="/inventory">Inventory</Link>
            </li>
            <li>
              <Link href="/form">Add Vehicle</Link>
            </li>
            <li>
              <Link href="/reserve">Reserve</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
};

export default Header;