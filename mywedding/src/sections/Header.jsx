import React, { Component, useEffect, useState } from "react";


export function Header()  {

    const calculateTimeLeft = () => {
        let year = new Date().getFullYear();
        const difference = +new Date(`${year}-09-10`) - +new Date();
        let timeLeft = {};
    
        if (difference > 0) {
          timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),

          };
        }
    
        return timeLeft;
      };
    
      const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
      const [year] = useState(new Date().getFullYear());
    
      useEffect(() => {
        setTimeout(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
      });
    
      const timerComponents = [];
    
      Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
          return;
        }
    
        timerComponents.push(
          <span>
            {timeLeft[interval]} {interval}{" "}
          </span>
        );
      });
        return (
            <>
            <section className="header header-1 fullscreen overlay">
                <div className="background-image-holder">
                    <img alt="Background image" className="background-image" src="img/hero1.jpg" />
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 text-center">
                            <h1>KATE &amp; RHYS<br/></h1>
                            <h6><del>June 20th, 2020 - Burniston, North Yorkshire</del></h6>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-sm-12 text-center">
                            <h6><del>June 5th, 2021 - Burniston, North Yorkshire</del></h6>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 text-center">
                            <h6 className="new-date">Sept 10th, 2022 <br/>Burniston, North Yorkshire</h6>
                        </div>
                    </div>                   
                </div>
            </section>

            <div className='small-section'>
                <div>
                    <h4>Wildwood and Eden,Coastal Road, Burniston, Scarborough, YO13 0HR</h4>
                    <br/><br/>
                    <h4>The countdown:</h4>
                    <h4 className="timer"> {timerComponents.length ? timerComponents : <span>Today's the day!</span>}</h4>
    
    
                </div> 
            </div>
            </>

        )
    }

    export default Header