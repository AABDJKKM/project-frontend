import React from 'react';
import Navbar from "../components/Navbar";
import "../components/OpportunitiesStyles.css";
import {Link} from "react-router-dom";

const Opportunities = () => {
  return (
    <div>
      <Navbar/>
      <div className='opp-hero'><p>Opportunities</p></div>
      <h5>Featured Job Openings</h5>
      <div className='jobs-section'>
        <div className='full-time-box'>Full time jobs <Link to="/FulltimeJobs"><img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"  alt="People working"/></Link></div>
        <div className='part-time-box'><img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Man working"/></div>
        <div className='apprentice-box'><img src="https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="Man working" /></div>
        <div className='intern-box'><img src="https://images.unsplash.com/photo-1508780709619-79562169bc64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="hand writing"/></div>
      </div>
    </div>
  )
}

export default Opportunities
