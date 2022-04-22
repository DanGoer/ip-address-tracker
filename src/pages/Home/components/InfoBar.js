function InfoBar() {
  return (
    <section className="w-10/12 h-80 bg-slate-100 border-1 flex flex-col items-center justify-center">
      <ul className="py-20">
        <li className="flex flex-col items-center justify-center py-4">
          <p className="font-rubik font-normal text-md text-gray-400">
            IP ADDRESS
          </p>
          <b className="font-rubik font-medium text-xl">
            testinhalt zum testen
          </b>
        </li>
        <li className="flex flex-col items-center justify-center py-4">
          <p className="font-rubik font-normal text-md text-gray-400">
            LOCATION
          </p>
          <b className="font-rubik font-medium text-xl">
            testinhalt zum testen
          </b>
        </li>
        <li className="flex flex-col items-center justify-center py-4">
          <p className="font-rubik font-normal text-md text-gray-400">
            TIMEZONE
          </p>
          <b className="font-rubik font-medium text-xl">
            testinhalt zum testen
          </b>
        </li>
        <li className="flex flex-col items-center justify-center py-4">
          <p className="font-rubik font-normal text-md text-gray-400">ISP</p>
          <b className="font-rubik font-medium text-xl">
            testinhalt zum testen
          </b>
        </li>
      </ul>
    </section>
  );
}

export default InfoBar;
