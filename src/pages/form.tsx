import { useState } from 'react';

const NewVehicleForm = () => {
  const [Car_ID, setCarId] = useState('');
  const [Manufacturer_ID, setManufacturerId] = useState('');
  const [Car_Name, setName] = useState('');
  const [Year, setYear] = useState('');
  const [Engine_Type, setEngineType] = useState('');
  const [Fuel_Type, setFuelType] = useState('');
  const [Mileage, setMileage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {
      Car_ID,
      Manufacturer_ID,
      Car_Name,
      Year,
      Engine_Type,
      Fuel_Type,
      Mileage,
    };

    try {
      const response = await fetch('http://localhost:3000/api/addVehicle', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // If successful, reset the form fields
        setCarId('');
        setManufacturerId('');
        setName('');
        setYear('');
        setEngineType('');
        setFuelType('');
        setMileage('');

        // Display success message to user
        alert('Vehicle added successfully!');
      } else {
        // Handle error
        console.error('Failed to add vehicle:', response.statusText);
        alert('Failed to add vehicle. Please try again.');
      }
    } catch (error) {
      // Assert that error is of type Error
      const errorMessage = (error as Error).message;
      console.error('Error adding vehicle:', errorMessage);
      alert('Failed to add vehicle.');
    }
  };

  return (
    <div>
      <h1>Add New Vehicle</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Car ID:</label>
          <input type="text" value={Car_ID} onChange={(e) => setCarId(e.target.value)} />
        </div>
        <div>
          <label>Manufacturer ID:</label>
          <input type="text" value={Manufacturer_ID} onChange={(e) => setManufacturerId(e.target.value)} />
        </div>
        <div>
          <label>Name:</label>
          <input type="text" value={Car_Name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Year:</label>
          <input type="text" value={Year} onChange={(e) => setYear(e.target.value)} />
        </div>
        <div>
          <label>Engine Type:</label>
          <input type="text" value={Engine_Type} onChange={(e) => setEngineType(e.target.value)} />
        </div>
        <div>
          <label>Fuel Type:</label>
          <input type="text" value={Fuel_Type} onChange={(e) => setFuelType(e.target.value)} />
        </div>
        <div>
          <label>Mileage:</label>
          <input type="text" value={Mileage} onChange={(e) => setMileage(e.target.value)} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewVehicleForm;
