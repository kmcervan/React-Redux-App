import React, { useState } from 'react';
import { connect } from 'react-redux';
import { findAnime } from '../actions/index';

const SearchBar = (props) => {

    const [formValue, setFormValue] = useState('');

    const handleChange = (e) =>{
        const value = e.target.value;
        setFormValue(value);
    }
    const handleClick = (e) => {
        e.preventDefault();
        props.findAnime(formValue)
    };

    return(
        <div>
            <form className='form'>
                <input 
                type='text' 
                name='search' 
                value={formValue}
                className='searchBar'
                placeholder='Search for an Anime'
                onChange={handleChange} />
                <button className='btn' onClick={handleClick}>Search</button>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state);
    return {
        animes: state.animes,
        isFetching: state.isFetching,
        error: state.error,
    };
};

export default connect(mapStateToProps, { findAnime })(SearchBar);