import axios from "axios";
import { useEffect, useState } from "react";
import Headline from "./components/Headline";
import InfoBar from "./components/InfoBar";
import IpMap from "./components/IpMap";
import SearchBar from "./components/SearchBar";

function Home() {
  const [ipAddress, setIPAddress] = useState("80.133.167.104");
  const [data, setData] = useState(null);

  const API_KEY = process.env.REACT_APP_IP_ADDRESS_TRACKER_API_KEY;

  useEffect(() => {
    axios
      .get(
        `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${ipAddress}`
      )
      .then((response) => {
        setData(response);

        console.log(response);
      });
  }, []);

  return (
    <main className="h-screen">
      <header className="pt-6 lg:pt-8 h-72 lg:h-68 text-center relative bg-nav">
        <Headline />

        {data ? <InfoBar data={data} /> : <div></div>}
      </header>
      {data ? <IpMap data={data} /> : <div></div>}
    </main>
  );
}

export default Home;

// className="bg-nav bg-setup py-90 flex flex-col justify-center items-center relative h-[35vh] "
// <SearchBar setIPAddress={setIPAddress} ipAddress={ipAddress} />
// console.log(JSON.stringify(data.data.location.lat));

// <IpMap lat={data.location.lat} lng={data.location.lng} />;

// <img
//         className="justify-start bg-fixed bg-center bg-cover w-full h-auto z-1"
//       src={navbar}
//     alt="Nav Bar"
// />
