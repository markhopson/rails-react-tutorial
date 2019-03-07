export const GET_THINGS_REQUEST = 'GET_THINGS_REQUEST';
export const GET_THINGS_SUCCESS = 'GET_THINGS_SUCCESS';

export function getThings() {
  console.log('getThings() Action!!')
  return dispatch => {
    dispatch({ type: GET_THINGS_REQUEST });
    return fetch(`v1/things.json`)
      .then(response => response.json())
      .then(json => dispatch(getThingsSuccess(json)))
      .catch(error => console.log(error));
  };
};

export function getThingsSuccess(json) {
  return {
    type: GET_THINGS_SUCCESS,
    json
  };
};
