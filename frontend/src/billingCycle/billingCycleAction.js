import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'
import { selectTab, showTabs } from '../common/tab/tabActions'

const URL = 'http://localhost:3003/api'
const INITIAL_VALUES = {}

export function getList(){
  const request = axios.get(`${URL}/billingCycles`)

  return {
    type: 'BILLING_CYCLES_FETCHED',
    payload: request
  }
}

export function create(values){
  return submit(values, 'post')
}

export function update(values){
  return submit(values, 'put')
}

export function remove(values){
  return submit(values, 'delete')
}

export function showDelete(billingCycles){
  return [
    showTabs('tabDelete'),
    selectTab('tabDelete'),
    initialize('billingCycleForm', billingCycles)
  ]
}

export function showUpdate(billingCycles){
    return [
      showTabs('tabUpdate'),
      selectTab('tabUpdate'),
      initialize('billingCycleForm', billingCycles)
    ]
}

function submit(values, method) {
  return dispatch => {
    const id = values._id ? values._id : ''

    axios[method](`${URL}/billingCycles/${id}`, values)
      .then(resp => {
        toastr.success('Success', 'Operation was finish with success')

        dispatch(init())
      })
      .catch(e => {
        e.response.data.errors.forEach(error => toastr.error('Erro', error))
      })
  }
}


export function init(){
  return [
    showTabs('tabList', 'tabCreate'),
    selectTab('tabList'),
    getList(),
    initialize('billingCycleForm', INITIAL_VALUES)
  ]
}
