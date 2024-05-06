import axios from 'axios'
const api = axios.create({
    baseUrl: 'https://www.themoviedb.org/'
})

export default api;