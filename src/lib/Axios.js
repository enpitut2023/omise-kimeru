import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/'
axios.defaults.headers.post['Content-Type'] = 'text/html,application/xhtml+xml;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = 'http://webservice.recruit.co.jp/hotpepper/gourmet/v1/';

export default axios