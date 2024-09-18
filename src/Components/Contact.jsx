import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <>
    <div className="container-fluid">
      <div id="contact">
        <div className="cinner">
        <h3 className='text-primary text-center fw-bold'>CONTACT ME</h3>
        <div className="underline mb-4"></div>
        <section>
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-7 heading-section text-center">
        <p>Below are the details to reach out to me!</p>
      </div>
    </div>
    <div className="row d-flex contact-info">
      <div className="col-md-6 col-lg-3 d-flex ftco-animate">
        <div className="align-self-stretch box p-4 text-center">
          <div className="icon d-flex align-items-center justify-content-center">
            <span className="icon-map-signs" />
          </div>
          <h5 className="mb-4">Address</h5>
          <a href='#' className='fw-bold bor'>Kushinagar, India</a>
        </div>
      </div>
      <div className="col-md-6 col-lg-3 d-flex ftco-animate">
        <div className="align-self-stretch box p-4 text-center">
          <div className="icon d-flex align-items-center justify-content-center">
            <span className="icon-phone2" />
          </div>
          <h5 className="mb-4">Contact Number</h5>
          <p>
            <a href="tel://9559779666" className='fw-bold bor'>+91 9559779666</a>
          </p>
        </div>
      </div>
      <div className="col-md-6 col-lg-3 d-flex ftco-animate">
        <div className="align-self-stretch box p-4 text-center">
          <div className="icon d-flex align-items-center justify-content-center">
            <span className="icon-paper-plane" />
          </div>
          <h5 className="mb-4">Email Address</h5>
          <p>
            <a href="mailto:info@yoursite.com" className='fw-bold bor'>ayushsri9666@gmail.com</a>
          </p>
        </div>
      </div>
      <div className="col-md-6 col-lg-3 d-flex ftco-animate">
        <div className="align-self-stretch box p-4 text-center">
          <div className="icon d-flex align-items-center justify-content-center">
            <span className="icon-globe" />
          </div>
          <h5 className="mb-4">Download Resume</h5>
          <p>
            <a href="https://www.canva.com/design/DAGOK3du4Lo/w1XK_G6e0IgoGyre9mAlcw/edit?utm_content=DAGOK3du4Lo&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target='_blank' className='bor fw-bold' >Resume Link</a>
          </p>
        </div>
      </div>
      <div className="container">
        <br />
        <br />
        <div className="row justify-content-center">
          <div className="col-md-7 ftco-animate text-center">
            <h5>
              Have a<span> Question?</span>&nbsp;
              <a href="#" className="bor">
                Click Here
              </a>
            </h5>
          </div>
        </div>
        <br />
          <h4 className='text-center mt-3'>Find me on</h4><br/>
          <div className="icons">
            <a href="https://www.linkedin.com/in/imayushsri/" target='_blank'>
          <FontAwesomeIcon icon={faLinkedin} className='icon'/>
              <span className="icon-linkedin" />
            </a>
            <a href="https://twitter.com/imayush_sri" target='_blank'>
<FontAwesomeIcon icon={faTwitter}  className='icon'/>
              <span className="icon-twitter" />
            </a>
            <a href="https://www.facebook.com/imayush.sri" target='_blank'>
          <FontAwesomeIcon icon={faFacebook}  className='icon'/>
              <span className="icon-facebook" />
            </a>
            <a href="https://www.instagram.com/imayushsri/" target='_blank'>
          <FontAwesomeIcon icon={faInstagram} className='icon'/>
              <span className="icon-instagram" />
            </a>
            <a href="https://github.com/imayushsri" target='_blank'>
          <FontAwesomeIcon icon={faGithub} className='icon'/>
              <span className="icon-instagram" />
            </a>
            </div>
        <br />
      </div>
    </div>
  </div>
</section>
      </div>
      </div>
      </div>
    </>
  )
}

export default Contact
