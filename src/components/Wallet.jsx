import React from 'react';
import "./Wallet.css";
import Web3 from 'web3';
import { useState } from 'react';

const Wallet = () => {

    const [data, setData] = useState(null);
    const [msg, setMsg] = useState("");

    const checkWalletConnection = () => {
        if(window.ethereum) {
            setData(new Web3(window.ethereum));
            connectWallet();
        }else{
           setMsg("Unable to Connect");
           alert("Please install Meta Mask!");
        }
    };

    const connectWallet = async() => {
         try {
            const acc = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            setMsg("Wallet Connected Successfully!")
            
         } catch (error) {
            console.log("Error", error);
            setMsg("Unable to connect to Meta Mask Wallet!");
         }
    };


  return (
    <div className='walletContainer'>
        <button className='connectWalletbtn' onClick={checkWalletConnection}>Connect Wallet</button>
        <p style={{ color : msg === "Wallet Connected Successfully!" ? "green" : "red"}} >{msg}</p>
    </div>
  )
}

export default Wallet