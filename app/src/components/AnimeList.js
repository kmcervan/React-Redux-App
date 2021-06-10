import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAnimeList } from '../actions/index';
import AnimeDetails from './AnimeDetails';
import SearchBar from './SearchBar';
import eyes from '../eyes.png';

const AnimeList = (props) => {

    useEffect(() => {
        props.getAnimeList();
    }, []);

    // const handleClick = (value) => {
    //     props.getAnimeList(value);
    // };

    if(props.error) {
        return <h2>We got an error: {props.error}</h2>;
    }

    if (props.isFetching) {
        return <h2 className='fetching'>Fetching anime details, believe it!</h2>;
    }
    console.log(props.animes);

    return (
        <div className='main-container'>
            <div className='header-container'>
                {/* <h1>Believe It!</h1> */}
                {/* <img className='headerImg' src={eyes}/> */}
            </div>
            <SearchBar props={props} />
            <h2 className='h2-animeList'>Top Trending Recommendations</h2>
            <div className='animeList'>
                {/* <h2>Kanye says the best anime is: </h2> */}
                {props.animes.map((anime) => {
                    return <AnimeDetails key={anime.id} info={anime} />
                })}
            </div>
        </div>
    )
};

const mapStateToProps = state => {
    console.log(state);
    return {
        animes: state.animes,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(mapStateToProps, { getAnimeList })(AnimeList);