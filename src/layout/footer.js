import React from 'react';

const Footer = () => {
    return (
        <div className="footer">

  <div className="container">
    <div className="d-flex flex-column flex-md-row mb-4">
    <div className="col-6"> React Project : Created By Ahmad Saleh</div>
     
     
      <div className="col-6">
       
        <h4>Email:</h4>
        <span>ahmds17494@gmail.com</span>
      </div>
    </div>
    <div className="d-flex flex-column flex-md-row mb-4">
    
        <div className=" col-6 social-media ">
          <p className="mb-0 d-flex">
            <a href="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-facebook" /></a>
            <a href="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-twitter" /></a>
            <a href="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-instagram" /></a>
            <a href="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-dribbble" /></a>
          </p>
        </div>
        <div className="col-6">
        <form action="#" className="searchform order-lg-last">
        <div className="form-group d-flex">
          <input type="text" className="form-control" placeholder="Search" /> {/* besta3mil l form control kermel l arc metel radius */}
          <button type="submit" placeholder className="form-control search"><span className="fa fa-search" /></button>
        </div>
      </form>
        </div>
    </div>
  </div>


        </div>
    );
}

export default Footer;
