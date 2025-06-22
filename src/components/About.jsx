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
                                Hi, I'm Emil, a curious and driven fullstack developer with a background in .NET and a lifelong love for games and technology.
                            </p>
                            <p>
                                My journey into programming began with a desire to create games to share with friends. That hobby soon grew into a full-fledged passion for development, eventually leading me to study fullstack .NET development at Chas Academy in Stockholm.
                            </p>
                            <p>
                                There, I built a strong foundation in both front-end and back-end technologies through hands-on projects and real-world collaboration.
                            </p>
                            <p>
                                While I'm focused on becoming a professional fullstack developer, I still enjoy learning about game development whenever I can. I'm excited to keep growing and contribute to projects that blend creativity, technology, and purpose.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;