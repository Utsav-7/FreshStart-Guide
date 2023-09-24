import React, { useState, useEffect } from 'react';
// import { Table } from 'react-bootstrap';
import './scholarship.css';


const Scholarship = () => {
    const [scholarshipdata, setScholarshipData] = useState([]);

    useEffect(() => {
        // Fetch data from the API using the provided URL and API key
        const apiUrl = 'http://10.200.55.189:1337/api/scholarships';
        const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjk1NDYxMDY0LCJleHAiOjE2OTgwNTMwNjR9.ZODDUPkvbPTWFEWC9Hcl5P5VjBCBSBLJyzPkTxuaMfQ';

        fetch(apiUrl, {
            headers: {
                'Authorization': `Bearer ${apiKey}`
            }
        }).then((response) => response.json()).then(data => setScholarshipData(data.data))
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []); // Empty dependency array to ensure this effect runs once when the component mounts
    console.log(scholarshipdata);
    return (
        <div>
            

            <div className="container" style={{ marginTop: '0px' }}>
                <div className='table-container' style={{ marginTop: '100px' }} >
                    <h2 style={{ color: 'white' }}>Scholarships</h2>
                    <table >
                        <thead >
                            <tr className="table-header">
                                <th style={{width:"2%"}}>No.</th>
                                <th style={{width:"10%"}}>Scholarship Name</th>
                                <th >Scholarship Details</th>
                                <th style={{width:"10%"}}>Scholarship Link</th>
                            </tr>
                        </thead>
                        <tbody >
                            {
                                (Array.isArray(scholarshipdata)) ?
                                    scholarshipdata.map((scholarship, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td >{scholarship.attributes.Name}</td>
                                            <td style={{textAlign:"justify"}}>{scholarship.attributes.Detail}</td>
                                            <td>
                                                <a href={scholarship.attributes.Link} style={{textDecoration:'none',fontWeight:'500',color:'blue'}}target="_blank" rel="noopener noreferrer">
                                                    {scholarship.attributes.Link}
                                                </a>
                                            </td>
                                        </tr>
                                    )) : <tr>no data found</tr>
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Scholarship;