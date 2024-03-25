import React from 'react'
import { FaGithub, FaLinkedin} from "react-icons/fa6";

const Footer = () => {
  return (
    <section id='footer' className='footer'>
        <div className='copyright'>
            <p>
                Copyright &#169; Emil Ejderklev
            </p>
        </div>
        <div>
            <ul>
                <li>
                    <a href="https://github.com/SurrealEmil" target='_blank'><FaGithub /></a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/emil-ejderklev-9a7280279/" target='_blank'><FaLinkedin /></a>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default Footer