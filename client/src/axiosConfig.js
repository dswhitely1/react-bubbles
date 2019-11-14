import axios from 'axios';

export const axiosWithAuth = () => {
    const token = JSON.parse(localStorage.getItem('bubbles'))

    return axios.create({
        baseURL: 'http://localhost:5000/api',
        headers: {
            'Authorization': `${token}`
        }
    })
};
