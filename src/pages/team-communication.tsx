import React from 'react';
import Button from '@/components/button/Button';
import NavBar from '@/components/nav/NavBar';

const TeamCommunication = () => {
    return (
        <div className="lacrosse-bg">
            <NavBar />
            <div className="container">
                <h1>MAKE A NAME FOR YOURSELF</h1>
                <h3>
                    Join the movement. Empowering young athletes to achieve
                    greatness.
                </h3>
                <div className="grid-container">
                    <div className="grid-item">
                        <Button text="TEAM COMMUNICATION" />
                    </div>
                    <div className="grid-item">
                        <Button text="ATHLETE RESUME" />
                    </div>
                    <div className="grid-item">
                        <Button text="ATHLETIC PERFORMANCE SCORE" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamCommunication;
