import React from 'react';

const CurrentDateTime = () => {
    const currentDate = new Date();
    const formattedDateTime = currentDate.toLocaleString();

    return (
        <div>
            <p>Current Date and Time: {formattedDateTime}</p>
        </div>
    );
};

export default CurrentDateTime;