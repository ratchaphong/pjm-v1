import * as Yup from "yup";

const EditSchema = Yup.object().shape({
  productNumber: Yup.string().required("Please fill out the form below."),
  productName: Yup.string().required("Please fill out the form below."),
  status: Yup.string().required("Please fill out the form below."),
  stock: Yup.number().required("Please fill out the form below."),
});

export default EditSchema;
