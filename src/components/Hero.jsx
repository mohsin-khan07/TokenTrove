import { useDataContext } from "../contexts/DataContext";
import Button from "./Button";
import styles from "./Hero.module.css";
import Input from "./Input";

function Hero() {
  const { getWalletAddress, getTokenBalancesAndData, walletConnected } =
    useDataContext();

  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.title}>ERC-20 Token Indexer</div>
        <p>
          Connect your wallet or enter an address to get all its ERC20 token
          balances!
        </p>
        <div className={styles.buttons}>
          <div className={styles.inputs}>
            <Button onClick={getWalletAddress}>
              {walletConnected ? "CONNECTED" : "CONNECT WALLET"}
            </Button>
            <Input />
          </div>
          <Button onClick={getTokenBalancesAndData}>CHECK</Button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
