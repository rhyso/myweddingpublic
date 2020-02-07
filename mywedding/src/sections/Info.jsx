import React, { Fragment, Component } from 'react';


export class Info extends Component {
    render() {
        return (
        <Fragment>

            <section className="story story-2 info section-info-dark">
                <div className="container">

                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 text-center">
                            <h2>Wedding Venue</h2>
                            <p>
                            <p>
                            <img className="WE-logo" alt="WE" src="img/WE-logo-150x150.png" />
                            </p>
                            Wildwood & Eden - The Barn
                            </p>
                            <p>
                            The Barn, Coastal Road,
                            Burniston Scarborough,
                            North Yorkshire
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="story story-2 info">
                <div className="container">

                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 text-center">
                            <h2>Travel</h2>
                            <p>
                            Burniston is a small village close to the seaside resort of Scarborough, it is easily accessible by car or train. The train station is located in the center of Scarborough, with a taxi rank next door (Station Taxi's). 
                            By taxi or car, Burniston is a 10-minute drive from Scarborough. 
                                </p>
                        </div>
                    </div>
                </div>
            </section>

          <section className="story story-2">
                <div className="container">

                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 text-center">
                            <h2>Train</h2>
                            <p>
                            If coming up by train, you will need to get the train to York and then a connecting train to Scarborough (from York - Scarborough, it takes 45 minutes and they leave every hour) N.B. York is a beautiful Cathedral city - so if you have a chance we definitely recommend taking a couple of hours to visit.
                                The station is a 10-minute walk into the centre. 
                            </p>
                        </div>
                    </div>
                </div>
            </section>


           <section className="story story-2 section-info-dark">
                <div className="container">

                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 text-center">
                            <h2>Taxis</h2>
                            <p>
                            Please find a list of taxi companies located in Scarborough, we recommend pre-booking any taxis. 
                            </p>
                            <p>
                                <ul>
                                    <li>Station Taxis: 01723 366366</li>
                                    <li>Nippy: 01723 377377</li>
                                    <li>Beeline: 01723 366666</li>
                                    <li>Boro: 01723 361111</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>

        )
    }
}
