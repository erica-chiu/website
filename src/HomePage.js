import React from 'react';

const HomePage = () => {
    return (
        <div className="home-page">
            <img src="EricaDrawing.jpg" alt="EricaDrawing" className="home-profile"/>
            <div className="home-header">
                Welcome to Erica Chiu's website!
            </div>
            <p>
                I am an undergraduate at MIT studying computer science and mathematics and 
                interested in machine learning. At MIT, I am involved with a 
                few <a href="#/dance">dance</a> organizations, as well 
                as <a href="https://techx.io">TechX</a>, an organization 
                that hosts technology events.
            </p>

            <p>
                This summer, I am excited to be interning at <a href="https://nuro.ai">Nuro</a> on 
                the Machine Learning team. Last summer, I interned 
                at <a href="https://www.salesforce.com/products/einstein/overview/">Salesforce 
                Einstein</a> on the Modeling Team, working on AutoML features. 
            </p>
        </div>
        
    );
};

export default HomePage;