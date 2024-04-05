import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';



const Contactredirect = () => {
  return (
    <>
    <div className='contact-section'>
        <section id='contact' className='contact-link'>
            <h2 className='contact-offer con-pad'>Send Me a Message</h2>
            <Link to="/contact" className='con-pad'>
                <Button variant="primary" className='contact-forms'>
                    Contact Me
                </Button>
            </Link>
        </section>
    </div>
    
    </>
  )
}

export default Contactredirect