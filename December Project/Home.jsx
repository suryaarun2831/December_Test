import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
        <h1>Welcome to the Home Page!</h1>
        <p>This is the home page content.</p>
        <Link style={{textDecoration:'none'}} to='/about'>About</Link>
    </>
  )
}

export default Home