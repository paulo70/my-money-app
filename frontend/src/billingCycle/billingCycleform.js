import React, {Component} from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { init } from './billingCycleAction'
import Input from '../common/form/labelAndInput'
import CreditList from './creditList'

class BillingCycleForm extends Component {

  render(){
    const { handleSubmit, readOnly } = this.props
    return (
      <form role='form' onSubmit={ handleSubmit }>
        <div className='box-body'>
         <Field name='name'  component={Input}
          label='name'
          cols='12 4'
          placeholder='enter the name'
          readOnly={readOnly}
          />

         <Field name='month' component={Input}
          label='month'
          cols='12 4'
          placeholder='enter the month'
          readOnly={readOnly}
         />

         <Field name='year'  component={Input}
          label='year'
          cols='12 4'
          placeholder='enter the year'
          readOnly={readOnly}
         />

         <CreditList cols='12 6' readOnly={readOnly}/>
        </div>
        <div className='box-footer'>
          <button type='submit' className={`btn btn-${this.props.submitClass}`}>
            {this.props.submitLabel}
          </button>
          <button type='button' className='btn btn-default' onClick={this.props.init}>Cancelar</button>
        </div>
      </form>
    )
  }
}



BillingCycleForm = reduxForm({form: 'billingCycleForm', destroyOnUnmount: false})(BillingCycleForm)
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
export default connect(null, mapDispatchToProps)(BillingCycleForm)
