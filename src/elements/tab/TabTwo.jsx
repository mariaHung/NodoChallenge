import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class TabsTwo extends Component{
    render(){
        let
        tab1 = "Clases de la mañana",
        tab2 = "Clases de la tarde",
        tab3 = "Open"
        const { tabStyle } = this.props
        return(
            <div>
                {/* Start Tabs Area */}
                <div className="tabs-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <Tabs>
                                    <TabList  className={`${tabStyle}`}>
                                        <Tab>{tab1}</Tab>
                                        <Tab>{tab2}</Tab>
                                        <Tab>{tab3}</Tab>
                                    </TabList>

                                    <TabPanel>
                                        <div className="single-tab-content">
                                            <ul>
                                                <li>
                                                    <a href="#">6:00 <span> AM</span></a>
                                                </li>
                                                <li>
                                                    <a href="#">7:00 <span> AM</span></a>
                                                </li>
                                                <li>
                                                    <a href="#">8:00 <span> AM</span></a>
                                                </li>
                                                <li>
                                                    <a href="#">9:00 <span> AM</span></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </TabPanel>

                                    <TabPanel>
                                        <div className="single-tab-content">
                                            <ul>
                                            <li>
                                                    <a href="#">5:00 <span> PM</span></a>
                                                </li>
                                                <li>
                                                    <a href="#">6:00 <span> PM</span></a>
                                                </li>
                                                <li>
                                                    <a href="#">7:00 <span> PM</span></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </TabPanel>

                                    <TabPanel>
                                        <div className="single-tab-content">
                                            <ul>
                                                <li>
                                                    <a href="#">3:00 <span> PM - </span>5:00 <span> PM </span> </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </TabPanel>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Tabs Area */}
            </div>
        )
    }
}



export default TabsTwo;