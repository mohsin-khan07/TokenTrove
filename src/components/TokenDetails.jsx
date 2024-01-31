import { useDataContext } from "../contexts/DataContext";
import Spinner from "./Spinner";
import styles from "./TokenDetails.module.css";
import TokensGrid from "./TokensGrid";

function TokenDetails() {
  const {
    userAddress,
    results,
    hasQueried,
    wrongAddress,
    walletError,
    isLoading,
  } = useDataContext();

  return (
    <section>
      {isLoading ? (
        <Spinner />
      ) : !walletError ? (
        !wrongAddress ? (
          hasQueried ? (
            <div className={styles.details}>
              <div className={styles.heading}>ERC-20 Token Balances of:</div>
              <div className={styles.address}>{userAddress}</div>
              <div>Total Tokens: {results.tokenBalances.length}</div>
              <TokensGrid />
            </div>
          ) : (
            <div>Please make a query!</div>
          )
        ) : (
          <div>Please enter a valid Ethereum address!</div>
        )
      ) : (
        <div>Error connecting with wallet!</div>
      )}
    </section>
  );
}

export default TokenDetails;
