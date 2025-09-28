import React from 'react';

const HomePage = () => {
    return (
        <div className="home-page">
            <img src="EricaDrawing.jpg" alt="EricaDrawing" className="home-profile"/>
            <div className="home-header">
                Welcome to Erica Chiu's website!
            </div>
            <p>
                I am a graduate of MIT studying computer science and mathematics and 
                interested in machine learning. At MIT, I was involved with a 
                few <a href="#/dance">dance</a> organizations, as well 
                as <a href="https://techx.io">TechX</a>, an organization 
                that hosts technology events.
            </p>
        </div>
        
    );
};

export default HomePage;
