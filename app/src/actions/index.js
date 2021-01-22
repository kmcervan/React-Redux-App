import axios from 'axios';

export const FETCH_ANIMELIST_START = 'FETCH_ANIMELIST_START';
export const FETCH_ANIMELIST_SUCCESS = 'FETCH_ANIMELIST_SUCCESS';
export const FETCH_ANIMELIST_FAIL = 'FETCH_ANIMELIST_FAIL';
export const FIND_ANIME = 'FIND_ANIME';
export const FOUND_ANIME = 'FOUND_ANIME';

export const getAnimeList = () => dispatch => {
    dispatch({type:FETCH_ANIMELIST_START});
    axios
    .get('https://kitsu.io/api/edge/trending/anime') // need to pass in words throu ${}
    .then((resp) => {
        dispatch({ type:FETCH_ANIMELIST_SUCCESS, payload: resp.data.data});
    })
    .catch(err => {
        console.log(err);
        // dispatch({ type:FETCH_ANIMELIST_FAIL, payload: err.response.code});
    })
};

export const findAnime = (anime) => dispatch =>{
    dispatch({type: FIND_ANIME});
    axios
    .get(`https://kitsu.io/api/edge/anime?filter[text]=${anime}`)
    .then((resp) => {
        console.log(resp.data)
        dispatch({ type:FOUND_ANIME, payload: resp.data.data})
    })
};