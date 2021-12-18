import React, { useState, useContext, useEffect } from 'react';
import { Link } from "react-router-dom";

import PageHelmet from "../component/common/Helmet";
import AlertContext from "../context/alerts/alertContext";
import AuthContext from '../context/authentication/authContext';

const Contact = (props) => {
    //Extract values from context
    const alertContext = useContext(AlertContext);
    const { alert, showAlert } = alertContext;

    const authContext = useContext(AuthContext);
    const { message, authenticated, registerUser } = authContext

    //In case that the user already exists
    useEffect( () => {
        if(authenticated) {
            props.history.push('/ready');
        }
        if(message) {
            showAlert(message.msg, message.category);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [message, authenticated, props.history]);

    //State for login
    const [user, saveUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        category: "",
        payment: "",
    });

    //extract from user
    const { firstName, lastName, email, password, category, payment } = user;

    const onChange = e => {
        saveUser({
            ...user,
            [e.target.name]:e.target.value
        })
    };

    //When the user login
    const onSubmit = e => {
        e.preventDefault();

        //validate that there are no empty fields
        if(
            firstName.trim() === '' ||
            lastName.trim() === '' ||
            email.trim() === '' ||
            category.trim() === '' ||
            password.trim() === '' ||
            payment.trim() === ''
        ) {
            showAlert('Todos los campos son obligatorios', 'alert')
            return;
        };

        //Passwors with min of 6 characters
        if(password.length < 6) {
            showAlert('La contraseña debe tener al menos 6 carácteres', 'alert');
            return;
        };

        //pass it to action
        registerUser({
            firstName,
            lastName,
            email,
            password,
            category,
            payment,
        })
    };

    return(
        <React.Fragment>
            <PageHelmet pageTitle='Contact' />
                {/* Start Slider Area   */}
                <div className="slider-wrapper" id="contacto">
                    {/* Start Single Slide */}
                    <div className="d-flex align-items-center justify-content-center slide-style-1 slider-fixed--height bg_image bg_image--32" data-black-overlay="7">
                        <div className="contact-form--1">
                            <div className="container">
                                <div className="row row--35 align-items-start">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="rn-address">
                                            <div className="header-wrapper" id="header-wrapper">
                                                <div className="d-flex align-items-center justify-content-center mb--30">
                                                    <div className="logo">
                                                        <a href="#">
                                                            <img className="logo-1" src="/assets/images/logo/logonodo.png" alt="Logo Images"/>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="section-title text-center mb--40">
                                                <h2 className="title theme-gradient">Nodo Challenge</h2>
                                            </div>
                                            <div className="section-title text-center mb--30">
                                                { alert ? (<div className={`alert ${alert.category}`}> {alert.msg} </div>) : null }
                                            </div>
                                            <div className="form-wrapper">
                                                <form onSubmit={onSubmit}>
                                                    <div className="campo-form">
                                                        <label htmlFor="firstName">Nombre</label>
                                                        <input
                                                            type="text"
                                                            id="firstName"
                                                            name="firstName"
                                                            placeholder="* Nombre"
                                                            value={firstName}
                                                            onChange={onChange}
                                                        />
                                                    </div>

                                                    <div className="campo-form">
                                                        <label htmlFor="lastName">Apellido</label>
                                                        <input
                                                            type="text"
                                                            id="lastName"
                                                            name="lastName"
                                                            placeholder="* Apellido"
                                                            value={lastName}
                                                            onChange={onChange}
                                                        />
                                                    </div>

                                                    <div className="campo-form">
                                                        <label htmlFor="email">Email</label>
                                                        <input
                                                            type="email"
                                                            id="email"
                                                            name="email"
                                                            placeholder="* Email"
                                                            value={email}
                                                            onChange={onChange}
                                                        />
                                                    </div>

                                                    <div className="campo-form">
                                                        <label htmlFor="password">Contraseña</label>
                                                        <input
                                                            type="password"
                                                            id="password"
                                                            name="password"
                                                            placeholder="* Contraseña"
                                                            value={password}
                                                            onChange={onChange}
                                                        />
                                                    </div>

                                                    <div className="campo-form">
                                                        <label htmlFor="category">Categoria</label>
                                                        <select
                                                            type="text"
                                                            id="category"
                                                            name="category"
                                                            placeholder="* Categoria"
                                                            value={category}
                                                            onChange={onChange}
                                                        >
                                                            <option value="Seleccionar">--Seleccionar categoria--</option>
                                                            <option value="Novato">Novato</option>
                                                            <option value="Escalado">Escalado</option>
                                                            <option value="Avanzado">Avanzado</option>
                                                            <option value="RX'd">RX'd</option>
                                                        </select>
                                                    </div>

                                                    <div className="campo-form">
                                                        <label htmlFor="payment">Forma de pago</label>
                                                        <select
                                                            type="text"
                                                            id="payment"
                                                            name="payment"
                                                            placeholder="* Forma de pago"
                                                            value={payment}
                                                            onChange={onChange}
                                                        >
                                                            <option value="Seleccionar">--Seleccionar forma de pago--</option>
                                                            <option value="Zelle">Zelle</option>
                                                            <option value="Efectivo">Efectivo</option>
                                                        </select>
                                                    </div>
                                                    { payment === "Zelle" ?  (
                                                        <div>
                                                            <h4>Datos zelle:</h4>
                                                            <h5>nodosur2021@gmail.com</h5>
                                                            <h5>Nombre: Luminayda</h5>
                                                            <h5>tlf: +58 424-6081675</h5>
                                                        </div>)
                                                    : null }

                                                    <br/>
                                                    <button className="rn-button-style--2 btn-solid" type="submit" value="submit" name="submit" id="mc-embedded-subscribe">Enviar</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Single Slide */}
                </div>
                {/* End Slider Area   */}
            </React.Fragment>
        )

}
export default Contact