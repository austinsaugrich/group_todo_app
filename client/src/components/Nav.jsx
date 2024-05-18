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
        <div>
            {isHomePage && <h1>To Do List</h1>}
            {isHomePage && <p>Let's get this done!</p>}
            {isAddTaskPage && <h1>To Do List</h1>}
            {isAddTaskPage && <p>Add a new task</p>}
            {isDetailsPage && <h1>To Do List</h1>}
            <nav className="upper-right">
                {isHomePage && <Link to="/create">add a new task</Link>}
                {isAddTaskPage && <Link to="/">back to home</Link>}
                {isDetailsPage && <Link to="/">back to home</Link>}
                {isUpdatePage && <Link to={`/dets/${taskId}`}>task details</Link>}
            </nav>
        </div>
    );
};

export default Nav;