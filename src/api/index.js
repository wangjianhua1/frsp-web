import Vue from 'vue'
import axios from 'axios';
import qs from 'querystring';

var instance = axios.create({
  baseURL:process.env.API_BASE_URL,
  headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'}
});
var jsonInstance = axios.create({
  baseURL:process.env.API_BASE_URL,
  headers: {'content-type': 'application/json', 'charset': 'utf-8'}
});
var downloadInstance = axios.create({
  responseType: 'blob'
});

export const login = params => {
  return instance.post(`/api/login`, qs.stringify(params)).then(res => res.data);
}; //用户登陆
