import axios from "axios";

const movieBaseURL='https://api.themoviedb.org/3'
const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf';

const api_key='170fd4f935d16b2c97f08787d0367c1b'

const getTrandingVideos =axios.get(movieBaseURL+"/trending/all/day?api_key="+api_key)
const getMovieByGenreId=(id)=>axios.get(movieByGenreBaseURL+"&with_genres="+id)


export default{
    getTrandingVideos,
    getMovieByGenreId
}