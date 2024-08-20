import { useState } from "react";

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Form submitted!');
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit} style={{ display: 'inline-block'}}>
                <input 
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    style={{ display: 'block', margin: '10px 0', width: '100%', padding: '10px' }} 
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    style={{ display: 'block', margin: '10px 0', width: '100%', padding: '10px' }}
                />

                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    style={{ display: 'block', margin: '10px 0', width: '100%', padding: '10px' }}
                />

                <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#333', color: '#fff', border: 'none' }}>Send Message</button>
            </form>
        </div>
    );
}

export default Contact;