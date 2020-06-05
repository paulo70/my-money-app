import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getList, showUpdate } from './billingCycleAction'

class BillingCycleList extends Component {

  componentWillMount(){
    this.props.getList()
  }

  renderRows(){
    const list = this.props.list || []

    return list.map((bc, index) => (
      <tr key = {index}>
        <td>{bc.name}</td>
        <td>{bc.month}</td>
        <td>{bc.year}</td>
        <td>
            <button
              className='btn btn-warning'
              onClick = {() => this.props.showUpdate(bc)}>
              <i className='fa fa-pencil'></i>
            </button>
        </td>
      </tr>
    ))
  }

  render() {
    console.log(this.props.list)
    return (
      <div>
        <table className='table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Mouth</th>
              <th>Year</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.renderRows()}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps    = state => ({ list: state.billingCycle.list })
const mapDispatchToProps = dispatch => bindActionCreators({ getList, showUpdate }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps) (BillingCycleList)
