import { BASE_URL } from "../../../baseurl";
import * as actionTypes from "../ActionType";

export const medicine = () => (dispatch) => {
  try {
    fetch(BASE_URL + "medicine")
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
      .then((medicine) =>
        dispatch({ type: actionTypes.GET_MEDICINE, payload: medicine })
      );
  } catch (error) {
    console.log(error);
  }
};
