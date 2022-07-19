import * as Yup from "yup";

const RegisterSchema = Yup.object().shape({
  firstName: Yup.string().required("Please fill out the form below."),
  lastName: Yup.string().required("Please fill out the form below."),
  userName: Yup.string().required("Please fill out the form below."),
  email: Yup.string().required("Please fill out the form below."),
  password: Yup.string().required("Please fill out the form below."),
});

export default RegisterSchema;
