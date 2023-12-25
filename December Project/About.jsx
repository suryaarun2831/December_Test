import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <h1>About Page</h1>
      <p>This is information about the app.</p>
      <Link style={{textDecoration:'none'}} to="/">Home</Link>
    </>
  )
}

export default About