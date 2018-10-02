import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burguer-54270.firebaseio.com/'
});

export default instance;