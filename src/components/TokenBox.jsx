/* eslint-disable react/prop-types */
import styles from "./TokenBox.module.css";

function TokenBox({ icon, tokenName, symbol, balance }) {
  return (
    <div className={styles.tokenBox}>
      <Image icon={icon} />
      <Content tokenName={tokenName} symbol={symbol} balance={balance} />
    </div>
  );
}

function Image({ icon }) {
  return <img src={icon ? icon : "ethIcon.svg"} alt="icon"></img>;
}

function Content({ tokenName, symbol, balance }) {
  const decimalBalance = parseFloat(balance);
  let formattedBalance = decimalBalance.toFixed(2);

  // if (formattedBalance.length > 30) {
  //   let leftCharacters = formattedBalance.length - 15;
  //   formattedBalance = `1e${leftCharacters}`;
  // }

  return (
    <div className={styles.content}>
      <TitleValue
        title="Name:"
        value={tokenName ? tokenName : "Not Available"}
      />
      <TitleValue title="Symbol:" value={symbol ? symbol : "Not Available"} />
      <TitleValue title="Balance:" value={formattedBalance} />
    </div>
  );
}

function TitleValue({ title, value }) {
  return (
    <div>
      <span className={styles.title}>{title}</span>
      <span className={styles.value}>{value}</span>
    </div>
  );
}

export default TokenBox;
