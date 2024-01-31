import { Utils } from "alchemy-sdk";
import { useDataContext } from "../contexts/DataContext";
import TokenBox from "./TokenBox";
import styles from "./TokensGrid.module.css";

function TokensGrid() {
  const { results, tokenDataObjects } = useDataContext();

  return (
    <div className={styles.grid}>
      {results.tokenBalances.map((token, i) => (
        <TokenBox
          key={token.contractAddress}
          icon={tokenDataObjects[i].logo}
          tokenName={tokenDataObjects[i].name}
          symbol={tokenDataObjects[i].symbol}
          balance={Utils.formatUnits(
            token.tokenBalance,
            tokenDataObjects[i].decimals
          )}
        />
      ))}
    </div>
  );
}

export default TokensGrid;

// {Utils.formatUnits(
//   token.tokenBalance,
//   tokenDataObjects[i].decimals
// )}

// src={tokenDataObjects[i].logo}
//           tokenName={tokenDataObjects[i].name}
//           symbol={tokenDataObjects[i].symbol}

{
  /* <div className={styles.grid}>
      <TokenBox balance="27" src="ethIcon.svg" tokenName="eth" symbol="eth" />
      <TokenBox balance="27" src="ethIcon.svg" tokenName="eth" symbol="eth" />
      <TokenBox balance="27" src="ethIcon.svg" tokenName="eth" symbol="eth" />
      <TokenBox balance="27" src="ethIcon.svg" tokenName="eth" symbol="eth" />
      {results.tokenBalances.map((token, i) => {
        <TokenBox
          balance="27"
          src="ethIcon.svg"
          tokenName="eth"
          symbol="eth"
        />;
      })}
    </div> */
}
