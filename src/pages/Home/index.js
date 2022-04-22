import Headline from "./components/Headline";
import InfoBar from "./components/InfoBar";
import IpMap from "./components/IpMap";
import SearchBar from "./components/SearchBar";
import navbar from "../../assets/images/pattern-bg.png";

function Home() {
  return (
    <main className="flex flex-col justify-center items-center">
      <img className="w-full h-auto bg-fixed z-1" src={navbar} alt="Nav Bar" />

      <div className="h-100 w-auto">
        <Headline />
        <SearchBar />
        <InfoBar />
        <IpMap />
      </div>
    </main>
  );
}

export default Home;
