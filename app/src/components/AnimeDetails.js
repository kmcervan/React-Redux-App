import React from 'react';

const AnimeDetails = ({info}) => {
    
    return (
        <div className='animes-container'>
            <img className='animesImg' src={info.attributes.coverImage.original} />
            <div className='animesInfo'>
                <h2>{info.attributes.canonicalTitle}</h2>
                <p>Average Rating: {info.attributes.averageRating}</p>
                <p>Popularity Rank: {info.attributes.popularityRank}</p>
                <p>Total Episodes: {info.attributes.totalLength}</p>
            </div>
        </div>
    )
};

export default AnimeDetails;