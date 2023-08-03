
import { Routes } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <>
      <Routes> {/*Defining route */}
        <Route path ="/" element={<Layout />} />
      </Routes>
    </>
  );
}

export default App;
