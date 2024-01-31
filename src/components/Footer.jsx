import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      Token Indexer &copy; {new Date().getFullYear()}
    </div>
  );
}

export default Footer;
