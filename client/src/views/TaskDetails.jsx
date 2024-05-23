import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function TaskDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [task, setTask] = useState({
        name: "",
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
        const confirmDelete = window.confirm("Sure you want to delete?");
        if (confirmDelete) {
            axios.delete(`http://localhost:8000/api/task/${id}`)
                .then(response => {
                    console.log(response);
                    navigate("/");
                })
                .catch(err => {
                    console.log(err);
                });
        }
    };

    const handleBack = () => {
        navigate("/");
    };

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
            <button onClick={handleBack} style={{ marginRight: '10px' }}>BACK</button>
            <button onClick={handleDelete}>REMOVE</button>
        </div>
    );
}

export default TaskDetails;
