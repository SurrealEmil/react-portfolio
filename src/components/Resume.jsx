import React from 'react'

import WorkCard from './card/WorkCard.jsx'
import CoursesCard from './card/CoursesCard.jsx'
import EducationCard from './card/EducationCard.jsx'

const Resume = () => {
  return (
    <>
        <div className='resume-box'>
            <ul>
                <li><h2 className='resume-header'>RESUMÉ</h2></li>
                <li><a href="#" download="Emil Ejderklev Resumé" target="_blank" rel="noreferrer" className='full-resume' ><h6>Download resumé</h6></a></li>
            </ul>
            <div className='resume-inner-box'>
                <section id='resume' className='resume experience'>
                    <h3 className='resume-sub-title'>EXPERIENCE</h3>
                    <section className='work-experience'>
                        <WorkCard />
                    </section>
                    <h3 className='resume-sub-title'>COURSES</h3>
                    <section className='work-experience' >
                        <CoursesCard />
                    </section>
                </section>

                <section className='resume education'>
                    <h3 className='resume-sub-title'>EDUCATION</h3>
                    <section className='work-experience education-cards'>
                        <EducationCard />
                    </section>
                </section>
            </div>
            
        </div>
    </>
  )
}

export default Resume