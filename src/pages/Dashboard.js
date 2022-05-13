import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router'
import axios from 'axios'

function Dashboard() {
    const [user, setUser] = useState({});

    const navigate = useNavigate();

    const token = localStorage.getItem('token');

    const fetchData = async () => {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        await axios.get('https://rent-car-appx.herokuapp.com/admin/auth/login')
        .then((response) => {
            setUser(response.data);
        })
    }

    useEffect(() => {
        if(!token) {
            navigate.push('/');
        }
        fetchData();
    }, []);

    const logoutHandler = async () => {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        await axios.post('https://rent-car-appx.herokuapp.com/admin/auth/login')
        .then(() => {
            localStorage.removeItem('token');
            navigate.push('/');
        });
    };
  return (
    <div className="container" style={{ marginTop: "120px" }}>
        <div className="row justify-content-center">
            <div className="col-md-12">
                <div className="card border-0 rounded shadow-sm">
                    <div className="card-body">
                        SELAMAT DATANG <strong className="text-uppercase">{user.name}</strong>
                        <hr />
                        <button onClick={logoutHandler} className="btn btn-md btn-danger">LOGOUT</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Dashboard