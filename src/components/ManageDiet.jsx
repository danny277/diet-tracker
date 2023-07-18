import React, { useState } from 'react';

const ManageDiet = () => {
  
  const [dietList, setDietList] = useState('');
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );

  const fetchDietData = async () => {
    const res = await fetch('http://localhost:5000/diet/getbyuser/'+currentUser._id);
    console.log(res.status);
    const data = await res.json();
    console.log(data);

    setDietList(data);

  }

  const displayDietList = () => {
    
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log('Diet submitted:', diet);
    
    setDiet('');
  };

  return (
    <div>
      <h2>Manage Diet</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your diet:
          <input
            type="text"
            value={diet}
            onChange={(e) => setDiet(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ManageDiet;
