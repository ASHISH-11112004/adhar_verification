import React, { useState, useEffect } from 'react';
import detectEthereumProvider from '@metamask/detect-provider';
import { useAnonAadhaar, LogInWithAnonAadhaar } from '@anon-aadhaar/react';

const WalletConnection = () => {
  const [account, setAccount] = useState(null);
  const [anonAadhaar] = useAnonAadhaar();

  const connectWallet = async () => {
    const provider = await detectEthereumProvider();

    if (provider) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);
      } catch (error) {
        console.error("User rejected the request.");
      }
    } else {
      console.error('Please install MetaMask!');
    }
  };

  useEffect(() => {
    console.log('Aadhaar status: ', anonAadhaar.status);
  }, [anonAadhaar]);

  return (
    <div>
      <h2>Wallet Connection</h2>
      {account ? (
        <div>Connected Account: {account}</div>
      ) : (
        <button onClick={connectWallet}>Connect MetaMask Wallet</button>
      )}

      <h2>Aadhaar Verification</h2>
      {anonAadhaar.status === 'logged-in' ? (
        <div>
          <h3>Verification Successful</h3>
          <pre>{JSON.stringify(anonAadhaar.anonAadhaarProof, null, 2)}</pre>
        </div>
      ) : (
        <LogInWithAnonAadhaar nullifierSeed={1234} />
      )}
    </div>
  );
};

export default WalletConnection;
