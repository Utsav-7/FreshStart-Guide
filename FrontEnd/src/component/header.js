// Header.js
import './header.css';
import './nav.css';
import SubmitButton from './button';

import Modal from 'react-responsive-modal';
import { Form, Button, Dropdown, DropdownButton, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function Header() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };
    const [loginFormData, setLoginFormData] = useState({
        email: '',
        password: '',
    });
    const closeModal = () => {
        setIsModalOpen(false);
    };
    const [jwtToken, setJwtToken] = useState(localStorage.getItem('jwtToken'));
    const [userData, setUserData] = useState(null);

    //for Login
    const [isModalOpen1, setIsModalOpen1] = useState(false);

    const openModal1 = () => {
        setIsModalOpen1(true);
    };

    const closeModal1 = () => {
        setIsModalOpen1(false);
    };
    useEffect(() => {
        if (jwtToken) {
            // You can make a request to get the user data using the JWT token here
            // For simplicity, I'm using a placeholder user data
            const placeholderUserData = {
                name: 'John Doe',
                photoUrl: 'path-to-profile-photo.jpg',
            };
            setUserData(placeholderUserData);
        }
    }, [jwtToken]);


    const handleLoginFormChange = (e) => {
        const { name, value } = e.target;
        setLoginFormData({
            ...loginFormData,
            [name]: value,
        });
    };
    const handleLoginSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://10.200.55.63:1337/api/auth/local', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    identifier: loginFormData.email,
                    password: loginFormData.password,
                }),
            });

            if (response.ok) {
                const data = await response.json();
                // Store the JWT token in local storage
                localStorage.setItem('jwtToken', data.jwt);
                setJwtToken(data.jwt);
                closeModal1(); // Close the login modal upon successful login
            } else {
                // Handle login error here
                console.error('Login failed');
            }
        } catch (error) {
            console.error('Login error:', error);
        }
    };
    const handleLogout = () => {
        // Clear the JWT token from local storage and reset state
        localStorage.removeItem('jwtToken');
        setJwtToken(null);
        setUserData(null);
    };

    return (
        <>
            <header className="header">
                <div className="logo">

                </div>
                <nav className="nav-items">
                    <Link to="/">Home</Link>
                    <Link to="/scholarship">Scholarship</Link>
                    <Link to="/resource">Resources</Link>
                    <Link to="/contact">Contact Us</Link>
                    <Link to="/connect">Connect</Link>
                    <Link to="/mentors">Mentors</Link>
                    <a href="#">Events</a>
                    {jwtToken ? (
                        <div className="user-profile">
                            <img src="https://www.pngmart.com/files/21/Admin-Profile-Vector-PNG-Image.png" alt="Profile" />
                            <Button variant="logi" onClick={handleLogout}>Logout</Button>
                        </div>
                    ) : (
                        <>
                            {/* <button className="regi" onClick={openModal}><p>Register</p></button> */}
                            <button className="logi" onClick={openModal1}><p>Login</p></button>
                        </>
                    )}
                </nav>
            </header>
            <Modal open={isModalOpen} styles={{ overlay: { backdropFilter: 'blur(10px)', backgroundColor: 'rgba(0, 0, 0, 0.547)' } }} onClose={closeModal} center classNames={{ modal: 'modal-container' }}>
                {/* Registration form */}
                <div className="modal-content">
                    <h2>Register</h2>
                    <Form class="form" >
                        <Form.Group controlId="formFullName" class="group">
                            <Form.Label class="label">Name</Form.Label>

                            <Form.Control type="text" class="field" style={{ minWidth: '800px' }} placeholder="Enter your full name" />
                        </Form.Group>

                        <Form.Group controlId="formDepartment" class="group">
                            <Form.Label class="label">Department</Form.Label>

                            <Form.Control as="select" class="field">
                                <option>Select department</option>
                                <option>Information TechnologyT</option>
                                <option>Computer Science</option>
                                <option>Computer Science and Engineering</option>
                                {/* Add more departments here */}
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="formYear" class="group">
                            <Form.Label class="label" >Study Year</Form.Label>

                            <Form.Control as="select" class="field">
                                <option>Select year</option>
                                <option>1st Year</option>
                                <option>2nd Year</option>
                                <option>3rd Year</option>
                                <option>4th Year</option>
                                {/* Add more years here */}
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="formIdNo" class="group">
                            <Form.Label class="label">ID</Form.Label>

                            <Form.Control type="text" placeholder="Enter your ID number" class="field" />
                        </Form.Group>

                        <Form.Group controlId="formMobileNo" class="group">
                            <Form.Label class="label">Mobile No</Form.Label>

                            <Form.Control type="text" placeholder="Enter your mobile number" class="field" />
                        </Form.Group>

                        <Form.Group controlId="formEmail" class="group">
                            <Form.Label class="label">Email </Form.Label>

                            <Form.Control type="email" placeholder="Enter your email address" class="field" />
                        </Form.Group>
                        <Form.Group controlId="formPassword" class="group">
                            <Form.Label class="label">password</Form.Label>

                            <Form.Control type="password" placeholder="Enter your password" class="field" />
                        </Form.Group>

                        <Form.Group controlId="formConfirmPassword" class="group">
                            <Form.Label class="label">Confirm password</Form.Label>

                            <Form.Control type="password" placeholder="Confirm your password" class="field" />
                        </Form.Group>

                        <Form.Group controlId="formPhoto" class="group">
                            <Form.Label class="label">Image</Form.Label>

                            <Form.Control type="file" accept="image/*" class="field" />
                        </Form.Group>

                        <SubmitButton label="Login" onClick={handleLoginSubmit} />


                    </Form>
                </div>
            </Modal >
            <Modal styles={{ overlay: { backdropFilter: 'blur(10px)', backgroundColor: 'rgba(0, 0, 0, 0.547)' } }} open={isModalOpen1} onClose={closeModal1} center classNames={{ modal: 'modal-container' }}>
                {/* Registration form */}

                <div className="modal-content">
                    <h2>Login</h2>
                    <Form>
                        <Form.Group controlId="formEmail" class="group"  >
                            <Form.Label class="label">Email </Form.Label>

                            <Form.Control type="email" placeholder="Enter your email address" />
                        </Form.Group>
                        <Form.Group controlId="formPassword" class="group">
                            <Form.Label class="label">Password</Form.Label>

                            <Form.Control type="password" placeholder="Enter your password" />
                        </Form.Group>
                        <SubmitButton label="Login" onClick={handleLoginSubmit} />
                    </Form>

                </div>

            </Modal>
        </>
    );
}



export default Header;