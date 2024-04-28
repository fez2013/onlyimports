import { useState } from 'react';
import { query } from '../lib/db.js';

const NewVehicleForm = () => {
  const [manufacturerId, setManufacturerId] = useState('');
  const [name, setName] = useState('');
  const [year, setYear] = useState('');
  const [engineType, setEngineType] = useState('');
  const [fuelType, setFuelType] = useState('');
  const [mileage, setMileage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      manufacturerId,
      name,
      year,
      engineType,
      fuelType,
      mileage,
    };

    try {
      // Send the form data to the backend API to save to the database
      await query({
        query: 'INSERT INTO Inventory (ManufacturerID, Name, Year, EngineType, FuelType, Mileage) VALUES (?, ?, ?, ?, ?, ?)',
        values: [manufacturerId, name, year, engineType, fuelType, mileage],
      });

      // If successful, reset the form fields
      setManufacturerId('');
      setName('');
      setYear('');
      setEngineType('');
      setFuelType('');
      setMileage('');

      // Display success message to user
      alert('Vehicle added successfully!');
    } catch (error) {
      // Handle any errors
      console.error('Error adding vehicle:', error.message);
      alert('Failed to add vehicle. Please try again.');
    }
  };

  return (
    <div>
      <h1>Add New Vehicle</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Manufacturer ID:</label>
          <input type="text" value={manufacturerId} onChange={(e) => setManufacturerId(e.target.value)} />
        </div>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Year:</label>
          <input type="text" value={year} onChange={(e) => setYear(e.target.value)} />
        </div>
        <div>
          <label>Engine Type:</label>
          <input type="text" value={engineType} onChange={(e) => setEngineType(e.target.value)} />
        </div>
        <div>
          <label>Fuel Type:</label>
          <input type="text" value={fuelType} onChange={(e) => setFuelType(e.target.value)} />
        </div>
        <div>
          <label>Mileage:</label>
          <input type="text" value={mileage} onChange={(e) => setMileage(e.target.value)} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewVehicleForm;
