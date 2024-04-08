import React from 'react';
import '../static/css/Footer.css';

function Footer() {
  return (
    <footer className="sticky-footer">
      <p>&copy; {new Date().getFullYear()} Clean Touch</p>
    </footer>
  );
}

export default Footer;
