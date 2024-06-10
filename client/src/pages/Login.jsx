import React, { useState, useRef, forwardRef, useImperativeHandle } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../utils/mutations';

import Auth from '../utils/auth';

const Login = forwardRef((props, ref) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [login, { error, data}] = useMutation(LOGIN);

  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const [errors, setErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    const newErrors = {};
  
    try {
      const { data } = await login({
        variables: { ...formData },
      });
      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
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
      emailInputRef.current.focus();
    }
  }));

  return (
    <div style={{ textAlign: 'center', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ maxWidth: '450px', width: '100%' }}>
        <h2 style={{ color: 'teal' }}>Login</h2>
        <form onSubmit={handleSubmit} style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '20px', borderRadius: '10px' }}>
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
              autoComplete="current-password"
              style={{ width: '100%', padding: '10px' }}
            />
            <i className="lock icon"></i>
            {errors.password && <div style={{ color: 'red', marginBottom: '10px' }}>{errors.password}</div>}
          </div>
          <button className="ui teal button" type="submit" style={{ width: '100%', padding: '10px' }}>
            Login
          </button>
        </form>
        {formSubmitted && (
          <div style={{ marginTop: '10px', color: 'green' }}>
            <strong>Form Submitted</strong>
            <p>You have successfully logged in!</p>
          </div>
        )}
        <div style={{ marginTop: '10px', color: 'white' }}>
          <p>New to us? <a href="/signup" style={{ color: 'teal' }}>Sign Up</a></p>
        </div>
      </div>
    </div>
  );
});

export default Login;
