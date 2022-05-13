import React, { useState} from 'react'
import { useNavigate } from 'react-router'
import axios from 'axios'

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const [validation, setValidation] = useState([]);

    const navigate = useNavigate();

    const registerHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append('name', name);
        formData.append('email', email);
        formData.append('password', password);

        await axios.post('https://rent-car-appx.herokuapp.com/admin/auth/register', formData).then(() => {
            navigate.push('/');
        })
        .catch((err) => {
            setValidation(err.response.data);
        })
    };
  return (
    <div className="container" style={{ marginTop: "120px"}}>
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card border-0 rounded shadow-sm">
                    <div className="card-body">
                        <h4 className="fw-bold">Halaman Register</h4>
                        <hr/>
                        <form onSubmit={registerHandler}>
                            <div className="row">    
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label className="form-label">NAMA LENGKAP</label>
                                        <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} placeholder="Masukkan Nama Lengkap"/>
                                    </div>
                                    {
                                        validation.name && (
                                            <div className="alert alert-danger">
                                                {validation.name[0]}
                                            </div>
                                        )
                                    }
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label className="form-label">ALAMAT EMAIL</label>
                                        <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Masukkan Alamat Email"/>
                                    </div>
                                    {
                                        validation.email && (
                                            <div className="alert alert-danger">
                                                {validation.email[0]}
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label className="form-label">PASSWORD</label>
                                        <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Masukkan Password"/>
                                    </div>
                                    {
                                        validation.password && (
                                            <div className="alert alert-danger">
                                                {validation.password[0]}
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary">REGISTER</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register