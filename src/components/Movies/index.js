import React, { useEffect, useState } from 'react'

import movie from "../../assets/images/cinema-bg.jpeg"
import { useGlobalContext } from '../../provider/context';

const Movies = () => {
    const {queryData, setqueryData, searching, setSearching } = useGlobalContext()

    const [movies, setmovies] = useState([]);
    const [loading, setLoading] = useState(false)
    // https://www.omdbapi.com/?apikey=9eeadc81&s=,avatar

    const CLIENT_ID = `?apikey=${process.env.REACT_APP_ACCESS_KEY}`
    const MAIN_URL = `https://www.omdbapi.com/${CLIENT_ID}&s=game`
    const SEARCH_URL = `https://www.omdbapi.com`

    const fetchMovies = async () => {
        let url;
        const queryURL = `s=${queryData}`
        if(queryData){
            url = `${SEARCH_URL}/${CLIENT_ID}&${queryURL}`
        }else{
            url = `${MAIN_URL}`
        }

        try {
            setLoading(true)
            const res =  await fetch(`${url}`)
            const data = await res.json()
            setqueryData("")
            setmovies(data.Search)
            setSearching(false)
            setLoading(false)
            console.log(data.Search)
            
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() =>{
        fetchMovies()
    },[])

    useEffect(() => {
            if(searching){
                fetchMovies()
            }
    }, [searching]);
    
  return (
    <section className='movies-wrapper'>
                <div className='single-category'>
                    <h3 className='title'>Movies</h3>
                    <div className='movies'>
                        {
                            loading && queryData && (
                                <h2>Loading...</h2>
                            )
                        }
                        {!loading && movies &&
                            movies.map((movie, id) => {
                                return (
                                        <div key={id} className='single-movie'>
                                            <img className='movie-img' src={movie.Poster}/>
                                            <span className='title'>{movie.Title}</span>
                                        </div>
                                )
                            })
                        }
                        {
                            movies === undefined && (
                                <h2>No Record Found</h2>
                            )
                        }
                    </div>
                </div>  

                   
            </section>
  )
}

export default Movies