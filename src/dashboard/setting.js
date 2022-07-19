import styles from "./setting.module.css";
import { Formik, useField, Form } from "formik";
import validation from "./setting.validation";

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

const Setting = ({ data, onSubmitSetting }) => {
  return (
    <section id="setting" className={styles.setting}>
      <h1>Setting</h1>
      <div className={styles.detail}>
        <div>
          <h4>first name</h4>
          <p>{data?.firstName}</p>
        </div>
        <div>
          <h4>last name</h4>
          <p>{data?.lastName}</p>
        </div>
        <div>
          <h4>email</h4>
          <p>{data?.email}</p>
        </div>
        <div>
          <h4>position</h4>
          <p>{data?.isAdmin ? "Admin" : "User"}</p>
        </div>
        <div>
          <h4>update at</h4>
          <p>{data?.updatedAt ? data.updatedAt.split("T")[0] : "-"}</p>
        </div>
      </div>
      <h2>Edit</h2>
      <Formik
        enableReinitialize
        initialValues={data}
        validationSchema={validation}
        onSubmit={onSubmitSetting}
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
              <div>
                <button type="submit" disabled={!formikProps.isValid}>
                  Submit
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </section>
  );
};

export default Setting;
