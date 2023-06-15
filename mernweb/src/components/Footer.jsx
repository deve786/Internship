import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform subscription logic with the email value
    console.log('Subscribing email:', email);
    setEmail('');
  };

  return React.createElement(
    'footer',
    { className: 'footer' },
    React.createElement(
      'div',
      { className: 'footer-container' },
      React.createElement(
        'div',
        { className: 'footer-column' },
        React.createElement('h3', null, 'About'),
        React.createElement(
          'p',
          null,
          'Aysdev Global Consultancy provides industry-leading management consulting, and technology consulting  services to many of the world\'s most admired brands.'
        )
      ),
      React.createElement(
        'div',
        { className: 'footer-column' },
        React.createElement('h3', null, 'Services'),
        React.createElement(
          'ul',
          null,
          React.createElement(
            'li',
            null,
            React.createElement('a', { href: '/', rel: 'noopener noreferrer' },
             ' Management Consulting'
            )
          ),
          React.createElement(
            'li',
            null,
            React.createElement('a', { href: '/',  rel: 'noopener noreferrer' },
              'Technology Management'
            )
          ),
          
          // React.createElement('a',{ href: '/', rel: 'noopener noreferrer' } , 'Management Consulting'),
          // React.createElement('a', { href: '/', rel: 'noopener noreferrer' }, 'Technology Consulting'),
        //   React.createElement('li', null, 'Tax'),
        //   React.createElement('li', null, 'Advisory')
        )
      ),
      React.createElement(
        'div',
        { className: 'footer-column' },
        React.createElement('h3', null, 'Connect with us'),
        React.createElement(
          'ul',
          { className: 'social-icons' },
          React.createElement(
            'li',
            null,
            React.createElement('a', { href: 'https://twitter.com/aysdev', target:'_blank', rel: 'noopener noreferrer' },
              React.createElement(FontAwesomeIcon, { icon: faTwitter})
            )
          ),
          React.createElement(
            'li',
            null,
            React.createElement('a', { href: 'https://in.linkedin.com/company/aysdev-global-consultancy-llp?original_referer=https%3A%2F%2Fwww.google.com%2F', target: '_blank', rel: 'noopener noreferrer' },
              React.createElement(FontAwesomeIcon, { icon: faLinkedin })
            )
          ),
          React.createElement(
            'li',
            null,
            React.createElement('a', { href: 'https://www.facebook.com/pages/Aysdev-Global-Consultancy-LLP/1988211104814110/', target: '_blank', rel: 'noopener noreferrer' },
              React.createElement(FontAwesomeIcon, { icon: faFacebook })
            )
          )
        )
      ),
      React.createElement(
        'div',
        { className: 'footer-column' },
        React.createElement('h3', null, 'Subscribe to our Newsletter'),
        React.createElement(
          'form',
          { onSubmit: handleSubmit },
          React.createElement('input', { type: 'email', placeholder: 'Your email', value: email, onChange: handleEmailChange, required: true }),
          React.createElement('button', { type: 'submit' }, 'Subscribe')
        )
      )
    ),
    React.createElement(
      'div',
      { className: 'footer-bottom' },
      React.createElement('p', null, '\xA9 ', new Date().getFullYear(), ' Aysdev Global Consultancy LLP. All rights reserved.')
    )
  );
};

export default Footer;