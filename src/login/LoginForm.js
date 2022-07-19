import styled from "styled-components";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form, useField } from "formik";

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

const ContainerForm = styled(Form)`
  width: 100%;
  max-width: 390px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  color: #393d43;
  > div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
  }
  > h1 {
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
    cursor: pointer;
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
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .remember label input:checked ~ .checkmark {
    background-color: #f6c90e;
    color: #393d43;
    /* border: 0.1rem solid #f6c90e; */
  }
  @media (max-width: 768px) {
    background-color: #f1f1f150;
    padding: 2rem;
  }
`;

const LoginForm = () => {
  return (
    <ContainerForm>
      <h1>LOGIN</h1>
      <InputComponent
        title="Username"
        name="userName"
        type="text"
        placeholder="userName"
      />
      <InputComponent
        title="Password"
        name="password"
        type="password"
        placeholder="Password"
      />
      <div className="remember">
        <label>
          <input type="checkbox" defaultChecked={true} />
          <span className="checkmark">
            <FontAwesomeIcon icon={faCheck} />
          </span>
          remember me
        </label>
      </div>
      <button type="submit">Sign In</button>
      <p>
        don't have an account?
        <a href="/register">sign up</a>
      </p>
    </ContainerForm>
  );
};

export default LoginForm;
