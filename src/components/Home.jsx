import React from "react";
import NavigationBar from "./NavigationBar";
import "./Home.css";
import Chart from "./Chart";
import CryptocurrencyPrices from "./PieChart";
import Wallet from "./Wallet";

const Home = () => {
  return (
    <div className='homeContainer'>
      <div className='homeSidebar'>
        <NavigationBar />
      </div>
      <div className='homeRightside'>
        <div className="headingsContainer">
        <div className='headings'>
          <h1>
            Hello,<span className='name'>Brooklyn Simmons</span>👋
          </h1>
          <h2>
            Welcome to <span style={{ color: "#49d907" }}>Spot Trading!</span>
          </h2>
        </div>
        <div className="startTradingbtn">
            <button className="tardingbtn">Start Trading</button>
        </div>
        </div>
        <div className="charts">
        <div className="populationChart">
            <Chart />
        </div>
        <div className="metaWalletContainer">
            <h3>Connect Meta Mask Wallet</h3>
          <img src="https://www.transparentpng.com/thumb/wallet/2NZRNT-blcak-wallet-transparent-png-icons.png" />
          <Wallet />
        </div>
        </div>
        <div className="cryptoPrices">
            <CryptocurrencyPrices />

        </div>
      </div>
    </div>
  );
};

export default Home;
