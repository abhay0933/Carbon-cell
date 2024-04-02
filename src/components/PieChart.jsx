import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PiCurrencyBtcFill } from "react-icons/pi";
import "./PieChart.css"
import NavigationBar from './NavigationBar';


const CryptocurrencyPrices = () => {
  const [prices, setPrices] = useState(null);
  const COLORS = ['#1B9A59', '#9FFF9D', '#C4B10A']

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json');
        setPrices(response.data.bpi);
      } catch (error) {
        console.error('Error fetching cryptocurrency prices:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Cryptocurrency Prices</h2>
      {prices ? (
        <div className="container">
          {Object.keys(prices).map((currency, index) => (
            <div className="card" key={currency}>
                <div className="currencyimg">
                <p className='currencySymbol' style={{backgroundColor:`${COLORS[index % COLORS.length]}`}}> <span dangerouslySetInnerHTML={{__html: prices[currency].symbol}} /></p>
                <h3 style={{color:`${COLORS[index % COLORS.length]}`}}>{currency}</h3>
                </div>
                <div className='currencyRate'>
                <p style={{color:`${COLORS[index % COLORS.length]}`}}> {prices[currency].description}</p>
              <p style={{color:`${COLORS[index % COLORS.length]}`}}>Rate: {prices[currency].rate}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>Loading...</div>
      )}
     
    </div>
  );
};

export default CryptocurrencyPrices;
