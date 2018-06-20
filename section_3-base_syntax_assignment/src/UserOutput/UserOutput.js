import React from 'react';

const useroutput = (props) => {
    return (
        <div>
            <p>Username: {props.username}</p>
            <p>Hobbies: {props.hobbies}</p>
        </div>
    )
}

export default useroutput;