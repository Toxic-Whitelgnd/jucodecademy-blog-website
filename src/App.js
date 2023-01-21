import logo from './logo.svg';
import './App.css';
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from './Components/NavBar/NavBar';
import HomePage from './Components/HomePage/HomePage';
import BlogHome from './Components/BlogPage/BlogHome';
import Footer from './Components/Footer/Footer';
import AboutHome from './Components/AboutusPage/AboutHome';
import ContactHome from './Components/ContactPage/ContactHome';


function App() {
  return (
    <>
    <div>
    <Router>
      <NavBar />
      <Routes>
      <Route path='/' index element={<HomePage />}/>
      <Route path='/blog' element={<BlogHome/>}/>
      <Route path='/Aboutus' element={<AboutHome/>}/>
      <Route path='/Contactus' element={<ContactHome/>}/>
      </Routes>
      <Footer />
    </Router>
    </div>
    </>
  );
}

export default App;
