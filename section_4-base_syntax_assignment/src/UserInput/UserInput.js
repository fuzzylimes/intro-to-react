import React from 'react';

const userinput = (props) => {
    return (
        <div>
            <input onChange={props.changed} type="text" value={props.username}/>
        </div>
    )
}

export default userinput;