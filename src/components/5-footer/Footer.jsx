import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div className='parent-footer'>
      <ul>
        <li><a href="#up">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <p>© 2024 Mohammed Qashqesh. All rights reserved.</p>
    </div>
  )
}

export default Footer