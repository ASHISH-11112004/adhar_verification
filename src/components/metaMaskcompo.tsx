import React, { useState } from 'react'
import detectEthereumProvider from '@metamask/detect-provider';
import { useNavigate } from 'react-router-dom';

const MetaMaskcompo = () => {

    const [account, setAccount] = useState(null);
    const navigation=useNavigate()

    const connectWallet = async () => {
        const provider = await detectEthereumProvider();
    
        if (provider) {
          try {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            
            setAccount(accounts[0]);
            navigation("/wallet")

          } catch (error) {
            console.error("User rejected the request.");
          }
        } else {
          console.error('Please install MetaMask!');
        }
      };
  return (
    <div>
        <h2>Wallet Connection</h2>
    {account ? (
      <div>Connected Account: {account}</div>
    ) : (
      <button onClick={connectWallet}>Connect MetaMask Wallet</button>
    )}
    </div>
  )
}

export default MetaMaskcompo