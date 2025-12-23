import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate("/signup");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="w-[360px] h-[640px] bg-white flex flex-col justify-end p-6">
        <div className="mb-6">
          <h1 className="text-3xl font-semibold text-black/80">
            Welcome to PopX
          </h1>
          <p className="text-lg text-gray-500 mt-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <button
            type="button"
            className="w-full py-3 bg-primary text-white font-medium rounded-md hover:bg-purple-700 transition cursor-pointer"
            onClick={handleSignup}
          >
            Create Account
          </button>

          <button
            type="button"
            className="w-full py-3 bg-secondary-btn text-blue-950 font-medium rounded-md cursor-pointer"
            onClick={handleLogin}
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
