import './memories.css';
import React, { useState, useEffect } from 'react';

function Memo() {
    const [memories, setMemories] = useState([]);

    useEffect(() => {
        // Fetch data from your Strapi API endpoint
        fetch('http://10.200.55.189:1337/api/memories?populate=*')
            .then((response) => response.json())
            .then((data) => {
                // Set the fetched data to the state variable
                setMemories(data.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div>
            <div className="gallery">
                <div className="text-wrapper">Memories <span>(Weekly best photos will be shared to all)</span></div>

                {memories.map((memory, i) => (
                    <div className={`gallery__item gallery__item--${i}`} key={memory.id}>
                        {/* You need to set the 'src' attribute of the image tag with the image URL */}
                        <img className="gallery__img" src={`http://10.200.55.189:1337${memory.attributes.memories.data[0].attributes.url}`} alt={memory.attributes.memories.data[0].attributes.name} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Memo;