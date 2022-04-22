function SearchBar() {
  return (
    <div className="flex flex-row items-center">
      <input className="w-80 h-10 hover:cursor-pointer border-1 " type="text" />
      <svg
        className="w-8 h-8 fill-black hover:cursor-pointer"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path d="M2 1l6 6-6 6" />
      </svg>
    </div>
  );
}

export default SearchBar;
