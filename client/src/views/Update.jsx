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
        <div class="space-y-5">
            <h1 class="underline font-bold text-6xl flex justify-center">To Do List</h1>
            <Nav taskId={id} />
            <h2 class="flex justify-center italic text-2xl  text-blue-500 font-bold">Update your {task.name} Task</h2>
            <form onSubmit={handleSubmit}>
                <table class="table-auto w-full border-collapse bg-gray-700 text-gray-100 mt-5 ">
                    <tbody>
                        <tr>
                            <td class="px-4 py-2">Task Name:</td>
                                <td class="px-4 py-2">
                                    <input class="bg-gray-500 rounded-lg p-2" type="text" name="name" value={task.name} onChange={handleChange} />
                                    <p className="error">{errors.name ? errors.name.message : null}</p>
                                </td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2">Task Details:</td>
                                <td class="px-4 py-2">
                                    <input class="bg-gray-500 rounded-lg p-2" type="text" name="details" value={task.details} onChange={handleChange} />
                                    <p className="error">{errors.details ? errors.details.message : null}</p>
                                </td>
                        </tr>
                        <tr>
                            <td class="px-4 py-2">Task Date:</td>
                            <td class="px-4 py-2">
                                <input class="bg-gray-500 rounded-lg p-2" type="date" name="date" value={task.date} onChange={handleChange} />
                                <p className="error">{errors.date ? errors.date.message : null}</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button class="mb-5 mt-5 px-4 py-2 text-white bg-blue-500  hover:bg-blue-600 font-semibold rounded-lg shadow-md" onClick={handleBack}>BACK</button>
                <button class="mb-5 mt-5 px-4 py-2 text-white bg-green-500  hover:bg-green-600 font-semibold rounded-lg shadow-md" type="submit" style={{ marginLeft: '10px' }}>UPDATE</button>
            </form>
        </div>
    );
}

export default Update;