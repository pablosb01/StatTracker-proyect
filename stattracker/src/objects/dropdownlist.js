<div className="w-full flex gap-2 xl:gap-5 md:justify-evenly">
  <div className="text-[#858585] bg-[#D9D9D9] rounded-md px-1 xl:text-lg text-center items-center whitespace-nowrap w-[70px] xl:w-[100px] text-sm">
    <button
      className={order === "ascending"? "bg-[#004675] text-white" : ""}
      onClick={() => setOrder("ascending")}
    >
      Ascending Order
    </button>
    <button
      className={order === "descending"? "bg-[#004675] text-white" : ""}
      onClick={() => setOrder("descending")}
    >
      Descending Order
    </button>
  </div>
</div>