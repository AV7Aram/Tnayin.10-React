import { Formik } from "formik";
import { FbFieldList } from "../FbFieldList/FbFieldList";
import { FbSubmitSection } from "../FbSubmitSection/FbSubmitSection";
import { FbAddUser } from "../FbAddUser/FbAddUser";
import style from "./FbForm.module.css";

export function FbForm() {
  return (
    <div className={style.fb_Form}>
      <Formik
        initialValues={{
          firstName: "",
          LastName: "",
          email: "",
          birthday: "",
          password: "",
          confirmPassword: "",
        }}
        onSubmit={(values, { setSubmitting, setStatus }) => {
          const errors = {};

          if (!values.firstName) errors.firstName = "What's your name?";
          if (!values.LastName) errors.LastName = "What's your name?";
          if (!values.email) errors.email = "You'll use this when you log in and if you ever need to rest your password";
          if (!values.password) errors.password = "Enter a combination of at least six numbers, letters and punctuation marks (like ! and &)";
          if (!values.confirmPassword) {
            errors.confirmPassword = "Required";
          } else if (values.password !== values.confirmPassword) {
            errors.confirmPassword = "Passwords don't match!";
          }

          if (Object.keys(errors).length > 0) {
            setStatus({ errors });
          } else {
            setStatus({ submittedData: values, errors: {} });
          }

          setSubmitting(false);
        }}
      >
        {({
          values,
          handleChange,
          handleSubmit,
          setStatus,
          status,
        }) => {
          const handleFieldChange = (e) => {
            const { name, value } = e.target;
            handleChange(e);

            if (status?.errors?.[name]) {
              const newErrors = { ...status.errors };
              delete newErrors[name];
              setStatus({ ...status, errors: newErrors });
            }
          };

          const handleFieldBlur = (e) => {
            const { name, value } = e.target;
            const requiredFields = ["firstName", "LastName", "email", "password", "confirmPassword"];
            const newErrors = { ...status?.errors };

            if (requiredFields.includes(name) && !value) {
              newErrors[name] = "Required";
            } else if (name === "confirmPassword" && value !== values.password) {
              newErrors.confirmPassword = "Passwords don't match!";
            } else {
              delete newErrors[name];
            }

            setStatus({ ...status, errors: newErrors });
          };

          return (
            <>
              <form onSubmit={handleSubmit}>
                <FbFieldList
                  values={values}
                  handleChange={handleFieldChange}
                  handleBlur={handleFieldBlur}
                  errors={status?.errors}
                />
                <FbSubmitSection />
              </form>
              <FbAddUser data={status?.submittedData} />
            </>
          );
        }}
      </Formik>
    </div>
  );
}