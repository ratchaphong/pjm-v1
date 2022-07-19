import styled from "styled-components";
import { Formik } from "formik";
import bbom from "../assets/images/bbom.jpg";
import initialValues from "./LoginForm.utils";
import validation from "./LoginForm.validation";
import LoginForm from "./LoginForm";
import enhancer from "./index.compose";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  font-family: "Roboto", sans-serif;
  .mascot {
    width: 50%;
  }
  .mascot img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(0.7) saturate(0.5);
  }
  .form {
    width: 50%;
    height: 100%;
    position: relative;
  }
  @media (max-width: 768px) {
    .mascot {
      position: absolute;
      width: 100%;
      height: 100%;
    }
    .form {
      width: 100%;
    }
  }
`;

const Login = (props) => {
  const { isFetching, error, onSubmit } = props;
  return (
    <Container>
      <section className="mascot">
        <img src={bbom} alt="" />
      </section>
      <section className="form">
        <Formik
          enableReinitialize
          initialValues={initialValues}
          validationSchema={validation}
          onSubmit={onSubmit}
        >
          {(formikProps) => {
            return (
              <LoginForm
                {...formikProps}
                isFetching={isFetching}
                error={error}
              />
            );
          }}
        </Formik>
      </section>
    </Container>
  );
};

export default enhancer(Login);
