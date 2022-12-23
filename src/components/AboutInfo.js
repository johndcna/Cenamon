import React, { Component } from 'react';

export default function AboutInfo() {




        return (
            <div id="about" className="container-fluid text-center about-color" >
                <h1 className="heading">ABOUT</h1>
                <hr className="solid" />
                <p className="info">I am an experience full-stack .NET developer. I have more than 6 years in developing web applications using .NET platform. I work with ASP.NET MVC (4 and 5.2), ASP.NET Web API (1.0 and 2.0), .NET core (1.0 and 2.0). I am passionate about developing applications to make sure my clients are satisfied when they are using the product.</p>
                <div className="row">
                    <div className="col-sm-12 col-md-4 col-lg 4 thumb">
                        <img  src={'/Cenamon/pic.jpg'} className="zoom img-fluid " alt="mypic" />
                    </div>

                    <div id="skills" className="col-sm-12 col-md-8 col-lg ">

                        <h3 style={{ marginLeft: "2%", align: "left" }} className="heading"> SKILLS</h3>
                        <div id="skills">
                            <div className="col-lg-8">
                                <div className="skillbar clearfix " data-percent="80%">
                                    <div className="skillbar-title skill-bar-odd"><span>C#</span></div>
                                    <div className="skillbar-bar skill-bar-odd"></div>
                                    <div className="skill-bar-percent">80%</div>
                                </div>

                                <div className="skillbar clearfix " data-percent="80%">
                                    <div className="skillbar-title skill-bar-even"><span>ASP.NET MVC</span></div>
                                    <div className="skillbar-bar skill-bar-even"></div>
                                    <div className="skill-bar-percent">80%</div>
                                </div>


                                <div className="skillbar clearfix " data-percent="80%">
                                    <div className="skillbar-title skill-bar-odd"><span>ASP.NET Web API</span></div>
                                    <div className="skillbar-bar skill-bar-odd"></div>
                                    <div className="skill-bar-percent">80%</div>
                                </div>


                                <div className="skillbar clearfix " data-percent="70%">
                                    <div className="skillbar-title skill-bar-even"><span>.NET Core</span></div>
                                    <div className="skillbar-bar skill-bar-even"></div>
                                    <div className="skill-bar-percent">70%</div>
                                </div>


                                <div className="skillbar clearfix " data-percent="70%">
                                    <div className="skillbar-title skill-bar-odd"><span>MS SQL</span></div>
                                    <div className="skillbar-bar skill-bar-odd"></div>
                                    <div className="skill-bar-percent">70%</div>
                                </div>

                                <div className="skillbar clearfix " data-percent="70%">
                                    <div className="skillbar-title skill-bar-even"><span>jQuery</span></div>
                                    <div className="skillbar-bar skill-bar-even"></div>
                                    <div className="skill-bar-percent">70%</div>
                                </div>


                                <div className="skillbar clearfix " data-percent="70%">
                                    <div className="skillbar-title skill-bar-odd"><span>AngularJS</span></div>
                                    <div className="skillbar-bar skill-bar-odd"></div>
                                    <div className="skill-bar-percent">70%</div>
                                </div>

                                <div className="skillbar clearfix " data-percent="60%">
                                    <div className="skillbar-title skill-bar-even"><span>React</span></div>
                                    <div className="skillbar-bar skill-bar-even"></div>
                                    <div className="skill-bar-percent">60%</div>
                                </div>


                                <div className="skillbar clearfix " data-percent="60%">
                                    <div className="skillbar-title skill-bar-odd"><span>KnockoutJS</span></div>
                                    <div className="skillbar-bar skill-bar-odd"></div>
                                    <div className="skill-bar-percent">60%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
}
