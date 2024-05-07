import React from 'react';

function Todo(props) {
    return (
        <div>
            <div>
                <img src={props.img} />
                <h3>{props.title}</h3>
                <p>{props.text}t</p>
            </div>            
        </div>
        
    )
}

export default Todo;