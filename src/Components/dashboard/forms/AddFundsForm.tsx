import { FC } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from 'yup';

// Define the validation schema
const validationSchema = Yup.object({
    method: Yup.string().required('Payment method is required'),
    amount: Yup.number()
        .required('Amount is required')
        .min(3, 'Minimum amount is $3')
        .typeError('Amount must be a number'),
    phone: Yup.string()
        .required('Phone number is required')
        .matches(/^[0-9]+$/, 'Phone number must be digits only')
        .min(10, 'Phone number must be at least 10 digits')
});

const AddFundsForm : FC = () : JSX.Element => {
    return (
        <Formik
            initialValues={{
                method: '',
                amount: '',
                phone: '',
            }}
            validationSchema={validationSchema}
            onSubmit={values => console.log(values)}
        >
            <Form className="mt-2 instruction">
                <div className="order-form-group mt-6">
                    <label htmlFor="method">Method</label>
                    <Field
                        name='method'
                        id='method'
                        component="select"
                        className="order-input"
                    >
                        <option value="" label="Select payment method" />
                        <option value="all">Credit Card</option>
                        <option value="instagram">PayPal</option>
                        <option value="facebook">Payoneer</option>
                    </Field>
                    <ErrorMessage name="method" component="div" className="text-red-500" />
                </div>

                <div className="order-form-group mt-6">
                    <span>Instruction</span>
                    
                    <div className="instruction-detail">
                        👉 Paytr.com accept All Kind of Credit or Debit card ( Visa, Master Card ) 
                        <br />
                        <br />
                        👉3D Secure Payments
                        <br />
                        <br />
                        👉 We Accept CheckOut From Each & Every Customer
                        <br />
                        <br />
                        👉 Currently We accepting Deposit min 3$ and Maximum Unlimited
                        <br />
                        <br />
                        👉 Its Automatic deposit system, after you paid sucessfully. It will add fund to your account automatically
                        <br />
                        <br />
                        👉If Your payment get failed please try our other credit&debit card payment methods from below.
                    </div>
                </div>

                <div className="order-form-group mt-6">
                    <label htmlFor="amount">Amount</label>
                    <Field
                        name='amount'
                        id='amount'
                        type='number'
                        className="order-input"
                    />
                    <ErrorMessage name="amount" component="div" className="text-red-500" />
                </div>

                <div className="order-form-group mt-6">
                    <label htmlFor="phone">Phone</label>
                    <Field
                        name='phone'
                        id='phone'
                        type='text'
                        className="order-input"
                    />
                    <ErrorMessage name="phone" component="div" className="text-red-500" />
                </div>

                <div className="order-btn-group pt-6">
                    <button type="submit">Pay</button>
                </div>
            </Form>
        </Formik>
    )
}

export default AddFundsForm;