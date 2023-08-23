import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TrainList = ({ trains }) => {
  return (
    <div>
      <h2>All Trains</h2>
      <ul>
        {trains.map((train) => (
          <li key={train.trainNumber}>
            {train.trainName} - Departure: {train.departureTime.Hours}:{train.departureTime.Minutes}
          </li>
        ))}
      </ul>
    </div>
  );
};

const App = () => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    const fetchTrains = async () => {
      try {
        const response = await axios.get('http://20.244.56.144/train/trains', {
          headers: {
            Authorization: 'Bearer YOUR_AUTH_TOKEN',
          },
        });
        setTrains(response.data);
      } catch (error) {
        console.error('Error fetching trains:', error);
      }
    };

    fetchTrains();
  }, []);

  return (
    <div>
      <h1>Train Schedule App</h1>
      <TrainList trains={trains} />
    </div>
  );
};

export default App;
