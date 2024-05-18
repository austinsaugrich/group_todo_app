import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../App.css'; 

const AddTask = () => {
    const navigate = useNavigate();
    const [task, setTask] = useState({
        name: "",
        // minutes: 0,
        details: "",
        ingone: "",
        ingtwo: "",
        ingthree: ""
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setTask({ ...task, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/tasks", task)
            .then(response => {
                navigate("/");
            })
            .catch(err => {
                console.log(err);
                setErrors(err.response.data.errors);
            });
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
                        {/* <tr>
                            <td>Total Minutes:</td>
                            <td>
                                <input type="number" name="minutes" value={task.minutes} onChange={handleChange} />
                                <p className="error">{errors.minutes ? errors.minutes.message : null}</p>
                            </td>
                        </tr> */}
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
                                <input
                                    type="date"
                                    name="date"
                                    value={task.date}
                                    onChange={handleChange}
                                />
                                <p className="error">{errors.date ? errors.date.message : null}</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button type="submit" style={{ marginTop: '10px' }}>CREATE</button>
            </form>
        </div>
    );
};

export default AddTask;
