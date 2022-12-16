import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Sobre from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='sobre' element={<Sobre />} />
        <Route path='projetos' element={<Projects />} />
        <Route path='contato' element={<Contact />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
