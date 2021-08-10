import React from 'react';

const Heading = (props) => {
    return (
        <div className="parentHead">
            <h2 className="headingText">{props.text}</h2>
        </div>
    );
}

export default Heading;
