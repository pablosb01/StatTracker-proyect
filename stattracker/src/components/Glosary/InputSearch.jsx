    function InputSearch() {
        const svgSearch = `
          <svg viewBox="0 0 32 32" width="14" height="14" xmlns="http://www.w3.org/2000/svg">
            <path d="M31.564 28.745l-8.73-8.73a12.66 12.66 0 1 0-2.804 2.834l8.715 8.715a1.5 1.5 0 0 0 2.114 0l.705-.705a1.5 1.5 0 0 0 0-2.114zm-18.966-7.433A8.611 8.611 0 1 1 21.21 12.7a8.62 8.62 0 0 1-8.612 8.612z" fill="white"/>
          </svg>`;

  return (
    <>
      <input
        type="search"
        placeholder="Search  |"
        className="flex items-center placeholder-white text-white h-12 w-72 pl-10 bg-[#1c1917] rounded-lg"
        style={{
          backgroundImage: `url('data:image/svg+xml,${encodeURIComponent(svgSearch)}')`,
          backgroundPosition: "10px center",
          backgroundRepeat: "no-repeat",
          backgroundSize: '14px 14px'
        }}
      />
    </>
  );
}

export default InputSearch;
