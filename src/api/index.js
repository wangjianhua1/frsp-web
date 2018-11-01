import Vue from 'vue'
import axios from 'axios';
import qs from 'querystring'; //string字符串解析

var instance = axios.create({
  headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'}
});
var jsonInstance = axios.create({
  headers: {'Content-Type': 'application/json', 'charset': 'utf-8'}
});
var downloadInstance = axios.create({
  responseType: 'blob'
});

var api='/api';//所有api请求都转发
export const login = params => {
  return jsonInstance.post(`${api}/login2`, params).then(res => res.data);
};
