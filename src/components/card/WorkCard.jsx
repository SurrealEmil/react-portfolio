import React from 'react'
import Data from '../../data/work.json'

const EducationCard = () => {
  return (
    <>
        {
            Data.map((d) => {
                return(
                    <article className='experience-card education-card' key={d.id}>
                        <h3 className='exp-head'>{d.work}</h3>
                        <h5 className='program-name'>{d.role}</h5>
                        <h6 className='program-dur'>{d.duration}</h6>
                        <p className='exp-desc'>{d.description}</p>
                    </article>
                )
            })
        }
    </>
  )
}

export default EducationCard