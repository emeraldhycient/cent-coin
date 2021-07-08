import React from 'react'

function HeroSection(props) {
    return (
        <main id="heroContainer">
            <div className="blur">
                {props.children}
            </div>
        </main>
    )
}

export default HeroSection
