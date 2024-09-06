// pages/team.js

import React from "react";
import "./team.css";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';


const Teams = () => {
    const images = [
        "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
        "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    ];

    return (
        <div>
            <Slide>
                <div className="each-slide-effect">
                    <div style={{ backgroundImage: `url(${images[0]})`, height: "100%", backgroundSize: "cover" }}>
                        <span>Slide 1</span>
                    </div>
                </div>
                <div className="each-slide-effect">
                    <div style={{ backgroundImage: `url(${images[1]})`, height: "100%", backgroundSize: "cover" }}>
                        <span>Slide 2</span>
                    </div>
                </div>
                <div className="each-slide-effect">
                    <div style={{ backgroundImage: `url(${images[2]})`, height: "100%", backgroundSize: "cover" }}>
                        <span>Slide 3</span>
                    </div>
                </div>
                <div className="each-slide-effect">
                    <div style={{ backgroundImage: `url(${images[3]})`, height: "100%", backgroundSize: "cover" }}>
                        <span>Slide 4</span>
                    </div>
                </div>
            </Slide>

            <div className="col-lg-4">
                <div className="mb-2 pb-2 me-lg-4">
                    <h6 className="sub-title">We have 150,000+ live jobs</h6>
                    <h1 className="display-5 fw-semibold mb-3">
                        Find your dream jobs with <span className="text-primary fw-bold"><br></br>Top Paid Job</span>
                        
                    </h1>
                    <div style={{ 
      border: '1px solid #ccc', 
      padding: '10px', 
      borderRadius: '8px', 
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
      backgroundColor: '#f9f9f9',
      maxWidth: '5000px',
      margin: '20px auto' 
    }}>
      <p style={{ fontSize: '18px' }}>
        The Top Paid Jobs search feature helps job seekers find the highest-paying job opportunities across various sectors. 
        By filtering based on salary, location, industry, and experience, users can quickly access real-time job listings that match their career goals. 
        With its user-friendly interface and regularly updated database, this feature provides a personalized job search experience, making it easier to discover lucrative roles.
      </p>
    </div>

                </div>
                
            </div>
        </div>
    );
};

export default Teams;
