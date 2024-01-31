/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import styles from "./Button.module.css";

function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}

export default Button;
