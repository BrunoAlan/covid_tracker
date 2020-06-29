import React, { useState, useEffect } from 'react';
import { Chart, Cards, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api/api';
import image from './images/image.png';

function App() {
  const [dataAPI, setDataAPI] = useState([]);
  const [country, setCountry] = useState('');

  async function fetchMyAPI() {
    const response = await fetchData();
    setDataAPI(response);
  }

  const handleCountryChange = async (country2) => {
    setCountry({ country2 });
    const response = await fetchData(country2);
    setDataAPI(response);
  };

  useEffect(() => {
    fetchMyAPI();
  }, []);

  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} alt="COVID-19" />
      <Cards data={dataAPI} />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Chart data={dataAPI} country={country} />
    </div>
  );
}

export default App;
