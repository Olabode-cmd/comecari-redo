import { Link } from 'react-router-dom';
import Logo from '../../images/comecari-logo.png';
import { useFormik } from 'formik';
import { signUpSchema } from '../../validation/schemas';

const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      console.log(values);
      // Handle form submission
    },
  });
  
  return (
    <>
      <div className="bg-primary pt-16 pb-8">
        <div className='w-[95%] md:w-[40%] lg:w-[35%] mx-auto'>
          <img src={Logo} alt="logo" className='w-[95px] mx-auto mb-16' />

          {/* <!-- Sign Up Form --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black text-lg dark:text-white">
                Get started
              </h3>
              <p className="text-gray-500 font-medium text-sm mt-1">Create your account here</p>
            </div>
            <form onSubmit={formik.handleSubmit}>
              <div className="p-6.5">
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className={`w-full rounded border-[1.5px] ${
                      formik.touched.name && formik.errors.name 
                        ? 'border-red-500' 
                        : 'border-stroke'
                    } bg-transparent py-3 px-5`}
                    {...formik.getFieldProps('name')} font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>

                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className={`w-full rounded border-[1.5px] ${
                      formik.touched.email && formik.errors.email 
                        ? 'border-red-500' 
                        : 'border-stroke'
                    } bg-transparent py-3 px-5`}
                    {...formik.getFieldProps('email')} font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>

                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter password"
                    className={`w-full rounded border-[1.5px] ${
                      formik.touched.password && formik.errors.password 
                        ? 'border-red-500' 
                        : 'border-stroke'
                    } bg-transparent py-3 px-5`}
                    {...formik.getFieldProps('password')} font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>

                <div className="mb-5.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Re-type Password
                  </label>
                  <input
                    type="password"
                    placeholder="Re-enter password"
                    className={`w-full rounded border-[1.5px] ${
                      formik.touched.confirmPassword && formik.errors.confirmPassword 
                        ? 'border-red-500' 
                        : 'border-stroke'
                    } bg-transparent py-3 px-5`}
                    {...formik.getFieldProps('confirmPassword')} font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>

                <button 
                  type="submit"
                  className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray"
                  disabled={!formik.isValid || formik.isSubmitting}
                >
                  Sign Up
                </button>

                <p className="text-sm mt-3 text-center font-medium">Already have an account? &nbsp;
                  <Link to="/auth/signin" className="text-primary underline">
                    Sign in
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
