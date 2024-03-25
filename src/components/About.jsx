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
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi provident quae quibusdam ipsum quo! Dolorem odio atque ipsa eaque a quasi laudantium tempora, similique suscipit sed autem aliquam facere debitis!
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;