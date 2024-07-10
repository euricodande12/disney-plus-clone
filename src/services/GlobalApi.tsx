import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const apiKey = "5056ad7b077075888e8d72dae48386dd"

//https://api.themoviedb.org/3/search/movie?api_key=5056ad7b077075888e8d72dae48386dd&query=disney
//https://api.themoviedb.org/3/search/tv?api_key=5056ad7b077075888e8d72dae48386dd&query=disney
//https://api.themoviedb.org/3/trending/all/day?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf

const getTrendingVideos = axios.get(movieBaseUrl+ "/trending/all/day?api_key="+ apiKey+ "&query=disney");

export default{
    getTrendingVideos
};