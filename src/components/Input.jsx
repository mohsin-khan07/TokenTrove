import { useDataContext } from "../contexts/DataContext";

function Input() {
  const { setUserAddress } = useDataContext();

  return (
    <input
      type="text"
      placeholder="Enter an address"
      onChange={(e) => setUserAddress(e.target.value)}
    ></input>
  );
}

export default Input;
