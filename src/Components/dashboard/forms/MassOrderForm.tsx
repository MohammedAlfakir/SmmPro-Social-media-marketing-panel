import { ErrorMessage, Field, Form, Formik } from "formik";
import { FC } from "react";
import { RiSearch2Line } from "react-icons/ri";
import * as Yup from 'yup';

// Define the validation schema
const validationSchema = Yup.object({
    mass_order: Yup.string().required('Search is required')
});

const MassOrderForm : FC = () : JSX.Element => {
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
            <Form className="mt-2 mass-order-form">
                <div className="order-form-group mt-6">
                    <label htmlFor="mass_order">One order per line in format</label>
                    <Field
                        name='mass_order'
                        id='mass_order'
                        component="textarea"
                        rows={10}
                        className="order-input"
                        placeholder='service_id | link | quantity'
                    />
                    <ErrorMessage name="mass_order" component="div" className="text-red-500" />
                </div>

                <div className="order-btn-group pt-6">
                    <button type="submit">Submit</button>
                </div>
            </Form>
        </Formik>
    )
}

export default MassOrderForm;