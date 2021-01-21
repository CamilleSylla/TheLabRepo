import React from 'react'
import '../../Styles/OpenYourEyes.scss'

export default function OpenYourEyes () {
    const Content = {
        part1: "Open",
        part2: "Your",
        part3: "Eyes"
    }

    return (
        <div id="openyoureyes_container">
            <p>{Content.part1}</p>
            <p>{Content.part2}</p>
            <p>{Content.part3}</p>
        </div>
    )
}