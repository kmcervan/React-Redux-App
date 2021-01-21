import axios from 'axios';

export const FETCH_ANIMELIST_START = 'FETCH_ANIMELIST_START';
export const FETCH_ANIMELIST_SUCCESS = 'FETCH_ANIMELIST_SUCCESS';
export const FETCH_ANIMELIST_FAIL = 'FETCH_ANIMELIST_FAIL';

export const getAnimeList = () => dispatch => {
    dispatch({type:FETCH_ANIMELIST_START});
    axios
    .get('https://kitsu.io/api/edge/trending/anime')
    .then((resp) => {
        dispatch({ type:FETCH_ANIMELIST_SUCCESS, payload: resp.data.data});
    })
    .catch(err => {
        console.log(err);
        // dispatch({ type:FETCH_ANIMELIST_FAIL, payload: err.response.code});
    })
}