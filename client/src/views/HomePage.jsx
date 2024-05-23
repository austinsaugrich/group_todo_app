import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../App.css';

const HomePage = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/tasks")
            .then(response => {
                setTasks(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the tasks!", error);
            });
    }, []);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { weekday: 'long', month: 'long', day: 'numeric' };
        const formattedDate = date.toLocaleDateString('en-US', options);
        return formattedDate;
    }

    const toggleComplete = (taskId) => {
        console.log("Toggle complete called with task ID:", taskId);
        axios.patch(`http://localhost:8000/api/task/${taskId}/toggleComplete`)
            .then(response => {
                console.log("Toggle complete response:", response.data);
                const updatedTask = response.data;
                setTasks(prevTasks => prevTasks.map(task =>
                    task._id === updatedTask._id ? updatedTask : task
                ));
            })
            .catch(error => {
                console.error("There was an error updating the task:", error);
            });
    }

    // Sorting tasks by due date
    const sortedTasks = tasks.slice().sort((a, b) => new Date(a.date) - new Date(b.date));

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Tasks</th>
                        <th>Due Date</th>
                        <th>Options</th>
                        <th>Complete</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedTasks.map((task) => (
                        <tr key={task._id}>
                            <td style={{ textDecoration: task.isCompleted ? 'line-through' : 'none' }}>{task.name}</td>
                            <td style={{ textDecoration: task.isCompleted ? 'line-through' : 'none' }}>{formatDate(task.date)}</td>
                            <td>
                                <Link to={`/dets/${task._id}`}>details</Link>
                                <span> | </span>
                                <Link to={`/update/${task._id}`}>edit</Link>
                            </td>
                            <td>
                                <button onClick={() => toggleComplete(task._id)}>
                                    {task.isCompleted ? 'Undo' : 'Complete'}
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
    
}

export default HomePage;