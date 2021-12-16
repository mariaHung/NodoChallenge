import React, { Component , Fragment } from "react";
// import GoogleMapReact from 'google-map-react';
import Slider from "react-slick";
import { slideSlick } from "../page-demo/script";
// import Header from "../component/header/Header";
import Helmet from "../component/common/Helmet";

const SlideList = [
    {
        textPosition: 'text-center',
        bgImage: 'bg_image--32',
        category: '',
        title: 'Nodo Challenge 2022',
        description: '',
        buttonText: 'Inscríbete',
        buttonLink: '/contact'
    },
]
class DigitalAgency extends Component{
    constructor () {
        super()
        this.menuTrigger = this.menuTrigger.bind(this);
        this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
        // this.stickyHeader = this.stickyHeader.bind(this);
       //  this.subMetuTrigger = this.subMetuTrigger.bind(this);
        window.addEventListener('load', function() {
            console.log('All assets are loaded')
        })
    }

    menuTrigger() {
        document.querySelector('.header-wrapper').classList.toggle('menu-open')
    }

    CLoseMenuTrigger() {
        document.querySelector('.header-wrapper').classList.remove('menu-open');
    }
    static defaultProps = {
        center: {
            lat: 10.5883286,
            lng: -71.6327717,
        },
        zoom: 11
    };
    // stickyHeader () {}
    render(){
        var elements = document.querySelectorAll('.has-droupdown > a');
        for(var i in elements) {
            if(elements.hasOwnProperty(i)) {
                elements[i].onclick = function() {
                    this.parentElement.querySelector('.submenu').classList.toggle("active");
                    this.classList.toggle("open");
                }
            }
        }
        return(
            <Fragment>
                <Helmet pageTitle="Nodo Sur" />

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

                {/* Start Slider Area   */}
                <div className="slider-wrapper color-white">
                    <div className="slider-activation slider-digital-agency">
                        <Slider className="rn-slick-dot dot-light" {...slideSlick}>
                            {SlideList.map((value , index) => (
                                <div className={`slide slide-style-2 fullscreen d-flex align-items-center justify-content-center bg_image ${value.bgImage}`} key={index} data-black-overlay="6">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className={`inner ${value.textPosition}`}>
                                                    {value.category ? <span>{value.category}</span> : ''}
                                                    {value.title ? <h1 className="title">{value.title}</h1> : ''}
                                                    {value.description ? <p className="description">{value.description}</p> : ''}
                                                    {value.buttonText ? <div className="slide-btn"><a className="rn-button-style--2 btn-primary-color" href={`${value.buttonLink}`}>{value.buttonText}</a></div> : ''}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
                {/* End Slider Area   */}
            </Fragment>
        )
    }
}

export default DigitalAgency;