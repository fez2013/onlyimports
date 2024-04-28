import { useState, FormEvent } from 'react';

const NewVehicleForm = () => {
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // You can send the form data to your backend API to handle saving the new vehicle to the database
    const formData = {
      make,
      model,
      year,
      price,
    };

    // Example of sending form data to an API endpoint using fetch
    const response = await fetch('/api/addVehicle', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      // Redirect user to a success page or show a success message
      alert('Vehicle added successfully!');
    } else {
      // Handle error
      alert('Failed to add vehicle. Please try again.');
    }
  };

  return (
    <div>
      <h1>Add New Vehicle</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Make:</label>
          <input type="text" value={make} onChange={(e) => setMake(e.target.value)} />
        </div>
        <div>
          <label>Model:</label>
          <input type="text" value={model} onChange={(e) => setModel(e.target.value)} />
        </div>
        <div>
          <label>Year:</label>
          <input type="text" value={year} onChange={(e) => setYear(e.target.value)} />
        </div>
        <div>
          <label>Price:</label>
          <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewVehicleForm;
