
import { Route, Routes } from 'react-router-dom';

import './App.scss';
import MainLayout from './components/Layout';
import HomePage from './components/HomePage';
import About from './components/About/about';
import Project from './components/Projects/project';
import Contact from './components/Contact/contact';
import Hobbies from './components/Hobbies/hobbies';
import Dashboard from './components/Dashboard/dashboard';


function App() {

  return (
    <>

        <Routes> {/*Defining route */}
        <Route path ="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Project />} />
          <Route path="contact" element={<Contact />} />
          <Route path="hobby" element={<Hobbies />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
      
    </>
  );
}

export default App;
