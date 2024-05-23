import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Nav from '../components/Nav';
import '../App.css'

const Update = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [task, setTask] = useState({
        name: "",
        details: "",
        date: "",
    });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/task/${id}`)
            .then(response => {
                console.log(response);
                setTask(response.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    const handleChange = (e) => {
        setTask({ ...task, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/task/${id}`, task)
            .then(response => {
                navigate("/");
            })
            .catch(err => {
                console.log(err);
                setErrors(err.response.data.errors);
            });
    }

    const handleBack = () => {
        navigate("/");
    };

    return (
        <div>
            <h1>To Do List</h1>
            <Nav taskId={id} />
            <h2>Update your {task.name} Task</h2>
            <form onSubmit={handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td>Task Name:</td>
                                <td>
                                    <input type="text" name="name" value={task.name} onChange={handleChange} />
                                    <p className="error">{errors.name ? errors.name.message : null}</p>
                                </td>
                            </tr>
                            <tr>
                                <td>Task Details:</td>
                                <td>
                                    <input type="text" name="details" value={task.details} onChange={handleChange} />
                                    <p className="error">{errors.details ? errors.details.message : null}</p>
                                </td>
                        </tr>
                        <tr>
                            <td>Task Date:</td>
                            <td>
                                <input type="date" name="date" value={task.date} onChange={handleChange} />
                                <p className="error">{errors.date ? errors.date.message : null}</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button onClick={handleBack}>BACK</button>
                <button type="submit" style={{ marginLeft: '10px' }}>UPDATE</button>
            </form>
        </div>
    );
}

export default Update;