import React, { Fragment, Component } from 'react';


export class Info extends Component {
    render() {
        return (
        <Fragment>

            <section className="story story-2 venue-info info section-info-dark">
                <div className="container">

                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 text-center">
                            <h2>Wedding Venue</h2>
                            <p>
                            <p>
                                <a href="https://wildwoodandeden.co.uk/" target="_blank" title="Wildwood and Eden">
                                    <img className="WE-logo" alt="WE" src="img/WE-logo-150x150.png" />
                                </a>
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
                            <h2>Guest Information</h2>
                            <p>
                                - Due to limitations on the size of our venue, i'm afraid that we are unable to invite children to the wedding. However everyone is welcome at the beach BBQ on the Sunday!    
                                <br/><br/>- Please note that our bar is CASH ONLY (it's the 1990's again), so please come prepared! 
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            <section className="story story-2 info itinerary section-info-dark">
                <div className="container">

                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 text-center">
                            <h2>Itinerary</h2>
                           <p>
                               <ul>
                                   <li><h2>FRIDAY 19th JUNE</h2></li>
                                   <li>For anyone that wants a little pre-wedding tipple, we recommend <a href="www.theploughscalby.co.uk" target="_blank">The Plough</a> pub in Scalby, they also do great food and snacks.</li>
                                   <br/>
                                   <li><h2>SATURDAY 20TH JUNE </h2></li>
                                   <li><h4>11.45am</h4> Please be seated </li>
                                   <li><h4>12pm noon</h4> We say I do! </li>
                                   <li><h4>2pm</h4> Let's eat</li>
                                   <li><h4>5pm</h4> Time to celebrate, let the dancing commence</li>
                                   <li><h4>11pm</h4> Secret Garden Party <br/>Please join us next door (at Kate's family house) to continue the fun! If you are unable to join, please arrange a taxi from the wedding venue by 12pm</li>
                                   <li><h4>2am</h4>  Taxis (Wayside Farm, Coastal Road, Burniston, YO13 0DB)</li><br/>
                                   <li><h2>SUNDAY 21ST JUNE</h2></li>
                                   <li>We have rented two beach chalets on North Bay Beach for the Sunday (happy Summer Solstice!), so if you have time, please join us for a BBQ, beers and beach games from 1.30pm onwards. Nearest place to get taxi's to - The Sands, Peasholm Park, YO12 7TN</li>
                                   <li></li>
                               </ul>
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

          <section className="story story-2 section-info-dark">
                <div className="container">

                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 text-center">
                            <h2>Train</h2>
                            <p>
                            If coming up by train, you will need to get the train to York and then a connecting train to Scarborough (from York - Scarborough, it takes 45 minutes and they leave every hour) N.B. York is a beautiful Cathedral city - so if you have a chance we definitely recommend taking a couple of hours to visit.
                                The station is a 10-minute walk into the centre. 
                            </p>
                            <br/><br/>
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
