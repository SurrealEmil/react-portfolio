import React from 'react'

import Introduction from '../components/Introduction'
import About from '../components/About.jsx'
import Resume from '../components/Resume.jsx'
import Projects from '../components/Projects.jsx'
import Contactredirect from '../components/Contactredirect.jsx'

const HomePage = () => {
  return (
    <>
        <Introduction />
        <About />
        <Resume />
        <Projects />
        <Contactredirect />
    </>
  )
}

export default HomePage