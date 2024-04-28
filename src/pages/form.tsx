import { useState } from 'react';

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
      const response = await fetch('/api/addVehicle', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // If successful, reset the form fields
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
      // Handle any network errors
      console.error('Error adding vehicle:', error.message);
      alert('Failed to add vehicle. Please try again.');
    }
  };

  return (
    <div>
      <h1>Add New Vehicle</h1>
      <form onSubmit={handleSubmit}>
        {/* Your form fields */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewVehicleForm;
