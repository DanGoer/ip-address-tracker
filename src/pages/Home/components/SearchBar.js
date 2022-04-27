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
        className="w-72 h-14 hover:cursor-pointer rounded-l-2xl pl-6 text-xl text-vdg placeholder-dg"
        type="text"
        onChange={handleInput}
        placeholder={ipAddress}
      />
      <button
        className="bg-black h-full w-14 rounded-r-2xl hover:bg-vdg flex justify-center items-center"
        type="submit"
        onClick={() => sendValue()}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14">
          <path fill="black" stroke="#FFF" strokeWidth="3" d="M2 1l6 6-6 6" />
        </svg>
      </button>
    </div>
  );
}

export default SearchBar;
