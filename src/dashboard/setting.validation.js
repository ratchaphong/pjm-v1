import * as Yup from "yup";

const EditSchema = Yup.object().shape({
  firstName: Yup.string().required("Please fill out the form below."),
  lastName: Yup.string().required("Please fill out the form below."),
  email: Yup.string().required("Please fill out the form below."),
});

export default EditSchema;
