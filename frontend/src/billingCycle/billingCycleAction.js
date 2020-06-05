import axios from 'axios'
import { toastr } from 'react-redux-toastr'
const URL = 'http://localhost:3003/api'

export function getList(){
  const request = axios.get(`${URL}/billingCycles`)

  return {
    type: 'BILLING_CYCLES_FETCHED',
    payload: request
  }
}

export function create(values){
  axios.post(`${URL}/billingCycles`, values)
    .then(resp => {
      toastr.success('Success', 'Operation was finish with success')
    })
    .catch(e => {
      e.response.data.errors.forEach(error => toastr.error('Erro', error))
    })
  return {
    type: 'TEMP'
  }
}

