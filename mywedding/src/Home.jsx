import React, { Component } from 'react';
import './App.css';
import classNames from 'classnames';
import cali from './images/cali-pic.JPG'

class App extends Component {
    render() {
        return (
            <div className="App">



                <div class="nav-container">



                    <nav class="nav nav-1 transparent light">
                        <a href="index.html" class="logo">
                            <span>Rhys & Kate's Wedding</span>
                        </a>
                        <ul class="menu">
                            <li><a href="#home" class="inner-link" target="default">home</a></li><li><a href="#accomm" class="inner-link" target="default">accommodation</a></li>
                        </ul>
                        <div class="mobile-toggle">
                            <div class="line-1"></div>
                            <div class="line-2"></div>
                            <div class="line-3"></div>
                        </div>
                    </nav>

                </div>

                <div class="main-container">

                    <a id="home" class="in-page-link" />

                    <section class="header header-1 fullscreen overlay">
                        <div class="background-image-holder">
                            <img alt="Background image" class="background-image" src="img/hero1.jpg" />
                        </div>

                        <div class="container">
                            <div class="row">
                                <div class="text-center col-sm-12">
                                    <h1>Rhys &amp; Kate</h1>
                                    <h6>June 20th, 2020 - Scarborough, North Yorkshire</h6>
                                </div>
                            </div>
                        </div>
                    </section>

                    <a id="story" class="in-page-link"></a>



                    <a id="accomm" class="in-page-link" />
                    <section class="accom accom-2 bg-secondary">
                        <div class="container">
                            <div class="row">
                                <div class="col-sm-12 text-center">
                                    <h2>Where To Stay?</h2>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-sm-4 feature">
                                    <a href="#">
                                        <img alt="Hotel" src="img/dutchy.jpg" />
                                    </a>
                                    <h6>Dutchy of Lancaster Cottages</h6>
                                    <p>
                                        Mention our names when making your reservation to recieve the group booking discount.
                                    </p>
                                    <p>
                                        <a href="http://duchyoflancasterholidaycottages.co.uk">http://duchyoflancasterholidaycottages.co.uk</a>
                                    </p>
                                </div>

                                <div class="col-sm-4 feature">
                                    <a href="#">
                                        <img alt="Hotel" src="img/Sands-2.jpg" />
                                    </a>
                                    <h6>Sands bay</h6>
                                    <p>
                                        Limited cabins are available at Camp Krusty for groups with up to 8 guests.
                                    </p>
                                    <p>
                                        < a href="https://escape2thesands.com">https://escape2thesands.com/</a>
                                    </p>
                                </div>


                            </div>
                        </div>
                    </section>

                    <a id="registry" class="in-page-link" />


                    <a id="rsvp" class="in-page-link" />


                    <footer class="footer footer-1">
                        <div class="container">
                            <div class="row">
                                <div class="col-sm-12 text-center">
                                    <h6 className="hope-make-it">We hope you can make it!</h6><br />
                                    <h6>Any early questions give us a text <br />or email at<br /> rhyswork@gmail.com/katesunderland@hotmail.com</h6>
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
