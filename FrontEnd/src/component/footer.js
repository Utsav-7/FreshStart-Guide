import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function footer() {
    return (
        <MDBFooter bgColor='black' className='text-center text-lg-start text-muted '>
            <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom' style={{ backgroundColor: '#365B6D' }}>
                <div className='d-none d-lg-block'>
                    <span style={{ fontSize: '20px', fontWeight: 'bold', marginTop: '5px', color: '#8AA6D6', verticalAlign: 'center' }}>Get connected with us on social networks:</span>
                </div>

                <div>
                    <a href='' className='me-4 text-reset'>
                        <img src='icons8-twitter-48 (1).png'></img>
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <img src='icons8-facebook-48.png'></img>
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <img src='icons8-instagram-48.png'></img>
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <img src='icons8-linkedin-48.png'></img>
                    </a>
                </div>
            </section>

            <div className='' style={{ backgroundColor: '#8AA6D6' }}   >
                <MDBContainer className='text-center text-md-start mt-0'>
                    <MDBRow className='mt-3'>
                        <MDBCol md="3" lg="4" xl="5" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>
                                <img src='./White Blue Modern Your University Logo.png.jpg' style={{ height: '30px', width: '30px', borderRadius: '10px', marginRight: '10px' }}></img>
                                FreshStart Guide
                            </h6>
                            <p>
                                our website is to provide new college students with a centralized platform that offers curated information, insights, guidance, scholarship , and resources to help them navigate their initial semester smoothly.
                            </p>
                        </MDBCol>
                        <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                            <p>
                                <Link style={{ color: '#252222', textDecoration: 'none' }}
                                    to="/">Home</Link>
                            </p>
                            <p>
                                <Link style={{ color: '#252222', textDecoration: 'none' }} to="/scholarship">Scholarship</Link>
                            </p>
                            <p>
                                <Link style={{ color: '#252222', textDecoration: 'none' }} to="/resource">Resources</Link>
                            </p>
                            <p>
                                <Link style={{ color: '#252222', textDecoration: 'none' }} to="/contact">Contact Us</Link>
                            </p>
                            <p>
                                <Link style={{ color: '#252222', textDecoration: 'none' }} to="/connect">Connect</Link>
                            </p>
                            <p>
                                <Link style={{ color: '#252222', textDecoration: 'none' }} to="/mentor">Mentor</Link>
                            </p>
                        </MDBCol>
                        <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Developed By</h6>
                            <p>
                                Utsav Kathrotiya


                            </p><p>
                                Ronil Lakhani


                            </p><p>
                                Ujas Bhatt


                            </p><p>
                                Sujal Mansuri


                            </p><p>
                                Vishu bhingradiya


                            </p>

                        </MDBCol>

                        <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                            <p>

                                Charusat University, Changa
                            </p>
                            <p>
                                Team: ProSolver
                            </p>
                            <p>
                                Github : GitHub/Prosolver
                            </p>

                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>

            <div className='text-center p-4 fw-bold' style={{ backgroundColor: 'black', color: '#8AA6D6', }}>
                © ProSolvers:
                <a style={{ paddingLeft: '10px', }} className='text-reset fw-bold' href='https://github.com/Utsav-7/FreshStart-Guide'>
                    GitHub/Prosolver
                </a>
            </div>
        </MDBFooter>
    );
}


export default footer;