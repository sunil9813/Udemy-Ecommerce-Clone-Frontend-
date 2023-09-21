import './App.css';
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import {Home, SingleCourse, Cart, Courses} from "./pages";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import UserProfile from './components/UserProfile';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/courses/:id" element = {<SingleCourse />} />
        <Route path = "/category/:category" element = {<Courses />} />
        <Route path="/user-profile" element = {<UserProfile />}/>
        <Route path = "/cart" element = {<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;