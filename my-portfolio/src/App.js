
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import MainLayout from './components/Layout';
import HomePage from './components/HomePage';

function App() {
  return (
    <>
      <Routes> {/*Defining route */}
        <Route path ="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
