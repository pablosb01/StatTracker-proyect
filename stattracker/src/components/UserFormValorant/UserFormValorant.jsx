import React, { useState } from 'react';
import RiotLogo from '/src/assets/riotgames-logo.webp'

function UserFormValorant () {
  const [accountName, setAccountName] = useState('');
  const [hashtag, setHashtag] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission, e.g., send search request
    console.log('Account Name:', accountName);
    console.log('Hashtag:', hashtag);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-4 flex-wrap justify-center">
      <input
        type="text"
        placeholder="Account Name"
        value={accountName}
        onChange={(e) => setAccountName(e.target.value)}
        className="w-full lg:w-1/2 xl:w-1/3 px-4 py-2 mb-4 lg:mb-0 xl:mb-0 text-lg text-gray-700 bg-gray-200 rounded-[25px] focus:outline-none focus:ring-2 focus:ring-red-500"
      />
      <input
        type="text"
        placeholder="Hashtag"
        value={hashtag}
        onChange={(e) => setHashtag(e.target.value)}
        className="w-full lg:w-1/2 xl:w-1/6 px-4 py-2 mb-4 lg:mb-0 xl:mb-0 text-lg text-gray-700 bg-gray-200 rounded-[25px] focus:outline-none focus:ring-2 focus:ring-red-500"
      />
      <button
        type="submit"
        className="bg-red-600 hover:ring-white-500 hover:ring-2 hover:outline-none text-white font-bold py-2 px-4 rounded-[25px]"
      >
        <div className='flex row justify-between items-center h-2'>
            <img src={RiotLogo} className='w-10 h-10 mx-auto'/>
            Submit
        </div>
      </button>
    </form>
  );
}

export default UserFormValorant

