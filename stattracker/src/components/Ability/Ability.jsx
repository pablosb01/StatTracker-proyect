export function Ability({ab}) {

  console.log(ab)
  console.log(ab.displayName)
    
  let iconImg

  if (ab.displayIcon === null) {
    iconImg = 'hidden'
  }


  return (
    <div className="flex flex-col gap-3 border border-red-600 border-2 p-8 mb-2 [clip-path:_polygon(20%_0,_100%_0,_100%_80%,_80%_100%,0_100%,_0_20%)]">
      <div className="flex items-center justify-left flex-row gap-4">
        <img className={`h-8 w-8 ${iconImg}`} src={ab.displayIcon} />
        <h3 className="text-gray-400 text-xl">
          {ab.displayName}
        </h3>
      </div>
      <div>{/*  */}
        <p className="text-white text-lg">
          {ab.description}
        </p>
      </div>
    </div>
  );
}
