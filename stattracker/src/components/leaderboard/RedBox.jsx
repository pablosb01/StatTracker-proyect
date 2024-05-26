import React from 'react'

function RedBox( {children} ) {
    return (
        <div className="flex justify-center items-center min-h-screen">
        <div className="w-2/5 rounded-lg drop-shadow-md bg-gray-400">
          <div className="h-12 rounded-lg drop-shadow-md bg-gradient-to-r from-red-400 to-red-600">
            <h2 className=" text-left self-center p-1.5 pl-3 font-bold text-3xl text-white">
              LEADERBOARD
            </h2>
          </div>
          <div className="flex justify-around gap-2 p-2 items-end">
            {children}
          </div>
        </div>
      </div>
  )
}

export default RedBox