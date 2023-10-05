import React from "react";
import { AuthProvider } from "./auth/AuthContext";
import LoginForm from "./components/LoginForm";
import { BrowserRouter,Route, Routes } from "react-router-dom";
import './index.css';
import UserList from "./components/UserList";
import CreateUser from './components/CreateUser'
import Courses from "./components/Courses";
import CreateCourse from "./components/CreateCourse";

function App() {
  return (
    <>
    <BrowserRouter>
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route exact path='/' element={<LoginForm />} />
          <Route path='/userlist' element={<UserList />} />
          <Route path='/create-user' element={<CreateUser />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/create-courses' element={<CreateCourse />} />
        </Routes>
      </AuthProvider>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
