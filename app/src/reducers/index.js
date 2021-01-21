import { FETCH_ANIMELIST_START, FETCH_ANIMELIST_SUCCESS, FETCH_ANIMELIST_FAIL } from '../actions/index';

const iniitalState = {
    // canonicalTitle: '',
    // averageRating: '',
    // popularityRank: '',
    // coverImage: {
    //     original: '',
    // },
    // totalLength: '',
    animes: [

    ],
    isFetching: false,
    error: ''
    
}

export const reducer = (state = iniitalState, action) => {
    switch (action.type) {
        case(FETCH_ANIMELIST_START):
            return({
                ...state,
                animes: [],
                isFetching: true,
                error: '',
                
                // canonicalTitle: '',
                // averageRating: '',
                // popularityRank: '',
                // coverImage: {
                //     original: '',
                // },
                // totalLength: '',
            });
        case(FETCH_ANIMELIST_SUCCESS):
            return({
                ...state,
                animes: action.payload,
                isFetching: false,
                error: '',

                // canonicalTitle: action.payload,
                // averageRating: action.payload,
                // popularityRank: action.payload,
                // coverImage: {
                //     original: action.payload,
                // },
                // totalLength: action.payload,
            });
        case(FETCH_ANIMELIST_FAIL):
            return({
                ...state,
                error: action.payload,
                isFetching: false
            });
        default:
            return state;
    }
};