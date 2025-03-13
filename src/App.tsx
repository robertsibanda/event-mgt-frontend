import "../src/App.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import VacancyList from './components/VacancyList';
import BlogList from './components/BlogList';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" Component={VacancyList} />
        <Route path="/blog" Component={BlogList} />
        <Route path="/about" Component={BlogList} />
      </Routes>
       
    </Router>
  );
};

export default App;
