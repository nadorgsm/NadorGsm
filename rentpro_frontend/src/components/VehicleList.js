// src/components/VehicleList.js
import React, { useState, useEffect } from 'react';
import vehicleService from '../services/VehicleService'; // Corrected import

const VehicleList = () => {
    const [vehicles, setVehicles] = useState([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true); // Added loading state

    useEffect(() => {
        vehicleService.getVehicles() // Corrected service call
            .then(response => {
                setVehicles(response.data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error fetching vehicles:', error);
                setError('Failed to fetch vehicles. Is the backend server running and accessible at ' + vehicleService.API_URL + '?');
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return <p>Loading vehicles...</p>;
    }

    if (error) {
        return <p style={{ color: 'red' }}>{error}</p>;
    }

    if (vehicles.length === 0) {
        return <p>No vehicles available in the system.</p>;
    }

    return (
        <div>
            <h2>Vehicle Fleet</h2>
            <table border="1" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Make</th>
                        <th>Model</th>
                        <th>Year</th>
                        <th>VIN</th>
                        <th>Reg. Number</th>
                        <th>Type</th>
                        <th>Rate/Day</th>
                        <th>Status</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {vehicles.map(vehicle => (
                        <tr key={vehicle.id}>
                            <td>{vehicle.id}</td>
                            <td>{vehicle.make}</td>
                            <td>{vehicle.model}</td>
                            <td>{vehicle.year}</td>
                            <td>{vehicle.vin}</td>
                            <td>{vehicle.registration_number}</td>
                            <td>{vehicle.vehicle_type}</td>
                            <td>${typeof vehicle.daily_rental_rate === 'number' ? vehicle.daily_rental_rate.toFixed(2) : vehicle.daily_rental_rate}</td>
                            <td>{vehicle.status}</td>
                            <td>
                                {vehicle.image ? (
                                    <img src={`http://localhost:8000${vehicle.image}`} alt={`${vehicle.make} ${vehicle.model}`} style={{ width: '100px', height: 'auto' }} />
                                ) : (
                                    'N/A'
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default VehicleList;
