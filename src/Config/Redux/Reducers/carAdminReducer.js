const initialState = {
    dataCarAdmin: null,
}

const carAdminReducer = (state = initialState, action) => {
    switch(action.type) {
        case "SET_CAR_ADMIN":
            return {
                ...state,
                dataCarAdmin: action.payload
            }
            default: return state
    }
}

export default carAdminReducer;