import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useFormik } from "formik";
import * as Yup from "yup";

import fx from "../assets/images/f-x.svg"
import ff from "../assets/images/f-f.svg"
import fli from "../assets/images/f-li.svg"
import fpin from "../assets/images/f-pin.svg"
import fbe from "../assets/images/f-be.svg"
import fbf from "../assets/images/f-bf.svg"
import fmd from "../assets/images/f-md.svg"
import fs from "../assets/images/f-s.svg"
import fmb from "../assets/images/f-mb.svg"

const FormSection = () => {
  const recaptcha = useRef(null);
  const [selectedCountry, setSelectedCountry] = useState("IN");

  const countries = [
    { code: "ZZ", name: "International" },
    { code: "AF", name: "Afghanistan" },
    { code: "AX", name: "Åland Islands" },
    { code: "AL", name: "Albania" },
    { code: "DZ", name: "Algeria" },
    { code: "AS", name: "American Samoa" },
    { code: "AD", name: "Andorra" },
    { code: "AO", name: "Angola" },
    { code: "AI", name: "Anguilla" },
    { code: "IN", name: "India", selected: true },
    { code: "US", name: "United States" },
    { code: "GB", name: "United Kingdom" },
    { code: "CA", name: "Canada" },
    { code: "AU", name: "Australia" },
    { code: "FR", name: "France" },
    { code: "DE", name: "Germany" },
  ];

  const phoneRegExp = /^[0-9]{10}$/g;
  const SignupSchema = Yup.object().shape({
    fullName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    phoneNumber: Yup.string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    textBox: Yup.string(),
  });

  const formik = useFormik({
    initialValues: {
      fullName: "",
      phoneNumber: "",
      email: "",
      textBox: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: SignupSchema,
  });

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <section className="flex bg-[#03142e] h-[870px] sm:h-[950px] pt-6 sm:pt-0 sm:px-15 bg-navy-900">
      {/* Left Section */}

      <div className="invisible w-0 sm:visible sm:w-1/2 sm:p-6 sm:ml-[35px] text-white">
        <div className="sm:space-y-6 sm:mt-5">
          <h2 className="text-[32px] font-semibold">We Are Here To Help You</h2>
          <h1 className="text-[49px] font-semibold">
            Let&apos;s Transform Your Vision Into Value.
          </h1>

          <div className="sm:mt-12">
            <h3 className="text-[20px] font-semibold sm:mb-4">Contact us</h3>
            <div className="sm:space-y-2">
              <div className="flex items-center sm:p-5 sm:space-x-2">
                <img src={ fs } alt="" />
                <span>biz.tecoreng</span>
              </div>
              <div className="flex items-center p-5 space-x-2">
                <img src= { fmb } alt="" />
                <span>+91 85117 46476</span>
              </div>
            </div>
          </div>

          <div className="mt-8 p-5">
            <h3 className="text-[36px] font-bold mb-4">Our Socials</h3>
            <p className="text-[16px] font-semibold mb-4">
              Don&t Miss To Follow Us On Our Social Networks Accounts.
            </p>
            <div className="flex space-x-4">
              <img src= {fx} alt="X" />
              <img src= {ff} alt="Facebook" />
              <img src= {fli} alt="LinkedIn" />
              <img src= {fpin} alt="Pinterest" />
              <img src= {fbe} alt="Behance" />
              <img src= {fbf} alt="Buffer" />
              <img src= {fmd} alt="Medium" />
            </div>
          </div>
        </div>
      </div>

      {/* Right Section - Form */}
      <div className="w-full sm:w-1/2 p-[15px] sm:p-12">
        <div className="bg-white rounded-[35px] sm:rounded-[40px] py-8 px-4 sm:p-8 w-[350px] sm:w-[500px]">
          <h2 className="text-[20px] sm:text-[55px] font-[500] mb-2">
            Get in{" "}
            <span className="bg-gradient-to-r from-[rgb(255,97,11)] via-[rgb(255,140,60)] to-[rgb(252,183,162)] bg-clip-text text-transparent">
              touch
            </span>
          </h2>
          <p className="text-[10px] sm:text-[16px] font-medium text-black mb-6 leading-[21px]">
            We are always ready to help. There are many ways to contact us. You
            may drop us a line, give us a call, send an email.
          </p>

          <form className="space-y-4" onSubmit={formik.handleSubmit}>
            <div>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 border-b-2 border-[#767676] focus:outline-none"
                name="fullName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.fullName}
              />

              {formik.errors.fullName && formik.touched.fullName && (
                <div className="mt-1 text-red-500 text-xs bg-red-100 p-1 rounded">
                  {formik.errors.fullName}
                </div>
              )}
            </div>

            <div className="relative">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center">
                <div className="flex items-center space-x-1 pr-2 border-r border-gray-300">
                  <img
                    className="w-5 h-3.5 object-cover"
                    alt={selectedCountry}
                    src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${selectedCountry}.svg`}
                  />
                  <select
                    onChange={handleCountryChange}
                    value={selectedCountry}
                    className="appearance-none bg-transparent border-none outline-none text-gray-600 text-sm pr-1"
                  >
                    {countries.map((country) => (
                      <option key={country.code} value={country.code}>
                        {country.code}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <input
                type="tel"
                placeholder="Contact number"
                className="w-full py-2 pl-16 border-b-2 border-[#767676] focus:outline-none"
                name="phoneNumber"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phoneNumber}
              />
              {formik.errors.phoneNumber && formik.touched.phoneNumber && (
                <div className="mt-1 text-red-500 text-xs bg-red-100 p-1 rounded">
                  {formik.errors.phoneNumber}
                </div>
              )}
            </div>

            <div>
              <input
                type="email"
                placeholder="E-mail"
                className="w-full p-3 border-b-2 border-[#767676] focus:outline-none"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.errors.email && formik.touched.email && (
                <div className="mt-1 text-red-500 text-xs bg-red-100 p-1 rounded">
                  {formik.errors.email}
                </div>
              )}
            </div>

            <div className="mb-[25px]">
              <textarea
                placeholder="Let's talk about your idea"
                rows={1}
                className="w-full p-3 border-b-2 border-[#767676] focus:outline-none"
                name="textBox"
                onChange={formik.handleChange}
                value={formik.values.textBox}
                onBlur={formik.handleBlur}
              />
              {formik.errors.textBox && formik.touched.textBox && (
                <div className="mt-1 text-red-500 text-xs bg-red-100 p-1 rounded">
                  {formik.errors.textBox}
                </div>
              )}
            </div>

            <div className="border-dashed border-2 border-gray-300 rounded-md p-4 text-center">
              <div className="flex items-center justify-center space-x-2">
                <svg
                  className="w-6 h-20 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                  />
                </svg>
                <span className="text-sm text-gray-500">
                  Upload Additional file
                </span>
              </div>
            </div>
            <div>
              <p className="text-xs text-gray-400 mt-2">
                File size of your document should not exceed 2MB
              </p>
            </div>
            <div className="flex items-center">
              <ReCAPTCHA
                sitekey={`6LdvceUqAAAAAI-oezZoWXhaupygHbZifU6SRv1g`}
                ref={recaptcha}
              />
            </div>

            <button
              className={`w-full sm:mt-3 bg-gradient-to-r from-[#F47B55] to-[#FF3D00] text-white text-sm sm:text-3xl py-1 px-0.5 sm:py-3 sm:px-2 border-b-4 border-[#701d04] font-semibold rounded-xl transform transition-all duration-200 hover:-translate-y-1 hover:border-b-[5px] active:translate-y-0 active:border-b-4 ${
                !formik.isValid ? "opacity-50 cursor-not-allowed" : ""
              }`}
              type="submit"
              disabled={!formik.isValid}
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FormSection;
