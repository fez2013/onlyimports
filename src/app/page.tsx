import Image from "next/image";
import styles from "./page.module.css";

export default function InventoryPage() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Welcome to our car inventory! Explore our latest JDM imports and exotic supercars.
        </p>
        <div>
          <a
            href="https://your-importer-website.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={styles.companyName}>Your Importer Name</span>
            <Image
              src="/company-logo.svg"
              alt="Company Logo"
              className={styles.companyLogo}
              width={120}
              height={30}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/car-logo.svg"
          alt="Car Logo"
          width={180}
          height={90}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="/cars/jdm"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            JDM Imports <span>-&gt;</span>
          </h2>
          <p>Discover our collection of authentic JDM cars.</p>
        </a>

        <a
          href="/cars/supercars"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Supercars <span>-&gt;</span>
          </h2>
          <p>Experience the thrill of our exotic supercars.</p>
        </a>

        <a
          href="/cars/hypercars"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Hypercars <span>-&gt;</span>
          </h2>
          <p>Explore our elite collection of hyper-performance machines.</p>
        </a>

        <a
          href="/cars/classic"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Classic Cars <span>-&gt;</span>
          </h2>
          <p>Discover timeless elegance with our classic car selection.</p>
        </a>
      </div>
    </main>
  );
}
