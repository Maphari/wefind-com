import React from "react";

import "../../css/footer.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
      <div className='container-socials'>
        <div className='icon'>
          <i className='fa-brands fa-facebook'></i>
        </div>
        <div className='icon'>
          <i className='fa-brands fa-instagram'></i>
        </div>
        <div className='icon'>
          <i className='fa-brands fa-twitter'></i>
        </div>
      </div>

      <div className='container-links'>
        <div className='links'>
          <a className='anchor' href='#home'>
            Home
          </a>
          <a className='anchor' href='#home'>
            About
          </a>
          <a className='anchor' href='#home'>
            Version
          </a>
          <a className='anchor' href='#home'>
            Mission
          </a>
        </div>
        <div className='sub-links'>
          <a className='sub-anchor' href='#home'>
            Contact us
          </a>
          <a className='sub-anchor' href='#home'>
            Location
          </a>
          <a className='sub-anchor' href='#home'>
            Help
          </a>
        </div>
      </div>

      <div className='footer'>Copyright &copy; Since 2022 - {year}</div>
    </>
  );
}
