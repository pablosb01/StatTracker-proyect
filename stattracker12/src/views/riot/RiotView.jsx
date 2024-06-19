
import React, { useEffect, useState } from 'react';

const RiotView = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch('./riot.txt')
      .then((response) => response.text())
      .then((text) => {
        setContent(text);
      })
      .catch((error) => {
        console.error('Error fetching the riot.txt file:', error);
      });
  }, []);

  return (
    <div>
      <h1>Riot Text Content</h1>
      <pre>99b746d7-b8bf-4cd4-91f8-201cdec7a066</pre>
    </div>
  );
};

export default RiotView;
