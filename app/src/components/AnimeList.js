import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getAnimeList } from '../actions/index';
import AnimeDetails from './AnimeDetails';
import SearchBar from './SearchBar';
import mangaPic from '../mangaPic.jpg';
import eyes from '../eyes.png';

const AnimeList = (props) => {

    useEffect(() => {
        props.getAnimeList();
    }, []);

    const handleClick = (e) => {
        e.preventDefault();
        props.getAnimeList();
    };

    if(props.error) {
        return <h2>We got an error: {props.error}</h2>;
    }

    if (props.isFetching) {
        return <h2>Fetching anime detail, believe it!</h2>;
    }
    console.log(props.animes);

    return (
        <div className='main-container'>
            <div className='header-container'>
                <img className='headerImg' src={eyes}/>
            </div>
            <SearchBar props={props} click={handleClick}/>
            <h2>Top Rated Recommendations</h2>
            <div className='animeList'>
                <h2>Kanye says the best anime is: </h2>
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