import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'; // Include styles

const LandingPage = () => (
  <div className="landing-page">
    <div className="landing-page__background">
      <h1>Paradise Nursery</h1>
      <p>Welcome to Paradise Nursery! Explore our variety of beautiful houseplants.</p>
      <Link to="/products" className="get-started-button">
        Get Started
      </Link>
    </div>
  </div>
);

export default LandingPage;
