import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputBox from "../components/InputBox";

const Signin = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
        email: formData.email,
      },
    });
  };

  const isFormValid = Boolean(formData.email && formData.password);

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="w-[360px] h-[640px] bg-white flex flex-col p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-black/80 max-w-2/3">
            Signin to your PopX account
          </h1>
          <p className="text-sm text-gray-500 max-w-2/3 mt-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
        </div>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
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

          <button
            type="submit"
            disabled={!isFormValid}
            className={`w-full py-3 rounded-xs font-medium transition ${
              isFormValid
                ? "bg-primary text-white hover:bg-purple-700 cursor-pointer"
                : "bg-black/25 text-white cursor-not-allowed"
            }`}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
