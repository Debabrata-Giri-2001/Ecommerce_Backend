import React from 'react'
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

const RegistrSchema = [
    {
        key: "2",
        label: "Name",
        placeHolder: "Type Your Fast Name",
        icon: "",
        name: "firstName",
        type: "text",
        validationSchema: Yup.string().required("Fast Name is required"),
        initialValue: "",
    },
    {
        key: "3",
        label: "Email",
        placeHolder: "Type Your Email",
        icon: "",
        name: "email",
        type: "email",
        validationSchema: Yup.string().required("Email is required"),
        initialValue: "",
    },
    {
        key: "4",
        label: "Role",
        placeHolder: "role",
        icon: "",
        name: "personalNo",
        type: "select",
        options: [
            {
                label: "Admin",
                value: "admin",
            },
            {
                label: "User",
                value: "user",
            },
        ],
        validationSchema: Yup.string().required("Role Not is required"),
        initialValue: "",
    },
    {
        key: "5",
        label: "Password",
        placeHolder: "Type Your Password",
        icon: "",
        name: "password",
        type: "password",
        validationSchema: Yup.string()
            .min(6, "Password must be at least 6 characters")
            .required("Password is required"),
        initialValue: "",
    },
];

const Register = () => {


    const initialValues = RegistrSchema.reduce(function (accumulator, currentValue) {
        accumulator[currentValue.name] = currentValue.initialValue;
        return accumulator;
    }, {});

    const validationSchema = RegistrSchema.reduce(function (accumulator, currentValue) {
        accumulator[currentValue.name] = currentValue.validationSchema;
        return accumulator;
    }, {});


    const handleLogin = async (values) => {

        console.log("VALUE", values);

    };
    return (
        <div className="h-screen w-full bg-cover bg-no-repeat bg-top  flex justify-center items-center bg-gray-50">
            <div className='backdrop-blur-lg  w-3/6 rounded-lg p-12 border-slate-300 border-2 shadow-lg bg-white'>
                {/* left side */}
                <h1 class="text-2xl font-bold text-center mb-4  dark:text-gray-900">Register</h1>
                <Formik
                    initialValues={initialValues}
                    validationSchema={Yup.object(validationSchema)}
                    onSubmit={handleLogin}
                >
                    {(formik) => (
                        <Form className="flex flex-col gap-4 w-full my-4 px-12">
                            {RegistrSchema.map((item) => (
                                <Field name={item.name} key={item.key}>
                                    {(props) => (
                                        <div className="flex flex-col gap-1 w-full" key={item.key}>
                                            <label
                                                htmlFor={item.name}
                                                className="text-themeDarkGray text-md font-semibold"
                                            >
                                                {item.label}
                                            </label>
                                            <div
                                                className={`flex items-center `}
                                            >
                                                {(() => {
                                                    switch (item.type) {
                                                        case "select":
                                                            return (
                                                                <select
                                                                    id={item.name}
                                                                    name={item.name}
                                                                    onChange={(e) => {
                                                                        props.field.onChange(e);
                                                                        formik.handleChange(e);
                                                                    }}
                                                                    onBlur={(e) => {
                                                                        props.field.onBlur(e);
                                                                        formik.handleBlur(e);
                                                                    }}
                                                                    className="p-3 w-full outline-none border-0 rounded-md shadow-md  focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                                                                >
                                                                    <option value="" disabled selected className=''>
                                                                        Select {item.label}
                                                                    </option>
                                                                    {item.options.map((option) => (
                                                                        <option key={option.value} value={option.value}>
                                                                            {option.label}
                                                                        </option>
                                                                    ))}
                                                                </select>
                                                            );
                                                        default:
                                                            return (
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
                                                            );
                                                    }
                                                })()}
                                            </div>
                                            {props.meta.touched && props.meta.error && (
                                                <div className="text-red-500 font-mono text-sm mt-2">
                                                    {props.meta.error}
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </Field>
                            ))}

                            {/* Rest of your form code */}
                            <div className="flex flex-col items-start justify-between w-full gap-4">
                                <div className="w-full">
                                    <button
                                        className={`p-2 ${formik.isSubmitting || !formik.isValid ? 'bg-slate-400' : 'bg-slate-700'} text-slate-100 font-bold font-serif text-xl w-full ${formik.isSubmitting || !formik.isValid ? 'cursor-not-allowed' : 'cursor-pointer'} `}
                                        type="submit"
                                        disabled={
                                            formik.isSubmitting || !formik.isValid
                                        }
                                    >
                                        SIGNUP
                                    </button>
                                </div>
                                <div className='w-full '>
                                    <span className="flex w-full justify-center text-center text-slate-600 font-semibold text-xl">
                                        Don't have an account?{"  "}
                                    </span>
                                    <div className="flex justify-between w-full">
                                        <div>
                                            <a href="/" className="group text-blue-600 transition duration-300 relative text-xl font-sans">
                                                Log In
                                                <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></span>
                                            </a>
                                        </div>
                                        <div>
                                            <a href="/forgot-password" className="group text-red-500 transition duration-300 relative text-xl font-sane font-semibold">
                                                Forgot Password
                                                <span className="absolute bottom-0 left-0 w-full h-1 bg-red-500 transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Form>

                    )}
                </Formik>
            </div>
        </div>
    )
}

export default Register
