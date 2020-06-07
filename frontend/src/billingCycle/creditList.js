import React, {Component} from 'react'
import {Field} from 'redux-form'

import Grid from '../common/layout/grid'
import Input from '../common/form/input'


class CreditList extends Component {

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
        <td></td>
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
                <th>Action</th>
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

export default CreditList
