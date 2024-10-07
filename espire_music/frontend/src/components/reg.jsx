import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function RegPage() {
    const [form_data, set_form_data] = useState({
        username: "",
        email: "",
        password: "",
        first_name: "",
        last_name: "",
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(
                "http://127.0.0.1:8000/api/reg",
                form_data
            );
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleChange = (event) => {
        set_form_data({
            ...form_data,
            [event.target.name]: event.target.value,
        });
    };

    return (
        <div className="regpage">
            <div>это регистрация 0-0</div>
            <Link to="/">на главную</Link>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        name="username"
                        onChange={handleChange}
                        value={form_data.username}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        name="email"
                        onChange={handleChange}
                        value={form_data.email}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        name="password"
                        onChange={handleChange}
                        value={form_data.password}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        name="first_name"
                        onChange={handleChange}
                        value={form_data.first_name}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        name="last_name"
                        onChange={handleChange}
                        value={form_data.last_name}
                    />
                </div>
                <button type="submit">"submit"</button>
            </form>
        </div>
    );
}

export default RegPage;
