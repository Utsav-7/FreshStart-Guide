import React, { useState, useEffect } from 'react';
import './mentor.css';
import Header from './header';

const Mentor = () => {

    const [field, setField] = useState('');
    const [category, setCategory] = useState('');
    const [mentor, setMentor] = useState('');
    // Define categories as an array of options
    // Handle form submission


    const handleSubmit = (e) => {
        e.preventDefault();
        // Create a table or perform other actions based on selected values
        fetchData(field, category);

    };
    useEffect(() => {
        if (field && category) {
            fetchData(field, category);
        }

    }, [category,field]);

    const fetchData = (field, category) => {
        const token = '4ee17f8d73c7861de22cc55017e864b32a7f9ca03b8abc620485935b959af3b7e41efa6e5d2fc490fe2b3e5a92a6134002992914a1442c01a3dd9955bed37ef654436c01513886b77158f46e0d322a8df2b6b0add3b16e3f72905c7f533727455808fbffc66aee3c8a0da3cfff6d7c5e59ede436336a88ea57567ff77b8e4ca4';
        fetch(`http://10.200.55.189:1337/api/mentors?filters[Position][$eq]=${category}&filters[Expertise][$eq]=${field}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => response.json())
            .then(data => setMentor(data.data))
            .catch(err => console.log(err));
    };
    return (
        <div>
            <Header />
            <div className="container" style={{ marginTop: '0px' }} >
                <div className='table-container' style={{ marginTop: '100px' }}>
                    <h2 style={{ color: 'white', marginBlockEnd: '20px' }}>Mentorship</h2>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <select value={field} onChange={(e) => setField(e.target.value)} style={{ marginBlockStart: '5%' }}>
                                <option value="">-- Interested Field --</option>
                                <option value="Cloud Computing">Cloud Computing</option>
                                <option value="AI">AI</option><option value="Flutter">Flutter</option>
                                <option value="MERN STACK">MERN STACK</option>


                            </select>
                        </div>
                        <div>
                            <select value={category} onChange={(e) => setCategory(e.target.value)} style={{ marginBlockStart: '5%' }}>
                                <option value="">-- Select Mentor --</option>
                                <option value="Student">Student</option>
                                <option value="Faculty">Faculty</option>

                            </select>
                        </div>
                        <button type="submit" style={{ marginBlockStart: '5%' }}>Submit</button>
                    </form>
                    {mentor == null || mentor.length == 0 ? <div>no data</div> :

                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Interested Field</th>
                                    <th>Position</th>
                                    <th>Name</th>
                                    <th>Contact Info.</th>
                                </tr>
                            </thead>
                            <tbody>
                                {mentor.map((ans, index) => (
                                    <tr key={index}>
                                        <td>{ans.attributes.Expertise}</td>
                                        <td>{ans.attributes.Position}</td>
                                        <td>{ans.attributes.Name}</td>
                                        <td>{ans.attributes.Email}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>}

                </div>
            </div>
        </div>
    );
};

export default Mentor;