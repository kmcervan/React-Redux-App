import React from 'react';

const AnimeDetails = ({info}) => {
    
    return (
        <div className='animes-container'>

            <div className='list-container'>
                <div className='img'>
                    <img className='animesImg' src={info.attributes.coverImage.original} /> 
                
                    <div className='animesInfo'>
                        
                        <div className='text'>
                            <p>Average Rating: <span>{info.attributes.averageRating}</span></p>
                            <p>Popularity Rank: <span>{info.attributes.popularityRank}</span></p>
                            <p>Total Episodes: <span>{info.attributes.totalLength}</span></p>
                        </div>
                    
                    </div>
                </div>
                <div className='h2-contain'>
                    <h2 className='animes-h2'><a className='youtube-A-Tag' target='_blank' href={`https://www.youtube.com/watch?v=${info.attributes.youtubeVideoId}`}>{info.attributes.canonicalTitle}</a></h2>
                    
                </div>
            </div>
            
            
        </div>
    )
};

export default AnimeDetails;