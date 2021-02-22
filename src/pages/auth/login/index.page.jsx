import "./index.page.scss";
import { useMutation } from "react-query";
import { Login } from "../../../api/auth.api";
import { KEY_QUERY } from "../../../constants/key";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useSetRecoilState } from "recoil";
import { AuthContext } from "../../../context/auth.context";

const LoginPage = () => {
  const setUser = useSetRecoilState(AuthContext)

  const { mutateAsync, isLoading } = useMutation(KEY_QUERY.LOGIN_QUERY, (payload) =>
    Login(payload),
    {
      onSuccess(data){
        setUser(data)
      },
      onError(error){
        console.log(error)
      }
    }
  )

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div className="card card-signin my-5">
            <div className="card-body">
              <h5 className="card-title text-center">Sign In</h5>
              <Formik
                validationSchema={Yup.object({
                  email: Yup.string()
                    .email("email must be email format")
                    .required("email must be required"),
                  password: Yup.string().required("password must be required"),
                })}
                onSubmit={(values) => mutateAsync(values)}
                initialValues={{
                  email: "",
                  password: "",
                }}
              >
                <Form className="form-signin">
                    <label htmlFor="email">Email</label>
                    <Field name="email" className="form-control" type="text" />
                    <ErrorMessage  name="email">
                      {msg => <div className="text-danger text-capitalize">{msg}</div>}
                    </ErrorMessage>

                    <div className="mb-4">
                    <label htmlFor="password">Password</label>
                    <Field name="password" className="form-control"  type="password" />
                    <ErrorMessage  name="password">
                      {msg => <div className="text-danger text-capitalize">{msg}</div>}
                    </ErrorMessage>
                    </div>

                  <button
                    className="btn btn-lg btn-primary btn-block text-uppercase"
                    type="submit"
                  >
                    {!isLoading ? "Sign in" : "Sign in ...."}
                  </button>
                  <hr className="my-4" />
                  <button
                    className="btn btn-lg btn-google btn-block text-uppercase"
                    type="button"
                  >
                    <i className="fab fa-google mr-2"></i> Sign in with Google
                  </button>
                  <button
                    className="btn btn-lg btn-facebook btn-block text-uppercase"
                    type="button"
                  >
                    <i className="fab fa-facebook-f mr-2"></i> Sign in with
                    Facebook
                  </button>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
