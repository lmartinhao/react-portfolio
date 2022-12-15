import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Sobre from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='sobre' element={<Sobre />} />
        <Route path='projetos' element={<Contact />} />
        <Route path='contato' element={<Contact />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
