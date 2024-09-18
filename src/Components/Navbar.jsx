import React from 'react';
import { IoHomeOutline, IoInformationCircleOutline  } from "react-icons/io5";
import { CiParking1, CiCircleMore } from "react-icons/ci";
import { GoBook } from "react-icons/go";
import { LuContact } from "react-icons/lu";






const Navbar = () => {
    return (
        <>
        <div className="container-fluid">
            <nav className="navbar navbar-expand-lg bg-dark menu" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand fw-bold ms-4" href="#" style={{fontSize:"1rem"}}>
                        AYUSH SRIVASTAVA
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse navTextEnd" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link" aria-current="page" href="#">
                            <IoHomeOutline  className="ics ich"/> Home
                            </a>
                            <a className="nav-link" href="#description">
                            <IoInformationCircleOutline  className="ics"/> About
                            </a>
                            <a className="nav-link" href="#project">
                            <CiParking1  className="ics"/> Projects
                            </a>
                            <a className="nav-link" href="#eout1">
                            <GoBook  className="ics ich"/> Education
                            </a>
                            <a className="nav-link" href="#more">
                               <CiCircleMore className="ics"/> Achievements
                            </a>
                            <a className="nav-link" href='#contact'>
                            <LuContact  className="ics ich"/> Contact
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
            </div>
        </>
    )
}

export default Navbar
