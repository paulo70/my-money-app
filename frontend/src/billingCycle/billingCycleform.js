import React, {Component} from 'react'
import { reduxForm, Field } from 'redux-form'
import Input from '../common/form/labelAndInput'

class BillingCycleForm extends Component {

  render(){
    const { handleSubmit } = this.props
    return (
      <form role='form' onSubmit={ handleSubmit }>
        <div className='box-body'>
         <Field name='name'  component={Input}
          label='name'
          cols='12 4'
          placeholder='enter the name'
          />
         <Field name='month' component={Input}
          label='month'
          cols='12 4'
          placeholder='enter the month'
         />
         <Field name='year'  component={Input}
          label='year'
          cols='12 4'
          placeholder='enter the year'
         />
        </div>
        <div className='box-footer'>
          <button type='submit' className='btn btn-primary'>Submit</button>
        </div>
      </form>
    )
  }
}


export default reduxForm({ form: 'billingCycleForm' })(BillingCycleForm)
