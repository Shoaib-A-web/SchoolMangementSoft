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
import AddStudent from "./pages/AddStudent"
import Student from "./pages/Student"
import Dashboard from "./pages/Dashboard";
import MainLayOut from "./layouts/Mainlayout";
import Report from "./pages/Report";
import TestThing from "./pages/TestThing";
import General from "./pages/Settings/General";
import Security from "./pages/Settings/Security";
import Notifications from "./pages/Settings/Notifications";
import Category from "./pages/Master/Category";
// import { useState } from 'react'                downloaded content while it is installed
import Login from './components/login'
import Home from './components/Home'
import TopBar from "./components/TopBar";

// text page
import OuterTest from "./components/OuterTest"
// import reactLogo from './assets/react.svg'  downloaded content while it is installed
// import viteLogo from '/vite.svg'            downloaded content while it is installed
// import './App.css'                          downloaded content while it is installed

function App() {
  const [sideOpen, setSideOpen] = useState(false)              // downloaded content while it is installed
  const setsideToggle= () => setSideOpen(!sideOpen)
  // return (                                                downloaded content while it is installed
  //   <>
  //     <div>
  //       <a href="https://vite.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.jsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // )


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
                      }>
                      <Route index element={ <Dashboard />} />
                      <Route path="student" element={<Student />} />
                      <Route path="addstudent" element={<AddStudent />} />
                      <Route path="report" element={<Report />} />
                      <Route path="testting" element={<TestThing />} />
                    
                      {/* MASTER ROUTES */}
                      <Route path="master/section" element={<ClassSection />} />
                      <Route path="master/class" element={<AddClass />} />
                      <Route path="master/addSchool" element={<AddSchool />} />
                      <Route path="master/blood" element={<Blood />} />
                      <Route path="master/Category" element={<Category />} />
                      <Route path="master/state" element={<State />} />

                      {/* SETTINGS ROUTES */}
                      <Route path="settings/general" element={<General />} />
                      <Route path="settings/security" element={<Security />} />
                      <Route path="settings/notifications" element={<Notifications />} />
                    </Route>
                  <Route path="/login" element={<Login />} />
                  <Route path="/outtest" element={<OuterTest/>} />
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