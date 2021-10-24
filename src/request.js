import { applyMiddleware } from "redux";

//api keys
const API_Key = "cdfd2c47b046933cf11ba8e48ed98b55";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_Key}&language=en-US`,
    fetchNetflixOriginal: `/discover/tv?api_key=${API_Key}&with_networks=213`,
    fetchTopRated: `/movie/top_rate?api_key=${API_Key}&language=en-US`,
    fetchActionMovie: `/discover/movie?api_key=${API_Key}&with_genres=28`,
    fetchComedyMovie: `/discover/movie?api_key=${API_Key}&with_genres=35`,
    fetchHorrorMovie: `/discover/movie?api_key=${API_Key}&with_genres=27`,
    fetchRomanceMovie: `/discover/movie?api_key=${API_Key}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_Key}&with_genres=99`,
};

export default requests;
//baseURL+/movie/top_rate?api_key=+cdfd2c47b046933cf11ba8e48ed98b55+&language=en-US