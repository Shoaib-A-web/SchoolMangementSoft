import { BrowserRouter, Routes, Route } from "react-router-dom";
import React,{useState} from "react";
//toster impoet 
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

// import auth requirments
import RequireAuth from './components/RequireAuth';

import Sidebar from "./components/Sidebar";
// context import section 
import { SchoolProvider } from "./context/SchoolContext";
//  sub-page import section
import ClassSection from "./pages/Master/ClassSection";
import AddClass from "./pages/Master/Class";
import AddSchool from "./pages/Master/AddSchool"
import Blood from "./pages/Master/blood"
import State from "./pages/Master/state"
import Dashboard from "./pages/Dashboard";
import MainLayOut from "./layouts/Mainlayout";
import Main2LayOut from "./layouts/main2LayOut";
import Report from "./pages/Report";
import TestThing from "./pages/TestThing";
import General from "./pages/Settings/General";
import Security from "./pages/Settings/Security";
import Notifications from "./pages/Settings/Notifications";
import Category from "./pages/Master/Category";
import UserProfile from "./pages/UserProfile";
import SchoolData from "./pages/Master/SchoolData";

//components of student is imoported
import UserList from "./components/UserList";
import AddStudent from "./pages/AddStudent"
import Student from "./pages/Student"
import SchoolDetails from "./pages/AddStudentForm/SchoolDetails";
import AddEmployee from "./components/addEmployee";

// import { useState } from 'react'                downloaded content while it is installed
import Login from './components/login'
import Register from "./components/Register";
import Home from './components/Home'
import TopBar from "./components/TopBar";

// text page
import OuterTest from "./components/OuterTest"
import StudentDetails from "./components/students/StudentDetails";
import UserDetails from "./components/UserDetails";
import SchoolList from "./pages/SchoolList";
import { ImOpt } from "react-icons/im";
// import reactLogo from './assets/react.svg'  downloaded content while it is installed
// import viteLogo from '/vite.svg'            downloaded content while it is installed
// import './App.css'                          downloaded content while it is installed

function App() {
  const [sideOpen, setSideOpen] = useState(false)              // downloaded content while it is installed
  const setsideToggle= () => setSideOpen(!sideOpen)
 

  return(
    <>
    <SchoolProvider>
      {/* <Login /> */}
      {/* <Home /> */}
      <BrowserRouter>
        {/* Layout */}
        {/* <div className="flex h-screen"> */}

          {/* LEFT NAVBAR */}
          {/* <Sidebar isOpen={sideOpen}/> */}
          
          {/* RIGHT CONTENT */}
            {/* top bar */}
            {/* <div className="flex flex-col w-full"> */}
              {/* <TopBar isOpen={sideOpen} sideToggle={setsideToggle} /> */}

              {/* <main className="w-fullh h-full overflow-x-auto bg-gray-200 p-2 md:p-4 lg:p-6 "> */}
                <Routes>
                    <Route path="/" element={ 
                      <RequireAuth>
                        <MainLayOut />
                      </RequireAuth>
                      }
                    >
                      <Route index element={ <Dashboard />} />
                      <Route path="report" element={<Report />} />
                      <Route path="testting" element={<TestThing />} />
                      <Route path="addEmployee" element={<AddEmployee />} />


                      {/* STUDENTS ROUTES */}
                      <Route path="student/studentList" element={<Student />} />
                      <Route path="student/addstudent" element={<AddStudent />} />
                      <Route path="studentdetails/:studentId" element={<StudentDetails />} />

                    
                      {/* MASTER ROUTES */}
                      <Route path="master/section" element={<ClassSection />} />
                      <Route path="master/class" element={<AddClass />} />
                      <Route path="master/addSchool" element={<AddSchool />} />
                      <Route path="master/schoolList" element={<SchoolList />} />
                      <Route path="master/blood" element={<Blood />} />
                      <Route path="master/Category" element={<Category />} />
                      <Route path="master/state" element={<State />} />
                      <Route path="master/schoolDetails/:schoolId" element={<SchoolData />} />

                      {/* SETTINGS ROUTES */}
                      <Route path="settings/general" element={<General />} />
                      <Route path="settings/security" element={<Security />} />
                      <Route path="settings/notifications" element={<Notifications />} />

                      {/* other pages route */}
                      <Route path="userProfile" element={<UserProfile/>} />
                      <Route path="/user/userList" element={<UserList/>} />
                      <Route path="user/userDetails/:user_id" element={<UserDetails/>} />
                      
                    </Route>
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/outtest" element={<OuterTest/>} />
                  {/* <Route path="/test" element={<h1>TEST PAGE</h1>} /> */}
                </Routes>
              {/* </main> */}
        {/* </div> */}
        {/* </div> */}
      </BrowserRouter>
      < ToastContainer/>
    </SchoolProvider> 
    </>
  )
}

export default App