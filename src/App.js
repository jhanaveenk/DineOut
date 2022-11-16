import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter  as Router } from "react-router-dom";
import Search from './components/Search';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Search/>
      </Router>
      </>
  );
}

export default App;
