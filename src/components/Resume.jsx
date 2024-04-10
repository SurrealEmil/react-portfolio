import React from 'react'

import WorkCard from './card/WorkCard.jsx'
import CoursesCard from './card/CoursesCard.jsx'
import EducationCard from './card/EducationCard.jsx'

import ResumePDF from '../data/ResumeEng.pdf'

const Resume = () => {
  return (
    <>
        <div id='resume' className='resume-box'>
            <ul>
                <li><h2 className='resume-header'>RESUMÉ</h2></li>
                <li><a href={ResumePDF} download="Emil Ejderklev Resumé" target="_blank" rel="noreferrer" className='full-resume' ><h2>Download resumé</h2></a></li>
            </ul>
            <div className='resume-inner-box'>
                <section className='resume experience'>
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