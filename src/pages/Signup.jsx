import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputBox from "../components/InputBox";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullname: "",
    phone: "",
    email: "",
    password: "",
    companyName: "",
    agency: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/dashboard", {
      state: {
        fullname: formData.fullname,
        email: formData.email,
      },
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="w-[360px] h-[640px] bg-white flex flex-col p-6 overflow-y-auto">
        <h1 className="text-2xl font-bold text-black/80 mb-6 max-w-2/3">
          Create your PopX account
        </h1>

        <form
          className="flex flex-col gap-3 flex-grow"
          onSubmit={handleSubmit}
        >
          <InputBox
            text="Full Name"
            name="fullname"
            placeholder="Enter full name"
            value={formData.fullname}
            onChange={handleChange}
            required
          />

          <InputBox
            text="Phone Number"
            type="tel"
            name="phone"
            placeholder="Enter phone number"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <InputBox
            text="Email Address"
            type="email"
            name="email"
            placeholder="Enter email address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <InputBox
            text="Password"
            type="password"
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <InputBox
            text="Company Name"
            name="companyName"
            placeholder="Enter company name"
            value={formData.companyName}
            onChange={handleChange}
          />

          {/* Agency Selection */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-black mb-2">
              Are you an Agency?<span className="text-red">*</span>
            </label>

            <div className="flex items-center gap-6">
              <label className="flex items-center gap-1">
                <input
                  type="radio"
                  name="agency"
                  value="Yes"
                  checked={formData.agency === "Yes"}
                  onChange={handleChange}
                  className="accent-primary"
                />
                Yes
              </label>

              <label className="flex items-center gap-1">
                <input
                  type="radio"
                  name="agency"
                  value="No"
                  checked={formData.agency === "No"}
                  onChange={handleChange}
                  className="accent-primary"
                />
                No
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-primary text-white font-medium rounded-xs mt-16 hover:bg-purple-700 transition cursor-pointer"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
