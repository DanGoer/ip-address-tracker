import { useState } from "react";
import arrow from "../../../assets/icon-arrow.svg";

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
      ></input>
      <svg
        className="w-8 h-8 fill-black hover:cursor-pointer"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path d="M2 1l6 6-6 6" />
      </svg>
      <svg className="fill-black w-8 h-8" src={arrow}></svg>
      <button type="submit" onClick={sendValue()} src={arrow}>
        hallo
      </button>
    </div>
  );
}

export default SearchBar;
