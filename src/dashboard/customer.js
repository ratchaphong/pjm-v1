import {
  faEdit,
  faPeopleGroup,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./customer.module.css";
import { Formik, useField, Form } from "formik";
import validation from "./customer.validation";

const InputComponent = ({ title, name, type, placeholder, onChange }) => {
  const [field, meta, helpers] = useField(name);
  const { onBlur } = field;
  const { value, error, touched } = meta;
  const { setValue } = helpers;
  const handleChange = (e) => {
    const value = e.target.value;
    setValue(value);
    onChange(value);
  };
  return (
    <div>
      <h4>{title}</h4>
      <input
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={onBlur}
      />
      {touched && error && <small>{error}</small>}
    </div>
  );
};

// One day Time in ms (milliseconds)
const one_day = 1000 * 60 * 60 * 24;

function status(createdAt) {
  var present_date = new Date();
  var create_date = new Date(createdAt);
  var Result =
    Math.round(present_date.getTime() - create_date.getTime()) / one_day;
  var Final_Result = Result.toFixed(0);
  if (Final_Result <= 1) {
    return "New";
  } else if (Final_Result > 1 && Final_Result < 3) {
    return "Processing";
  } else {
    return "Success";
  }
}

const Customer = ({
  customers,
  customer,
  selectedCustomer,
  onSubmitCustomer,
  onDeleteCustomer,
  isAddCustomer,
  setIsAddCustomer,
  onAddCustomer,
}) => {
  return (
    <section id="customer" className={styles.customer}>
      <div className={styles.header}>
        <h1>Customer</h1>
        <div onClick={() => setIsAddCustomer(!isAddCustomer)}>
          <FontAwesomeIcon icon={faPeopleGroup} />
        </div>
      </div>
      {customers && customers.length > 0 && (
        <div className={styles.table}>
          <table>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Status</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {customers.slice(0, 20).map((d, index) => (
                <tr key={index}>
                  <td>{d?.firstName}</td>
                  <td>{d?.lastName}</td>
                  <td>{d?.email}</td>
                  <td>{status(d?.createdAt || new Date())}</td>
                  <td
                    onClick={() => {
                      selectedCustomer(d._id);
                      setIsAddCustomer(false);
                    }}
                  >
                    <FontAwesomeIcon icon={faEdit} />
                  </td>
                  <td
                    onClick={() => {
                      onDeleteCustomer(d._id);
                      setIsAddCustomer(false);
                    }}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {isAddCustomer ? (
        <div className={styles.detail}>
          <Formik
            enableReinitialize
            initialValues={{
              firstName: "firstName",
              lastName: "lastName",
              email: "email",
              phoneNumber: "phoneNumber",
              address: {
                subDistrict: "subDistrict",
                district: "district",
                province: "province",
                postCode: "postCode",
              },
            }}
            validationSchema={validation}
            onSubmit={onAddCustomer}
          >
            {(formikProps) => {
              return (
                <Form className={styles.form}>
                  <InputComponent
                    title="First Name"
                    name="firstName"
                    type="text"
                    placeholder="firstName"
                  />
                  <InputComponent
                    title="Last Name"
                    name="lastName"
                    type="text"
                    placeholder="lastName"
                  />
                  <InputComponent
                    title="Email"
                    name="email"
                    type="text"
                    placeholder="email"
                  />
                  <InputComponent
                    title="Phone Number"
                    name="phoneNumber"
                    type="text"
                    placeholder="phoneNumber"
                  />
                  <InputComponent
                    title="Sub District"
                    name="address.subDistrict"
                    type="text"
                    placeholder="subDistrict"
                  />
                  <InputComponent
                    title="District"
                    name="address.district"
                    type="text"
                    placeholder="district"
                  />
                  <InputComponent
                    title="Province"
                    name="address.province"
                    type="text"
                    placeholder="province"
                  />
                  <InputComponent
                    title="Post Code"
                    name="address.postCode"
                    type="text"
                    placeholder="postCode"
                  />
                  <div>
                    <button type="submit" disabled={!formikProps.isValid}>
                      Submit
                    </button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      ) : customer ? (
        <div className={styles.detail}>
          <h2>
            {customer?.firstName} {customer?.lastName}
          </h2>
          <div className={styles.previous}>
            <div>
              <h4>First Name</h4>
              <p>{customer?.firstName}</p>
            </div>
            <div>
              <h4>Last Name</h4>
              <p>{customer?.lastName}</p>
            </div>
            <div>
              <h4>Email</h4>
              <p>{customer?.email}</p>
            </div>
            <div>
              <h4>Phone Number</h4>
              <p>{customer?.phoneNumber}</p>
            </div>
            <div>
              <h4>Address</h4>
              <p>
                {customer?.address?.subDistrict} {customer?.address?.district}{" "}
                {customer?.address?.province} {customer?.address?.postCode}
              </p>
            </div>
          </div>
          <Formik
            enableReinitialize
            initialValues={customer}
            validationSchema={validation}
            onSubmit={onSubmitCustomer}
          >
            {(formikProps) => {
              return (
                <Form className={styles.form}>
                  <InputComponent
                    title="First Name"
                    name="firstName"
                    type="text"
                    placeholder="firstName"
                  />
                  <InputComponent
                    title="Last Name"
                    name="lastName"
                    type="text"
                    placeholder="lastName"
                  />
                  <InputComponent
                    title="Email"
                    name="email"
                    type="text"
                    placeholder="email"
                  />
                  <InputComponent
                    title="Phone Number"
                    name="phoneNumber"
                    type="text"
                    placeholder="phoneNumber"
                  />
                  <div>
                    <button type="submit" disabled={!formikProps.isValid}>
                      Submit
                    </button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      ) : null}
    </section>
  );
};

export default Customer;
