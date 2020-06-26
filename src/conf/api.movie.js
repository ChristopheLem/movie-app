import * as axios from 'axios';

const apiMovie = axios.create({
  baseURL: 'https://api.themoviedb.org/4'
});

apiMovie.interceptors.request.use( req => {
  req.headers['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYWM4OTkxYTJkZGRjN2MwNmRhM2YxZTc5NjZhYWZiNyIsInN1YiI6IjVlZjVmOGJmNTFlNmFiMDAzNjJjNTUzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3geXzIlaaPtaou-OHXCpXR9dpD3CVLKM_EpG3wvV-Ns'
  return req;
})

export default apiMovie;