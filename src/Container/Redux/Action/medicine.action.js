import { BASE_URL } from "../../../baseurl";
import * as ActionTypes from "../ActionType";
 import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export const Medicinedata = () => (dispatch) => {
  try {
    dispatch(loadingMedicine());

    setTimeout(function () {
      fetch(BASE_URL + "posts")
        .then(
          (response) => {
            if (response.ok) {
              return response;
            } else {
              var error = new Error(
                "Error " + response.status + ": " + response.statusText
              );
              error.response = response;
              throw error;
            }
          },
          (error) => {
            var errmess = new Error(error.message);
            throw errmess;
          }
        )
        .then((response) => response.json())
        .then((medicines) =>
               
          dispatch({ type: ActionTypes.GET_MEDICINE, payload: medicines })
        )
        .catch((error) => dispatch(errorMedicine(error.message)));
    }, 2000);
  } catch (error) {
    dispatch(errorMedicine(error));
    console.log(error);
  }
};

export const postMedicine = (data) => (dispatch) => {
  try {
    dispatch(loadingMedicine());

    setTimeout(function () {
      fetch(BASE_URL + "posts", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then(
          (response) => {
            if (response.ok) {
              return response;
            } else {
              var error = new Error(
                "Error " + response.status + ": " + response.statusText
              );
              error.response = response;
              throw error;
            }
          },
          (error) => {
            var errmess = new Error(error.message);
            throw errmess;
          }
        )
        .then((response) => response.json())
        .then((medicines) =>
               if (res.data.status === true) {
        toast("success", "Upload is successful");
      } else  {
        setToast("error","Upload is not successful")
      }
          dispatch({ type: ActionTypes.POST_MEDICINE, payload: medicines })
        )
        .catch((error) => dispatch(errorMedicine(error.message)));
    }, 2000);
  } catch (error) {
    dispatch(errorMedicine(error));
  }
};
export const DeleteMedicine = (id) => (dispatch) => {
  try {
    fetch(BASE_URL + "posts/" + id, {
      method: "DELETE",
    })
      .then(
        (response) => {
          if (response.ok) {
            return response;
          } else {
            var error = new Error(
              "Error " + response.status + ": " + response.statusText
            );
            error.response = response;
            throw error;
          }
        },
        (error) => {
          var errmess = new Error(error.message);
          throw errmess;
        }
      )
      .then((response) => response.json())
      .then  if (res.data.status === true) {
        toast("success", "Delete is successful");
      } else  {
        toast("error","Delete is not successful")
      }
    (dispatch({ type: ActionTypes.DELETE_MEDICINE, payload: id }))
      .catch((error) => dispatch(errorMedicine(error.message)));
  } catch (error) {
    dispatch(errorMedicine(error));
  }
};

export const UpdateMedicine = (data) => (dispatch) => {
  try {
    fetch(BASE_URL + "posts/" + data.id, {
      method: "PUT",
    })
      .then(
        (response) => {
          if (response.ok) {
            return response;
          } else {
            var error = new Error(
              "Error " + response.status + ": " + response.statusText
            );
            error.response = response;
            throw error;
          }
        },
        (error) => {
          var errmess = new Error(error.message);
          throw errmess;
        }
      )
      .then((response) => response.json())
      .then((medicines) =>
        dispatch({ type: ActionTypes.UPDATE_MEDICINE, payload: medicines })
      )
      .catch((error) => dispatch(errorMedicine(error.message)));
  } catch (error) {
    dispatch(errorMedicine(error.message));
  }
};

export const loadingMedicine = () => (dispatch) => {
  dispatch({ type: ActionTypes.LOADING_MEDICINE });
};

export const errorMedicine = (e) => (dispatch) => {
  dispatch({ type: ActionTypes.ERROR_MEDICINE, payload: e });
};
