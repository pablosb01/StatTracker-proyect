import { useState, useEffect } from 'react';
import RiotLogo from '/assets/riotgames-logo.webp'
import { useNavigate } from 'react-router-dom'

function UserFormValorant () {
  const [accountName, setAccountName] = useState('');
  const [hashtag, setHashtag] = useState('');
  const navigate = useNavigate();

 /*  useEffect(()=>{
    const newUrl = `/valorant/${accountName}${hashtag}`;
    navigate(newUrl, {replace: true});
  }, [accountName, hashtag, navigate]); */


  const handleSubmit = (event) => {
    event.preventDefault();


    const newUrl = `/valorant/profile/${accountName}/${hashtag}`;
    navigate(newUrl, {replace: true});


    // Handle form submission, e.g., send search request
    console.log('Account Name:', accountName);
    console.log('Hashtag:', hashtag);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-4 flex-nowrap justify-between max-w-[600px]">
      <input
        type="text"
        placeholder="Account Name"
        value={accountName}
        maxLength={16}
        onChange={(e) => setAccountName(e.target.value)}
        className="w-full lg:w-1/2 xl:w-2/5 px-4 py-2 mb-4 lg:mb-0 xl:mb-0 text-lg text-gray-700 bg-gray-200 rounded-[25px] focus:outline-none focus:ring-2 focus:ring-red-500"
      />
      <input
        type="text"
        placeholder="Hashtag"
        value={hashtag}
        maxLength={5}
        pattern="[A-Za-z0-9]+"
        onInput="this.value = this.value.replace(/[^A-Za-z0-9]/g, '')"
        onChange={(e) => setHashtag(e.target.value)}
        className="w-full lg:w-2/5 xl:w-1/3 px-4 py-2 mb-4 lg:mb-0 xl:mb-0 text-lg text-gray-700 bg-gray-200 rounded-[25px] focus:outline-none focus:ring-2 focus:ring-red-500"
      />
      <button
        type="submit"
        className="h-[44px] bg-red-700 hover:bg-red-900 hover:ring-white-500 hover:ring-2 hover:outline-none text-white font-bold py-2 px-4 w-full lg:w-2/5 xl:w-1/3 lg:justify-center rounded-[25px] transition-colors duration-300 ease-in-out">
            Submit
      </button>
    </form>
  );
}

export default UserFormValorant

