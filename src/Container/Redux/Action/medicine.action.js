import axios from "axios";
import { BASE_URL } from "../../../baseurl";
import * as ActionTypes from "../ActionType";

// GET AXIOS
export const Medicinedata = () => (dispatch) => {
  axios
    .get(BASE_URL + "posts")
    .then((response) => {
      dispatch({ type: ActionTypes.GET_MEDICINE, payload: response.data });
    })
    .catch((error) => console.log(error));
};

// add data form axios

export const postMedicine = (data) => (dispatch) => {
  axios
    .post(BASE_URL + "posts", data, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      dispatch({ type: ActionTypes.POST_MEDICINE, payload: res.data });
    })
    .catch((error) => console.log(error));
};

// update data form axios

export const UpdateMedicine = (data) => (dispatch) => {
  try {
    axios
      .put(BASE_URL + "posts/" + data.id)
      .then((res) =>
        dispatch({ type: ActionTypes.UPDATE_MEDICINE, payload: res.medicines })
      )
      .catch((error) => dispatch(errorMedicine(error.message)));
  } catch (error) {
    dispatch(errorMedicine(error.message));
  }
};
// delete medicine form axios 
export const DeleteMedicine = (id) => (dispatch) => {
  try {
    axios
      .delete(BASE_URL + "posts/" + id)

      .then((response) => {
        dispatch({ type: ActionTypes.DELETE_MEDICINE, payload: response.id });
      })
      .catch((error) => dispatch(errorMedicine(error.message)));
  } catch (error) {
    dispatch(errorMedicine(error));
  }
};

export const loadingMedicine = () => (dispatch) => {
  dispatch({ type: ActionTypes.LOADING_MEDICINE });
};

export const errorMedicine = (e) => (dispatch) => {
  dispatch({ type: ActionTypes.ERROR_MEDICINE, payload: e });
};
