import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Typewriter from 'typewriter-effect';


const About = () => {
    return (
        <>
        <div className="container-fluid">
            <div className="outer">
                <div className="inner">
                    <div className="AboutLeft">
                        <h3 style={{ fontSize: "2.4vw" }}>Hello, It's Me</h3>
                        <h1 style={{ fontSize: "3vw" }}>AYUSH SRIVASTAVA</h1>
                        <h3 style={{ fontSize: "2.4vw" }} className='mt-4'>AND I AM A,</h3>
                        <h4 style={{color:"#0d6efd", fontSize:"3vw"}}>
                        <Typewriter
                            options={{
                                strings: ['WEB DEVELOPER','MERN DEVELOPER', 'PROGRAMMER'],
                                autoStart: true,
                                loop: true,
                            }}
                        /></h4>
                        <div className="social">
                            <a href=''> <FontAwesomeIcon icon={faLinkedinIn} className='svg' /></a>
                            <a href=""><FontAwesomeIcon icon={faGithub} className='svg' /></a>
                            <a href=""><FontAwesomeIcon icon={faTwitter} className='svg' /></a>
                            <a href=""><FontAwesomeIcon icon={faInstagram} className='svg' /></a>
                        </div>
                    </div>
                    <div className="AboutRight">
                        <div className="AboutPic">
                            <img className='AboutImg' src="/Ayush.jpg" height="320vw" />
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default About
