import logo from './logo.svg';
import './App.css';
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from './Components/NavBar/NavBar';
import HomePage from './Components/HomePage/HomePage';
import BlogHome from './Components/BlogPage/BlogHome';
import Footer from './Components/Footer/Footer';
import AboutHome from './Components/AboutusPage/AboutHome';
import ContactHome from './Components/ContactPage/ContactHome';
import BlogPages from './Components/BlogPage/BlogPages';
import BlogPostPage from './Components/BlogPage/BlogPostPage';
import AuthorPage from './Components/BlogPage/AuthorPage';
import Contact from './Components/ContactPage/ContactPage';


function App() {
  return (
    <>
    <div>
    <Router>
      <NavBar />
      <Routes>
      <Route path='/' index element={<HomePage />}/>
      <Route path='/blog' element={<BlogPages/>}/>
      <Route  path='/blog/:slug' element={<BlogPostPage/>} />
      <Route path='/blog/blogauthor/:slug' element={<AuthorPage />} />
      <Route path='/blog/:slug/blogauthor/:slug' element={<AuthorPage />} />
      <Route path='/Aboutus' element={<AboutHome/>}/>
      <Route path='/Contactus' element={<Contact />}/>
      </Routes>
      <Footer />
    </Router>
    </div>
    </>
  );
}

export default App;
