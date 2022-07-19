import {
  faEdit,
  // faPeopleGroup,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./product.module.css";
import { Formik, useField, Form } from "formik";
import validation from "./product.validation";

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

const Product = ({
  products,
  product,
  selectedProduct,
  onSubmitProduct,
  onDeleteProduct,
  isAddProduct,
  setIsAddProduct,
  onAddProduct,
}) => {
  return (
    <section id="product" className={styles.product}>
      <div className={styles.header}>
        <h1>Product</h1>
        {/* <div onClick={() => setIsAddCustomer(!isAddCustomer)}>
          <FontAwesomeIcon icon={faPeopleGroup} />
        </div> */}
      </div>
      {products && products.length > 0 && (
        <div className={styles.table}>
          <table>
            <thead>
              <tr>
                <th>Product Number</th>
                <th>Product Name</th>
                <th>Status</th>
                <th>Stock</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {products.slice(0, 20).map((p, index) => (
                <tr key={index}>
                  <td>{p.productNumber}</td>
                  <td>{p.productName}</td>
                  <td>{p.status}</td>
                  <td>{p.stock}</td>
                  <td
                    onClick={() => {
                      selectedProduct(p._id);
                      setIsAddProduct(false);
                    }}
                  >
                    <FontAwesomeIcon icon={faEdit} />
                  </td>
                  <td
                    onClick={() => {
                      onDeleteProduct(p._id);
                      setIsAddProduct(false);
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
      {isAddProduct ? (
        <div className={styles.detail}>
          <Formik
            enableReinitialize
            initialValues={{
              productNumber: "productNumber",
              productName: "productName",
              status: "waiting",
              stock: 0,
            }}
            validationSchema={validation}
            onSubmit={onAddProduct}
          >
            {(formikProps) => {
              return (
                <Form className={styles.form}>
                  <InputComponent
                    title="Product Number"
                    name="productNumber"
                    type="text"
                    placeholder="firstName"
                  />
                  <InputComponent
                    title="Product Name"
                    name="productName"
                    type="text"
                    placeholder="lastName"
                  />
                  <InputComponent
                    title="Status"
                    name="status"
                    type="text"
                    placeholder="status"
                  />
                  <InputComponent
                    title="Stock"
                    name="stock"
                    type="number"
                    placeholder="stock"
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
      ) : product ? (
        <div className={styles.detail}>
          <h2>
            {product?.productNumber} - {product?.productName}
          </h2>
          <div className={styles.previous}>
            <div>
              <h4>Product Number</h4>
              <p>{product?.productNumber}</p>
            </div>
            <div>
              <h4>Product Name</h4>
              <p>{product?.productName}</p>
            </div>
            <div>
              <h4>Status</h4>
              <p>{product?.status}</p>
            </div>
            <div>
              <h4>Stock</h4>
              <p>{product?.stock}</p>
            </div>
          </div>
          <Formik
            enableReinitialize
            initialValues={product}
            validationSchema={validation}
            onSubmit={onSubmitProduct}
          >
            {(formikProps) => {
              return (
                <Form className={styles.form}>
                  <InputComponent
                    title="Product Number"
                    name="productNumber"
                    type="text"
                    placeholder="firstName"
                  />
                  <InputComponent
                    title="Product Name"
                    name="productName"
                    type="text"
                    placeholder="lastName"
                  />
                  <InputComponent
                    title="Status"
                    name="status"
                    type="text"
                    placeholder="email"
                  />
                  <InputComponent
                    title="Stock"
                    name="stock"
                    type="number"
                    placeholder="stock"
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

export default Product;
