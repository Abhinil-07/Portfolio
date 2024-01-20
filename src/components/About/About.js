import React from 'react'
import { AboutCard } from './AboutCard'
import "./About.css"

export const About = () => {
    return (
        <>
            <div className='flex flex-col space-y-7 justify-center items-center mt-9 flex-container'>
                <AboutCard />
                <div className="line"></div>
                <AboutCard />
                <div className="line"></div>
                <AboutCard />
                <div className="line"></div>
                <AboutCard />
            </div>
        </>
    )
}
