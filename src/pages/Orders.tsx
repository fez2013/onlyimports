import React, { useState } from 'react';

const Orders = () => {
    const [customerID, setCustomerID] = useState('');

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            const response = await fetch('/api/inventory', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ customerID }),
            });
            const data = await response.json();
            console.log(data);
            if (response.ok) {
                alert('Customer ID submitted successfully');
            } else {
                throw new Error(data.message || 'Failed to submit Customer ID');
            }
        } catch (error) {
            console.error('Error submitting Customer ID:', error);
            if (error instanceof Error) {
                alert(error.message);
            } else {
                alert('An unknown error occurred');
            }
        }
    };

    return (
        <div>
            <h1>Submit Customer ID</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="customerID">Customer ID:</label>
                <input
                    type="text"
                    id="customerID"
                    value={customerID}
                    onChange={(e) => setCustomerID(e.target.value)}
                    required
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Orders;