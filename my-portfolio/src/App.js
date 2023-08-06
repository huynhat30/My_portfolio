
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react'
import './App.scss';
import MainLayout from './components/Layout';
import HomePage from './components/HomePage';
import About from './components/About/about';
import Project from './components/Projects/project';
import Contact from './components/Contact/contact';
import Hobbies from './components/Hobbies/hobbies';
import { Dna } from 'react-loader-spinner'

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(()=>{
    setLoading(true)
    setTimeout(() => {
        setLoading(false)
    },1000)

}, [])
  return (
    <>
      {
        loading ? 
        <div className='loader'>
          <Dna visible={true} height="300" width="300" ariaLabel="dna-loading" wrapperClass="dna-wrapper" />
        </div>
        :
        <Routes> {/*Defining route */}
        <Route path ="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Project />} />
          <Route path="contact" element={<Contact />} />
          <Route path="hobby" element={<Hobbies />} />
        </Route>
      </Routes>
      }
      
    </>
  );
}

export default App;
