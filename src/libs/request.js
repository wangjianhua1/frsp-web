import HttpRequest from '../libs/axios'
const baseUrl = process.env.API_BASE_URL
const axios = new HttpRequest(baseUrl)
export default axios
