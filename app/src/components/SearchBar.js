import React from 'react';

const SearchBar = ({props, click}) => {
    return(
        <div>
            <form>
                <input type='text' name='search' placeholder='Search for an Anime' />
                <button onClick={click}>Search</button>
            </form>
        </div>
    )
}
export default SearchBar;