import React, { useState, useRef, forwardRef, useImperativeHandle } from 'react';

const Signup = forwardRef((props, ref) => {
  const usernameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
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

    if (!formData.username) {
      newErrors.username = 'Please enter your username.';
      usernameInputRef.current.focus();
    }

    if (!formData.email) {
      newErrors.email = 'Please enter your email address.';
      emailInputRef.current.focus();
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
      emailInputRef.current.focus();
    }

    if (!formData.password) {
      newErrors.password = 'Please enter your password.';
      passwordInputRef.current.focus();
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
      usernameInputRef.current.focus();
    }
  }));

  return (
    <div style={{ textAlign: 'center', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ maxWidth: '450px', width: '100%' }}>
        <h2 style={{ color: 'teal' }}>Sign Up</h2>
        <form onSubmit={handleSubmit} style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '20px', borderRadius: '10px' }}>
          <div className="ui icon input" style={{ marginBottom: '10px', width: '100%' }}>
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              ref={usernameInputRef}
              autoComplete="username"
              style={{ width: '100%', padding: '10px' }}
            />
            <i className="user icon"></i>
            {errors.username && <div style={{ color: 'red', marginBottom: '10px' }}>{errors.username}</div>}
          </div>
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
            {errors.email && <div style={{ color: 'red', marginBottom: '10px' }}>{errors.email}</div>}
          </div>
          <div className="ui icon input" style={{ marginBottom: '10px', width: '100%' }}>
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              ref={passwordInputRef}
              autoComplete="new-password"
              style={{ width: '100%', padding: '10px' }}
            />
            <i className="lock icon"></i>
            {errors.password && <div style={{ color: 'red', marginBottom: '10px' }}>{errors.password}</div>}
          </div>
          <button className="ui teal button" type="submit" style={{ width: '100%', padding: '10px' }}>
            Sign Up
          </button>
        </form>
        {formSubmitted && (
          <div style={{ marginTop: '10px', color: 'green' }}>
            <strong>Form Submitted</strong>
            <p>You have successfully signed up!</p>
          </div>
        )}
        <div style={{ marginTop: '10px', color: 'white' }}>
          <p>Already have an account? <a href="/login" style={{ color: 'teal' }}>Log In</a></p>
        </div>
      </div>
    </div>
  );
});

export default Signup
