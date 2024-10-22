import React from 'react';
import './Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function Footer() {
  return (
    <>
      <div id="footer-div" className="bg-light w-100 h-100 mt-5 mb-5 position-relative">
        <div className="footer1">
            <h1 className='hh'>subscribe newletter</h1>
          <form action="" className="d-flex flex-column align-items-center mb-5">
          <input type="email" placeholder="Enter your email" className="form-control mb-3" style={{ width: '20vw', heigh:'7%' }} />


            <button className="btn btn-dark px-5 py-2 font-weight-bold" style={{width:'7vw'}}>
              <a href="#" className="text-white text-decoration-none">SUBSCRIBE</a>
            </button>
          </form>
        </div>

        <div className="footer2 bg-dark w-100 py-3"></div>
      </div>
    </>
  );
}

export default Footer;
