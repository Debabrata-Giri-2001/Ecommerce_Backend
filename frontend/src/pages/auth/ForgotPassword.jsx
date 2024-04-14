import React from 'react'
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

const RestSchema = [
    {
        key: "1",
        label: "Email ID",
        placeHolder: "Type Your Email ",
        icon: "",
        name: "email",
        type: "text",
        validationSchema: Yup.string().required("Email ID is required"),
        initialValue: "",
    },
];


const ForgotPassword = () => {


    const initialValues = RestSchema.reduce(function (accumulator, currentValue) {
        accumulator[currentValue.name] = currentValue.initialValue;
        return accumulator;
    }, {});

    const validationSchema = RestSchema.reduce(function (accumulator, currentValue) {
        accumulator[currentValue.name] = currentValue.validationSchema;
        return accumulator;
    }, {});


    const handleResetPass = async (values) => {

        console.log("VALUE", values);

    };

    return (
        <div className="h-screen w-full bg-cover bg-no-repeat bg-top bg-bgImageOne flex justify-center items-center">
            <div className='backdrop-blur-sm flex  h-5/6 w-5/6 rounded-lg p-12 border-slate-300 border-2'>
                {/* left side */}
                <div className='bg-slate-200 w-[50%] items-center'>
                    {/* Left side content */}
                    <h1 className='font-serif text-7xl px-3 py-6'>Reset Password</h1>

                    <Formik
                        initialValues={initialValues}
                        validationSchema={Yup.object(validationSchema)}
                        onSubmit={handleResetPass}
                    >
                        {(formik) => (
                            <Form className="flex flex-col gap-4 w-full my-4 px-12">
                                {RestSchema.map((item) => (
                                    <Field name={item.name} key={item.key}>
                                        {(props) => (
                                            <div
                                                className="flex flex-col gap-1 w-full"
                                                key={item.key}
                                            >
                                                <label
                                                    htmlFor={item.name}
                                                    className="text-themeDarkGray text-md font-semibold"
                                                >
                                                    {item.label}
                                                </label>
                                                <div
                                                    className={`flex items-center`}
                                                >
                                                    <input
                                                        id={item.name}
                                                        name={item.name}
                                                        placeholder={item.placeHolder}
                                                        type={item.type}
                                                        className="p-3 w-full outline-none border-0 rounded-md shadow-md  focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                                                        onChange={(e) => {
                                                            props.field.onChange(e);
                                                            formik.handleChange(e);
                                                        }}
                                                        onBlur={(e) => {
                                                            props.field.onBlur(e);
                                                            formik.handleBlur(e);
                                                        }}
                                                    />
                                                </div>
                                                {props.meta.touched && props.meta.error && (
                                                    <div className="text-red-600 text-sm">
                                                        {props.meta.error}
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </Field>
                                ))}
                                <div className="flex flex-col items-start justify-between w-full gap-4">
                                    <div className="w-full">
                                        <button
                                            className={`p-2 ${formik.isSubmitting || !formik.isValid ? 'bg-slate-400' : 'bg-slate-700'} text-slate-100 font-bold font-serif text-xl w-full ${formik.isSubmitting || !formik.isValid ? 'cursor-not-allowed' : 'cursor-pointer'} `}
                                            type="submit"
                                            disabled={
                                                formik.isSubmitting || !formik.isValid
                                            }
                                        >
                                            SUBMIT
                                        </button>
                                    </div>
                                    <div className='w-full '>
                                        <span className="flex w-full justify-center text-center text-slate-600 font-semibold text-xl">
                                            Don't have an account?{"  "}
                                        </span>
                                        <div className="flex justify-between w-full">
                                            <div>
                                                <a href="/register" className="group text-blue-600 transition duration-300 relative text-xl font-sans">
                                                    Register Now
                                                    <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></span>
                                                </a>
                                            </div>
                                            <div>
                                                <a href="/" className="group text-blue-800 transition duration-300 relative text-xl font-sans">
                                                    Log In
                                                    <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-800 transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
                {/* right side */}
                <div className='w-[50%] bg-imageForgotImage bg-cover bg-no-repeat'>
                    {/* Right side content */}

                </div>
            </div>
        </div>
    )
}

export default ForgotPassword
