
var axios = require('axios');

// Accessing API of glgBackend
var axiosInstance = axios.create({
    baseURL: (process.env.NODE_ENV !== 'production') ? 'http://localhost:3000/api/v1' : '',
    timeout: 72000,
    headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization': 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE1NTc5MDI5MzN9.j9VYhpsG2ZOkrXrFPLSnHqtZlmuXh6A41sUr5Bmt03k' 
    }
});

module.exports = axiosInstance;