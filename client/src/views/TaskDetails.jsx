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
        <div class="mt-5">
            <h2 class="flex justify-center italic text-2xl  text-blue-500 font-bold">{task.name} Details</h2>
            <table class="table-auto w-full border-collapse bg-gray-700 text-gray-100 mt-5 ">
                <tbody>
                    <tr>
                        <td class="px-4 py-2">Task Date:</td>
                        <td class="px-4 py-2">{formatDate(task.date)}</td>
                    </tr>
                    <tr>
                        <td class="px-4 py-2">Task Details:</td>
                        <td class="px-4 py-2">{task.details}</td>
                    </tr>
                </tbody>
            </table>
            <button class="mb-5 mt-5 px-4 py-2 text-white bg-blue-500  hover:bg-blue-600 font-semibold rounded-lg shadow-md" onClick={handleBack} style={{ marginRight: '10px' }}>BACK</button>
            <button class="mb-5 mt-5 px-4 py-2 text-white bg-red-500  hover:bg-red-600 font-semibold rounded-lg shadow-md" onClick={handleDelete}>REMOVE</button>
        </div>
    );
}

export default TaskDetails;
