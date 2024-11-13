import React from 'react'

export default function TItle({title,subtitle}) {
    return (
        <div>
            <div id='heading'>
                <h3>{subtitle}</h3>
                <h1>{title}</h1>
            </div>
        </div>
    )
}
