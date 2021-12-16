import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
class Testimonial extends Component{
    render(){
        return(
            <React.Fragment>
                <div className="row align-items-center">
                    <div className="col-lg-12">
                        <Tabs>
                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    {/* <div className="inner">
                                        <p>Copropietario y Entrenador de CrossFit Nivel 2 (CF-L2).</p>
                                    </div> */}
                                    <div className="author-info">
                                        <h2>Garath Thomas </h2> <br />
                                        <h3 className="title theme-gradient"> Copropietario y Entrenador de CrossFit Nivel 2 (CF-L2).</h3>
                                    </div>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    {/* <div className="inner">
                                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                                    </div> */}
                                    <div className="author-info">
                                        <h2>Thomas Norman</h2> <br />
                                        <h3 className="title theme-gradient"> Copropietario, es entrenador de nivel 2 de CrossFit (CF-L2) y posee un certificado CF Kids</h3>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    {/* <div className="inner">
                                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                                    </div> */}
                                    <div className="author-info">
                                        <h2>Asher Steele </h2> <br />
                                        <h3 className="title theme-gradient"> Entrenador de CrossFit Nivel 2 (CF-L2) con certificado de entrenador de levantamiento de pesas L1 y ha completado el curso de gimnasia.</h3>
                                    </div>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    {/* <div className="inner">
                                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                                    </div> */}
                                    <div className="author-info">
                                        <h2>Garath Thomas </h2> <br />
                                        <h3 className="title theme-gradient"> Copropietaria, es entrenadora de nivel 2 de CrossFit (CF-L2) y posee un certificado CF Kids</h3>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    {/* <div className="inner">
                                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                                    </div> */}
                                    <div className="author-info">
                                        <h2>Garath Thomas </h2> <br />
                                        <h3 className="title theme-gradient"> Copropietaria, es entrenadora de nivel 2 de CrossFit (CF-L2) y posee un certificado CF Kids</h3>
                                    </div>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    {/* <div className="inner">
                                        <p>Chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.</p>
                                    </div> */}
                                    <div className="author-info">
                                        <h2>Garath Thomas </h2> <br />
                                        <h3 className="title theme-gradient"> Copropietaria, es entrenadora de nivel 2 de CrossFit (CF-L2) y posee un certificado CF Kids</h3>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    {/* <div className="inner">
                                        <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.</p>
                                    </div> */}
                                    <div className="author-info">
                                        <h2>Garath Thomas </h2> <br />
                                        <h3 className="title theme-gradient"> Copropietaria, es entrenadora de nivel 2 de CrossFit (CF-L2) y posee un certificado CF Kids</h3>
                                    </div>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    {/* <div className="inner">
                                        <p>Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.</p>
                                    </div> */}
                                    <div className="author-info">
                                        <h2>Garath Thomas </h2> <br />
                                        <h3 className="title theme-gradient"> Copropietaria, es entrenadora de nivel 2 de CrossFit (CF-L2) y posee un certificado CF Kids</h3>
                                    </div>
                                </div>
                            </TabPanel>

                            <TabList className="testimonial-thumb-wrapper">
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/testimonial-1.jpg" alt="Testimonial Images"/>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/testimonial-2.jpg" alt="Testimonial Images"/>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/testimonial-3.jpg" alt="Testimonial Images"/>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/testimonial-1.jpg" alt="Testimonial Images"/>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/testimonial-2.jpg" alt="Testimonial Images"/>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/testimonial-3.jpg" alt="Testimonial Images"/>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/testimonial-1.jpg" alt="Testimonial Images"/>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/testimonial-2.jpg" alt="Testimonial Images"/>
                                        </div>
                                    </div>
                                </Tab>
                            </TabList>
                        </Tabs>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Testimonial;