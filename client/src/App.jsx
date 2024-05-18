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
            <div className="container">
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