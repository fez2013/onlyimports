import Head from "next/head";
import Image from "next/image";
import styles from '../app/page.module.css';

const cars = [
  { id: 1, name: '1999 Nissan Skyline GT-R VSpec', image: '/car1.jpg', price: '$245,000' },
  { id: 2, name: 'Car 2', image: '/car2.jpg', price: '$200,000' },
  { id: 3, name: 'Car 3', image: '/car3.jpg', price: '$180,000' },
  { id: 4, name: 'Car 4', image: '/car4.jpg', price: '$150,000' },
  // Add more cars as needed
];

export default function InventoryPage() {
  return (
    <div>
      <main>
        <div className={styles.container}>
          <h1 className={styles.title}>Inventory Page</h1>
        </div>
        <div className={styles.grid}>
          {cars.map((car) => (
            <div key={car.id} className={styles.card}>
              <div className={styles.cardImage}>
                <Image src={car.image} alt={car.name} width={300} height={200} />
              </div>
              <div className={styles.cardContent}>
                <h2 className={styles.cardTitle}>{car.name}</h2>
                <p className={styles.cardPrice}>Offered at: {car.price}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}