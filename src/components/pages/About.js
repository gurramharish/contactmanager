import React from 'react';

const About = (props) => {
    return (
        <div>
            <h1 className="display-4">About Contact Manager Version {props.match.params.id}</h1>
            <p className="lead">Simple app to manage contacts</p>
            <p className="text-secondary">Version 1.0.0</p>
        </div>
        )
}

export default About;