import axios from 'axios'
require('es6-promise').polyfill();

const instance = axios.create({
    baseURL: 'http://api.openweathermap.org'
})

//instance.defaults.headers.common['APPID'] = '887b78e46f46df567b343b367b888e91'

export default instance