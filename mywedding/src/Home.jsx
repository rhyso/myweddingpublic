import React, { Component } from 'react';
import './App.css';
import { nav } from './sections/nav.jsx';
import classNames from 'classnames';
import cali from './images/cali-pic.JPG'

class App extends Component {
    render() {
        return (
            <div className="App">
                <nav />
                <div className="main-container">
                    <section className="header header-1 fullscreen overlay">
                        <div className="background-image-holder">
                            <img alt="Background image" className="background-image" src="img/hero1.jpg" />
                        </div>

                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12 text-center">
                                    <h1>RHYS &amp; KATE<br/></h1>
                                    <h6>June 20th, 2020 - Burniston, North Yorkshire</h6>
                                </div>
                            </div>
                        </div>
                    </section>

                    <a id="story" className="in-page-link"></a>

                    <section className="story story-2">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 text-center">
                                    <h2>A serendipitous meeting</h2>
                                    <h6>A little about how we fell in love</h6>
                                </div>
                                <div className="text-center col-sm-12">
                                    <img alt="Photo" src="img/kate1.png" />
                                        <img alt="Photo" src="img/kate2.png" />
                                            <img alt="Photo" src="img/kate3.jpg" />
                                </div>
                            </div>


                            <div className="row">
                                <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 text-center">
                                    <p>
                                        I guess you could call this a typical "boy meets girl in bar" story but with a
                                        twist! Boy buys girl a drink, girl gives boy phone number. Two months and
                                        several thousand kilometers later and said boy and girl are head over heels for
                                        each other. Fast forward to today and we're settling down in our first home
                                        ready to tie the knot.
                                        <br/><br/>
                                            Join us on August 6, 2015 as we finally tie the knot!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <a id="accomm" className="in-page-link"/>

                    <section className="story storyfiller">
                    </section>

                    <section className="accom accom-2">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12 text-center">
                                    <h2>Where To Stay?</h2>
                                </div>
                            </div>

                            <div className="row">
                                <div className="feature col-sm-12">
                                    <a href="#">
                                        <img alt="Hotel" src="img/dutchy.jpg" />
                                    </a>
                                    <h6>Sheraton Flinders</h6>
                                    <p>
                                        Mention our names when making your reservation to recieve the group booking
                                        discount.
                                    </p>
                                    <p>
                                        767 Greenvale Road<br/>
                                        Flinders Vic 3214
                                    </p>
                                </div>

                                <div className="feature col-sm-12">
                                    <a href="#">
                                        <img alt="Hotel" src="img/plough.jpg" />
                                    </a>
                                    <h6>The Plough<br/></h6>
                                    <p>
                                        A great option for the budget-concious with rooms for up to 4 guests.
                                    </p>
                                    <p>
                                        65 Chilvers Avenue<br/> Flinders, VIC 3214
                                    </p>
                                </div>
                                <div className="feature col-sm-12">
                                    <a href="#">
                                        <img alt="Hotel" src="img/Sands-2.jpg" />
                                    </a>
                                    <h6>The Sands<br/></h6>
                                    <p>
                                        Limited cabins are available at Camp Krusty for groups with up to 8 guests.
                                    </p>
                                    <p>
                                        122 Chilvers Avenue<br/> Flinders, VIC 3214
                                    </p>
                                </div>


                            </div>
                        </div>
                    </section>
                    <a id="rsvp" className="in-page-link"/>

                    <footer className="footer footer-1">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12 text-center">
                                    <h6 className="hope-make-it">We hope you can make it!</h6><br/>
                                    <h6>Any early questions give us a text <br/>or email
                                        at<br/> rhyswork@gmail.com/katesunderland@hotmail.com</h6>
                                </div>
                            </div>
                        </div>
                    </footer>

                </div>

            </div>







        );
    }
}

export default App;
