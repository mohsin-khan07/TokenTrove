/* eslint-disable react/prop-types */
import { Alchemy, Network } from "alchemy-sdk";
import { createContext, useContext, useState } from "react";

const DataContext = createContext();

const settings = {
  apiKey: import.meta.env.VITE_ALCHEMY_API,
  network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(settings);

function DataContextProvider({ children }) {
  const [userAddress, setUserAddress] = useState("");
  const [results, setResults] = useState([]);
  const [hasQueried, setHasQueried] = useState(false);
  const [tokenDataObjects, setTokenDataObjects] = useState([]);
  const [wrongAddress, setWrongAddress] = useState(false);
  const [walletError, setWalletError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [walletConnected, setWalletConnected] = useState(false);

  const getWalletAddress = async () => {
    if (window.ethereum) {
      try {
        const eth = window.ethereum;
        const address = await eth.request({ method: "eth_requestAccounts" });
        setUserAddress(address[0]);
        setWalletConnected(true);
      } catch (error) {
        console.error("Error connecting with wallet!");
        setWalletError(true);
      }
    } else {
      alert("No wallet is available to connect");
    }
  };

  const getTokenBalancesAndData = async () => {
    try {
      setIsLoading(true);

      let data;

      if (userAddress.slice(-4) === ".eth")
        data = await alchemy.core.resolveName(userAddress);

      data = await alchemy.core.getTokenBalances(userAddress);
      setResults(data);

      const tokenDataPromises = [];

      for (let i = 0; i < data.tokenBalances.length; i++) {
        const tokenData = alchemy.core.getTokenMetadata(
          data.tokenBalances[i].contractAddress
        );
        tokenDataPromises.push(tokenData);
      }

      setTokenDataObjects(await Promise.all(tokenDataPromises));
      setHasQueried(true);
    } catch (error) {
      console.error("Error fetching data");
      setWrongAddress(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <DataContext.Provider
      value={{
        userAddress,
        setUserAddress,
        getTokenBalancesAndData,
        results,
        tokenDataObjects,
        hasQueried,
        wrongAddress,
        walletError,
        isLoading,
        getWalletAddress,
        walletConnected,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

function useDataContext() {
  const context = useContext(DataContext);
  if (!context)
    throw new Error("useDataContext must be used with DataContextProvider");
  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { DataContextProvider, useDataContext };
