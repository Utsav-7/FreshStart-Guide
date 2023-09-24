import React, { useState } from 'react';
import './resource.css';


const Resources = () => {
  const downloadFile = (arg) => {
    const link = document.createElement('a');
    link.href = `http://10.200.55.189:1337${arg}`;
    link.download = 'file';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedSemester, setSelectedSemester] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [resdata, setData] = useState([]);

  const departmentOptions = ['IT', 'CSE', 'CS'];
  const semesterOptions = ['SEM 1', 'SEM 2', 'SEM 3', 'SEM 4'];
  const subjectOptions = ['BEEE', 'CPP', 'MATHS', 'C'];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if any field is selected
    if (!selectedDepartment || !selectedSemester || !selectedSubject) {
      // Show a message if any field is not selected
      alert('Please select all fields');
    } else {
      // All fields are selected, fetch the data
      fetchData();
    }
  };

  const fetchData = () => {
    const link = `http://10.200.55.189:1337/api/resources?populate=*&filters[Department][$eq]=${selectedDepartment}&filters[Semester][$eq]=${selectedSemester}&filters[Subject][$eq]=${selectedSubject}`;
    const auth = "2c41904f2352f569fb35194baa3f35ca400de85cb42aeb3fe7c1db02f01851670bc6f675a3d39fe5cd2258f5b0416669c79c260d05100fb6e568870fc8df35041286f309d25da6e623ea45f8fa36066a00e58915fdb56188c12351f1cd973a8fc194f0f1caf500ab62e39b54a063f986515ff5e935946977b3ac01f812b91166"; // Replace with your actual auth token

    fetch(link, { headers: { 'Authorization': `Bearer ${auth}` } })
      .then(response => response.json())
      .then(data => {
        setData(data.data);
      })
      .catch(error => {
        alert(error);
      });
  };

  return (
    <div>
      <div className="container" style={{ marginTop: '0px' }}>
        <div className='table-container' style={{ marginTop: '100px' }}>
          <h2 style={{ color: 'white', marginBlockEnd: '20px' }}>Resources</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <div>
                <select
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  style={{ marginBlockStart: '5%' }}
                >
                  <option value="">-- Select Department --</option>
                  {departmentOptions.map((department) => (
                    <option key={department} value={department}>
                      {department}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <select
                  value={selectedSemester}
                  onChange={(e) => setSelectedSemester(e.target.value)}
                  style={{ marginBlockStart: '5%' }}
                >
                  <option value="">-- Select Semester --</option>
                  {semesterOptions.map((semester) => (
                    <option key={semester} value={semester}>
                      {semester}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <select
                  value={selectedSubject}
                  onChange={(e) => setSelectedSubject(e.target.value)}
                  style={{ marginBlockStart: '5%' }}
                >
                  <option value="">-- Select Subject --</option>
                  {subjectOptions.map((subject) => (
                    <option key={subject} value={subject}>
                      {subject}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <button style={{ marginTop: '10px', marginBottom: "20px" }} type="submit">Get Resource</button>
          </form>

          {resdata.length === 0 ? (
            <div>No Data found</div>
          ) : (
            <table className="table">
              <thead>
                <tr>
                  <th>Department</th>
                  <th>Semester</th>
                  <th>Subject</th>
                  <th>Resource File</th>
                </tr>
              </thead>
              <tbody>
                {resdata.map((data, index) => (
                  <tr key={index}>
                    <td>{data.attributes.Department}</td>
                    <td>{data.attributes.Semester}</td>
                    <td>{data.attributes.Subject}</td>
                    <td>
                      <button onClick={() => downloadFile(`${data.attributes.File.data.attributes.url}`)}>Download</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default Resources;
