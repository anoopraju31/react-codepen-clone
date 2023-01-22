const Toggle = ({ title, value, changeValue }) => {
  return (
    <label class="inline-flex relative items-center mr-5 cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={value}
        readOnly
      />
      <div
        onClick={() => {
          changeValue(!value);
        }}
        className="w-11 h-6 bg-[#343d46dd] rounded-full peer  peer-focus:ring-[#545b61]  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#545b61]"
      ></div>
      <span className="ml-2 text-sm hidden md:block font-medium text-white">
        {title}
      </span>
    </label>
  );
};

export default Toggle;
