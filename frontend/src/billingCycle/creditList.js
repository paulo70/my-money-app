import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Field, arrayInsert} from 'redux-form'

import Grid from '../common/layout/grid'
import Input from '../common/form/input'


class CreditList extends Component {

  add(index, item ={}) {
    if(!this.props.readOnly){
      console.log(index)
      this.props.arrayInsert('billingCycleForm', 'credits', index, item)
    }
  }

  renderRows(){
    const list = this.props.list || []

   return list.map((item, index) => (
      <tr key = {index}>
        <td><Field
            name={`credits[${index}].name`}
            component={Input}
            placeholder={'Give a name'}
            readOnly={this.props.readOnly}
            />
        </td>
        <td><Field
            name={`credits[${index}].value`}
            component={Input}
            placeholder={'Give a value'}
            readOnly={this.props.readOnly}
            />
        </td>
        <td>
          <button
            className='btn btn-success'
            onClick = {() => this.add(index + 1)}
            >
            <i className='fa fa-plus'></i>
          </button>

          <button
            className='btn btn-warning'
            onClick = {() => this.add(index + 1, item)}
            >
            <i className='fa fa-clone'></i>
          </button>
        </td>
      </tr>

    ))
  }

  render(){
    return (
      <Grid cols={this.props.cols}>
        <fieldset>
          <legend>Credit</legend>
          <table className='table'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Value</th>
                <th className='table-actions'>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.renderRows()}
            </tbody>
          </table>
        </fieldset>
      </Grid>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({arrayInsert}, dispatch)
export default connect(null, mapDispatchToProps)(CreditList)
