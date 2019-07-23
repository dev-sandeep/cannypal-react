import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import StandardSection from '../components/query-page/Section.jsx';

class Query extends Component {
    render() {
        return (
            <div id="query-page">
                <Navbar />
                <StandardSection />
            </div>
        );
    }
}

export default Query