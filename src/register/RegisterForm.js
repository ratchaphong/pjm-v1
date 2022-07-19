import styled from "styled-components";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form, Field } from "formik";

const ContainerForm = styled(Form)`
  width: 100%;
  max-width: 390px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1.2rem;
  color: #393d43;
  > div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 45%;
  }
  > div:first-of-type {
    width: 100%;
  }
  > div:nth-child(6) {
    width: 100%;
  }
  > div:first-of-type h1 {
    width: fit-content;
    letter-spacing: 0.2rem;
    border-bottom: 0.2rem solid #f6c90e;
    padding-bottom: 0.1rem;
  }
  > div h4 {
    letter-spacing: 0.1rem;
  }
  > div small {
    color: var(--color-danger);
  }
  > div input[type="text"],
  div input[type="password"] {
    border-radius: 0.4rem;
    border: 0.1rem solid #000000;
    height: 36px;
    padding: 0 0.5rem;
    outline: none;
  }
  > div:last-of-type {
    display: flex;
    flex-direction: row;
  }
  button {
    color: #f1f1f1;
    background-color: #f6c90e;
    font-weight: bold;
    font-size: 16px;
    width: 100%;
    height: 2rem;
    border-radius: 0.8rem;
    border: none;
    text-transform: uppercase;
    transition: opacity 0.3s ease;
  }
  button:hover {
    opacity: 0.8;
    cursor: pointer;
  }
  button:disabled {
    cursor: not-allowed;
    color: #393d43;
    background-color: #f1f1f1;
  }

  p {
    font-weight: bold;
  }
  p a {
    padding: 0 0.4rem;
    color: #f6c90e;
    text-transform: capitalize;
  }
  .remember label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .remember label input {
    display: none;
  }
  .remember label .checkmark {
    cursor: not-allowed;
    width: 1rem;
    height: 1rem;
    /* background-color: #f1f1f1; */
    border-radius: 0.2rem;
    border: 0.1rem solid #393d43;
    /* color: #f1f1f1; */
    color: #ffffff;
    font-size: 0.8rem;
    position: relative;
  }
  .remember label .checkmark svg {
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .remember label input:checked ~ .checkmark {
    background-color: #f6c90e;
    color: #393d43;
  }
  .remember label input:checked ~ .checkmark svg {
    opacity: 1;
  }
  @media (max-width: 768px) {
    background-color: #f1f1f150;
    padding: 2rem;
  }
`;

const RegisterForm = (props) => {
  const { handleSubmit, isValid, errors, touched } = props;
  return (
    <ContainerForm onSubmit={handleSubmit}>
      <div>
        <h1>REGISTER</h1>
      </div>
      <div>
        <h4>First Name</h4>
        <Field name="firstName" type="text" placeholder="First Name" />
        {touched.firstName && errors.firstName && (
          <small className="error">{errors.firstName}</small>
        )}
      </div>
      <div>
        <h4>Last Name</h4>
        <Field name="lastName" type="text" placeholder="Last Name" />
        {touched.lastName && errors.lastName && (
          <small className="error">{errors.lastName}</small>
        )}
      </div>
      <div>
        <h4>Username</h4>
        <Field name="userName" type="text" placeholder="Username" />
        {touched.userName && errors.userName && (
          <small className="error">{errors.userName}</small>
        )}
      </div>
      <div>
        <h4>Email</h4>
        <Field name="email" type="text" placeholder="Email" />
        {touched.email && errors.email && (
          <small className="error">{errors.email}</small>
        )}
      </div>
      <div>
        <h4>Password</h4>
        <Field name="password" type="password" placeholder="Password" />
        {touched.password && errors.password && (
          <small className="error">{errors.password}</small>
        )}
      </div>
      <div className="remember">
        <label>
          <input type="checkbox" checked={true} />
          <span className="checkmark">
            <FontAwesomeIcon icon={faCheck} />
          </span>
          User Admin
        </label>
      </div>
      <button type="submit" disabled={!isValid}>
        Sign Up
      </button>
      {/* <p>
            don't have an account?
            <a href="/register">sign up</a>
          </p> */}
    </ContainerForm>
  );
};

export default RegisterForm;
