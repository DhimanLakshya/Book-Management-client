import React, { useState } from "react";

const OtpVerification = () => {
  const [otp, setOtp] = useState(Array(4).fill(""));

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/[^0-9]/.test(value) && value !== "") return;

    otp[index] = value;
    setOtp([...otp]);

    if (value !== "" && index < 3) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleKeyDown = (e, index) => {

    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      document.getElementById(`otp-${index - 1}`).focus();
    }
  };
let otpNumber = {
    "OTP":otp.join('')
}

console.log(otpNumber);


  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-center text-2xl font-semibold mb-6">OTP Verification</h2>
        <form >
          <div className="flex justify-between mb-4">
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)} 
                className="w-12 h-12 text-center text-xl border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            ))}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded mt-4 hover:bg-blue-600"
          >
            Verify OTP
          </button>
        </form>
      </div>
    </div>
  );
};

export default OtpVerification;
