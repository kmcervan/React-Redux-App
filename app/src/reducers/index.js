import { FETCH_ANIMELIST_START, FETCH_ANIMELIST_SUCCESS, FETCH_ANIMELIST_FAIL, FIND_ANIME, FOUND_ANIME } from '../actions/index';

const iniitalState = {
    animes: [],
    isFetching: false,
    error: '',
    
}

export const reducer = (state = iniitalState, action) => {
    switch (action.type) {
        case(FETCH_ANIMELIST_START):
            return({
                ...state,
                animes: [],
                isFetching: true,
                error: '',
            });
        case(FETCH_ANIMELIST_SUCCESS):
            return({
                ...state,
                animes: action.payload,
                isFetching: false,
                error: '',
            });
        case(FETCH_ANIMELIST_FAIL):
            return({
                ...state,
                error: action.payload,
                isFetching: false
            });
        case(FIND_ANIME):
            return({
                ...state,
                animes: [],
                isFetching: true,
                error: '',
            });
        case(FOUND_ANIME):
            return({
                ...state,
                animes: action.payload,
                isFetching: false,
                error: '',
            })
        default:
            return state;
    }
};