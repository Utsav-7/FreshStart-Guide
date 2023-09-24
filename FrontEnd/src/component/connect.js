import React, { useState } from 'react';
import './connect.css';


const Connect = () => {
  const [selectedCity, setSelectedCity] = useState('');
  const [citydata, setData] = useState(null);

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData(selectedCity);
  };

  const fetchData = (city) => {
    const token = '2c41904f2352f569fb35194baa3f35ca400de85cb42aeb3fe7c1db02f01851670bc6f675a3d39fe5cd2258f5b0416669c79c260d05100fb6e568870fc8df35041286f309d25da6e623ea45f8fa36066a00e58915fdb56188c12351f1cd973a8fc194f0f1caf500ab62e39b54a063f986515ff5e935946977b3ac01f812b91166'; // Replace with your actual auth token

    fetch(`http://10.200.55.189:1337/api/connects?filters[City][$eq]=${city}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(response => response.json())
      .then(data => setData(data.data))
      .catch(err => console.log(err));
  };

  return (
    <div>
  
      <div className="container" style={{ marginTop: '0px' }}>
        <div className='table-container' style={{ marginTop: '100px' }}>
          <h2 class="title">Connect</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <div className="form-group">
                <select
                  value={selectedCity}
                  onChange={handleCityChange}>
                  <option value="">-- Select City --</option>
                  <option value="Surat">Surat</option>
                  <option value="Ahmedabad">Ahmedabad</option>
                  <option value="Anand">Anand</option>
                  <option value="Vadodara">Vadodara</option>
                </select>
              </div>
            </div>
            <button style={{ marginTop: '10px',marginBottom:"20px" }} type="submit">Connect</button>
          </form>
          {
            citydata === null ? (
              <div>Select City</div>
            ) : citydata.length === 0 ? (
              <div>No Data Found</div>
            ) : (
              <table className="table">
                <thead>
                  <tr>
                    <th>City</th>
                    <th>Group Link</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    citydata.map((item, index) => (
                      <tr key={index}>
                        <td>{item.attributes.City}</td>
                        <td><a href={item.attributes.Link}>Click To join Whatsapp for {item.attributes.City}</a></td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Connect;
