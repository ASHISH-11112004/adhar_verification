import detectEthereumProvider from '@metamask/detect-provider';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ConnectBtn = () => {
  const [account, setAccount] = useState(null);
  const navigation = useNavigate()

  const connectWallet = async () => {
    const provider = await detectEthereumProvider();

    if (provider) {
      try {
        // eslint-disable-next-line
        // @ts-ignore

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
      {account ? (
        <div>Connected Account: {account}</div>
      ) : (
        <button className='w-72 shadow-xl bg-orange-400 flex justify-center items-center gap-2 text-white ' onClick={connectWallet}>
          <img className='h-10 w-10' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/2048px-MetaMask_Fox.svg.png" alt="" />Connect MetaMask Wallet</button>
      )}
    </div>
  )
}

export default ConnectBtn