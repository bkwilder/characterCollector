import React from 'react'


export default function Note(props) {
    console.log(props);
    return(
        <div>
            <p>{props.note.note}</p>
        </div>
    )
}