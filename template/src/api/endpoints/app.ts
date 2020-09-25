import axios from '../config/axios'
import { URL } from '../config/constants'

const getUrls = () => {
  return axios({
    method: 'get',
    url: `${URL}/config.json`
  })
}

export default {
  getUrls
}
