import { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Eye, EyeOff, Phone, Lock } from "lucide-react";
import OrangeGlow from '../components/OrangeGlow'
import PurpleGlow2 from '../components/PurpleGlow2'
import logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import RegisterPage from "./RegisterPage";
import LoginRegisterNavbar from "../components/LoginRegisterNavbar";


export default function LoginPage() {



    const [showPassword, setShowPassword] = useState(false);

    const initialValues = {
        phone: "",
        password: "",
        studentCode: "",
        remember: false,
    };

    const validationSchema = Yup.object({
        phone: Yup.string()
            .required("Phone number is required")
            .matches(/^[0-9]{11}$/, "Phone must be 11 digits"),
        password: Yup.string()
            .required("Password is required")
            .min(6, "Minimum 6 characters"),
        studentCode: Yup.string(),
    });

    const handleSubmit = (values) => {
        console.log("Form Data:", values);
    };

    return (
        <div className="min-h-screen flex items-center justify-center dark:bg-black bg-white dark:text-white text-black relative">

            
            <LoginRegisterNavbar/>


            <div className="w-full max-w-md px-6 flex flex-col items-center">

                <PurpleGlow2 />
                <OrangeGlow />
                {/* Logo */}
                <img src={logo} alt="Logo" className="w-40 mb-4 mt-10 " />

                <h2 className="text-2xl font-semibold text-center">Welcome Back!</h2>
                <p className="dark:text-gray-400  text-black text-center mb-8">
                    We are excited to have your back. Log in now and access your account.
                </p>

                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {() => (
                        <Form className="w-full space-y-4">

                            {/* Phone */}
                            <div>
                                <label className="text-sm">Phone Number</label>
                                <div className="flex items-center gap-3 dark:bg-[#1A1A1A] bg-[#FFFFFF] rounded-lg px-4 h-14 mt-1 focus-within:ring-2 focus-within:ring-brand-purple">
                                    <Phone size={20} className="text-gray-400" />
                                    <Field
                                        name="phone"
                                        type="text"
                                        placeholder="01234567899"
                                        className="bg-transparent dark:text-white text-black placeholder-gray-400 w-full h-full outline-none text-base"
                                    />
                                </div>
                                <ErrorMessage
                                    name="phone"
                                    component="div"
                                    className="text-red-400 text-xs mt-1"
                                />
                            </div>

                            {/* Password */}
                            <div>
                                <label className="text-sm">Password</label>
                                <div className="flex items-center gap-3 dark:bg-[#1A1A1A] bg-[#FFFFFF] rounded-lg px-4 h-14 mt-1 focus-within:ring-2 focus-within:ring-brand-purple">
                                    <Lock size={20} className="text-gray-400" />
                                    <Field
                                        name="password"
                                        type={showPassword ? "text" : "password"}
                                        className="bg-transparent dark:text-white text-black placeholder-gray-400 w-full h-full outline-none text-base"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="text-gray-400 hover:text-white"
                                    >
                                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                    </button>
                                </div>
                                <ErrorMessage
                                    name="password"
                                    component="div"
                                    className="text-red-400 text-xs mt-1"
                                />
                            </div>

                            {/* Remember & Forgot */}
                            <div className="flex justify-between items-center text-sm">
                                <label className="flex items-center gap-2 ">
                                    <Field
                                        type="checkbox"
                                        name="remember"
                                        className="checkbox-primary checkbox-sm checkbox "
                                    />
                                    Remember Me
                                </label>
                                <Link to="/forgetpassword"
                                    type="button"
                                    className="text-red-400 hover:underline"
                                >
                                    Forgot password?
                                </Link>
                            </div>

                            {/* Divider */}
                            <div className="flex items-center gap-4">
                                <div className="flex-1 h-px bg-gray-600" />
                                <span className="text-gray-400 text-sm">OR</span>
                                <div className="flex-1 h-px bg-gray-600" />
                            </div>

                            {/* Student Code */}
                            <div>
                                <label className="text-sm dark:text-white text-black">Student Code</label>
                                <div className="flex items-center dark:bg-[#1A1A1A] bg-[#FFFFFF] rounded-lg px-4 h-14 mt-1 focus-within:ring-2 focus-within:ring-brand-purple">
                                    <Field
                                        name="studentCode"
                                        type="text"
                                        placeholder="Enter your code"
                                        className="bg-transparent dark:text-white text-black placeholder-gray-400 w-full h-full outline-none text-base"
                                    />
                                </div>
                            </div>

                            {/* Button */}
                            <button
                                type="submit"
                                className="w-full h-14 rounded-xl bg-main-gr! font-semibold text-lg hover:opacity-90 text-[#FFFFFF] transition"
                            >
                                Log In
                            </button>

                        </Form>
                    )}
                </Formik>

                <p className="text-center text-sm dark:text-gray-400 text-black mt-6">
                    Don't have an account yet?{" "}
                    <Link to="/register" className="text-cyan-400 cursor-pointer hover:underline">
                        Register
                    </Link>

                </p>

            </div>
        </div>
    );
}
