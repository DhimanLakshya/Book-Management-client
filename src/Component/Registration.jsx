import React, { useState } from 'react';
import { FaUserPlus, FaInfoCircle } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { RiResetLeftFill } from "react-icons/ri";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Server_URL } from './URL';

export default function Registration({ setOtpAuth }) {
  const [value, setValue] = useState({});
  const [imageFile, setImageFile] = useState(null);
  const navigate = useNavigate();

  console.log(value);

  const signUpData = (e) => {
    // const { name, value, type, files, checked } = e.target;
    if (e.target.name === "profileimg") {
      setImageFile(e.target.files[0]);
    } else {
      setValue({ ...value, [e.target.name]: e.target.value });
    }
  };

  const BDRegistration = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      Object.keys(value).forEach((key) => {
        formData.append(key, value[key]);
      });
      if (imageFile) {
        formData.append("profileimg", imageFile);
      }

      const url = `${Server_URL}RegisterUser`;
      const signup = await axios.post(url, formData);

      const userid = signup.data.id;
      const status = signup.data.otpStatus;

      if (!signup.data.status) {
        alert("Invalid Data");
      } else if (status === "true") {
        navigate(`/login`);
      } else {
        setOtpAuth(true);
        navigate(`/OtpVerification/${userid}`);
      }
    } catch (e) {
      alert(e.response?.data?.msg || "An error occurred");
    }
  };

  const resetForm = () => {
    setValue({});
    setImageFile(null);
    document.getElementById("registrationForm").reset();
  };
  return (
    <div className=" flex flex-col flex-wrap bg-gradient-to-r from-[#02b69b] via-[#0f3a35] to-[#018066] py-3 ">
      <div className="h-screen w-[800px] ml-[350px] bg-[#fcfcfc] border-2 shadow-2xl rounded-xl rounded-b-lg">
        <div className="flex justify-center gap-1 items-center p-3 text-3xl shadow-sm">
          <FaUserPlus className="text-4xl" />
          <h1>Account Registration</h1>
        </div>

        <form id="registrationForm" onSubmit={BDRegistration} className="ml-8 mr-8 mt-8 shadow-xl rounded-lg">
          <div className="flex text-2xl gap-1">
            <FaInfoCircle className="text-3xl" />
            <h1>Account Details</h1>
          </div>

          <div className="flex justify-evenly p-2 pt-5 gap-2">
            <div className="pl-32">Name:</div>
            <input
              onChange={signUpData}
              className="shadow-lg w-full ml-3"
              name="First_Name"
              type="text"
              placeholder="First Name"
              required
            />
            <input
              onChange={signUpData}
              className="shadow-lg w-full"
              name="Last_Name"
              type="text"
              placeholder="Last Name"
              required
            />
          </div>

          <div className="flex p-3">
            <div className="pl-32">Email:</div>
            <input
              onChange={signUpData}
              className="shadow-lg ml-3"
              name="Email"
              type="email"
              placeholder="Enter your Email"
              required
            />
          </div>

          <div className="flex justify-evenly pt-3 pr-3 pb-5">
            <div className="pl-28">Password:</div>
            <input
              onChange={signUpData}
              className="shadow-lg w-full ml-3"
              name="password"
              type="password"
              placeholder="Password"
              required
            />
            <input
              onChange={signUpData}
              className="shadow-lg w-full"
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              required
            />
          </div>

          <div className="flex justify-evenly pt-3 pr-3 pb-5">
            <div className="pl-20 w-[230px]">Upload Image:</div>
            <input
              onChange={signUpData}
              className="shadow-lg w-full"
              name="profileimg"
              type="file"
              placeholder="Upload Image"
              required
            />
          </div>
          {/* Additional personal info */}
          <div className=" flex flex-col mr-1 mt-5 pb-5 rounded-b-lg ">
            <div className="flex text-2xl gap-1">
              <FaInfoCircle className="text-3xl" />
              <h3>Personal Information</h3>
            </div>
            <div className="flex justify-evenly p-2 pt-5">
              <div className="pl-20 w-[450px]">Date of Birth:</div>
              <input
                onChange={signUpData}
                className="shadow-lg w-full text-[#999797]"
                type="date"
                name="dob"
                placeholder="Date of birth"
                required
              />
              <div className="pl-5 w-[450px]">Aadhaar no:</div>
              <input
                onChange={signUpData}
                className="shadow-lg w-full"
                name="Aadhaar_no"
                type="number"
                placeholder="Enter Aadhaar no"
              />
            </div>
            <div className="flex p-3 gap-2">
              <div  className="pl-28">Gender:</div>
              <div>
                <input
                  className="form-check-input"
                  onChange={signUpData}
                  type="radio"
                  name="gender"
                  value="Male"
                />
                <label className="form-check-label">Male</label>
              </div>
              <div>
                <input
                  className="form-check-input"
                  onChange={signUpData}
                  type="radio"
                  name="gender"
                  value="Female"
                />
                <label className="form-check-label">Female</label>
              </div>
              <div>
                <input
                  className="form-check-input"
                  onChange={signUpData}
                  type="radio"
                  name="gender"
                  value="Other"
                />
                <label className="form-check-label">Others</label>
              </div>
            </div>
            <div className="flex justify-evenly pt-3 pr-3 pb-5">
              <div className="pl-28">Address:</div>
              <input
                onChange={signUpData}
                className="shadow-lg ml-3 w-full"
                name="Address"
                type="text"
                placeholder="Enter your Address"
                required
              />
            </div>
            <div className="flex justify-evenly pt-3 pr-3 pb-5">
              <div className="pl-16 w-[230px]">Institute Name:</div>
              <input
                onChange={signUpData}
                className="shadow-lg w-full"
                name="Institute_Name"
                type="text"
                placeholder="Enter Current Institute Name"
              />
            </div>
            <div className="flex px-40 gap-2">
              <input
                onChange={signUpData}
                className="form-check-input"
                type="checkbox"
                name="Policy"
                value="Privacy Policy"
                required
              />
              <div>
                I have read, understood and agree to the
                <span className="text-blue-500"> Privacy Policy</span> and
                <span className="text-blue-500"> Terms and Conditions</span> of using NDLI.
              </div>
            </div>
          </div>





          <div className="flex h-[40px]  justify-center items-center pb-4  rounded-b-lg gap-1">
            <button
              type="submit"
              className="flex gap-2 border-2 rounded-lg p-2 bg-[#898686] text-white"
            >
              <FaUserPlus className="text-2xl" />
              Signup
            </button>
            <button
              type="button"
              onClick={resetForm}
              className="flex gap-2 border-2 rounded-lg p-2 bg-[#f77a0e] text-white"
            >
              <RiResetLeftFill className="text-2xl text-white" />
              Reset
            </button>
            <a href="/">
              <button className="flex gap-2 border-2 rounded-lg p-2 bg-green-900 text-white">
                <RxCross1 className="text-2xl" />
                Close
              </button>
            </a>
          </div>

        </form>

      </div>
    </div>
  );
}
