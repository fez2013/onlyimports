import Head from "next/head";
import Image from "next/image";
import styles from "./page.module.css";

const cars = [
  { id: 1, name: 'Car 1', image: '/car1.jpg' },
  { id: 2, name: 'Car 2', image: '/car2.jpg' },
  { id: 3, name: 'Car 3', image: '/car3.jpg' },
  { id: 4, name: 'Car 4', image: '/car4.jpg' },
  // Add more cars as needed
];

export default function InventoryPage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Inventory Page</title>
        <meta name="description" content="Inventory page for car dealership" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Inventory Page</h1>
        <div className={styles.grid}>
          {cars.map((car) => (
            <div key={car.id} className={styles.card}>
              <Image src={car.image} alt={car.name} width={300} height={200} />
              <h3>{car.name}</h3>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
