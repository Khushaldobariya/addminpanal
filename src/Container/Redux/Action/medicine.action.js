import { BASE_URL } from "../../../baseurl";
import * as actionTypes from "../ActionType";

export const medicine = () => (dispatch) => {

  try {
    dispatch(lodingMedicine())
    setTimeout(function(){
     return  fetch(BASE_URL + "posts")
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
      .then(medicines =>
        dispatch({ type: actionTypes.GET_MEDICINE, payload: medicines })
      );
    },2000)
   
  } catch (error) {
    console.log(error);
  }
};

export const lodingMedicine = () => (dispatch) => {
  dispatch({ type: actionTypes.LODAING_MEDICINE})
}
