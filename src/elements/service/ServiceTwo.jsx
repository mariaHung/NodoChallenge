import React, { Component } from "react";
import { FiCast , FiLayers , FiUsers , FiMonitor } from "react-icons/fi";

const ServiceList = [
    {
        // icon: <FiCast />,
        title: 'Rapidez',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit aenean eleifend efficitur.'
    },
    {
        // icon: <FiLayers />,
        title: 'Trabajo Duro',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit aenean eleifend efficitur.'
    },
    {
        // icon: <FiUsers />,
        title: 'Repetir',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit aenean eleifend efficitur.'
    },
]

class ServiceTwo extends Component{
    render(){
        let title = '¿Qué es Crossfit?',
        description = 'El CrossFit es un programa de fuerza y preparación física general donde se entrenan todas las cualidades físicas con el objetivo de mejorar la condición física y la salud de las personas.';
        return(
            <React.Fragment>
                <div className="row">
                    <div className="col-lg-4 col-12">
                        <div className="section-title mt--30 mt_md--5 mt_mobile--5 mb_mobile--10">
                            <h2 className="title">{title}</h2>
                            <p>{description}</p>
                            <div className="service-btn">
                                <a className="btn-transparent rn-btn-dark" href="#prueba"><span className="text">Prueba con nosotros</span></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-12 mt_md--50">
                        <div className="row service-one-wrapper">
                            {ServiceList.map( (val , i) => (
                                <div className="col-lg-6 col-md-6 col-sm-6 col-12" key={i}>
                                    <a href="/service-details">
                                        <div className="service service__style--2">
                                            <div className="content">
                                                <h3 className="title">{val.title}</h3>
                                                <p>{val.description}</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default ServiceTwo;
