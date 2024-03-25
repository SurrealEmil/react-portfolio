import React from 'react'
import Picture from '../assets/img/home-pic.jpg'
import { FaGithub, FaLinkedin} from "react-icons/fa6";

const Introduction = () => {
    return (
        <>
            <section id='intro' className='intro-info'>
                <div className='intro-me'>
                    <div className="intro-box">
                        <h2>Hi, I'm Emil!</h2>
                        <div className="intro-text">
                            <p>
                                I'm a Full Stack
                            </p>
                        </div>
                        <ul className='intro-button'>
                            <li>
                                <a href="https://github.com/SurrealEmil" target='_blank'><FaGithub /></a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/emil-ejderklev-9a7280279/" target='_blank'><FaLinkedin /></a>
                            </li>
                        </ul>
                    </div>
                    <div className="intro-box">
                        <div className="intro-pic">
                            <img src={Picture} alt="Picture of Emil Ejderklev" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Introduction;