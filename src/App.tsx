import { AnonAadhaarProvider } from '@anon-aadhaar/react';
import WalletConnection from './WalletConnection';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MetaMaskcompo from './components/metaMaskcompo';

function App() {
  return (
    <AnonAadhaarProvider>
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<MetaMaskcompo />}/>
          <Route path='/wallet' element={<WalletConnection />} />
      </Routes>
    </BrowserRouter>
     
    </AnonAadhaarProvider>
  );
}

export default App;
