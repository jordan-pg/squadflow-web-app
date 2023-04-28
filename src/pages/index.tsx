import React from 'react';
import Button from '@/components/button/Button';
import NavBar from '@/components/nav/NavBar';
import TeamCommunicationHome from '@/components/teamCommunicationHome/TeamCommunicationHome';

const Home = () => {
    return (
        <>
            <div className="lacrosse-bg">
                <NavBar />
                <div className="container">
                    <h1>MAKE A NAME FOR YOURSELF</h1>
                    <h3>
                        Join the movement. Empowering young athletes to achieve
                        greatness.
                    </h3>
                    <div className="grid-container">
                        <Button text="TEAM COMMUNICATION" />
                        <Button text="ATHLETE RESUME" />
                        <Button text="ATHLETIC PERFORMANCE SCORE" />
                    </div>
                </div>
            </div>
            <div className="bar" />
            <TeamCommunicationHome />
        </>
    );
};

export default Home;
