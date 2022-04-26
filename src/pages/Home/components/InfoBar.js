function InfoBar({ data }) {
  return (
    <section className=" w-10/12 h-80 bg-white border-1 flex flex-col items-center justify-center z-20 overflow-visible">
      <ul className="py-20">
        <li className="flex flex-col items-center justify-center py-4">
          <p className="font-rubik font-normal text-md text-gray-400">
            IP ADDRESS
          </p>
          <b className="font-rubik font-medium text-xl">{data.data.ip}</b>
        </li>
        <li className="flex flex-col items-center justify-center py-4">
          <p className="font-rubik font-normal text-md text-gray-400">
            LOCATION
          </p>
          <b className="font-rubik font-medium text-xl">
            {data.data.location.city}, {data.data.location.region}{" "}
            {data.data.location.postalCode}
          </b>
        </li>
        <li className="flex flex-col items-center justify-center py-4">
          <p className="font-rubik font-normal text-md text-gray-400">
            TIMEZONE
          </p>
          <b className="font-rubik font-medium text-xl">
            UTC {data.data.location.timezone}
          </b>
        </li>
        <li className="flex flex-col items-center justify-center py-4">
          <p className="font-rubik font-normal text-md text-gray-400">ISP</p>
          <b className="font-rubik font-medium text-xl">{data.data.isp}</b>
        </li>
      </ul>
    </section>
  );
}

export default InfoBar;
