import React, { useState, useRef, forwardRef, useImperativeHandle } from 'react';

const Contact = forwardRef((props, ref) => {
  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const messageInputRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = 'Please enter your name.';
      nameInputRef.current.focus();
    }

    if (!formData.email) {
      newErrors.email = 'Please enter a valid email address.';
      emailInputRef.current.focus();
    }

    if (!formData.message) {
      newErrors.message = 'Please enter a message.';
      messageInputRef.current.focus();
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Submit the form
    console.log('Form submitted', formData);
    setErrors({});
    setFormSubmitted(true);
    // Additional logic after form submission
  };

  useImperativeHandle(ref, () => ({
    focus: () => {
      nameInputRef.current.focus();
    }
  }));

  return (
    <div style={{ textAlign: 'center', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ maxWidth: '450px', width: '100%' }}>
        <h2 style={{ color: 'teal' }}>Contact Us</h2>
        <form onSubmit={handleSubmit} style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '20px', borderRadius: '10px' }}>
          <div className="ui icon input" style={{ marginBottom: '10px', width: '100%' }}>
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              ref={nameInputRef}
              autoComplete="name"
              style={{ width: '100%', padding: '10px' }}
            />
            <i className="user icon"></i>
          </div>
          {errors.name && <div style={{ color: 'red', marginBottom: '10px' }}>{errors.name}</div>}
          <div className="ui icon input" style={{ marginBottom: '10px', width: '100%' }}>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              ref={emailInputRef}
              autoComplete="email"
              style={{ width: '100%', padding: '10px' }}
            />
            <i className="envelope icon"></i>
          </div>
          {errors.email && <div style={{ color: 'red', marginBottom: '10px' }}>{errors.email}</div>}
          <div className="ui icon input" style={{ marginBottom: '10px', width: '100%' }}>
            <textarea
              placeholder="Your Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              ref={messageInputRef}
              style={{ width: '100%', padding: '10px', height: '100px', resize: 'none' }}
            />
            <i className="comment icon"></i>
          </div>
          {errors.message && <div style={{ color: 'red', marginBottom: '10px' }}>{errors.message}</div>}
          <button className="ui teal button" type="submit" style={{ width: '100%', padding: '10px' }}>
            Send Message
          </button>
        </form>
        {formSubmitted && (
          <div style={{ marginTop: '10px', color: 'green' }}>
            <strong>Form Submitted</strong>
            <p>Your message has been sent successfully!</p>
          </div>
        )}
      </div>
    </div>
  );
});

export default Contact;
