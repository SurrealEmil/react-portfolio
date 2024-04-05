import React from 'react'
import Picture from '../assets/img/about-picture.jpg'

const About = () => {
    return (
        <>
            <section id='about' className='about-info'>
                <h2>About Me</h2>
                <div className='about-me'>
                    <div className="about-box">
                        <div className="about-pic">
                            <img src={Picture} alt="Picture of Emil Ejderklev" />
                        </div>
                    </div>
                    <div className="about-box">
                        <div className="about-text">
                            <p>
                                My name is Emil, and I fell into programming from my love of video games. It started as a hobby to just make games to share between friends, but then as my hobby grew, I ended up wanting to learn more about programming and what other opportunities there were.
                            </p>
                            <p>
                                This, in turn, led me to Chas Academy, and I could not be happier. Here, I've not only expanded my understanding of programming but also my passion for it.
                            </p>
                            <p>
                                I'm thrilled to be on this journey of continuous learning and growth. While my main focus is on becoming a full-stack .NET developer. I still try to find the time to learn more about game development.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;