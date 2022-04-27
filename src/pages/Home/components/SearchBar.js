import { useState } from "react";

function SearchBar({ setIPAddress, ipAddress }) {
  const [value, setValue] = useState("");

  const handleInput = (event) => {
    setValue(event.currentTarget.value);
  };

  const sendValue = () => {
    setIPAddress(value);
  };

  return (
    <div className="flex flex-row items-center z-30">
      <input
        className="w-80 h-10 hover:cursor-pointer border-1 "
        type="text"
        onChange={handleInput}
        placeholder={ipAddress}
      />
      <button type="submit" onClick={() => sendValue()}>
        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14">
          <path fill="black" stroke="#FFF" strokeWidth="3" d="M2 1l6 6-6 6" />
        </svg>
      </button>
    </div>
  );
}

export default SearchBar;
