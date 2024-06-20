export function Glosary() {
    return (
      <div className="bg-[#1c1917]">
        <form className="flex gap-4 flex-wrap justify-center">
          <button className="flex items-center bg-[#292524] border-2 text-white h-[52px] w-[574px]">
            <svg viewBox="0 0 32 32" width="18" size="18">
              <path
                d="M31.564 28.745l-8.73-8.73a12.66 12.66 0 1 0-2.804 2.834l8.715 8.715a1.5 1.5 0 0 0 2.114 0l.705-.705a1.5 1.5 0 0 0 0-2.114zm-18.966-7.433A8.611 8.611 0 1 1 21.21 12.7a8.62 8.62 0 0 1-8.612 8.612z"
                fill="currentColor"
              ></path>
            </svg>
            <span className="border-r-2 mx-2 px-2">Search</span>
          </button>
  
          <button className="flex items-center bg-[#292524] border-2 text-white h-[52px] w-[574px] [clip-path:_polygon(10%_0,100%_0,100%_90%,90%_100%,0_100%,0_10%)]">100% 90%, 90% 100%, 0 100%, 0 10%
            <svg viewBox="0 0 32 32" width="18" size="18">
            <path
            d="  M3.241,7.646L13,19v9l6-4v-5l9.759-11.354C29.315,6.996,28.848,6,27.986,6H4.014C3.152,6,2.685,6.996,3.241,7.646z"
            fill="none"
            stroke="#f8f8f8"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="2"
          />
            </svg>
            <span className="border-r-2 mx-2 px-2">Filter</span>
          </button>
        </form>
  
  
        {/* <div className="flex gap-1">
        <div className="grid grid-cols-5 gap-1 w-screen">
              <div className =" relative w-48 h-[800px] bg-stone-700 rounded-md p-2 transition duration-400 ease-in-out hover:flex-grow hover:flex-[3] hover:font-bold hover:cursor-pointer">Card 1</div>
              <div className =" relative w-48 h-[800px] bg-stone-700 rounded-md p-2 transition duration-400 ease-in-out hover:flex-grow hover:flex-[3] hover:font-bold hover:cursor-pointer">Card 1</div>
              <div className =" relative w-48 h-[800px] bg-stone-700 rounded-md p-2 transition duration-400 ease-in-out hover:flex-grow hover:flex-[3] hover:font-bold hover:cursor-pointer">Card 1</div>
              <div className =" relative w-48 h-[800px] bg-stone-700 rounded-md p-2 transition duration-400 ease-in-out hover:flex-grow hover:flex-[3] hover:font-bold hover:cursor-pointer">Card 1</div>
              <div className =" relative w-48 h-[800px] bg-stone-700 rounded-md p-2 transition duration-400 ease-in-out hover:flex-grow hover:flex-[3] hover:font-bold hover:cursor-pointer">Card 1</div>
              <div className =" relative w-48 h-[800px] bg-stone-700 rounded-md p-2 transition duration-400 ease-in-out hover:flex-grow hover:flex-[3] hover:font-bold hover:cursor-pointer">Card 1</div>
              <div className =" relative w-48 h-[800px] bg-stone-700 rounded-md p-2 transition duration-400 ease-in-out hover:flex-grow hover:flex-[3] hover:font-bold hover:cursor-pointer">Card 1</div>
              <div className =" relative w-48 h-[800px] bg-stone-700 rounded-md p-2 transition duration-400 ease-in-out hover:flex-grow hover:flex-[3] hover:font-bold hover:cursor-pointer">Card 1</div>
              <div className =" relative w-48 h-[800px] bg-stone-700 rounded-md p-2 transition duration-400 ease-in-out hover:flex-grow hover:flex-[3] hover:font-bold hover:cursor-pointer">Card 1</div>
              <div className =" relative w-48 h-[800px] bg-stone-700 rounded-md p-2 transition duration-400 ease-in-out hover:flex-grow hover:flex-[3] hover:font-bold hover:cursor-pointer">Card 1</div>
              <div className =" relative w-48 h-[800px] bg-stone-700 rounded-md p-2 transition duration-400 ease-in-out hover:flex-grow hover:flex-[3] hover:font-bold hover:cursor-pointer">Card 1</div>
              <div className =" relative w-48 h-[800px] bg-stone-700 rounded-md p-2 transition duration-400 ease-in-out hover:flex-grow hover:flex-[3] hover:font-bold hover:cursor-pointer">Card 1</div>
              <div className =" relative w-48 h-[800px] bg-stone-700 rounded-md p-2 transition duration-400 ease-in-out hover:flex-grow hover:flex-[3] hover:font-bold hover:cursor-pointer">Card 1</div>
              <div className =" relative w-48 h-[800px] bg-stone-700 rounded-md p-2 transition duration-400 ease-in-out hover:flex-grow hover:flex-[3] hover:font-bold hover:cursor-pointer">Card 1</div>
              <div className =" relative w-48 h-[800px] bg-stone-700 rounded-md p-2 transition duration-400 ease-in-out hover:flex-grow hover:flex-[3] hover:font-bold hover:cursor-pointer">Card 1</div>
              <div className =" relative w-48 h-[800px] bg-stone-700 rounded-md p-2 transition duration-400 ease-in-out hover:flex-grow hover:flex-[3] hover:font-bold hover:cursor-pointer">Card 1</div>
              <div className =" relative w-48 h-[800px] bg-stone-700 rounded-md p-2 transition duration-400 ease-in-out hover:flex-grow hover:flex-[3] hover:font-bold hover:cursor-pointer">Card 1</div>
              <div className =" relative w-48 h-[800px] bg-stone-700 rounded-md p-2 transition duration-400 ease-in-out hover:flex-grow hover:flex-[3] hover:font-bold hover:cursor-pointer">Card 1</div>
              <div className =" relative w-48 h-[800px] bg-stone-700 rounded-md p-2 transition duration-400 ease-in-out hover:flex-grow hover:flex-[3] hover:font-bold hover:cursor-pointer">Card 1</div>
              <div className =" relative w-48 h-[800px] bg-stone-700 rounded-md p-2 transition duration-400 ease-in-out hover:flex-grow hover:flex-[3] hover:font-bold hover:cursor-pointer">Card 1</div>
              <div className =" relative w-48 h-[800px] bg-stone-700 rounded-md p-2 transition duration-400 ease-in-out hover:flex-grow hover:flex-[3] hover:font-bold hover:cursor-pointer">Card 1</div>
              <div className =" relative w-48 h-[800px] bg-stone-700 rounded-md p-2 transition duration-400 ease-in-out hover:flex-grow hover:flex-[3] hover:font-bold hover:cursor-pointer">Card 1</div>
              <div className =" relative w-48 h-[800px] bg-stone-700 rounded-md p-2 transition duration-400 ease-in-out hover:flex-grow hover:flex-[3] hover:font-bold hover:cursor-pointer">Card 1</div>
          </div>
      </div> */}
      </div>
    );
  }