import React, { Component } from 'react';


export class Story extends Component {
    render() {
        return (

            <section className="story story-2 kateandrhys">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 text-center">
                            <h2>Our wedding!</h2>
                        </div>
                        <div className="text-center col-sm-12">
                            <img alt="Photo" src="img/kate1.jpg" />
                            <img alt="Photo" src="img/kate2.png" />
                            <img alt="Photo" src="img/kate4.jpg" />
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 text-center">
                            <h2> Aw shucks</h2>
                            <p>
                                Thanks to some amazing friends we met by chance in a pub on a Friday night. Both of us were not supposed to be there but changed our minds last minute and as I got back from the bar Rhys had sat in my seat. We started talking and never want to stop. We are so excited to be getting married and to spend the day with our favourite people.
                                <br/> <br/>
                                We will be posting some recommendations below for accomodation and there will be further information to follow with our wedding invite. We are here if you have any questions in the meantime and bring on June 2020!
                            </p>
                        </div>
                    </div>
                </div>
            </section>


        )
    }
}
