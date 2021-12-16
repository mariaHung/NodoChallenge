import React, { Component } from 'react';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Footer from "../component/footer/FooterTwo";

class Ready extends Component {

    render() {
        return (
            <>
                {/* Start Header Area  */}
                <header className="header-area formobile-menu header--fixed default-color">
                    <div className="header-wrapper" id="header-wrapper">
                        <div className="header-left">
                            <div className="logo">
                                <a href="#">
                                    <img className="logo-1" src="/assets/images/logo/logonodo.png" alt="Logo Images"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </header>
                {/* End Header Area  */}

                {/* Start Page Error  */}
                <div className="error-page-inner bg_image bg_image--1" data-black-overlay="6">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="inner">
                                    <h1 className="title theme-gradient">Todo Listo!</h1>
                                    {/* <h3 className="sub-title">Page not found</h3> */}
                                    {/* <span>The page you were looking for could not be found.</span> */}
                                    <div className="error-button">
                                        <a className="rn-button-style--2 btn-solid" href="/">Volver a inicio</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Page Error  */}

                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}
                <Footer />
            </>
        )
    }
}
export default Ready;
