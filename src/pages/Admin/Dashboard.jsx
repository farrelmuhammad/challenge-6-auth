import { carAdminAction } from '../../Config/Redux/Actions/carAdminAction';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from '../../Components/Admin/Navbar';
import Content from '../../Components/Admin/Content';

const Dashboard = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const { dataLogin } = useSelector((state) => state.auth)
    dispatch(carAdminAction());

    useEffect(() => {
        if(dataLogin?.email !== "admin@admin.com") navigate('/');
        document.body.style.background = "white";
        //eslint-disable-next-line
    }, [])
    
    return(
        <>
        <Navbar />
        <Content />
        </>
    )
}

export default Dashboard;