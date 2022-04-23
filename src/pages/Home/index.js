import axios from "axios";
import { useEffect, useState } from "react";
import Headline from "./components/Headline";
import InfoBar from "./components/InfoBar";
import IpMap from "./components/IpMap";
import SearchBar from "./components/SearchBar";

function Home() {
  const [location, setLocation] = useState("");
  const [ipAddress, setIPAddress] = useState("");
  const [timeZone, setTimeZone] = useState("");
  const [isp, setIsp] = useState("");

  const API_KEY = process.env.REACT_APP_IP_ADDRESS_TRACKER_API_KEY;
  console.log(API_KEY);

  useEffect(() => {
    axios
      .get(
        `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}ipAddress=8.8.8.8`
      )
      .then((response) => {});
  }, []);

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
