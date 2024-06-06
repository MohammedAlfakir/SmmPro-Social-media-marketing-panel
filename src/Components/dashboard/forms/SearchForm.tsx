import { ErrorMessage, Field, Form, Formik } from "formik";
import { FC } from "react";
import { RiSearch2Line } from "react-icons/ri";
import * as Yup from 'yup';

// Define the validation schema
const validationSchema = Yup.object({
    search: Yup.string().required('Search is required')
});

const SearchForm : FC = () : JSX.Element => {
    return (
        <Formik
            initialValues={{
                search: '',
            }}
            validationSchema={validationSchema}
            onSubmit={values => console.log(values)}
        >
            <Form className="w-full search-form">
                <RiSearch2Line color="#d1d1d1" size={20} />
                <Field 
                    name='search'
                    placeholder="Search"
                    type="search"
                    className="order-input"
                    autoComplete="off"
                    required
                />
                <ErrorMessage name="search" component="div" className="text-red-500" />
            </Form>
        </Formik>
    )
}

export default SearchForm;