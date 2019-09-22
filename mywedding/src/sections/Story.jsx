import React, { Component } from 'react';


export class Story extends Component {
    render() {
        return (

            <section className="story story-2 kateandrhys">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 text-center">
                            <h2>A serendipitous meeting</h2>
                            <h6>A little about how we fell in love</h6>
                        </div>
                        <div className="text-center col-sm-12">
                            <img alt="Photo" src="img/kate1.jpg" />
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


        )
    }
}
