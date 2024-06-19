export function AbilitySM({ ab }) {
  console.log(ab);
  console.log(ab.displayName);

  let iconImg;

  if (ab.displayIcon === null) {
    iconImg = "hidden";
  }

  return (
    <div className="flex flex-col gap-3 border border-red-600 border-2 p-8 mb-2 gap-4">
      <details className='flex flex-row'>
        <div>
          <p className="text-white text-lg md:text-2xl">{ab.description}</p>
        </div>

        <summary className='flex flex-row'>
          <div className="flex items-center justify-left flex-row gap-4">
            <img
              className={`h-8 w-8 md:h-12 md:w-12 ${iconImg}`}
              src={ab.displayIcon}
            />
            <h3 className="text-gray-400 text-xl md:text-3xl">
              {ab.displayName}
            </h3>
          </div>
        </summary>
      </details>
    </div>
  );
}
