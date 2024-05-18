import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../App.css';

const HomePage = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/tasks")
            .then(response => {
                console.log(response.data)
                setTasks(response.data)
            })
            .catch();
    }, []);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { month: 'long', day: 'numeric' };
        const formattedDate = date.toLocaleDateString('en-US', options);
        return `${formattedDate}th`;
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Tasks</th>
                        <th>Due Date</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task) => (
                        <tr key={task._id}>
                            <td>{task.name}</td>
                            <td>{formatDate(task.date)}</td>
                            {/* <td>{task.minutes}</td> */}
                            <td>
                                <Link to={`/dets/${task._id}`}>details</Link>
                                <span> | </span>
                                <Link to={`/update/${task._id}`}>edit</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default HomePage;