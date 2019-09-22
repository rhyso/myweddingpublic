import React, { Component } from 'react';


export class Accom extends Component {
    render() {
        return (

            <section className="accom accom-2">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 text-center">
                            <h2>Where To Stay?</h2>
                        </div>
                    </div>

                    <div className="row">
                        <div className="feature col-sm-12">
                            <a href="http://duchyoflancasterholidaycottages.co.uk/cottage/scalby-lodge.php">
                                <img alt="Hotel" src="img/dutchy.jpg" />
                            </a>
                            <h6>Duchy of Lancaster Cottages</h6>
                            <p>
                                About 10 minutes walk from the Wedding Venue
                            </p>
                            <p>
                                <a href="http://duchyoflancasterholidaycottages.co.uk/cottage/scalby-lodge.php">
                                Duchy Of Lancaster Cottages
                            </a>
                            </p>
                        </div>

                        <div className="feature col-sm-12">
                            <a href="https://theploughscalby.co.uk/">
                               <img alt="Hotel" src="img/plough.jpg" />
                            </a>
                            <h6>The Plough<br/></h6>
                            <p>
                                A great option
                            </p>
                            <p>
                                <a href="https://theploughscalby.co.uk/">https://theploughscalby.co.uk/</a>
                            </p>
                        </div>
                        <div className="feature col-sm-12">
                            <a href="https://escape2thesands.com/holiday-apartments">
                                <img alt="Hotel" src="img/Sands-2.jpg" />
                            </a>
                            <h6>The Sands<br/></h6>
                            <p>
                                LBeach side holiday style apartments. About 10 minute drive to venue.
                            </p>
                            <p>
                                <a href="https://escape2thesands.com/holiday-apartments">The Sands </a>
                            </p>
                        </div>


                    </div>
                </div>
            </section>


        )
    }
}
