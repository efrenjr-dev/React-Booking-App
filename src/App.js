import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import {Container} from 'react-bootstrap';
import './App.css';

import AddCourse from './pages/AddCourse';
import Courses from './pages/Courses';
import Home from './pages/Home';
import Login from './pages/Login';
import Logout from './pages/Logout';
import NotFound from './pages/NotFound';
import Register from './pages/Register';
import ViewCourse from './pages/ViewCourse';

import AppNavBar from './components/AppNavBar';

function App() {
  return (
    <>
      <Router>
        <AppNavBar/>
        <Container>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/addCourse" element={<AddCourse/>}/>
            <Route path="/courses" element={<Courses/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/logout" element={<Logout/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/courses/:courseId" element={<ViewCourse/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </Container>
      </Router>
    </>
  )
}

export default App;
