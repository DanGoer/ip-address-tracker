import Headline from "./components/Headline";
import InfoBar from "./components/InfoBar";
import IpMap from "./components/IpMap";
import SearchBar from "./components/SearchBar";

function index() {
  return (
    <>
      <Headline />
      <SearchBar />
      <InfoBar />
      <IpMap />
    </>
  );
}

export default index;
