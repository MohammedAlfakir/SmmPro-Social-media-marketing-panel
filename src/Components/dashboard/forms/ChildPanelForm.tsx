'use client';

import { FC } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from 'yup';

// Define the validation schema
const validationSchema = Yup.object({
    domain: Yup.string()
        .required('Domain is required')
        .matches(/^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, 'Invalid domain format'),
    currency: Yup.string().required('Currency is required'),
    admin_username: Yup.string()
        .required('Admin username is required')
        .min(4, 'Username must be at least 4 characters long'),
    admin_password: Yup.string()
        .required('Admin password is required')
        .min(6, 'Password must be at least 6 characters long'),
    confirm_password: Yup.string()
        .oneOf([Yup.ref('admin_password'), undefined], 'Passwords must match')
        .required('Confirm password is required'),
});

const ChildPanelForm: FC = () : JSX.Element => {
    return (
        <Formik
            initialValues={{
                domain: '',
                currency: '',
                admin_username: '',
                admin_password: '',
                confirm_password: '',
                price: '26.00'
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                if (values.admin_password === values.confirm_password) {
                    console.log(values);
                } else {
                    console.error('Passwords do not match');
                }
            }}
        >
            <Form className="mt-2 instruction">
                <div className="order-form-group mt-6">
                    <label htmlFor="domain">Domain</label>
                    <Field
                        name='domain'
                        id='domain'
                        type='text'
                        className="order-input"
                    />
                    <ErrorMessage name="domain" component="div" className="text-red-500" />
                </div>

                <div className="order-form-group mt-6">
                    <label htmlFor="currency">Currency</label>
                    <Field
                        name='currency'
                        id='currency'
                        component="select"
                        className="order-input"
                    >
                        <option value="" label="Select currency" />
                        <option value="all">USD</option>
                        <option value="instagram">MAD</option>
                        <option value="facebook">EUR</option>
                    </Field>
                    <ErrorMessage name="currency" component="div" className="text-red-500" />
                </div>

                <div className="order-form-group mt-6">
                    <label htmlFor="admin_username">Admin username</label>
                    <Field
                        name='admin_username'
                        id='admin_username'
                        type="text"
                        className="order-input"
                    />
                    <ErrorMessage name="admin_username" component="div" className="text-red-500" />
                </div>

                <div className="order-form-group mt-6">
                    <label htmlFor="admin_password">Admin password</label>
                    <Field
                        name='admin_password'
                        id='admin_password'
                        type='text'
                        className="order-input"
                    />
                    <ErrorMessage name="admin_password" component="div" className="text-red-500" />
                </div>

                <div className="order-form-group mt-6">
                    <label htmlFor="confirm_password">Confirm password</label>
                    <Field
                        name='confirm_password'
                        id='confirm_password'
                        type='text'
                        className="order-input"
                    />
                    <ErrorMessage name="confirm_password" component="div" className="text-red-500" />
                </div>

                <div className="order-form-group mt-6">
                    <label htmlFor="price">Price per month</label>
                    <Field
                        name='price'
                        id='price'
                        type='text'
                        className="order-input"
                        value='$25.00'
                        disabled
                    />
                </div>

                <div className="order-btn-group pt-6">
                    <button type="submit">Submit</button>
                </div>
            </Form>
        </Formik>
    ) 
}

export default ChildPanelForm;