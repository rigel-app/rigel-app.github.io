import React from 'react';

const Button = ({ label }) => (
  <button className="button" onClick={() => window.open('https://testflight.apple.com/join/fYOmkfHe')}>
    {label}
  </button>
);

export default Button;