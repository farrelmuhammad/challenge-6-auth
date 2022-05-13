import axios from 'axios';

export const carAdminAction = () => {
    return async (dispatch) => {
        const { data } = await axios.get('https://rent-cars-api.herokuapp.com/admin/car')
        dispatch({ type: 'SET_CAR_ADMIN', payload: data })
    }
}