import axios from 'axios';  

export default axios.create({
    baseURL: 'https://api.rawg.io/api/',
    params: {
        key: 'fd1d063c6ac34d78878d5a2c7d4139c4',
    },
});