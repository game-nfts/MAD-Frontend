import { useWeb3React } from '@web3-react/core';
import { useState, useEffect } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import './App.css';
import ComingSoon from './components/ComingSoon';
import Footer from './components/Footer';
import Home from './components/Home';
import LeaseEstates from './components/LeaseEstates';
import Navbar from './components/Navbar';
import WalletSelect from './components/WalletConnect';
import { useEagerConnect, useInactiveListener } from './helpers/hooks';
import { useStateWithSessionStorage } from './helpers/sessionStorage';
import { ethers } from 'ethers';
import parcels_abi from './artifacts/ParcelABI.json';
import estate_abi from './artifacts/EstateABI.json';
import radicalmarket_abi from './artifacts/RadicalMarketABI.json';
import cv_abi from './artifacts/CryptoVoxelsABI.json';
import RadicalMarketPage from './components/RadicalMarketPage';
import RadicalMarketDetails from './components/RadicalMarketDetails';

function App() {
  const [estateContract, handleEstateContract] = useState(null);
  const [estateInstance, handleEstateInstance] = useState(null);
  const [parcelContract, handleParcelContract] = useState(null);
  const [parcelInstance, handleParcelInstance] = useState(null);
  const [radicalMarketContract, handleRadicalMarketContract] = useState(null);
  const [radicalMarketInstance, handleRadicalMarketInstance] = useState(null);
  const [cvContract, handleCvContract] = useState(null);
  const [loginType, handleLoginType] = useStateWithSessionStorage('loginType', null);
  const [ethAlias, handleEthAlias] = useState(null);
  const [ethAvatar, handleEthAvatar] = useState(null);
  const [showWalletSelect, handleShowWalletSelect] = useState(false);
  const [activePage, handleActivePage] = useState("/home");
  const [activatingConnector, setActivatingConnector] = useState();
  const context = useWeb3React();
  const { connector, library, chainId, account, activate, deactivate, active, error } = context;

  // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already
  const triedEager = useEagerConnect(loginType);

  // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists
  useInactiveListener(!triedEager || !!activatingConnector);

  useEffect(() => {
    (async () => {
      if (active) {
        let provider = new ethers.providers.JsonRpcProvider("https://eth-mainnet.alchemyapi.io/v2/xTrIufa8bBMhQmEc14yrjDOV0yKIka9r");
        // Decentraland contracts
        const ec = new ethers.Contract('0x959e104E1a4dB6317fA58F8295F586e1A978c297', estate_abi, provider);
        const pc = new ethers.Contract('0xF87E31492Faf9A91B02Ee0dEAAd50d51d56D5d4d', parcels_abi, provider);
        handleEstateContract(ec);
        handleParcelContract(pc);
        const ei = ec.connect(library.getSigner());
        const pi = pc.connect(library.getSigner());
        handleEstateInstance(ei);
        handleParcelInstance(pi);

        // CryptoVoxels contract
        const cvc = new ethers.Contract('0x79986aF15539de2db9A5086382daEdA917A9CF0C', cv_abi, provider);
        handleCvContract(cvc);

        // RadicalMarket contract
        const rmc = new ethers.Contract('0x10b067bedB8F4739E5c20891e1A5E619B2D2DCCe', radicalmarket_abi.abi, library);
        const rmi = rmc.connect(library.getSigner());
        handleRadicalMarketContract(rmc);
        handleRadicalMarketInstance(rmi);
      }
    })();
  }, [active, library]);

  // handle logic to recognize the connector currently being activated
  useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined)
    }
  }, [activatingConnector, connector])

  useEffect(() => {
    (async () => {
      if (!!account && !!library) {
        try {
          let alias = await library.lookupAddress(account);
          if (alias) {
            handleEthAlias(alias);

            const resolver = await library.getResolver(alias);
            const avatar = await resolver.getText("avatar");
            handleEthAvatar(avatar);
          } else {
            handleEthAvatar(null);
            handleEthAlias(null);
          }
        } catch (err) {
          handleEthAvatar(null);
          handleEthAlias(null);
        }
      }
    })();
  }, [account, library]);

  document.body.classList.add('bg-gray-500');

  return (
    <>
      <Router>
        <div className={`flex flex-col relative min-h-screen max-h-screen bg-gray-500 font-nexa`}>
          <ReactNotification />
          <Navbar accountData={{ ethAlias: ethAlias, ethAvatar: ethAvatar }} handleLoginType={handleLoginType} activePage={activePage} handleShowWalletSelect={handleShowWalletSelect} />
          <Routes>
            <>
              <Route exact path="/" element={<Home handleActivePage={handleActivePage} />} />
              <Route exact path="/auction" element={<ComingSoon title="AUCTION" />} />
              <Route exact path="/lease" element={<LeaseEstates handleActivePage={handleActivePage} estateContract={estateContract} parcelContract={parcelContract} estateInstance={estateInstance} parcelInstance={parcelInstance} cvContract={cvContract} />} />
              <Route exact path="/stake" element={<ComingSoon title="LIQUIDITY MINING" />} /> {/* <LiquidityMining /> */}
              <Route exact path="/docs" element={<ComingSoon title="DOCS" />} />
              <Route exact path="/radicalmarket" element={<RadicalMarketPage title="RADICAL MARKET" handleActivePage={handleActivePage} estateContract={estateContract} parcelContract={parcelContract} estateInstance={estateInstance} parcelInstance={parcelInstance} cvContract={cvContract} />} />
              <Route exact path="/radicalmarket/:id" element={<RadicalMarketDetails radicalMarketContract={radicalMarketContract} radicalMarketInstance={radicalMarketInstance} />} />
            </>
          </Routes>
          <Footer activePage={activePage} />
        </div>
      </Router>
      {showWalletSelect &&
        <WalletSelect handleLoginType={handleLoginType} onClose={() => {
          if (!account) {
            handleLoginType(null);
          }
          handleShowWalletSelect(false);
        }} />
      }
    </>
  );
}

export default App;
