// src/services/VehicleService.js
import axios from 'axios';

const API_URL = 'http://localhost:8000/api/vehicles/'; // Ensure backend runs on this port

const getVehicles = () => {
    return axios.get(API_URL);
};

// Add other service methods later if needed (e.g., createVehicle, deleteVehicle)
const vehicleService = { // Export as an object
    getVehicles,
};

export default vehicleService;
