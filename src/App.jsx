import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from './pages/Layout.jsx'
import HomePage from './pages/HomePage.jsx'
import Contact from './pages/Contact.jsx'

function App() {
  return (
    <>
      <BrowserRouter basename='/React-Portfolio'>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path='/contact' element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
