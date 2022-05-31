import React from 'react'
import MovieCard from '../MovieCard/MovieCard'
import './MovieList.css'

const MovieList = ({data}) => {
  return (
    <div className='conatinerMovieList'>
        {data.map(el=> 
        <MovieCard key={el.id} id={el.id} title={el.title} urlImage={el.urlImage} desc={el.desc} date={el.date} duration={el.duration} rating={el.rating}/>
        )}
    </div>
  )
}

export default MovieList