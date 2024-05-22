import { NavLink } from "react-router-dom";
export function SvgRow({ name }) {
  console.log(name);
  const svgObject = {
    VALORANT: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 50 50"
        class="w-fit h-1/2 fill-current flex mt-4"
      >
        <path d="M4.781 6.375C4.515 6.044 4.067 5.916 3.669 6.057 3.268 6.197 3 6.575 3 7v18c0 .232.081.457.228.636l14 17C17.418 42.866 17.701 43 18 43h14c.384 0 .735-.221.901-.566.167-.347.12-.758-.121-1.059L4.781 6.375zM46.336 7.059c-.396-.146-.842-.02-1.11.309l-18 22c-.245.299-.295.712-.13 1.062C27.262 30.777 27.614 31 28 31h14c.304 0 .591-.138.781-.375l4-5C46.923 25.447 47 25.228 47 25V8C47 7.577 46.734 7.2 46.336 7.059z"></path>
      </svg>
    ),
    Honkai: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 50 50"
        class="w-fit h-1/2 fill-current flex mt-4"
      >
        <path d="M19.162 33.107h-6.893l-1.709 6.835h6.894L19.162 33.107zM15.361 38.94h-2.209l1.149-4.625h2.209L15.361 38.94zM31.653 37.732L33.479 39.941 35.659 39.941 32.949 36.465 37.456 33.107 34.687 33.107 32.389 34.815 32.801 33.107 30.474 33.107 28.765 39.941 31.093 39.941zM4.609 36.642L6.818 36.642 5.993 39.941 8.35 39.941 10.059 33.107 7.702 33.107 7.142 35.375 4.933 35.375 5.522 33.107 3.165 33.107 1.457 39.941 3.813 39.941zM22.962 36.053L24.258 39.706 24.199 39.941 26.556 39.941 28.265 33.107 25.908 33.107 24.965 36.907 23.669 33.254 23.698 33.107 21.371 33.107 19.663 39.941 21.99 39.941zM40.343 33.107l-4.419 6.835h2.563l.707-1.061h2.327l.147 1.061h2.298l-1.002-6.835H40.343zM39.96 37.673l1.119-1.738.265 1.738H39.96zM46.382 33.107L44.674 39.941 47.03 39.941 48.739 33.107zM50 11.575c-.2.684-.391 1.344-.585 2.003-.719 2.448-1.436 4.896-2.159 7.342-.429 1.453-1.548 2.297-3.063 2.299-3.445.005-6.89.008-10.334-.007-.393-.002-.547.116-.656.499-.57 2.012-1.188 4.011-1.761 6.023-.1.35-.247.444-.597.441-1.857-.018-3.714-.008-5.641-.008.279-.965.538-1.876.805-2.784.96-3.263 1.918-6.527 2.895-9.785.099-.329.021-.485-.251-.655-.541-.339-1.06-.714-1.686-1.14 2.908 0 5.692 0 8.564 0-.414 1.421-.819 2.813-1.234 4.242.165.015.296.038.427.038 1.893.002 3.786-.012 5.679.009.693.008 1.181-.289 1.389-.908.49-1.461.92-2.943 1.392-4.473-9.247 0-18.417 0-27.642 0 .317-1.073.62-2.097.927-3.135C27.637 11.575 38.786 11.575 50 11.575zM12.734 19.417c.779-2.651 1.537-5.234 2.296-7.82-2.832 0-5.606 0-8.477 0 .61.413 1.121.781 1.655 1.113.302.188.402.36.282.737-.425 1.328-.799 2.671-1.193 4.009-.499 1.694-.997 3.387-1.512 5.134 4.325 0 8.598 0 12.926 0-.323 1.112-.649 2.165-.929 3.229-.113.428-.292.578-.761.576-4.552-.027-9.105-.026-13.658-.017-.222 0-.527.085-.653.243C1.807 27.75.941 28.909 0 30.141c.205.012.318.024.432.024 6.548.001 13.095.003 19.643-.001 1.486-.001 2.602-.837 3.033-2.271.596-1.987 1.172-3.98 1.758-5.97.238-.811.478-1.621.739-2.506C21.282 19.417 17.033 19.417 12.734 19.417zM41.443 24.54c-.117-.139-.373-.223-.566-.226-1.567-.018-3.135-.01-4.703-.01-.485 0-.97 0-1.542 0 .158.211.255.344.355.474 1.093 1.414 2.251 2.784 3.256 4.258.619.907 1.312 1.219 2.391 1.162 1.831 0 3.57-.026 5.403-.026-.035-.114-.036-.151-.055-.174C44.473 28.176 42.968 26.349 41.443 24.54z"></path>
      </svg>
    ),
  };

  const icon = svgObject[name];

  return (
    <div className="w-fit h-full">
      <NavLink
        to={`/${name}`}
        className={({ isActive, isPending }) => 
          isPending
            ? "bg-green-600 text-green-300"
            : isActive
            ? "px-5 font-semibold border-t border-t-2 border-gray-400 border-start-start-radius border-start-end-radius bg-[var(--gray-background)] text-red-600 h-full flex flex-row gap-5 fill-white-600"
            : "px-5 bg-[var(--gray-nav)] h-full flex flex-row gap-5 fill-white-600 text-white bg-[var(--gray-nav) hover:bg-gray-700 hover:text-white"
        }
      >
        {/* <div className='h-full w-full flex flex-row gap-5 fill-white-600'> */}
        {icon}
        <p className="flex items-center font-[Montserrat] hidden md:flex">{name}</p>
        {/* </div> */}
      </NavLink>
    </div>
  );
}
