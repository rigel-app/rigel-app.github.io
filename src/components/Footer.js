import React from 'react';

const Footer =  ({ siteTitle }) => {

  return (
    <footer className="footer">
      <div className="footer-belt">
        <a style={{marginRight:5}}> Support:</a>
        <a target='_blank' href="mailto:info.rigelapp@gmail.com" style={{ marginRight: 5 }}>email</a>
        <a style={{marginRight:5}}>/</a>
        <a target='_blank' href="https://twitter.com/AppRigel" style={{marginRight:5}}>twitter</a>
      </div>
    </footer>
  )
};

export default Footer;
