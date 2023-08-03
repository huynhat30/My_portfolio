
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import MainLayout from './components/Layout';

function App() {
  return (
    <>
      <Routes> {/*Defining route */}
        <Route path ="/" element={<MainLayout />} />
      </Routes>
    </>
  );
}

export default App;
