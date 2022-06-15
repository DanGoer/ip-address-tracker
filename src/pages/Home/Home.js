import axios from "axios"
import { useEffect, useState } from "react"
import Footer from "./components/Footer"
import Headline from "./components/Headline"
import InfoBar from "./components/InfoBar"
import IpMap from "./components/IpMap"
import SearchBar from "./components/SearchBar"

function Home() {
  const [ipAddress, setIPAddress] = useState("")
  const [data, setData] = useState(null)

  const API_KEY = process.env.REACT_APP_IP_ADDRESS_TRACKER_API_KEY

  // Gets the IP from user
  useEffect(() => {
    const getIp = async () => {
      const res = await axios.get("https://geolocation-db.com/json/")
      setIPAddress(res.data.IPv4)
    }
    getIp()
  }, [])

  // Gets data for requested IP
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(
        `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${ipAddress}`
      )
      setData(res)
    }
    getData()
  }, [ipAddress])

  return (
    <main className="h-screen">
      <header className="pt-6 lg:pt-8 h-64 text-center relative bg-nav bg-center bg-cover flex flex-col items-center gap-4">
        <Headline />
        <SearchBar setIPAddress={setIPAddress} ipAddress={ipAddress} />
        {data && <InfoBar data={data} />}
      </header>
      {data && <IpMap data={data} />}
      <Footer />
    </main>
  )
}

export default Home
