import Headline from "./components/Headline";
import InfoBar from "./components/InfoBar";
import IpMap from "./components/IpMap";
import SearchBar from "./components/SearchBar";

function Home() {
  return (
    <div>
      <main className="bg-nav bg-setup py-6 flex flex-col justify-center items-center ">
        <Headline />
        <SearchBar />
        <InfoBar />
        <IpMap />
      </main>
    </div>
  );
}

export default Home;

// <img
//         className="justify-start bg-fixed bg-center bg-cover w-full h-auto z-1"
//       src={navbar}
//     alt="Nav Bar"
// />
