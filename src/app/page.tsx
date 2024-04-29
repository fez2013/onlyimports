import Link from 'next/link';
import styles from '@/app/page.module.css';
import Layout from '@/components/Layout';

const HomePage = () => {
  return (
    <div>
      <Layout>

        {/* Hero Section */}
        <section className={styles.hero}>
          <h1 className={styles.homeTitle}>OnlyImports</h1>
          <h2 className={styles.homeSubTitle}>We Only Import the Best</h2>
          <Link href="/inventory">
            <button className={styles.leftButton}>See Our Inventory</button>
          </Link>
        </section>

        <div className={styles.banner}>
          <p>Reserve a car today!</p>
        </div>

        {/* Filler Copy Section */}
        <section className={styles.fillerCopy}>
          <div className={styles.row}>
            <div className={styles.column}>
              <img src="/sto.jpg" alt="Image" className={styles.image} />
            </div>
            <div className={`${styles.column} ${styles.textColumn}`}>
            <h2>Welcome to OnlyImports!</h2>
            <hr className={styles.hrLine} />
              <p className={styles.blockText}>
                We specialize in importing high-quality cars from around the world to meet your luxury driving needs. With our stringent selection process, you can trust that only the best vehicles make it to our inventory. Browse through our collection today and find your dream car!
              </p>
              <Link href="/inventory">
                <button className={styles.redButton}>See Our Inventory</button>
              </Link>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className={styles.location}>
          <div className={styles.row}>
            <div className={`${styles.column} ${styles.textColumn}`}>
              <h2>Our Location</h2>
              <hr className={styles.hrLine} />
              <p className={styles.blockText}>3900 University Blvd, Tyler, TX 75799</p>
              <p className={styles.blockText}>Monday-Friday</p>
              <p className={styles.blockText}>10am to 6pm (Appointment Only)</p>
              <p className={styles.blockText}>Saturday and Sunday</p>
              <p className={styles.blockText}>(Appointment Only)</p>
            </div>
            <div className={styles.column}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3205.0431689626535!2d-95.25323121629972!3d32.31504973585879!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8649cd17e83f9399%3A0xb0ab28a921956fd6!2sThe%20University%20of%20Texas%20at%20Tyler!5e1!3m2!1sen!2sus!4v1714357480516!5m2!1sen!2sus" width="100%" height="450" style={{ border: 0 }} loading="lazy"></iframe>
            </div>
          </div>
        </section>

      </Layout>
    </div>
  );
};

export default HomePage;
