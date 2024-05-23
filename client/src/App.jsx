import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import HomePage from './views/HomePage';
import CreateTask from './views/AddTask';
import Update from './views/Update';
import TaskDetails from './views/TaskDetails';
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <div class=" py-8 container px-8 mx-auto rounded-xl shadow-2xl space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 pb-12 flex justify-around background-color: rgb(253 224 71)">
                <div className="center-content">
                    <Nav />
                    <Routes>
                        <Route path={"/"} element={<HomePage />} />
                        <Route path={"/create"} element={<CreateTask />} />
                        <Route path={"/update/:id"} element={<Update />} />
                        <Route path={"/dets/:id"} element={<TaskDetails />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;