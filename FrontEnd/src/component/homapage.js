import 'react-responsive-modal/styles.css';
import { Link } from "react-router-dom";
import './homepage.css';
import { Carousel } from 'react-responsive-carousel';
import './nav.css';
import Footer from "./footer";

import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import Carousel from './Carousel';

import React, { useState, useEffect } from 'react';
import Modal from 'react-responsive-modal';
import Memo from './memories';
import Social from './social';
import { Form, Button, Dropdown, DropdownButton, Container, Row, Col } from 'react-bootstrap';


function NavScrollExample() {

    //for register
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    //for Login
    const [isModalOpen1, setIsModalOpen1] = useState(false);

    const openModal1 = () => {
        setIsModalOpen1(true);
    };

    const closeModal1 = () => {
        setIsModalOpen1(false);
    };
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [loginFormData, setLoginFormData] = useState({
      email: '',
      password: '',
    });
  
    const openLoginModal = () => {
      setIsLoginModalOpen(true);
    };
  
    const closeLoginModal = () => {
      setIsLoginModalOpen(false);
    };
  
    const handleLoginChange = (e) => {
      const { name, value } = e.target;
      setLoginFormData({ ...loginFormData, [name]: value });
    };
  
    const handleLoginSubmit = (e) => {
      e.preventDefault();
  
      // Make a POST request to your login API
      fetch('http://localhost:1337/api/auth/local', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginFormData),
      })
        .then((response) => {
          if (response.ok) {
            // Authentication successful, handle success here
            console.log('Login successful');
            closeLoginModal();
          } else {
            // Authentication failed, handle errors here
            console.error('Login failed');
          }
        })
        .catch((error) => {
          // Handle network errors here
          console.error('Network error:', error);
        });
    };

    const [carouselData, setCarouselData] = useState([]);

    useEffect(() => {
        // Fetch data from your Strapi API
        fetch('http://10.200.55.189:1337/api/carousels?populate=*')
            .then((response) => response.json())
            .then((data) => {
                setCarouselData(data.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <>

            <main style={{
                // display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                // height: '100vh', // Adjust the height as per your requirement
            }}>
                <div style={{ paddingTop: "100px", }}></div>

                <Carousel swipeable={true} autoPlay interval={3000} infiniteLoop showThumbs={false} showStatus={false}>
                    {
                        carouselData.map((item) => (
                            <div key={item.id} className="temp">
                                <div className="frame">
                                    <div className="overlap">
                                        <div className="overlap-2">
                                            {/* Check if the image data exists before trying to display it */}

                                            <img
                                                className="img"
                                                src={`http://10.200.55.189:1337${item.attributes.Image.data.attributes.url}`}
                                                alt={item.attributes.Title}
                                            />

                                            <div className="text-wrapper-2">{item.attributes.Title}</div>
                                            <p className="ipsom-lorens-kcdwocn">{item.attributes.Description}</p>
                                            <div className="element-jan">
                                                <div className="rectangle" />
                                                {item.attributes.Date}
                                            </div>
                                        </div>
                                        <div className="be-ready-at">Be Ready At</div>
                                    </div>
                                </div>
                            </div>
                        ))}





                </Carousel>
                <div style={{ paddingBottom: "50px" }}></div>


            </main>
            <Memo />
            <Social />
          
           <Footer />


            <Modal open={isModalOpen} onClose={closeModal} center classNames={{ modal: 'modal-container' }}>
                {/* Registration form */}
                <div className="modal-content">
                    <h2>Register</h2>
                    <Form >
                        <Form.Group controlId="formFullName">
                            <Form.Control type="text" placeholder="Enter your full name" />
                        </Form.Group>

                        <Form.Group controlId="formDepartment">
                            <Form.Control as="select">
                                <option>Select department</option>
                                <option>Department 1</option>
                                <option>Department 2</option>
                                {/* Add more departments here */}
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="formYear">
                            <Form.Control as="select">
                                <option>Select year</option>
                                <option>1st Year</option>
                                <option>2nd Year</option>
                                <option>3rd Year</option>
                                <option>4th Year</option>
                                {/* Add more years here */}
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="formIdNo">
                            <Form.Control type="text" placeholder="Enter your ID number" />
                        </Form.Group>

                        <Form.Group controlId="formMobileNo">
                            <Form.Control type="text" placeholder="Enter your mobile number" />
                        </Form.Group>

                        <Form.Group controlId="formEmail">
                            <Form.Control type="email" placeholder="Enter your email address" />
                        </Form.Group>
                        <Form.Group controlId="formPassword">
                            <Form.Control type="password" placeholder="Enter your password" />
                        </Form.Group>

                        <Form.Group controlId="formConfirmPassword">
                            <Form.Control type="password" placeholder="Confirm your password" />
                        </Form.Group>

                        <Form.Group controlId="formPhoto">
                            <Form.Control type="file" accept="image/*" />
                        </Form.Group>



                        <Button variant="primary" type="submit">
                            Register
                        </Button>

                    </Form>
                </div>
            </Modal >
            <Modal open={isLoginModalOpen} onClose={closeLoginModal} center classNames={{ modal: 'modal-container' }}>
                {/* Registration form */}
                <div className="modal-content">
                    <h2>Login</h2>
                    <Form >
                        <Form.Group controlId="formEmail"      >
                            <Form.Control type="email" name="email" placeholder="Enter your email address" value={loginFormData.email}
                                onChange={handleLoginChange}   required/>
                        </Form.Group>
                        <Form.Group controlId="formPassword">
                            <Form.Control type="password" name="password" placeholder="Enter your password"  value={loginFormData.password}
                                onChange={handleLoginChange} required/>
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={openLoginModal}></Button>

                    </Form>
                </div>
        </Modal>
        </>
    );
}

export default NavScrollExample;