export function SvgRow({ name }) {
  const svgObject = {
    GitHub: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
      </svg>
    ),
    Instagram: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
      </svg>
    ),
    VALORANT: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 50 50"
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
      >
        <path d="M19.162 33.107h-6.893l-1.709 6.835h6.894L19.162 33.107zM15.361 38.94h-2.209l1.149-4.625h2.209L15.361 38.94zM31.653 37.732L33.479 39.941 35.659 39.941 32.949 36.465 37.456 33.107 34.687 33.107 32.389 34.815 32.801 33.107 30.474 33.107 28.765 39.941 31.093 39.941zM4.609 36.642L6.818 36.642 5.993 39.941 8.35 39.941 10.059 33.107 7.702 33.107 7.142 35.375 4.933 35.375 5.522 33.107 3.165 33.107 1.457 39.941 3.813 39.941zM22.962 36.053L24.258 39.706 24.199 39.941 26.556 39.941 28.265 33.107 25.908 33.107 24.965 36.907 23.669 33.254 23.698 33.107 21.371 33.107 19.663 39.941 21.99 39.941zM40.343 33.107l-4.419 6.835h2.563l.707-1.061h2.327l.147 1.061h2.298l-1.002-6.835H40.343zM39.96 37.673l1.119-1.738.265 1.738H39.96zM46.382 33.107L44.674 39.941 47.03 39.941 48.739 33.107zM50 11.575c-.2.684-.391 1.344-.585 2.003-.719 2.448-1.436 4.896-2.159 7.342-.429 1.453-1.548 2.297-3.063 2.299-3.445.005-6.89.008-10.334-.007-.393-.002-.547.116-.656.499-.57 2.012-1.188 4.011-1.761 6.023-.1.35-.247.444-.597.441-1.857-.018-3.714-.008-5.641-.008.279-.965.538-1.876.805-2.784.96-3.263 1.918-6.527 2.895-9.785.099-.329.021-.485-.251-.655-.541-.339-1.06-.714-1.686-1.14 2.908 0 5.692 0 8.564 0-.414 1.421-.819 2.813-1.234 4.242.165.015.296.038.427.038 1.893.002 3.786-.012 5.679.009.693.008 1.181-.289 1.389-.908.49-1.461.92-2.943 1.392-4.473-9.247 0-18.417 0-27.642 0 .317-1.073.62-2.097.927-3.135C27.637 11.575 38.786 11.575 50 11.575zM12.734 19.417c.779-2.651 1.537-5.234 2.296-7.82-2.832 0-5.606 0-8.477 0 .61.413 1.121.781 1.655 1.113.302.188.402.36.282.737-.425 1.328-.799 2.671-1.193 4.009-.499 1.694-.997 3.387-1.512 5.134 4.325 0 8.598 0 12.926 0-.323 1.112-.649 2.165-.929 3.229-.113.428-.292.578-.761.576-4.552-.027-9.105-.026-13.658-.017-.222 0-.527.085-.653.243C1.807 27.75.941 28.909 0 30.141c.205.012.318.024.432.024 6.548.001 13.095.003 19.643-.001 1.486-.001 2.602-.837 3.033-2.271.596-1.987 1.172-3.98 1.758-5.97.238-.811.478-1.621.739-2.506C21.282 19.417 17.033 19.417 12.734 19.417zM41.443 24.54c-.117-.139-.373-.223-.566-.226-1.567-.018-3.135-.01-4.703-.01-.485 0-.97 0-1.542 0 .158.211.255.344.355.474 1.093 1.414 2.251 2.784 3.256 4.258.619.907 1.312 1.219 2.391 1.162 1.831 0 3.57-.026 5.403-.026-.035-.114-.036-.151-.055-.174C44.473 28.176 42.968 26.349 41.443 24.54z"></path>
      </svg>
    ),
  };

  const linkObject = {
    GitHub: (
      'https://github.com/pablosb01/StatTracker-proyect'
    ),
    Instagram: (
      'instagram.com/'
    ),
    VALORANT: (
      'https://www.riotgames.com/es'
    ),
    Honkai: (
      'https://hsr.hoyoverse.com/es-es/home'
    ),
  };

  const icon = svgObject[name]
  const link = linkObject[name]

    return(
        <div className="svg-row">
            <a href={link}>
              {icon}
              <span>{name}</span>
            </a>
        </div>
    )
}

