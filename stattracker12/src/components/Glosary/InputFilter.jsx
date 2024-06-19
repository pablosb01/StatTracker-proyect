import Duelist from "/assets/Duelist.png";
import Controller from "/assets/Controller.png";
import Sentinel from "/assets/Sentinel.png";
import Initiator from "/assets/Initiator.png";

function InputFilter() {
  const svgFilter = `
    <svg viewBox="0 0 32 32" width="14" height="14" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.241,7.646L13,19v9l6-4v-5l9.759-11.354C29.315,6.996,28.848,6,27.986,6H4.014C3.152,6,2.685,6.996,3.241,7.646z"
        fill="none"0
        stroke="#f8f8f8"
        stroke-width="4"
      />
    </svg>`;

  return (
    <>
      <input
        type="search"
        placeholder="Filter  |"
        className="flex items-center placeholder-white text-white h-12 w-72 pl-10 bg-[#1c1917]"
        style={{
          backgroundImage: `url('data:image/svg+xml,${encodeURIComponent(
            svgFilter
          )}'), url(${Sentinel}), url(${Controller}), url(${Duelist}), url(${Initiator})`,
          backgroundPosition: "10px center, right 140px center, right 100px center, right 60px center, right 20px center",
          backgroundRepeat: "no-repeat, no-repeat",
          backgroundSize: "14px 14px, 14px 14px",
        }}
      />
    </>
  );
}

export default InputFilter;