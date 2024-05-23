import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Nav.css'; 

const Nav = ({ taskId }) => {
    const location = useLocation();

    const isHomePage = location.pathname === '/';
    const isAddTaskPage = location.pathname === '/create';
    const isDetailsPage = location.pathname.includes('/dets/');
    const isUpdatePage = location.pathname.includes('/update/');

    return (
        <div class=" space-y-10">
            {isHomePage && <h1 class="underline font-bold text-6xl flex justify-center">To Do List</h1>}
            {isHomePage && <p class="flex justify-center italic text-2xl  text-blue-500 font-bold">Let's get this done!</p>}
            {isAddTaskPage && <h1 class="underline font-bold text-6xl flex justify-center">To Do List</h1>}
            {isAddTaskPage && <p class="flex justify-center text-3xl  text-blue-500 font-bold">Add a new task</p>}
            {isDetailsPage && <h1 class="underline font-bold text-6xl flex justify-center">To Do List</h1>}
            <nav className="upper-right">
                {isHomePage && <Link class="px-4 py-2 text-white bg-blue-500  hover:bg-blue-600 font-semibold rounded-lg shadow-md" to="/create">+ Add New Task</Link>}
                {isAddTaskPage && <Link class="px-4 py-2 text-white bg-blue-500  hover:bg-blue-600 font-semibold rounded-lg shadow-md" to="/">Home</Link>}
                {isDetailsPage && <Link class="px-4 py-2 text-white bg-blue-500  hover:bg-blue-600 font-semibold rounded-lg shadow-md" to="/">Home</Link>}
                {isUpdatePage && <Link class="px-4 py-2 text-white bg-blue-500  hover:bg-blue-600 font-semibold rounded-lg shadow-md" to={`/dets/${taskId}`}>Task Details</Link>}
            </nav>
        </div>
    );
};

export default Nav;