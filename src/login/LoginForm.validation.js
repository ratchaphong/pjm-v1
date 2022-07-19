import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  userName: Yup.string().required("Please fill out the form below."),
  password: Yup.string().required("Please fill out the form below."),
});

export default LoginSchema;
