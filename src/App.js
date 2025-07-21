import './App.css';
import { Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Body from './components/Body';
import Contact from './components/Contact';
import ProjectDescription from './page/ProjectDescription'; // ✅ import this

function App() {
  return (
    <Routes>
      {/* Main Portfolio Page */}
      <Route
        path="/"
        element={
          <>
            <Hero />
            <TechStack />
            <Body />
            <Contact />
          </>
        }
      />

      {/* Project Description Page */}
      <Route path="/project/:id" element={<ProjectDescription />} />
    </Routes>
  );
}

export default App;
