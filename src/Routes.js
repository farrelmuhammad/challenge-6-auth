import App from './App';
import Register from './Register';
import LandingPage from './pages/Users/LandingPage';
import Dashboard from './pages/Admin/Dashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const RouteApp = () => {

    return (
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/landingpage" element={<LandingPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<h1 style={{ fontSize: "48px", textAlign: "center", paddingTop: "250px" }}>Error 404</h1>} />
        </Routes>
        </BrowserRouter>
        </>
    )
}

export default RouteApp;