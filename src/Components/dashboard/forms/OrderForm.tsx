import { ErrorMessage, Field, Form, Formik } from "formik";
import Link from "next/link";
import { FC } from "react";
import * as Yup from "yup";

// Define the validation schema
const validationSchema = Yup.object({
  search: Yup.string().required("Search is required"),
  category: Yup.string().required("Category is required"),
  services: Yup.string().required("Services are required"),
  link: Yup.string().required("Link is required").url("Invalid URL format"),
  quantity: Yup.number()
    .required("Quantity is required")
    .positive("Quantity must be a positive number")
    .integer("Quantity must be an integer"),
  charge: Yup.string().required("Charge is required"),
});

const OrderForm: FC = (): JSX.Element => {
  return (
    <Formik
      initialValues={{
        search: "",
        category: "",
        services: "",
        link: "",
        quantity: "",
        charge: "",
      }}
      validationSchema={validationSchema}
      onSubmit={values => console.log(values)}
    >
      <Form className="mt-8">
        <Field
          name="search"
          placeholder="Search"
          type="search"
          className="order-input mt-6"
          autoComplete="off"
          required
        />

        <div className="order-form-group mt-6">
          <label htmlFor="category">Category</label>
          <Field
            name="category"
            id="category"
            component="select"
            className="order-input"
          >
            <option value="" label="Select services" />
            <option value="all">All</option>
            <option value="instagram">Instagram</option>
            <option value="facebook">Facebook</option>
          </Field>
          <ErrorMessage
            name="category"
            component="div"
            className="text-red-500"
          />
        </div>

        <div className="order-form-group mt-6">
          <label htmlFor="services">Services</label>
          <Field
            name="services"
            id="services"
            component="select"
            className="order-input"
          >
            <option value="" label="Select services" />
            <option value="instagram">Instagram</option>
            <option value="facebook">Facebook</option>
          </Field>
          <ErrorMessage
            name="services"
            component="div"
            className="text-red-500"
          />
        </div>

        <div className="order-form-group mt-6">
          <label htmlFor="link">Link</label>
          <Field name="link" id="link" type="text" className="order-input" />
          <ErrorMessage name="link" component="div" className="text-red-500" />
        </div>

        <div className="order-form-group mt-6">
          <label htmlFor="quantity">Quantity</label>
          <Field
            name="quantity"
            id="quantity"
            type="number"
            className="order-input"
          />
          <ErrorMessage
            name="quantity"
            component="div"
            className="text-red-500"
          />
        </div>

        <div className="order-form-group mt-6">
          <label htmlFor="charge">charge</label>
          <Field
            name="charge"
            id="charge"
            type="text"
            className="order-input"
            disabled
          />
        </div>

        <div className="order-btn-group pt-6">
          <button type="submit">Submit</button>
          <Link href="/dashboard/add-funds" className="order-link">
            Add Funds
          </Link>
        </div>
      </Form>
    </Formik>
  );
};

export default OrderForm;
