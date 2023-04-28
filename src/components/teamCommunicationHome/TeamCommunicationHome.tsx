import React from 'react';

const TeamCommunicationHome = () => {
    return (
        <div className="tennis-bg">
            <div className="container">
                <h2>MAXIMIZE YOUR TEAM'S SUCCESS</h2>
                <div className="team-grid-container">
                    <div className='team-header-container'>
                        <h2>TEAM COMMUNICATION</h2>
                        <h3>
                            Effortless updates, seamless scheduling, and robust
                            management with coaches, athletes and parents - all
                            in one place
                        </h3>
                    </div>
                    <div className="video-container">
                        <iframe
                            className='video'
                            src="https://www.youtube.com/embed/NusEcU2VnO4"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamCommunicationHome;
