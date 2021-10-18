import { FaCloudShowersHeavy } from "react-icons/all";
const City = () => {
  return (
    <div className="flex flex-col items-center">
      <span>
        <FaCloudShowersHeavy className="fill-current text-blue-600 text-9xl mt-10" />
      </span>
      <h3 className=" mt-10 text-4xl font-serif">Find Weather Of Your City</h3>
      <div className="flex items-center mt-20 relative">
        <input
          className="border-2 px-5 py-3 rounded-lg w-96"
          placeholder="Your City ..."
        />
        <button className="bg-black pt-2 pb-3 px-5 rounded-lg text-white absolute bottom-1 right-1">
          search
        </button>
      </div>
    </div>
  );
};

export default City;
