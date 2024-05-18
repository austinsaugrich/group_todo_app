import { useParams, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TaskDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [task, setTask] = useState({
        name: "",
        // minutes: 0,
        details: "",
        date: "",
    });

    useEffect(() => {
        axios.get(`http://localhost:8000/api/task/${id}`)
            .then(response => {
                console.log(response);
                setTask(response.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, [id]);

    const handleDelete = () => {
        axios.delete(`http://localhost:8000/api/task/${id}`)
            .then(response => {
                console.log(response);
                navigate("/");
            })
            .catch(err => {
                console.log(err);
            });
    };

    // Basic date formatting function
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.getMonth() + 1; // Months are zero-indexed
        const year = date.getFullYear();
        return `${month}/${day}/${year}`;
    };

    return (
        <div>
            <h2>Task of {task.name} Details</h2>
            <table>
                <tbody>
                    {/* <tr>
                        <td>Task Time:</td>
                        <td>{task.minutes} minutes</td>
                    </tr> */}
                    <tr>
                        <td>Task Date:</td>
                        <td>{formatDate(task.date)}</td>
                    </tr>
                    <tr>
                        <td>Task Details:</td>
                        <td>{task.details}</td>
                    </tr>
                </tbody>
            </table>
            <button onClick={handleDelete} style={{ marginTop: '10px' }}>REMOVE</button>
        </div>
    );
}

export default TaskDetails;