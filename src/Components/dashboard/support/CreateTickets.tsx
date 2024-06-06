'use client';
import { ErrorMessage, Field, Form, Formik } from "formik";
import { FC, useState } from "react";
import { 
    RiArchive2Line, 
    RiMoneyDollarCircleLine, 
    RiQuestionLine, 
    RiStarSmileLine 
} from "react-icons/ri";
import * as Yup from 'yup';

const validationSchema = {
    order: Yup.object().shape({
        orderId: Yup.string().required("Order ID is required"),
        message: Yup.string().required("Message is required"),
    }),
    payment: Yup.object().shape({
        paymentId: Yup.string().required("Payment ID is required"),
        message: Yup.string().required("Message is required"),
    }),
    affiliates: Yup.object().shape({
        message: Yup.string().required("Message is required"),
    }),
    other: Yup.object().shape({
        message: Yup.string().required("Message is required"),
    }),
};

const CreateTickets : FC = () => {
    const [category, setCategory] = useState<string>('order');
    const [activeButton, setActiveButton] = useState<string>('');

    const handleCategoryClick = (category : string) : void => {
        setCategory(category);
        setActiveButton(category);
    };

    // Category buttons
    const buttons = [
        {
            name: 'order',
            icon: <RiArchive2Line size={24} />,
        },
        {
            name: 'payment',
            icon: <RiMoneyDollarCircleLine size={24} />,
        },
        {
            name: 'affiliates',
            icon: <RiStarSmileLine size={24} />,
        },
        {
            name: 'other',
            icon: <RiQuestionLine size={24} />,
        }
    ];

    let formContent : JSX.Element = <></>;

    switch (category) {
        case 'order':
            formContent = (
                <Formik 
                    initialValues={{
                        order_id: "",
                        message: "",
                    }}
                    validationSchema={validationSchema.order}
                    onSubmit={values => console.log(values)}
                >
                    <Form className="mass-order-form">
                        <div className="order-form-group mt-6">
                            <label htmlFor="order_id">Order id</label>
                            <Field name="order_id" id="order_id" type="text" className="order-input" />
                            <ErrorMessage name="order_id" component="div" className="text-red-500" />
                        </div>
                        <div className="order-form-group mt-6">
                            <label htmlFor="message">Message</label>
                            <Field
                                name='message'
                                id='message'
                                component="textarea"
                                rows={10}
                                className="order-input"
                            />
                            <ErrorMessage name="message" component="div" className="text-red-500" />
                        </div>
                        <div className="order-btn-group pt-6">
                            <button type="submit">Submit</button>
                        </div>
                    </Form>
                </Formik>
            );
            break;
        case 'payment':
            formContent = (
                <Formik 
                    initialValues={{
                        payment_id: "",
                        message: "",
                    }}
                    validationSchema={validationSchema.payment}
                    onSubmit={values => console.log(values)}
                >
                    <Form className="order-id-form">
                        <div className="order-form-group mt-6">
                            <label htmlFor="payment_id">Payment id</label>
                            <Field name="payment_id" id="payment_id" type="text" className="order-input" />
                            <ErrorMessage name="payment_id" component="div" className="text-red-500" />
                        </div>
                        <div className="order-form-group mt-6">
                            <label htmlFor="message">Message</label>
                            <Field
                                name='message'
                                id='message'
                                component="textarea"
                                rows={10}
                                className="order-input"
                            />
                            <ErrorMessage name="message" component="div" className="text-red-500" />
                        </div>
                        <div className="order-btn-group pt-6">
                            <button type="submit">Submit</button>
                        </div>
                    </Form>
                </Formik>
            );
            break;
        case 'affiliates':
            formContent = (
                <Formik 
                    initialValues={{
                        message: '',
                    }}
                    validationSchema={validationSchema.affiliates}
                    onSubmit={values => console.log(values)}
                >
                    <Form className="order-id-form">
                        <div className="order-form-group mt-6">
                            <label htmlFor="message">Message</label>
                            <Field
                                name='message'
                                id='message'
                                component="textarea"
                                rows={10}
                                className="order-input"
                            />
                            <ErrorMessage name="message" component="div" className="text-red-500" />
                        </div>
                        <div className="order-btn-group pt-6">
                            <button type="submit">Submit</button>
                        </div>
                    </Form>
                </Formik>
            );
            break;
        case 'other':
            formContent = (
                <Formik 
                    initialValues={{
                        message: '',
                    }}
                    validationSchema={validationSchema.other}
                    onSubmit={values => console.log(values)}
                >
                    <Form className="order-id-form">
                        <div className="order-form-group mt-6">
                            <label htmlFor="message">Message</label>
                            <Field
                                name='message'
                                id='message'
                                component="textarea"
                                rows={10}
                                className="order-input"
                            />
                            <ErrorMessage name="message" component="div" className="text-red-500" />
                        </div>
                        <div className="order-btn-group pt-6">
                            <button type="submit">Submit</button>
                        </div>
                    </Form>
                </Formik>
            );
            break;
        default:
            formContent = (
                <Formik 
                    initialValues={{
                        order_id: "",
                        message: "",
                    }}
                    validationSchema={validationSchema.order}
                    onSubmit={values => console.log(values)}
                >
                    <Form className="order-id-form">
                        <div className="order-form-group mt-6">
                            <label htmlFor="order_id">Order id</label>
                            <Field name="order_id" id="order_id" type="text" className="order-input" />
                            <ErrorMessage name="order_id" component="div" className="text-red-500" />
                        </div>
                        <div className="order-form-group mt-6">
                            <label htmlFor="message">Message</label>
                            <Field
                                name='message'
                                id='message'
                                component="textarea"
                                rows={10}
                                className="order-input"
                            />
                            <ErrorMessage name="message" component="div" className="text-red-500" />
                        </div>
                        <div className="order-btn-group pt-6">
                            <button type="submit">Submit</button>
                        </div>
                    </Form>
                </Formik>
            );
            break;
    }
    
    return (
        <div className="order">
            <div className="order-top">
                <h4 className="text-lg font-semibold tracking-wider">
                    Contact Support
                </h4>
            </div>
            <div className="order-content">
                {/* Category buttons */}
                <div className="support-buttons">
                    {buttons.map((category) => (
                        <button
                            key={category.name}
                            className={`support-button ${activeButton === category.name ? 'active-btn' : ''}`}
                            onClick={() => handleCategoryClick(category.name)}
                        >
                            {category.icon}
                            {category.name}
                        </button>
                    ))}
                </div>

                {/* Form */}
                {formContent}
            </div>
        </div>
    );
}   

export default CreateTickets;