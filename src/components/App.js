import React, { useState, useEffect } from 'react';

function App() {
  const [dogImageUrl, setDogImageUrl] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the Dog CEO API
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => {
        // Update state with the received data
        setDogImageUrl(data.message);
        setLoading(false); 
      })
      
  }, []); 
if(loading) {
  return <p>Loading</p>;
}
  return (
    <div>
      
        <img src={dogImageUrl} alt="A Random Dog" />
      
    </div>
  );
}

export default App;
