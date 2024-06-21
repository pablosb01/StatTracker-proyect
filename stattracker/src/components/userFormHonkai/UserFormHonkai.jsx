import { useState, } from 'react';
import { useNavigate } from 'react-router-dom'

function UserFormHonkai() {
  const [honkaiUid, setHonkaiUid] = useState("");
  const [language, setLanguage] = useState('')
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();


    const newUrl = `/honkai/profile/${honkaiUid}/${language}/0`;
    navigate(newUrl, {replace: true});

    console.log('Account UID:', honkaiUid);
  };

  return (
    <div className='md:w-[600px]'>
      <form
        onSubmit={handleSubmit}
        className="flex gap-4 flex-nowrap justify-evenly max-w-[600px] mt-10 lg:mt-0 mx-3"
      >
        <input
          type="text"
          placeholder="Account Name"
          maxLength={16}
          onChange={(e) => setHonkaiUid(e.target.value)}
          className="w-full lg:w-1/2 xl:w-2/5 px-4 py-2 mb-4 lg:mb-0 xl:mb-0 text-lg text-gray-700 bg-gray-200 rounded-[25px] focus:outline-none focus:ring-2 focus:ring-red-900"
        />

        <input type='text' placeholder='language' maxLength={2} onChange={(e) => {setLanguage(e.target.value)}}/>
        
        <button
          type="submit"
          className="h-[44px] bg-red-700 hover:bg-red-900 hover:ring-white-500 hover:ring-2 hover:outline-none text-white font-bold py-2 px-4 w-full lg:w-2/5 xl:w-1/3 lg:justify-center rounded-[25px] transition-colors duration-300 ease-in-out"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default UserFormHonkai
