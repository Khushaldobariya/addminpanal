import * as ActionTypes from "../ActionType"

const initalState = {
    isLoading: false,
    medicine: [],
    error: ''
}

export const medicineReducer = (state = initalState, action) => {
    console.log(action.type, action.payload);

    switch (action.type) {
        case ActionTypes.LOADING_MEDICINE:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case ActionTypes.GET_MEDICINE:
            return {
                ...state,
                isLoading: false,
                medicine: action.payload,
                error: ''
            }
        case ActionTypes.POST_MEDICINE:
            console.log(action.payload);
            return {
                ...state,
                isLoading: false,
                medicine: state.medicine.concat(action.payload),
                error: ''
            }
            case ActionTypes.DELETE_MEDICINE:
                return {
                    ...state,
                    isLoading: false,
                    medicine: state.medicine.filter((l) =>l.id !== action.payload),
                    error: ''
                }
                case ActionTypes.UPDATE_MEDICINE:

                    return {
                        ...state,
                        isLoading: false,
                        medicine: state.medicine.map((upDate) => 
                        upDate.id === action.payload.id ? action.payload : upDate
                        ),
                        error: ''
                    }

        case ActionTypes.ERROR_MEDICINE:
            return {
                ...state,
                isLoading: false,
                medicine: [],
                error: action.payload
            }
        default:
            return state;
    }
}