import React from 'react'
import '../../../Styles/Buttons/JumpBtn.scss'

export default function JumpBtn () {

    const Content = [ "On","Go"]

    return (
        <div id="jumpbtn_container">
            {Content.map((details,i) => {
                return <p>{details}</p>
            })}
        </div>
    )
}