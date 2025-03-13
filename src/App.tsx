import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import VacancyList from "./components/VacancyList";
import BlogList from "./components/BlogList";
import About from "./components/About";

const App: React.FC = () => {

  document.title = "Vacancies"
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<VacancyList />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
