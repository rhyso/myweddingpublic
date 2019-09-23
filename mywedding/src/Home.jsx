import React, { Component } from 'react';
import './App.css';
import { Nav } from './sections/Nav.jsx';
import { Header } from './sections/Header.jsx';
import { Story } from './sections/Story.jsx';
import { Accom } from './sections/Accom.jsx';
import { Footer } from './sections/Footer.jsx';


class App extends Component {
    render() {
        return (
            <div className="App">
                <Nav />
                <div className="main-container">

                    <Header />

                    <a id="kateandrhys" className="in-page-link"></a>

                    <Story />

                    <a id="accomm" className="in-page-link"/>

                    <section className="story storyfiller">
                    </section>

                    <Accom />
                    <a id="rsvp" className="in-page-link"/>

                   <Footer />

                </div>

            </div>







        );
    }
}

export default App;
