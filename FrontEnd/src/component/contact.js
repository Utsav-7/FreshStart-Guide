import React from 'react';
import './contact.css';


import { Button } from 'react-bootstrap';
const ContactForm = () => {
    const [formStatus, setFormStatus] = React.useState('Send')
    const onSubmit = (e) => {
        e.preventDefault()
        setFormStatus('Submitting...')
        const { name, email, message } = e.target.elements
        let conFom = {
            name: name.value,
            email: email.value,
            message: message.value,
        }
        console.log(conFom)
    }
    return (
        <div class="contact">
           

            <div className="container" style={{ marginTop: '0px' }} >
                <div style={{ marginTop: '100px' }}>
                    <h2 className="mb-3" style={{ color: 'white' }}>Contact Us</h2>
                    <form onSubmit={onSubmit}>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="name">
                                Name
                            </label>
                            <input className="form-control" type="text" id="name" required style={{ width: '500px' }} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="email">
                                Email
                            </label>
                            <input className="form-control" type="email" id="email" required style={{ width: '500px' }} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="message">
                                Message
                            </label>
                            <textarea className="form-control" id="message" required style={{ width: '500px' }} />
                        </div>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default ContactForm