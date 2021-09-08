import './style.css'

export const TextInput = ({ searchValue, handleCharge }) => {
  return (
    <input
      className="input"
      type="search"
      onChange={handleCharge}
      value={searchValue}
      placeholder="input for search"
    />
  );
}